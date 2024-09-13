import  { ReactNode, useState } from "react";


type Props = {
    title?:string;
    icon?:string;
    children?:ReactNode;
    isOpen?:boolean;
}

function ItemHead({title,icon,children,isOpen}:Props) {

  const [isExpand,setIsExpand] = useState(isOpen)



  // const showButton = childrenArr.length > visibleItem
  const buttonIcon = isExpand ? "w-[6px] h-[11px] cursor-pointer rotate-90 duration-200" : "w-[6px] h-[11px] cursor-pointer -rotate-90 duration-200"
  return (
    <div className="flex flex-col w-full border-b border-[#f0f0f0] px-4 pb-4 pt-[15px]">
        <div className="  flex w-full justify-between pb-[7px]">
            <span className="font-interSemi cursor-pointer text-[12.35px] tracking-[0.3px] uppercase">{title}</span>
            {icon && <img onClick={()=> setIsExpand(t=>!t)} className={buttonIcon} src={icon} />}
        </div>
        {isExpand && children}
    </div>
  )
}

export default ItemHead
