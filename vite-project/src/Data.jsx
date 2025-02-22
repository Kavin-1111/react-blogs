import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [data, setData] = useState([
     {id: 1, name: "aaa", dec: "aaa"},
     {id: 2, name: "bbb", dec: "bbb"},
     {id: 3, name: "ccc", dec: "ccc"},
     {id: 4, name: "ddd", dec: "ddd"},
  ])
  console.log(data, "DATASSS")
  const [inputDataName, setInputDataName] = useState("")
  const [inputDataFile, setInputDataFile] = useState("")
  const [inputDataDesc, setInputDataDesc] = useState("")
  const handleChange = () => {
    // console.log(e.target.value, "FILES")
    // const newData = {
    //   name: inputDataName,
    //   dec: inputDataDesc,
    //   file: inputDataFile
    // }
    // setData([...data, newData])
    const datas = data.flatMap(item => [item, 
      {
        id:index[item],
        name: inputDataName,
        dec: inputDataDesc,
      }
    ])
    setData(datas)
  };
  function hanlde(e){

    console.log(e.target.files[0], "TARGET")
  }
  return (
    <>
      <input type='text' onChange={(e)=>setInputDataName(e.target.value)} /><br />
      <input type='text' onChange={(e)=>setInputDataDesc(e.target.value)} />
      <button onClick={()=>handleChange()}>Save Blogs</button>

      {
        data.map((item, index)=>{
          return(
            <div  key={index}>
              <span>{item.name}</span>
              <p>{item.dec}</p>
             
            </div>
          
        )})
      }


    </>
  )
}

export default App
