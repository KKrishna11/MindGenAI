// "use client";

// import React from "react";
// import { Form, FormControl, FormField, FormItem, FormLabel } from "./form";
// import { createChaptersSchema } from "@/validators/course";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Input } from "./input";
// import { Button } from "./button";
// import { Plus, Trash } from "lucide-react";
// import { Separator } from "./separator";
// import { motion, AnimatePresence } from "framer-motion";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import { useToast } from "./use-toast";
// import { useRouter } from "next/navigation";
// import SubscriptionAction from "./SubscriptionAction";
// // import SubscriptionAction from "../SubscriptionAction";

// type Props = { isPro: boolean };
// type Input = z.infer<typeof createChaptersSchema>;

// const CreateCourseForm = ({ isPro }: Props) => {
//   const router = useRouter();
//   const { toast } = useToast();
//   const { mutate: createChapters } = useMutation({
//     mutationFn: async ({ title, units }: Input) => {
//       //  /api/course rakh agar host kar raha hai toh
//       const response = await axios.post(
//         "/api/course/createChapters",
//         {
//           title,
//           units,
//         }
//       );
//       return response.data;
//     },
//   });
//   const form = useForm<Input>({
//     resolver: zodResolver(createChaptersSchema),
//     defaultValues: {
//       title: "",
//       units: ["", "", ""],
//     },
//   });
//   function onSubmit(data: Input) {
//     if (data.units.some((unit) => unit === "")) {
//       toast({
//         title: "Error",
//         description: "plesae fill all the units",
//         variant: "destructive",
//       });
//       return;
//     }
//     createChapters(data, {
//       onSuccess: ({ course_id }) => {
//         toast({
//           title: "SUCCESSFULL",
//           description: " COURSE CREATED SUCCESFULLY ",
//         });
//         console.log("succcess");
//         router.push(`/create/${course_id}`);
//       },
//       onError: (error) => {
//         console.error(error);
//         toast({
//           title: "Error",
//           description: " something went worng",
//           variant: "destructive",
//         });
//       },
//     });
//     console.log(data);
//   }
//   form.watch();
//   return (
//     <div className="w-full">
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-4">
//           <FormField
//             control={form.control}
//             name="title"
//             render={({ field }) => {
//               return (
//                 <FormItem className="flex flex-col items-start w-full sm:items-center sm:flex-row">
//                   <FormLabel className="flex-[1] text-xl">Title</FormLabel>
//                   <FormControl className="flex-[6]">
//                     <Input
//                       placeholder="Enter the main topic of the course "
//                       {...field}
//                     />
//                   </FormControl>
//                 </FormItem>
//               );
//             }}
//           />
//           <AnimatePresence>
//             {form.watch("units").map((_, index) => {
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{
//                     opacity: { duration: 0.2 },
//                     height: { duration: 0.2 },
//                   }}
//                 >
//                   <FormField
//                     key={index}
//                     control={form.control}
//                     name={`units.${index}`}
//                     render={({ field }) => {
//                       return (
//                         <FormItem className="flex flex-col items-start w-full sm:items-center sm:flex-row ">
//                           <FormLabel className="flex-1 text-xl">
//                             Unit {index + 1}
//                           </FormLabel>
//                           <FormControl className="flex-[6]">
//                             <Input
//                               placeholder="Enter the Sub-topic "
//                               {...field}
//                             />
//                           </FormControl>
//                         </FormItem>
//                       );
//                     }}
//                   />
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>

//           <div className="flex items-center justify-center mt-4  ">
//             <Separator className="flex-1" />
//             <div className="mx-4 ">
//               <Button
//                 type="button"
//                 variant="secondary"
//                 className="font-semibold"
//                 onClick={() => {
//                   form.setValue("units", [...form.watch("units"), ""]);
//                 }}
//               >
//                 Add Unit
//                 <Plus className="w-4 h-4 ml-2 text-green-500" />
//               </Button>
//               <Button
//                 type="button"
//                 variant="secondary"
//                 className="font-semibold ml-2"
//                 onClick={() => {
//                   form.setValue("units", form.watch("units").slice(0, -1));
//                 }}
//               >
//                 Remove Unit
//                 <Trash className="w-4 h-4 ml-2 text-red-500" />
//               </Button>
//             </div>
//             <Separator className="flex-1" />
//           </div>
//           <Button type="submit" className="w-full mt-8" size="lg">
//             LET'S AI
//           </Button>
//         </form>
//       </Form>
//       {!isPro && <SubscriptionAction />}
//     </div>
//   );
// };

// export default CreateCourseForm;
"use client";

import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./form";
import { createChaptersSchema } from "@/validators/course";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input";
import { Button } from "./button";
import { Plus, Trash } from "lucide-react";
import { Separator } from "./separator";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "./use-toast";
import { useRouter } from "next/navigation";
import SubscriptionAction from "./SubscriptionAction";
// import SubscriptionAction from "../SubscriptionAction";

type Props = { isPro: boolean };
type Input = z.infer<typeof createChaptersSchema>;

const CreateCourseForm = ({ isPro }: Props) => {
  const router = useRouter();
  const { toast } = useToast();
  const { mutate: createChapters } = useMutation({
    mutationFn: async ({ title, units }: Input) => {
      //  /api/course rakh agar host kar raha hai toh
      const response = await axios.post(
        "http://localhost:3000/api/course/createChapters",
        {
          title,
          units,
        }
      );
      return response.data;
    },
  });
  const form = useForm<Input>({
    resolver: zodResolver(createChaptersSchema),
    defaultValues: {
      title: "",
      units: ["", "", ""],
    },
  });
  function onSubmit(data: Input) {
    if (data.units.some((unit) => unit === "")) {
      toast({
        title: "Error",
        description: "plesae fill all the units",
        variant: "destructive",
      });
      return;
    }
    createChapters(data, {
      onSuccess: ({ course_id }) => {
        toast({
          title: "SUCCESSFULL",
          description: " COURSE CREATED SUCCESFULLY ",
        });
        console.log("succcess");
        router.push(`/create/${course_id}`);
      },
      onError: (error) => {
        console.error(error);
        toast({
          title: "Error",
          description: " something went worng",
          variant: "destructive",
        });
      },
    });
    console.log(data);
  }
  form.watch();
  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-col items-start w-full sm:items-center sm:flex-row">
                  <FormLabel className="flex-[1] text-xl">Title</FormLabel>
                  <FormControl className="flex-[6]">
                    <Input
                      placeholder="Enter the main topic of the course "
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <AnimatePresence>
            {form.watch("units").map((_, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    height: { duration: 0.2 },
                  }}
                >
                  <FormField
                    key={index}
                    control={form.control}
                    name={`units.${index}`}
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-col items-start w-full sm:items-center sm:flex-row ">
                          <FormLabel className="flex-1 text-xl">
                            Unit {index + 1}
                          </FormLabel>
                          <FormControl className="flex-[6]">
                            <Input
                              placeholder="Enter the Sub-topic "
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      );
                    }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>

          <div className="flex items-center justify-center mt-4  ">
            <Separator className="flex-1" />
            <div className="mx-4 ">
              <Button
                type="button"
                variant="secondary"
                className="font-semibold"
                onClick={() => {
                  form.setValue("units", [...form.watch("units"), ""]);
                }}
              >
                Add Unit
                <Plus className="w-4 h-4 ml-2 text-green-500" />
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="font-semibold ml-2"
                onClick={() => {
                  form.setValue("units", form.watch("units").slice(0, -1));
                }}
              >
                Remove Unit
                <Trash className="w-4 h-4 ml-2 text-red-500" />
              </Button>
            </div>
            <Separator className="flex-1" />
          </div>
          <Button type="submit" className="w-full mt-8" size="lg">
            LET'S AI
          </Button>
        </form>
      </Form>
      {!isPro && <SubscriptionAction />}
      
    </div>
          
  );
};

export default CreateCourseForm;
