import { useContext, useEffect, useReducer, useState } from "react"
import { DataContext } from "../../Main"
import Span from "../../../../assets/Span"
import arrow from "../../../../assets/imgs/arrow-grey-left.svg"
import HeadFilter from "./HeadFilter"

type Props = {
  real: [{}];
}


function Head({ real }: Props) {

  const [active, setActive] = useState<number>(1)
  const { newData, setData, finalFilterArray } = useContext(DataContext)

  const arr = [{ title: "Relevance", id: 1, purpose: "relevance" }, { title: "Popularity", id: 2, purpose: "popularity" }, { title: "Price -- Low to High", id: 3, purpose: "ascending" }, { title: "Price -- High to Low", id: 4, purpose: "descending" }, { title: "Newest First", purpose: "newest", id: 5, },]

  useEffect(() => {
    dispatch({ type: arr.find(item => item.id === active)?.purpose || "relevance" });
  }, [finalFilterArray, active]);

  const reducer = (state: any, action: any) => {

    if (finalFilterArray) {
      switch (action.type) {
        case "popularity":
          return [...finalFilterArray].sort((a, b) => b.rating.average - a.rating.average)
        case "ascending":
          return [...finalFilterArray].sort((a, b) => a.price - b.price)
        case "descending":
          return [...finalFilterArray].sort((a, b) => b.price - a.price)
        case "relevance":
          return finalFilterArray
        case "newest":
          return finalFilterArray
        default:
          return state
      }
    }
  }




  const [state, dispatch] = useReducer(reducer, newData)


  useEffect(() => {
    setData(state)
  }, [state, setData])

  return (
    <div className="flex flex-col w-full items-start bg-white min-h-[96px]  overflow-auto pt-[14px] px-[17px] border-b border-[#f0f0f0] ">
      <div className="flex w-full">
        <Span content="Home" img={arrow} />
        <Span content="Mobiles & Accessories" img={arrow} />
        <Span content="Mobiles" />
      </div>
      <span className="mt-2 font-interSemi text-[15.2px]">Showing 1 - {real.length} of {finalFilterArray.length} results for "mobile"</span>
      <div className="flex w-full">
        <span className="inline-block pt-2 pr-[10px] pb-1 font-interSemi text-[13.3px]">Sort By</span>
        {arr.map((item, index) => (
          <HeadFilter key={index} value={item.title} handleClick={() => {
            setActive(item.id)
            dispatch({ type: item.purpose })
          }
          } variance={item.id === active ? "active" : "default"} />
        ))}
      </div>
    </div>
  )
}

export default Head
