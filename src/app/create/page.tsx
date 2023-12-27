import { getAuthSession } from "@/lib/auth";
import React from "react";

import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";
import CreateCourseForm from "@/components/ui/CreateCourseForm";
type Props = {};

const CreatePage = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("gallery");
  }
  return (
    <div className="flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:px-0">
      <h1 className="self-center text-3xl font-bold text-center sm:text-6xl">
        MindGen-AI
      </h1>
      <div className="flex p-4 mt-4 border-none bg-secondary">
        <InfoIcon className="w-12 h-12 mr-3 text-blue-50" />
        <div>
          Enter the course title , or what you want to learn about list of units
          which are the specific you want to learn will genarte a course for you
        </div>
      </div>
      <CreateCourseForm/>
    </div>
  );
};

export default CreatePage;
