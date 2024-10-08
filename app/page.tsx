import { url } from 'inspector';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface meme{
  id:string,
  url:string,
  box_count:number,

}


const page = async () => {

  const data = await fetch ('https://api.imgflip.com/get_memes');

  const resp = await data.json();

  console.log(resp.data.memes);
  


  return (
    <>
    <h1 className='text-center text-2xl font-semibold mt-2'>Meme Generator</h1>

    <div className='flex justify-center gap-5 flex-wrap mt-4' >
      {

        
        
        resp.data.memes.map((item:meme) => {


          return(
            <div>
            <Image src={item.url} width={300} height={300} alt='meme'/>
            <button className='btn btn-warning mt-4'><Link href={{
              pathname:'creatememe',
              query:{
                url:item.url,
                id:item.id,
                count:item.box_count
                
              }
            }}>Generate meme</Link></button>
            </div>
          )


        })
      }

    </div>
    
    </>
  )
}

export default page