import NavbarLeft from "./NavbarLeft"
import NavbarRight from "./NavbarRight"


function Navbar() {
  return (
    <div className="mx-auto sticky top-0 z-[1111] bg-[#2874f0] flex items-center w-[100%] h-[56px] gap-5">
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar
