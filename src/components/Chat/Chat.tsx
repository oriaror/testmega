import './chat.css'
import { checkMessage } from "@/helpers/checkMessage"
import { checkTextArea } from "@/helpers/checkTextArea"
import { Message } from "./Message"
import { useChatControl } from './hooks/useChatControl'

export const Chat = () =>{
  const {messages, textArea, onChange, sendAnswer} = useChatControl()
  return (
    <div className="wrapper-chat">
      <ul className="list">
        {messages.map((item,index)=> <Message item={item} index={index} checkMessage={checkMessage}/>)}
      </ul>
      <div className="send-message">
      <textarea className={checkTextArea(textArea)} value={textArea} onChange={onChange}>Type your answer</textarea>
      <button className="btn" disabled={textArea ? false : true} onClick={()=>sendAnswer(textArea)}>Send message</button>
      </div>
    </div>
  )
}