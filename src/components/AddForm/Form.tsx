import { Card } from '@/types/types'
import './form.css'


type fucntionLocalItem = {
  form: Card,
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void,
  onSubmit: ()=>void,
  validation: (name:string)=> string,
  disabled: boolean,
}


// const validation =(name : string) => {
//   if(!name){
//     return 'form-control'
//   }
//   if(name.length > 30){
//     return 'form-control invalid'
//   }
//   if(name.length <= 30){
//     return 'form-control valid'
//   }
// }

export const Form = ({form, onChange, onSubmit, validation, disabled}: fucntionLocalItem) => {
 return (
  <div className="form-wrapper">
    <div>
          <input
          maxLength={41}
          type="file"
          name="image"
          id="file"
          accept=".jpg, .jpeg, .png"
          onChange={onChange}
          className='image-control'
        />
        <div className='label-file'>
        <label htmlFor='file' className='label'>+</label>
        <label htmlFor='file' className='label'>Upload Image</label>
        </div>
      <div className="form">

        <p className='input-title'>Name</p>
        <input type="text"
            maxLength={41}
            className={validation(form.name)}
            id="name"
            value={form.name}
            name="name"
            placeholder="Enter name"
            onChange={onChange}
    />
        <p className='input-title'>Description</p>
        <input type="text"
            maxLength={41}
            className={validation(form.description)}
            id="description"
            value={form.description}
            name="description"
            placeholder="Enter description"
            onChange={onChange}
    />
        <p className='input-title'>Price</p>
         <input type="text"
            maxLength={41}
            className={validation(form.price)}
            id="price"
            value={form.price}
            name="price"
            placeholder="Enter price"
            onChange={onChange}
    />
        </div>
        </div>
    <button className="save-btn" disabled={disabled} onClick={()=>onSubmit()}>Save</button>
    </div>
 )
}


    
