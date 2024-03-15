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
    <main
      style={{ backgroundImage: "url(/Stars.png)" }}
      className=" py-10  mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center bg-cover bg-center bg-black   "
    >
      {course.map((course) => {
        return <GalleryCourseCard course={course} key={course.id} />;
      })}
    </main>
  );
};
export default page;
