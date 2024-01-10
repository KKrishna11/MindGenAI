import SubscriptionButton from '@/components/ui/SubscriptionButton'
import { checkSubscription } from '@/lib/subscription'
import { Subscript } from 'lucide-react'
import React from 'react'

type Props = {}

const page = async (props: Props) => {
  const isPro= await checkSubscription()
  return (
    <div className='py-8 mx-auto max-w-7xl mt-10'>
      <h1 className='text-3xl font-bold'>
      Setting
      </h1>
      {isPro?(<p className="text-xl text-secondary-foreground/60">
        You are Pro user 
      </p>):(
        <p className="text-xl text-secondary-foreground/60">
        You are  NOT Pro user 
      </p>
      )}
    <SubscriptionButton isPro={isPro}/>
    </div>
  )
}

export default page;