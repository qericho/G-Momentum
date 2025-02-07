import axios from "axios"
import { useState, useEffect } from "react"

const Weather = () => {
    const [data, setData] = useState(null);
    const API_KEY = import.meta.env.VITE_API_KEY;
    const city = 'Gatid';
    
    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        axios.get(url).then(res => {
            setData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
  return (
    <div>
        {data ? <div>
                 <p className="text-3xl md:text-5xl">{data.main.temp}°C</p>
                 <p className="text-sm md:text-xl">{city}</p>
               </div> 
              :
                <p className="text-sm">loading please wait</p>
        }
    </div>
  )
}

export default Weather
