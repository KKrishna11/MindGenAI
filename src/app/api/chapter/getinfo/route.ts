// api/chapter/getinfo/

import { prisma } from "@/lib/db";
import { strict_output } from "@/lib/gpt";
import {
  getTranscript,
  searchYouTube,
} from "@/lib/youtube";
import { error } from "console";
import { NextResponse } from "next/server";
import { z } from "zod";

const BodyParser = z.object({
  chapterId: z.string(),
});
export async function POST(req: Request, res: Response) {
  
  try {
    const body = await req.json();
    const { chapterId } = BodyParser.parse(body);
    const chapter = await prisma.chapter.findUnique({
      where: {
        id: chapterId,
      },
    });

    console.log("done");  
    if (!chapter) {
      console.log("chapter not found wala");
      return NextResponse.json({ error: error })
    }

    const videoId = await searchYouTube(chapter.youtubeSearchQuery);
    let transcript = await getTranscript(videoId);
    let maxlength = 400;
    transcript = transcript.split(" ").slice(0, maxlength).join(" ");

    const { summary }: { summary: string } = await strict_output(
      "You are an AI capable of summarising a youtube transcript",
      "summarise in 400 words or less and do not talk of the sponsors or anything unrelated to the main topic, also do not introduce what the summary is about. or give the breif description about that please \n"+transcript,
      { summary: "summary of the transcript" }
    );
 
    console.log("now run question");
   
    // try {
    //   const questions = await getQuestionsFromTranscript(
    //     transcript,
    //     chapter.name
    //   );  
    //   await prisma.question.createMany({
    //     data: questions.map((question: { question: string; answer: string; }) => {
    //       return {
    //         question: question.question,
    //         answer: question.answer,
    //         chapterId: chapterId,
    //       };
    //     }),
    //   });
    // } catch (error) {
    //   console.log(error)
    // }
    
    // console.log("question endedd");


    await prisma.chapter.update({
      where: { id: chapterId },
      data: {
        videoId: videoId,
        summary: summary,
      },
    });

  
    console.log("done");
  return NextResponse.json({ success: true });
  
} catch (error) {
  if (error instanceof z.ZodError) {
    return NextResponse.json({ error: error }, { status: 400 })

  } else {
    return NextResponse.json({ error: error }, { status: 500 })

  }
}

}
