import { Card } from "@/types/types"
import { CardComponent } from "../Card/Card"
import "./main.css"
import usePagination from "@/hooks/usePagination"
import { Pagination } from "@/components/Pagination/Pagination"
import { Form } from "../AddForm/Form"
import { useAddForm } from "../AddForm/hooks/useAddForm"

export const Main = ()=>{
  const {form, onSubmit, onChange, data, onDelete, validation, disabled } = useAddForm()

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

  return <div className="root">
  <div className="Mainwrapper">
    <Form {...{form,onSubmit,onChange,validation, disabled}}/>
    <div className="wrapper">
      {data
      .slice(firstContentIndex, lastContentIndex)
      .map((item : Card)=> 
        <CardComponent
        onDelete = {onDelete}
        id = {item.id}
        price={item.price} 
        description={item.description} 
        name={item.name} 
        image={item.image}
        key={item.id} />)}
      </div>
  </div>
    <Pagination prevPage={prevPage} nextPage={nextPage} setPage={setPage} page={page} totalPages={totalPages}/>
  </div>
}