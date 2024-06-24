import { useEffect, useState } from "react"
import './chat.css'

const initialQuestions = ['Сколько тебе лет?', 'Как тебя зовут?', 'Кто ты по национальности?']


const checkMessage = (index : number)=>{
  return index % 2 ===0 ? 'list-item' : 'list-item-answ'
}

const checkTextArea = (string : string) =>{
  return string.length ? 'text-area' : 'text-area-red'
}

export const Chat = () =>{
  const [messages, setMessages] = useState<string[]>([])
  const [textArea, setTextArea] = useState('')
  const [count, setCount] = useState(0)

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setTextArea(e.target.value)
  }
  const sendAnswer = (textArea:string)=>{
    setMessages([...messages, textArea])
    setCount((prev)=>prev +1)
    setTextArea('')
  }

  useEffect(()=>{
    if(!initialQuestions[count]){
      console.log(123)
      setMessages([...messages, 'У меня больше нет вопросов'])
      return
    }
    setMessages([...messages, initialQuestions[count]])
  },[count])


  return (
    <div className="wrapper-chat">
      <ul className="list">
        {messages.map((item,index)=> <li key={index} className={checkMessage(index)}><p>{item}</p></li>)}
      </ul>
      <div className="send-message">
      <textarea className={checkTextArea(textArea)} value={textArea} onChange={onChange}>Type your answer</textarea>
      <button className="btn" disabled={textArea ? false : true} onClick={()=>sendAnswer(textArea)}>Send message</button>
      </div>
    </div>
  )
}