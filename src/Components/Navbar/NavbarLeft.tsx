
import logo from "../../assets/imgs/flipkart-logo.png"
import icon from "../../assets/imgs/plus_icon.png"
import search from "../../assets/imgs/search.svg"

function NavbarLeft() {
  return (
    <div className="flex ml-auto items-center pr-3">
      <div className="pt-[1.5px] flex flex-col justify-center items-center">
        <img className="w-[75px] relative top-[-2px]" src={logo} alt="" />
        <div className="flex gap-[2.5px] mt-[-3px]">
            <span className="font-interItalic text-[#f0f0f0] text-[10.5px] ">Explore</span>
            <span className="font-interSemiItalic text-[#ffe500]  text-[10.5px]">Plus</span>
            <img className="w-[9.5px] h-[9.5px] relative top-[2px] ml-[1.5px] right-[1.5px]" src={icon} alt="" />
        </div>
      </div>
      <form className="relative flex ml-3  ">
        <input type="text" defaultValue="mobile" placeholder="Search..." className="w-[564px]  max-w-[564px] shadow-md text-[13.2px] font-[inter-reg]  py-2  pl-4"/>
        <img src={search} className="absolute right-[13.5px] cursor-pointer top-2" alt="" />
      </form>
    </div>
  )
}

export default NavbarLeft
