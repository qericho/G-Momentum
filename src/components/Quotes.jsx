import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Quotes = () => {
  const [data, setData] = useState(null);
  const url = `https://quotes-api-self.vercel.app/quote`;

  useEffect(()=>{
    axios.get(url).then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <div className='z-10'>
        {
        data ?   <div className='text-center px-2 w-full md:w-[1200px] mx-auto'>
                      <p className='text-[15px] md:text-xl my-2'>{data.quote}</p>
                      <p className='italic text-sm md:text-xl'>-{data.author}
                      </p>
                 </div>
              :
              
              <div>
                    <p className='text-sm text-center'>loading please wait!</p>
              </div>

        }
    </div>
  )
}

export default Quotes
