import { useState, useEffect } from 'react'
import { Button, Flex } from 'antd'
const Home = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  )
  const [date, setDate] = useState(new Date().toLocaleDateString())
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date()
      setTime(
        currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      )
      setDate(currentDate.toLocaleDateString())
    }, 60000)

    const hours = new Date().getHours()
    if (hours < 12) {
      setGreeting('Good Morning')
    } else if (hours < 18) {
      setGreeting('Good Afternoon')
    } else {
      setGreeting('Good Evening')
    }

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-slate-50 p-3 h-screen overflow-auto md:h-full md:overflow-hidden">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-5 md:gap-4 h-full">
        <div className="col-start-1 col-end-2 row-start-1 row-end-6 bg-white border text-gray-950 w-full min-h-[100px] rounded-lg flex flex-col p-4 items-start">
          <h1 className="text-5xl font-medium">{time}</h1>
          <p className="text-2xl">{date}</p>
          <p className="text-2xl">{greeting}</p>
        </div>
        <div className="col-start-2 col-end-6 row-start-1 row-end-6 bg-white border w-full min-h-[400px] rounded-lg text-gray-950 flex flex-col items-center p-4">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full">
            <div className=" bg-white w-full h-auto rounded-lg flex items-center justify-center text-white">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
                <div className="bg-blue-500 w-full h-auto rounded-lg flex items-center justify-center text-white">
                  <p className="text-xl">Box 1</p>
                </div>
                <div className="bg-green-500 w-full h-auto rounded-lg flex items-center justify-center text-white">
                  <p className="text-xl">Box 2</p>
                </div>
                <div className="bg-red-500 w-full h-auto rounded-lg flex items-center justify-center text-white">
                  <p className="text-xl">Box 3</p>
                </div>
                <div className="bg-yellow-500 w-full h-auto rounded-lg flex items-center justify-center text-white">
                  <p className="text-xl">Box 4</p>
                </div>
              </div>
            </div>
            <div className="bg-green-500 w-full h-auto rounded-lg flex items-center justify-center text-white">
              <p className="text-xl">Box 2</p>
            </div>
            <div className="bg-red-500 w-full h-auto rounded-lg flex items-center justify-center text-white">
              <p className="text-xl">Box 3</p>
            </div>
            <div className="bg-blue-500 w-full h-auto rounded-lg flex items-center justify-center text-white">
              <p className="text-xl">Box 1</p>
            </div>
            <div className="bg-green-500 w-full h-auto rounded-lg flex items-center justify-center text-white">
              <p className="text-xl">Box 2</p>
            </div>
            <div className="bg-red-500 w-full h-auto rounded-lg flex items-center justify-center text-white">
              <p className="text-xl">Box 3</p>
            </div>
          </div>
          <div className=" mt-4 w-full h-20 rounded-lg flex  gap-2 items-center  justify-between text-white">
            <Button size="large">Default Button</Button>
            <Button size="large">Default Button</Button>
            <Button size="large">Default Button</Button>
            <Button size="large">Default Button</Button>
            <Button size="large">Default Button</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
