import { Card } from "../../types/types"
import './card.css'

export const CardComponent = ({id, name, description, image, price, onDelete}: Card) => {

return <div className="row">
<div>
  <div className="card_wrapper">
    <div className="hover-effect">
      <img className="image hover-effect" src={image}/>
      <img className="hide" onClick={()=>{onDelete ? onDelete(id): null}} src="/images/pan.png"/>
    </div>
    <div className="inner">
      <div className="price_wrapper">
      <p>{name}</p>
      <p>{price} &#8381;</p>
      </div>
      <p className="description">{description}</p>
    </div>
  </div>
</div>

</div>
}