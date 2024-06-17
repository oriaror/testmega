import { Card } from '@/types/types'
import './form.css'



type fucntionLocalItem = {
  form: Card,
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void,
  onSubmit: ()=>void
}

export const Form = ({form, onChange, onSubmit}: fucntionLocalItem) => {

 return (
  <div className="form-wrapper">
    <div>
          <input
          type="file"
          name="image"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={onChange}
          className='image-control'
        />
        <div className='label-file'>
        <div>+</div>
        <label htmlFor='file' >Upload Image</label>
        </div>
      <div className="form">

        <p className='input-title'>Name</p>
        <input type="text"
            className="form-control"
            id="name"
            value={form.name}
            name="name"
            placeholder="Enter name"
            onChange={onChange}
    />
        <p className='input-title'>Description</p>
        <input type="text"
            className="form-control"
            id="description"
            value={form.description}
            name="description"
            placeholder="Enter description"
            onChange={onChange}
    />
        <p className='input-title'>Price</p>
         <input type="number"
            className="form-control"
            id="price"
            value={form.price}
            name="price"
            placeholder="Enter price"
            onChange={onChange}
    />
        </div>
        </div>
    <button className="save-btn" onClick={()=>onSubmit()}>Save</button>
    </div>
 )
}


    
