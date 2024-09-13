import Button from "../../assets/Button"
import cart from "../../assets/imgs/cart.svg"
import { RiArrowDownSLine } from "react-icons/ri"

function NavbarRight() {
  return (
    <div className="flex py-3 mr-auto items-center relative gap-5">
      <Button variant="active" value="Login"/>
      <Button variant="default" value="Become a Seller"/>
      <Button variant="default" value="More" children={<RiArrowDownSLine size={15} className="ml-1"/>}/>
      <Button variant="default" value="Cart" children = {<img src={cart} className="ml-2"></img>}/>
    </div>
  )
}

export default NavbarRight
