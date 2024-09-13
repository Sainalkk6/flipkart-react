
import Dummy from "../../../../assets/Dummy"
import arrow from "../../../../assets/imgs/filled-arrow-d.svg"

type PropsType = {
  setMin:React.Dispatch<React.SetStateAction<number>>;
  setMax:React.Dispatch<React.SetStateAction<number>>;
}


function PriceSection({setMin,setMax}:PropsType) {


  return (
    <div className="relative flex flex-col">
      <div className="flex items-end">
        <Dummy height="21.875"/>
        <Dummy height="24"/>
        <Dummy height="24"/>
        <Dummy height="24"/>
        <Dummy height="18.75"/>
      </div>
      <div className="bg-[#c2c2c2] h-[2px] inline-block absolute top-[21.5px] w-[237px]"></div>
      <div className="relative">
        <div className="bg-white rounded-[50%] border -top-2 z-10  border-[#bababa] w-[13px] h-[13.5px] absolute"></div>
        <div className="bg-white rounded-[50%] border -top-2 z-10 right-0 border-[#bababa] w-[13px] h-[13.5px] absolute"></div>
        <div className="w-[233px] rounded-sm left-1 bg-[#2874f0] h-[9px] absolute -top-[5px]"></div>
      </div>
      <div className="w-full inline-block relative -top-1 left-1">
        <div className="w-[43.4px] inline-block text-[#c2c2c2]  text-[20px]">.</div>
        <div className="w-[43.4px] inline-block text-[#c2c2c2]  text-[20px]">.</div>
        <div className="w-[43.4px] inline-block text-[#c2c2c2]  text-[20px]">.</div>
        <div className="w-[43.4px] inline-block text-[#c2c2c2]  text-[20px]">.</div>
        <div className="w-[43.4px] inline-block text-[#c2c2c2]  text-[20px]">.</div>
      </div>
      <div className="text-[#c3c3c3] flex w-full mt-[2.3px] -mx-1">
        <div className="flex relative">
          <img src={arrow} className="absolute left-[90px] top-[10px] z-20" alt="" />
          <select className="w-[109.4px] inline-block appearance-none bg-white h-6 text-[13.3px] text-black relative font-interReg border border-[#e0e0e0] rounded-[1px] px-[5px] focus:outline-none" onChange={(e)=>setMin(Number(e.target.value))}>
            <option className="px-[7px]" value="0">Min</option>
            <option className="px-[7px]" value="10000">₹10000</option>
          </select>
          <span className="inline-block text-[13.3px] text-[#878787] text-center font-interReg mx-[9px]">to</span>
          <div className="inline-block ml-[1.5px] relative">
            <img src={arrow} alt="" className="absolute z-20 right-[10px] top-[10px]"/>
            <select className="w-[109.4px] bg-white h-6 text-[13.3px] text-black appearance-none relative font-interReg border rounded-[1px] px-[5px] focus:outline-none" onChange={(e)=>setMax(Number(e.target.value))} defaultValue={"9999999"}>
              <option value="10000">₹10000</option>
              <option value="15000">₹15000</option>
              <option value="20000">₹20000</option>
              <option value="30000">₹30000</option>
              <option value="9999999">₹30000+</option>
          </select>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PriceSection
