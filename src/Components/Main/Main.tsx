import { createContext, useEffect, useState } from "react"
import Aside from "./Aside/Aside"
import Content from "./Content/Content"

export const DataContext = createContext<any>([])

function Main() {
    const [data,setData] = useState<any[]>([])
    const [brandNames,setBrandNames] = useState<string[]>([])
    const [newData,setNewData] = useState<any[]>([])
    const [finalFilterArray,setFinalFilterArray] = useState<any[]>([])
    let arr:string[] = []
    
  


    useEffect(()=>{
        async function fetchData() {
            try{
                const res = await fetch("/src/assets/data/data.json")
                if(!res.ok) throw new Error("Fetch failed")
                const data2 = await res.json()
                
                setData(data2)
                setNewData(data2)
                data2.forEach((data:{brand:string})=>{
                    if(!arr.includes(data.brand)){
                        arr.push(data.brand)
                    }
                })
                setBrandNames(arr)
            } catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[])




    

  return (
    <div className="flex mx-auto min-w[1161px] max-w-[1680px] p-2 bg-[#f1f3f6] h-full">
      <DataContext.Provider value={{data,setData,brandNames,newData,setFinalFilterArray,finalFilterArray}}>
        <Aside/>
        <Content/>
      </DataContext.Provider>
    </div>
  )
}

export default Main
