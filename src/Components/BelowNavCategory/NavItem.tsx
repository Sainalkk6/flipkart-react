import arrow from "../../assets/imgs/down-arrow.svg"

type Props = {
    value: string;
}


function NavItem({value}:Props) {
  return <span className="w-[132.8px] max-w-fit text-nowrap  flex duration-100  justify-center pt-[9.5px] cursor-pointer font-interSemi text-[13.25px] gap-[4.7px] group text-black flex-grow hover:text-[#2874f0]">{value} <img src={arrow} className="w-[8px] h-[10px] rotate-[180deg] duration-300 group-hover:rotate-0 relative top-[5.5px] left-[2px]" alt="" /></span>
}

export default NavItem
