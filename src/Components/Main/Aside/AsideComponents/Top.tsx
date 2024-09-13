
import arrow from "../../../../assets/imgs/arrow-grey-left.svg"

function Top() {
    return (
        <div className="px-4 pt-[14px] pb-[20px] border-b">
            <span className="mb-[5px]  font-interSemi text-[11.4px] uppercase">Categories</span>
            <span className="py-[5px] mb-[1px] flex pl-1 text-[#878787] font-interReg text-[13.3px] text-nowrap ml-[-4px] gap-[5px] pt-[7px]"> <img className="h-[9.5px] top-[3.9px] relative w-[10px] " src={arrow} alt="" />Mobiles & Accessories</span>
            <span className="pl-[15px] pr-[5px]  font-interSemi text-[13.3px] text-nowrap">Mobiles</span>
        </div>
    )
}

export default Top
