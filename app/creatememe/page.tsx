'use client'
import Image from 'next/image';
import React, { useRef, useState } from 'react'

const page = ({searchParams}:{searchParams:{id:string , url:string}} )=> {
    
    const [meme , setMeme] = useState<string | null>(null)
    const [count , setCount] = useState<string | null>(null)
    const text1 = useRef<HTMLInputElement>(null);
    const text2 = useRef<HTMLInputElement>(null)



    const creatememe = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=Ashar_Khan&password=ashar2007&text0=${text1.current?.value}&text1=${text2.current?.value}` , {method:'POST'} )

        const resp = await data.json()

        
        setMeme(resp.data.url)
        setCount(resp.data.box_count)
       
        
       
    }
    

  return (
    <>

<div className='text-center mt-3 flex justify-center items-center'>
<Image src={searchParams.url} width={300} height={300} alt='meme'/>
</div>

    <form onSubmit={creatememe} className='justify-center items-center text-center'>
       
    <input
  type="text"
  placeholder="Text 1"
  className="input input-bordered input-primary w-full max-w-xs mt-6" ref={text1} /><br/>
  <input
  type="text"
  placeholder="Text 2"
  className="input input-bordered input-primary w-full max-w-xs mt-3" ref={text2} /><br/>
        <button className='btn btn-warning mt-4'>Generate</button>
    </form>

    <h1 className='text-center text-2xl font-semibold mt-7'>Your Meme</h1>

    {
        meme ? <div className='flex justify-center item-center mt-7'>
            <Image src={meme} width={300} height={300} alt='meme'/>
        </div>:null
    }

    </>
  )
}

export default page