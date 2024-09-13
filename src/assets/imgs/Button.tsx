import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"



const buttonStyles = cva('',{
    variants:{
        variant:{
            default:["flex","cursor-pointer", "font-interSemi","text-white","items-center","justify-center","mr-[18px]","ml-22px","max-w-[150px]","text-[15.2px]","tracking-[0.1px]","leading-[20px]"],
            active:["flex","cursor-pointer","font-interSemi","text-[#2874f0]","items-center","justify-center","bg-white","rounded-[2px]","border","border-[#dbdbdb]","pt-[4.5px]","px-[39.5px]","pb-[5px]","max-w-[150px]","text-[15.2px]","tracking-[0.1px]","leading-[20px]","mr-[18px]","ml-22px"]
        }
    }
})

type ButtonType = VariantProps<typeof buttonStyles> & ComponentProps<"button"> 

function Button({variant,className,value,children,...props}:ButtonType) {
  return (
  <button className={twMerge(buttonStyles({variant}),className)} {...props}>
    {value} 
    {children}
  </button>
)
}



export default Button
