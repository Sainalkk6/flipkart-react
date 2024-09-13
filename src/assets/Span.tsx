type Props = {
    content:string;
    img?:string;
}

function Span({content,img}:Props) {
  return (
    <div className="flex">
        <span className="max-w-[80px] whitespace-nowrap overflow-hidden text-ellipsis inline-block align-middle font-interReg text-[#878787] text-[11.4px] ">{content}</span>
        {img && <img className="h-[7px] w-[20px] rotate-180 relative  top-[5px] inline-block" src={img} alt="right-arrow" />}
    </div>
  )
}

export default Span
