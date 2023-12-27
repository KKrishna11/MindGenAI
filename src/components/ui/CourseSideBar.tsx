"use client";
import { cn } from "@/lib/utils";
import { Chapter, Course, Unit } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Separator } from "./separator";

type Props = {
  course: Course & {
    units: (Unit & {
      chapters: Chapter[];
    })[];
  };
  currentChpterId:string;
};

const CourseSideBar = async ({ course ,currentChpterId}: Props) => {
  return (
    <div className="w-[400px] absolute top-1/2 -translate-y-1/2 p-6 rounded-r-3xl bg-secondary">
      <h1 className="text-xl font-bold ">{course.name}</h1>
      {course.units.map((units, unitIndex) => {
        return (
          <div key={units.id} className="mt-4">
            <h2 className="text-sm uppercase text-secondary-foreground">
              {/* {unitIndex + 1} */}
            </h2>
            <h2 className="text-2xl font-bold">{units.name}</h2>
            {units.chapters.map((chapter, chapterIndex) => {
              return (
                <div key={chapter.id}>
                  <Link
                    href={`/course/${course.id}/${unitIndex}/${chapterIndex}`}
                    className={cn("text-secondary-foreground/60",{
                        "text-green-500 font-bold":chapter.id === currentChpterId
                    })}
                  >

                    {chapter.name}
                  </Link>
                </div>
              );
            })}
            <Separator className="mt-2 text-gray-500 bg-gray-500"  />
          </div>
        );
      })}
    </div>
  );
};

export default CourseSideBar;
