
import { useContext, useState } from "react"
import Body from "./Body/Body"
import Head from "./Head/Head"
import { DataContext } from "../Main"


function Content() {
  const {data} = useContext(DataContext)
    const [currentPage,setCurrentPage] = useState<number>(1)
    const itemsPerPage = 24
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const pages = Math.ceil(data.length/itemsPerPage)
    const handlePageChange = (page:number)=> {
        setCurrentPage(page)
        window.scrollTo({top:0,behavior:'smooth'})
    }
    const real = data.slice(indexOfFirstItem,indexOfLastItem)

  
  return (
    <div className="ml-[9px] flex-grow">
      <Head real = {real}/>
      <Body currentPage={currentPage} pages={pages} handlePageChange={handlePageChange} real={real}/>
    </div>
  )
}

export default Content
