import image from "../../../../assets/imgs/buying-guide.png"

function AsideBottom() {
  return (
    <div className="text-center pt-[30px] block cursor-pointer bg-[#f1f3f6]">
        <span className="font-interReg block text-[13.4px] leading-[19.6px] text-center">Need help?</span>
        <span className="mt-[5px] mb-[20px] block font-interReg text-[17.3px] text-center leading-[18px] text-[#2874f0]">Help me decide</span>
        <img src={image} alt="" className="block items-center relative left-[93px]" />
    </div>
  )
}

export default AsideBottom
