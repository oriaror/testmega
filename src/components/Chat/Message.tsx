type Message = {
  item: string,
  index: number
  checkMessage: (index: number)=> string,
}

export const Message = ({item, index, checkMessage}:Message) =>{
  return <li key={index} className={checkMessage(index)}><p>{item}</p></li>
} 