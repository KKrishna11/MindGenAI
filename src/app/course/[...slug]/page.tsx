import CourseSideBar from "@/components/ui/CourseSideBar";
import MainVideoSummary from "@/components/ui/MainVideoSummary";
import PathCards from "@/components/ui/PathCards";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string[];
  };
};

const CoursePage = async ({ params: { slug } }: Props) => {
  const [courseId, unitIndexParam, chapterIndexParam] = slug;
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      units: {
        include: { chapters: true },
      },
    },
  });
  if (!course) {
    return redirect("/gallery");
  }
  let unitIndex = parseInt(unitIndexParam);
  let chapterIndex = parseInt(chapterIndexParam);

  const unit = course.units[unitIndex];

  if (!unit) {
    return redirect("/gallery");
  }

  const chapter = unit.chapters[chapterIndex];
  if (!chapter) {
    return redirect("/gallery");
  }
  return (
    <div className="mt-2">
      <CourseSideBar course={course} currentChpterId={chapter.id} />
      <div className="ml-[400px] px-8 ">
      <div className="flex">
      <MainVideoSummary chapter={chapter} chapterIndex={chapterIndex} unit={unit}  unitIndex={unitIndex} />
      <PathCards chapter={chapter} units={unit} chapterIndex={chapterIndex} unitIndex={unitIndex} course={course}/>
      </div>
      </div>
    </div>
  );
};

export default CoursePage;
