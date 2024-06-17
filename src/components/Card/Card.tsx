import { Card } from "../../types/types"
import './card.css'

export const CardComponent = ({name, description, image, price}: Card) => {

return <div className="row">
<div>
  <div className="card_wrapper">
    <img className="image" src={image}/>
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