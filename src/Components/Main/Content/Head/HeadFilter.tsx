import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


type Props = {
    value:string;
    handleClick?:()=> any;
}

function HeadFilter({value,handleClick,variance}:NavigatorProps) {
  return (
    <div onClick={handleClick} className={twMerge(navigatorButtonStyles({variance}),"cursor-pointer mx-[10px] pt-2 pb-1 inline-block text-[13.3px]")}>
      {value}
    </div>
  )
}


const navigatorButtonStyles = cva("",{
   variants:{
    variance:{
        default:["font-interReg","text-black"],
        active:["font-interSemi", "text-[#2874f0]", "border-b-2", "border-[#2874f0]"]
    }
   }
})

type NavigatorProps = VariantProps<typeof navigatorButtonStyles> & Props & ComponentProps<"div">

export default HeadFilter
