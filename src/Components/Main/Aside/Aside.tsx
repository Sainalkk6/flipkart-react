import { createContext, useContext, useEffect, useState } from "react"
import { DataContext } from "../Main"
import ItemHead from "./AsideComponents/ItemHead";
import icon from "../../../assets/imgs/arrow-grey-left.svg"
import ItemContent from "./AsideComponents/ItemContent";
import ItemContentSecond from "./AsideComponents/ItemContentSecond";
import Header from "./AsideComponents/Header";
import Top from "./AsideComponents/Top";
import PriceSection from "./AsideComponents/PriceSection";
import Fassured from "./AsideComponents/Fassured";
import AsideBottom from "./AsideComponents/AsideBottom";
export const FilterContext = createContext(null)


function Aside() {
    const { setData, brandNames, newData,setFinalFilterArray,finalFilterArray } = useContext(DataContext)

    const [brandArr, setBrandArr] = useState<string[]>([])
    const [ratingArr,setRatingArr] = useState<number[]>([])
    const [ramArr,setRamArr] = useState<number[]>([])
    const [discountArr,setDiscountArr] = useState<number[]>([])
    const [min,setMin] = useState<number>(0)
    const [max,setMax] = useState<number>(Infinity)
 
    let ratings = ["4★ & above", "3★ & above"]
    let rams = ["4 GB", "3 GB", "2 GB", "1 GB and below", "8 BG and Above", "6 GB", "6 GB and Above"]
    let discounts = ["50% or more", "40% or more", "30% or more", "20% or more", "10% or more"]
    useEffect(()=>{
        setFinalFilterArray(newData.filter((product:any) => {   
    
            return (
                (brandArr.length === 0 || brandArr.includes(product.brand)) &&
                (ratingArr.length === 0 || ratingArr.some(r=> product.rating.average > r)) &&
                (ramArr.length === 0 || ramArr.every(r=> r<= product.ram)) && 
                (discountArr.length === 0 || discountArr.some(d => (product.mrp - product.price) / product.mrp * 100 >= d))&&
                (product.price >= min) && product.price <= max
            )
        }))
    },[brandArr,ratingArr,ramArr,discountArr,min,max])



    useEffect(()=>{
        setData(finalFilterArray)
    },[finalFilterArray])
    return (
        <aside className="flex flex-col flex-none w-[270px] bg-white h-full ">
            <Header brandArr={brandArr} ramArr={ramArr} ratingArr={ratingArr} discountArr={discountArr} setBrandArr = {setBrandArr}/>
            <Top/>
            <ItemHead title="price" isOpen>
                <PriceSection setMax={setMax} setMin={setMin} />
            </ItemHead>
            <ItemHead title="brand" isOpen icon={icon}>
                <ItemContent arr={brandNames} setFilterArr={setBrandArr} filterArr={brandArr} />
            </ItemHead>
            <Fassured/>
            <ItemHead title="customer rating" isOpen icon={icon}>
                <ItemContentSecond count={1} arr = {ratings} filterArr={ratingArr} setFilterArr={setRatingArr}/>
            </ItemHead>
            <ItemHead title="gst invoice available"/>
            <ItemHead title="ram" isOpen icon={icon}>
                <ItemContentSecond count={2} arr={rams} filterArr={ramArr} setFilterArr={setRamArr} />
            </ItemHead>
            <ItemHead title="internal storage" icon={icon}/>
            <ItemHead title="battery capacity" icon={icon}/>
            <ItemHead title="screen size" icon={icon}/>
            <ItemHead title="primary camera" icon={icon}/>
            <ItemHead title="secondary camera" icon={icon}/>
            <ItemHead title="processor brand" icon={icon}/>
            <ItemHead title="speciality" icon={icon}/>
            <ItemHead title="resolution type" icon={icon}/>
            <ItemHead title="operating system" icon={icon}/>
            <ItemHead title="sim type" icon={icon}/>
            <ItemHead title="offers" icon={icon}/>
            <ItemHead title="features " icon={icon}/>
            <ItemHead title="type" icon={icon}/>
            <ItemHead title="number of chores" icon={icon}/>
            <ItemHead title="availability" icon={icon}/>
            <ItemHead title="discount" isOpen icon={icon}>
                <ItemContentSecond count={2} arr={discounts} filterArr={discountArr} setFilterArr={setDiscountArr}/>
            </ItemHead>
            <ItemHead title="operating system version name" icon={icon}/>
            <ItemHead title="clock speed" icon={icon}/>
            <AsideBottom/>
        </aside>
    )
}

export default Aside



