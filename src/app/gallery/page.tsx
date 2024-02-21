import GalleryCourseCard from "@/components/ui/GalleryCourseCard";
import { prisma } from "@/lib/db";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const course = await prisma.course.findMany({
    include: {
      units: {
        include: {
          chapters: true,
        },
      },
    },
  });

  return (
    <div className="py-8 mx -auto max-w-7xl mt-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {
          course.map(course=>{
            return <GalleryCourseCard course={course} key={course.id}/>
          })
        }
      </div>
    </div>
  )
  
  
};
export default page;
