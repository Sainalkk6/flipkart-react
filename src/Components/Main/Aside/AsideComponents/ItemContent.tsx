
type PropsType = {
    arr:string[];
    setFilterArr:React.Dispatch<React.SetStateAction<string[]>>;
    filterArr:string[]
}


function ItemContent({arr,setFilterArr,filterArr }:PropsType) {
  return (
    <div className="mt-2">
        <div className="flex flex-col">
            {arr.map((item,index)=>(
                <div className="py-[3px] mb-[7px] flex" key={index}>
                    <input type="checkbox" checked={filterArr.includes(item)} value={item}  onChange={(e)=>{
                        
                        if(e.target.checked){
                            setFilterArr(t=>[...t,e.target.value])
                             
                        } else {
                            setFilterArr(filterArr.filter(item=> item !== e.target.value))
                        }

                    }} className="inline-block cursor-pointer" />
                <span className="align-middle text-[13.3px] inline-block text-black whitespace-nowrap text-ellipsis cursor-pointer ml-[7px] font-interReg">{item}</span>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default ItemContent
