import { YoutubeTranscript } from "youtube-transcript";
import { strict_output } from "./gpt";
import axios from "axios";

// export async function searchYouTube(searchQuery: string) {
//   searchQuery = encodeURIComponent(searchQuery);
//   console.count("youtube search");
//   const {data} = await axios.get(
//     `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API}&q=${searchQuery}&videoDuration=medium&videoEmbeddable=true&type=video&maxResults=5`
//   );
//   if(!data){
   
//     console.log("youtube fail");
//     return null;
//   }

//   if(data.items[0]==undefined){
//     console.log("youtube fail");
//     return null;
//   }
//   return data.items[0].id.videoId;
// }
export async function searchYouTube(searchQuery: string) {
  searchQuery = searchQuery.replaceAll(" ", "+");
  console.count("youtube search");
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API}&q=${searchQuery}&videoDuration=medium&videoEmbeddable=true&type=video&maxResults=5`,
    {
      method: "GET",
    }
  );
  const json = await response.json();
  if (!json) {
    console.log("youtube fail");
    return null;
  }
  if (json.items[0] == undefined) {
    console.log("youtube fail");
    return null;
  }
  return json.items[0].id.videoId;
}



export async function getTranscript(videoId: string) {
  try {
    let transcript_Arr = await YoutubeTranscript.fetchTranscript(videoId, {
      lang: "en",
      country: "EN",
    });
    let transcript = "";
    for (let t of transcript_Arr) {
      transcript += t.text + " ";
    }
    return transcript.replaceAll("\n", "");
  } catch (error) {
    return "No Summary Available For the video , And I dont think you need that ";
    
  }
}

export async function getQuestionsFromTranscript(
    transcript: string,
  course_title: string
) {
   type Question={
        question :string,
        answer:string,
        option1:string,
        option2:string,
    };
  const questions :Question[]= await strict_output(
    "you are a helpful AI  that is able to geneate mcq question and answer , the length of each answer should not be more than 10 word",
    new Array(2).fill(
      `you are to genarte a random easy mcq question about ${course_title} with context of the following transcript : ${transcript}`
    ),
    {
      qquestion: "question",
      answer: "answer with max length of 10 words",
      option1: "options1  with max length of 10 words",
      option2: "options2  with max length of 10 words",
    }
  );
  return questions;
}
