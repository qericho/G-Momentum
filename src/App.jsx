import DateToday from "./components/DateToday"
import Quotes from "./components/Quotes"
import Time from "./components/Time"
import Weather from "./components/Weather"

const App = () => {
    
  return (
    <div className="w-full h-screen p-2 text-white">
      <div className="h-screen w-full bg-black/70 absolute left-0 top-0 z-[-1]"></div>
      <div className="flex justify-between">
        <Weather/>
        <DateToday/>
      </div>
      <div className="w-full md:w-[800px] mx-auto mt-[200px]">
        <Time/>
      </div>
      <div className="absolute left-0 right-0 bottom-15 mx-auto">
          <Quotes/>
      </div>
    </div>
  )
}

export default App
