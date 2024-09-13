
type PropsType = {
  brandArr:string[];
  ramArr:number[];
  discountArr:number[];
  ratingArr:number[];
  setBrandArr:React.Dispatch<React.SetStateAction<string[]>>;
}

function Header({brandArr,setBrandArr}:PropsType) {

  return (
    <div className="px-4 pt-[15px] pb-5 border-b">
      <span className="font-interSemi text-[17.1px] tracking-[0.3px]">Filters</span>
      <div className="mt-2 -ml-1">
        {brandArr.length > 0 ? (
          brandArr.map((item,index)=>(
            <div key={index} className="inline-block cursor-pointer bg-[#e0e0e0] shadow-sm rounded-[3px] mx-1 my-[2px] overflow-hidden duration-100 hover:bg-[#e0e0e0] hover:opacity-[0.5] pt-[5.5px] pr-[7.5px] pb-2 pl-2 max-w-[200px] hover:line-through font-interReg  text-[11.5px] leading-[16.8px] text-nowrap" onClick={()=>setBrandArr(brandArr.filter(i=>i !== item))}>
              {item}
            </div>
          ))
        ) : null}
      </div>
    </div>
  )
}

export default Header
