import { getAuthSession } from "@/lib/auth";
import React from "react";

import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";
import CreateCourseForm from "@/components/ui/CreateCourseForm";
import { checkSubscription } from "@/lib/subscription";
type Props = {};

const CreatePage = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("gallery");
  }
  const isPro = await checkSubscription();
  return (
    <div
      className="sidewaycontainer  w-full  bg-cover bg-center bg-black pb-10"
      style={{ backgroundImage: "url(/Stars.png)" }}
    >
      <div className="firstside max-w-xl px-8 mx-auto my-10 sm:px-0  ">
        <img src="/AiteachingHuman.png" alt="" />
      </div>
      <div className="flex flex-col items-start max-w-xl px-8 mx-auto my-10 sm:px-0 secondside">
        <div className="flex p-2 mb-3 border-2  border-white  bg-secondary">
          <InfoIcon className="w-12 h-12 mr-3 text-blue-50" />
          <div>
            Enter the course title , or what you want to learn about list of
            units which are the specific you want to learn will genarte a course
            for you
          </div>
        </div>
        <CreateCourseForm isPro={isPro} />
      </div>
    </div>
  );
};

export default CreatePage;
