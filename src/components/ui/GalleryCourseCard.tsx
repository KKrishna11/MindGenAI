import { Chapter, Course, Unit } from "@prisma/client";
import Link from "next/link";
import React from "react";

type Props = {
  course: Course & {
    units: (Unit & {
      chapters: Chapter[];
    })[];
  };
};

const GalleryCourseCard = async ({ course }: Props) => {
  return (
    // <div className="border rounded-lg border-secondary flex ">
    //   <div className=" ">
    //     <Link href={`/course/${course.id}/0/0`} className="">
    //       <img
    //         src={course.image || ""}
    //         className="inset-0 h-[250px] w-full object-fit opacity-100"
    //         width={500}
    //         height={500}
    //         alt="picture of the course"
    //       />
    //       <span className="absoulte ">
    //         {course.name}
    //       </span>
    //     </Link>
    //     <div className="p-4">
    //       <h4 className=" text-secondary-foreground/60">
    //         <div className="space-y">
    //           {course.units.map((unit, unitIndex) => {
    //             return (
    //               <Link
    //                 href={`/course/${course.id}/${unitIndex}/0`}
    //                 key={unit.id}
    //                 className="block underline w-fit "
    //               >
    //                 {unit.name}
    //               </Link>
    //             );
    //           })}
    //         </div>
    //       </h4>
    //     </div>
    //   </div>
    // </div>

    <div className="galleryconatainer">
      <div className="cardcontent">
        <div className="imgcontainer">
          <img src={course.image || " "} alt="" />
        </div>
        <h4 className="px-2 mt-1 text-white rounded-md bg-black/60 uppercase ">
          • {course.name}
        </h4>
        <div className="infoconatiner">
          <h6 className="text-sm  px-2  text-white  bg-black/60 ">
            <div className="space-y-1">
              {course.units.map(
                (
                  unit: {
                    id: React.Key | null | undefined;
                    name:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | React.PromiseLikeOfReactNode
                      | null
                      | undefined;
                  },
                  unitIndex: any
                ) => {
                  return (
                    <Link
                      href={`/course/${course.id}/${unitIndex}/0`}
                      key={unit.id}
                      className="block underline  w-fit   decoration-green-800 "
                    >
                      {unit.name}
                    </Link>
                  );
                }
              )}
            </div>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default GalleryCourseCard;
