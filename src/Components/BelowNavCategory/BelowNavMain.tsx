import NavItem from "./NavItem"


function BelowNavMain() {
  return (
    <div className="mx-auto min-w-[1161px] block shadow-md bg-white">
      <div className="mx-auto flex w-full h-[40px] justify-center gap-[49px]">
        <NavItem value="Electronics" />
        <NavItem value="TVs & Appliances" />
        <NavItem value="Men" />
        <NavItem value="Women" />
        <NavItem value="Baby & Kids" />
        <NavItem value="Home & Furniture" />
        <NavItem value="Sports,Books & More" />
        <NavItem value="Flights" />
        <NavItem value="Offer Zone" />
      </div>
    </div>
  )
}

export default BelowNavMain
