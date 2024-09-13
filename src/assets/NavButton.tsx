
type Props = {
    value:string;
    padding:string;
    callback:()=>any;
}

function NavButton({value,padding,callback}:Props) {
  return <span onClick={callback} className={`cursor-pointer ${padding} text-[#2874f0] leading-8 uppercase text-[14px] font-interSemi`}>{value}</span>
}

export default NavButton
