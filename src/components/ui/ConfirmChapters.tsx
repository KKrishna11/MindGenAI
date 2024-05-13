"use client";
import { Chapter, Course, Unit } from "@prisma/client";
import React, { useRef } from "react";
import ChapterCards, { ChapterCardsHandler } from "./ChapterCards";
import { Separator } from "./separator";
import Link from "next/link";
import { Button, buttonVariants } from "./button";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useToast } from "./use-toast";
import { ToastAction } from "./toast";
import { useRouter } from "next/navigation";

// import { object } from "zod";

type Props = {
  course: Course & {
    units: (Unit & {
      chapters: Chapter[];
    })[];
  };
};

const ConfirmChapters = ({ course }: Props) => {
  const router = useRouter();
  // Force refresh the page

  const handleReload = () => {
    router.refresh();
    document.location.reload()
  };

  const chapterRefs: Record<string, React.RefObject<ChapterCardsHandler>> = {};
  course.units.forEach((units) => {
    units.chapters.forEach((chapters) => {
      chapterRefs[chapters.id] = React.useRef(null);
    });
  });
  const [loading, setLoading] = React.useState(false);
  const [completedChapters, setCompletedChapters] = React.useState<Set<String>>(
    new Set()
  );

  const totalChapterCount = React.useMemo(() => {
    return course.units.reduce((acc, unit) => {
      return acc + unit.chapters.length;
    }, 0);
  }, [course.units]);
  console.log(totalChapterCount, completedChapters.size);
  console.log(chapterRefs);
  const { toast } = useToast();

  return (
    <div className="w-full mt-4">
      {course.units.map((units, unitIndex) => {
        return (
          <div key={units.id} className="mt-5">
            <h2 className="text-sm uppercase text-secondary-foreground/60">
              {/* Unit {unitIndex + 1} */}
            </h2>
            <h3 className="text-2xl font-bold">{units.name} </h3>
            <div className="mt-3">
              {units.chapters.map((chapters, chapterIndex) => {
                return (
                  <ChapterCards
                    completedChapters={completedChapters}
                    setCompletedChapters={setCompletedChapters}
                    ref={chapterRefs[chapters.id]}
                    key={chapters.id}
                    chapters={chapters}
                    chapterIndex={chapterIndex}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="flex items-center justify-center m-4">
        <Separator className="flex[6]" />
        <div className="flex items-center mx-4 flex items-center justify-self-center ">
          <Link
            href="/create"
            className={buttonVariants({
              variant: "secondary",
            })}
          >
            <ChevronLeft className="w-4 h-4 mr-2 " strokeWidth={4} />
            Back
          </Link>

          {totalChapterCount === completedChapters.size ? (
            <div className="flex">
              <Button className="ml-4 px-5 " onClick={handleReload} >
                  Refresh
              </Button>

              <Button className="ml-4 px-5  bg-green-500 ">
                <Link
                  href={`/course/${course.id}/0/0`}
                  className="font-extrabold text-black-900"
                >
                  Continue
                </Link>
              </Button>
            </div>
          ) : (
            <Button
              type="button"
              className="ml-4 font-extrabold flex items-center justify-self-center		"
              disabled={loading}
              onClick={() => {
                setLoading(true);
                toast({
                  title: "Wait For a Second",
                  description: "MindGenAI",
                });

                Object.values(chapterRefs).forEach((ref) => {
                  ref.current?.triggerLoad();
                });
              }}
            >
              Generate
              <ChevronRight className="w-4 h-4 ml-2" strokeWidth={4} />
            </Button>
          )}
        </div>
        <Separator className="flex=[1]" />
      </div>
    </div>
  );
};

export default ConfirmChapters;
