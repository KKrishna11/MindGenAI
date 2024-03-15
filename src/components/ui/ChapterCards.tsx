"use client";
import { Chapter } from "@prisma/client";
import React from "react";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "./use-toast";
import { Loader, Loader2 } from "lucide-react";
type Props = {
  chapters: Chapter;
  chapterIndex: number;
  completedChapters: Set<String>;
  setCompletedChapters: React.Dispatch<React.SetStateAction<Set<String>>>;
};

export type ChapterCardsHandler = {
  triggerLoad: () => void;
};
const ChapterCards = React.forwardRef<ChapterCardsHandler, Props>(
  (
    { chapters, chapterIndex, setCompletedChapters, completedChapters },
    ref
  ) => {
    const { toast } = useToast();
    const [success, setSuccess] = React.useState<boolean | null>(null);
    const { mutate: getChapterInfo, isPending } = useMutation({
      mutationFn: async () => {
        const response = await axios.post("/api/chapter/getinfo", {
          chapterId: chapters.id,
        });
        return response.data;
      },
    });

    const addChapterIdtoSet = React.useCallback(() => {
      // const newSet = new Set(completedChapters);
      // newSet.add(chapters.id);
      // setCompletedChapters(newSet);
      setCompletedChapters((prev) => {
        const newSet = new Set(prev);
        newSet.add(chapters.id);
        return newSet;
      });
    }, [chapters.id, setCompletedChapters]);

    React.useEffect(() => {
      if (chapters.videoId) {
        setSuccess(true);
        addChapterIdtoSet;
      }
    }, [chapters, addChapterIdtoSet]);

    React.useImperativeHandle(ref, () => ({
      async triggerLoad() {
        if (chapters.videoId) {
          addChapterIdtoSet();
          return;
        }
        getChapterInfo(undefined, {
          onSuccess: () => {
            setSuccess(true);
            addChapterIdtoSet();
            console.log("success");
          },
          onError: (error) => {
            console.log(error);
            setSuccess(false);
            toast({
              title: "Error",
              description: "There was an error loading your chapter",
              variant: "destructive",
            });
            addChapterIdtoSet();
          },
        });
      },
    }));

    return (
      <div
        key={chapters.id}
        className={cn("px-4 py-2 mt-2 rounded flex justify-between", {
          "bg-secondary": success === null,
          "bg-green-950": success == false,
          "bg-green-600": success === true,
        })}
      >
        <h5>{chapters.name}</h5>
        {isPending && <Loader2 className="animate-spin" />}
      </div>
    );
  }
);
ChapterCards.displayName = "ChapterCards";

export default ChapterCards;
