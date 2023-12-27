"use client";
import { Chapter, Course, Unit } from "@prisma/client";
import React from "react";
import { Button } from "./button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  course: Course;
  chapter: Chapter;
  units: Unit & {
    chapters: Chapter[];
  };
  unitIndex: number;
  chapterIndex: number;
};

const PathCards = ({
  chapter,
  units,
  chapterIndex,
  unitIndex,
  course,
}: Props) => {
  const nextchapter = units.chapters[chapterIndex + 1];
  const prevchapter = units.chapters[chapterIndex - 1];

  return (
    <div className="flex-[1] mt-16 ml-8">
      <h1 className="text-2xl font-bold">Dont Known What To Do</h1>

      <div className="flex justify-center align-middle gap-10 mt-7">
        <Button>Krishna</Button>

        <Button>To Do List</Button>
      </div>

      {/* <div className="flex-[1] h-1px mt-3 text-gray-500 bg-gray-500"> */}
        <div className="flex pb-8">
          {prevchapter && (
            <Link
              href={`/course/${course.id}/${unitIndex}/${chapterIndex - 1}`}
              className=" flex mt-4 mr-auto w-fit"
            >
              <div className="flex items-center">
                <ChevronRight className="w-6 h-6 mr-1" />
                <div className="flex flex-col items-start">
                  <span className="text-sm text-secondary-foreground/60">
                    Previous
                  </span>
                  <span className="text-xl font-bold">{prevchapter.name}</span>
                </div>
              </div>
            </Link>
          )}

          {nextchapter && (
            <Link
              href={`/course/${course.id}/${unitIndex}/${chapterIndex + 1}`}
              className=" flex mt-4 ml-auto w-fit"
            >
              <div className="flex items-center">
                <div className="flex flex-col items-start">
                  <span className="text-sm text-secondary-foreground/60">
                    Next
                  </span>
                  <span className="text-xl font-bold">{nextchapter.name}</span>
                </div>
                <ChevronRight className="w-6 h-6 mr-1" />
              </div>
            </Link>
          )}
        </div>
      </div>
    // </div>
  );
};

export default PathCards;
