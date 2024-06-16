import { Card } from "@/types/types"
import useFetchData from "../../Hooks/useFetchData"
import { CardComponent } from "../Card/Card"
import "./main.css"
import usePagination from "@/Hooks/usePagination"
import { Pagination } from "@/components/Pagination/Pagination"
import { Form } from "../AddForm/Form"

export const Main = ()=>{
  const {data, setLocalItem} = useFetchData()

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 4,
    count: data.length,
  });

  return <div className="Mainwrapper">
    <Form setLocalItem={setLocalItem}/>
    <div className="wrapper">
      {data
      .slice(firstContentIndex, lastContentIndex)
      .map((item : Card, index: number)=> 
        <CardComponent 
        price={item.price} 
        description={item.description} 
        name={item.name} 
        image={item.image}
        key={index} />)}
        <Pagination prevPage={prevPage} nextPage={nextPage} setPage={setPage} page={page} totalPages={totalPages}/>
      </div>
  </div>
}