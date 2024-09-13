
type PropsType = {
    arr:string[];
    filterArr:number[];
    setFilterArr:React.Dispatch<React.SetStateAction<number[]>>;
    count:number
}


function ItemContentSecond({arr,filterArr,setFilterArr,count}:PropsType) {

  return (
    <div className="mt-2">
        <div className="flex flex-col">
            {arr.map((item,index)=>(
                <div className="py-[3px mb-[7px] flex" key={index}>
                    <input type="checkbox" value={count=== 1 ? Number(item.slice(0,1)) : Number(item.slice(0,2))} onChange={(e)=>{
                        if(e.target.checked){
                            {setFilterArr && setFilterArr(t=>[...t,Number(e.target.value)])}
                        } else {
                            {filterArr && setFilterArr(filterArr.filter(item=>item !== Number(e.target.value)))}
                        }
                    }} className="inline-block cursor-pointer" />
                    <span className="align-middle text-[13.3px] inline-block text-black whitespace-nowrap text-ellipsis cursor-pointer ml-[7px] font-interReg">{item}</span>
                </div>
            ))}
        </div>      
    </div>
  )
}

export default ItemContentSecond
