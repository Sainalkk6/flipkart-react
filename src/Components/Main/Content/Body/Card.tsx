
import star from "../../../../assets/imgs/star.svg"
import assured from "../../../../assets/imgs/fassure.png"
import heart from "../../../../assets/imgs/heart.svg"

type CardPropType = {
    highlights:string[];
    image:string[];
    mrp:number;
    price:number;
    rating:{
        average:number;
        count:number;
        reviewCount:number;
    };
    title:string;
}


function Card({highlights,image,mrp,price,rating:{average,count,reviewCount},title}:CardPropType) {
  return (
    <div className="pt-6 pl-6 pb-[30px] flex bg-white border-b">
      <div className="relative w-[200px] mr-10 pl-[1px]">
        <div className="flex items-center justify-end">
        <img src={image[0]} className="h-[200px] object-cover object-center" alt="" />
        </div>
        <div className="block mt-4">
            <input type="checkbox" />
            <span className="ml-[5px] font-interReg text-[13.3px] cursor-pointer hover:font-bold duration-150">Add to Compare</span>
        </div>
        <div className="absolute inline-block cursor-pointer -right-[43.5px] top-[2px]">
            <img src={heart} alt="" />
        </div>
      </div>
      <div className="pl-[20.5px] -mt-1 items-start w-full justify-between flex">
        <div>
            <span className="font-interSemi text-[17.1px] cursor-pointer hover:text-[#2874f0]">{title}</span>
            <div className="mt-[2px] flex">
                <div className="bg-[#388e3c]   gap-2 h-[18px] rounded-[3px]  text-white  pr-[2px] pl-[6px] relative top-[-1px]">
                    <span className="relative inline-block top-[-3px] text-[11.4px] font-interSemi">{average}</span>
                    <img src={star} className="relative inline-block top-[-4.8px] mr-[2px] ml-[2px]  mt-[2px] h-[10px]" alt="" />
                </div>
                <div className="pl-2 text-[#878787] inline-block -mt-1 relative top-[-1px]">
                    <span className="font-interSemi text-[13.3px]">{`${count.toLocaleString()} Ratings &  ${reviewCount.toLocaleString()} Reviews`}</span>
                </div>
            </div>
            <div className="mt-[10.5px]">
                <ul className="mt-[3px] text-[#212121] list-none table">
                    {highlights.map((item,index)=>(
                        <li key={index} className="table-row leading-[22px] font-interReg text-[13.3px]  before:content-['•'] before:text-[#c2c2c2] before:pr-2 before:table-cell">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="pl-[34.6px] inline-block w-[41.66%] cursor-pointer">
            <div className="inline-block mt-[-1px] pr-[10px] align-top">
                <span className="block font-interSemi text-[#212121] align-top relative top-[-3px] text-[23.7px]">{`₹${price.toLocaleString()}`}</span>
                <span className="inline-block font-interReg  ml-0 line-through text-[#878787] text-[13.2px] cursor-pointer">{`₹${mrp.toLocaleString()}`}</span>
                <span className="inline-block ml-1 font-interSemi tracking-[-0.2px] pl-1 text-[#388e3c] text-[12.4px]">{`${(((mrp-price)/mrp)*100).toFixed()}% off`}</span>
                <span className="block mt-1 font-interReg text-[11.38px] text-wrap text-black">Free delivery</span>
            </div>
            <div className="inline-block align-top pb-1 -ml-1">
                <img src={assured} className="w-[77px] h-[21px]" alt="" />
            </div>
            <span className="mt-2 text-[11.4px] block font-interSemi text-nowrap align-middle leading-3 text-[#26a541]">Save extra with combo offers</span>
            <span className="mt-2 text-[#26a541] block font-interSemi text-nowrap align-middle text-[13.3px] leading-[14px]">Bank Offer</span>
        </div>
      </div>
    </div>
  )
}

export default Card
