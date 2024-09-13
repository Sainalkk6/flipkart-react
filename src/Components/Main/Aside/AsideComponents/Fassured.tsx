
import assured from "../../../../assets/imgs/fassure.png"


function Fassured() {
    return (
        <div className="flex p-4 border border-b-[#f0f0f0] cursor-pointer justify-between items-center">
            <div className="flex">
                <input type="checkbox" />
                <img src={assured} className="relative top-[6px] h-[21px] align-middle pl-[11px] inline-block whitespace-nowrap overflow-hidden " />
            </div>
            <div className="inline-block relative">
                <span className="rounded-full bg-white text-[#878787] w-4 h-4 leading-4 text-[10.4px] text-center inline-block border-[#777373] shadow-md cursor-pointer mr-[2px] ml-2">?</span>
            </div>

        </div>
    )
}

export default Fassured
