'use client'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/moving-border'
import React, { FormEvent, useState } from 'react'

function Page() {
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log('Submitted',{email,message})
    }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative ">
      
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      
      <div className="relative z-10 max-w-2xl mx-auto p-4 mt-6">
        
        <h1 className="text-center text-white text-7xl mb-6 font-bold">Contact Us</h1>

        
        <p className="text-center text-lg text-gray-500">
          We're here to help with any questions about our courses, programs, or events. 
          Reach out and let us know how we can assist you in your musical journey.
        </p>
      </div>
      
      
      <div className="relative z-10 mt-10 space-y-4 mx-auto max-w-5xl">
        <form onSubmit={handleSubmit} className='flex justify-center flex-col items-center'>
        <input 
        type='email'
        placeholder='Enter Your Email'
        onChange={(e)=>setEmail(e.target.value)}
        className='rounded-lg border border-neutral-800   w-full p-4 bg-neutral-950 placeholder:text-neutral-700 focus:border-teal-400 focus:outline-none'
        />
        <textarea
        rows={10}
        onChange={(e)=>setMessage(e.target.value)}
        className='rounded-lg border border-neutral-800   w-full p-4 bg-neutral-950 placeholder:text-neutral-700 mt-10 focus:border-teal-400 focus:outline-none'
        placeholder='Enter Your Message'
        />
        <div className='mt-10'>
        <Button className='w-full bg-teal-500 font-semibold'>Submit Response</Button>
        </div>
      </form>
      </div>
      
    </div>
  )
}

export default Page;
