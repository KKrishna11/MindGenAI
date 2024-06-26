import ConfirmChapters from '@/components/ui/ConfirmChapters'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { truncate } from 'fs'
import { Info } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  params:{
    courseId:string
  }
}

const createChapters = async({params:{courseId}}: Props) => {
  const session  =await getAuthSession()
    if(!session?.user){
      return redirect('/gallery')
    }
  
    const course =await prisma.course.findUnique({
      where:{
        id:courseId
      },include:{
        units:{
          include:{
            chapters:true
          }
        }
      }
    })
    if(!course){
      return redirect("/create")
    }
  return (
    // <pre>{JSON.stringify(course,null,2)}</pre>
    <div className='flex flex-col items-start max-w-xl mx-auto my-18 mt-10'>
      {/* <h5 className='text-sm uppercase text-secondary -foreground/60'>
      Course Name Hello 
      </h5>
      <h1>
        {course.name} hello 
      </h1> */}
      <div className='flex p-4 mt-10 border-none bg-secondary'>
        <Info className='w-12 h-12 mr-3 text-blue-400'/>
        <div>
          We generated chapter for each of your units. looks over them and then click the button  to confirm and Continue
        </div>
      </div>
         <ConfirmChapters course={course}/>
    </div>  
  )
}

export default createChapters

