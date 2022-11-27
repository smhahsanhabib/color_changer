import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("")
  return (
  
    <div align="center">
      <h1>Color Changer</h1>
     <div style={{backgroundColor:color, height:"30vh", width:"40vh", border:"2px solid black", margin:"4px"}}>
     
     </div>
     <input type="text" placeholder="Color Name/Code" value={color} onChange={(e)=>setColor(e.target.value)} style={{height:"4vh", width:"20vh",margin:"4px", borderRadius:"4px", textAlign:"center"}} />
    </div>
  )
}

export default App