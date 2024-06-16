import { Card } from "@/types/types";
import { useEffect, useState } from "react";
import './form.css'
import { useImageUpload } from "./ImageUpload/useImageUpload";

type fucntionLocalItem = {
  setLocalItem: (card: Card)=>void
}

export const Form = ({setLocalItem}:fucntionLocalItem) => {
  const [img, setImg] = useImageUpload()
  const [base64,setBase64] = useState(null|| '')


  const [allValues, setAllValues] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
 });
  
 const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
 }

 useEffect(()=>{console.log(base64)},[base64])


 return (
  <div className="form-wrapper">


   <input
          type="file"
          name="image"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={changeHandler}
        />
    <img width='300' height='300' src={base64 || ''} alt="kal"/>
    <button onClick={()=> setBase64(`data:image;base64,${img}`)}>CLick</button>

    

      <div className="form">
        <p>Name</p>
        <input type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter name"
            onChange={changeHandler}
    />
        <p>Description</p>
        <input type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter description"
            onChange={changeHandler}
    />
        <p>Price</p>
         <input type="text"
            className="form-control"
            id="price"
            name="price"
            placeholder="Enter price"
            onChange={changeHandler}
    />
        </div>
    <button className="save-btn" onClick={()=>setLocalItem(allValues)}>Save</button>
    </div>
 )
}

    
