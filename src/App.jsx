import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200 'style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColor("aqua")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "aqua"}}>Aqua</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "orange"}}>Orange</button>
            <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}}>Purple</button>
            <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>
            <button onClick={() => setColor("beige")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "beige"}}>Beige</button>
            <button onClick={() => setColor("teal")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "teal"}}>Teal</button>
            <button onClick={() => setColor("crimson")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "crimson"}}>Crimson</button>
            <button onClick={() => setColor("#6F00FF")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "#6F00FF"}}>Electric indigo</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
