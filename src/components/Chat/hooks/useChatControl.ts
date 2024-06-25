import { useEffect, useState } from "react"
import { initialQuestions } from "@/helpers/initialQuestions"

export const useChatControl = () => {
  const [messages, setMessages] = useState<string[]>([])
  const [textArea, setTextArea] = useState('')
  const [count, setCount] = useState(0)

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value)
  }
  const sendAnswer = (textArea: string) => {
    setMessages([...messages, textArea])
    setCount((prev) => prev + 1)
    localStorage.setItem('answer', JSON.stringify([...messages, textArea]))
    setTextArea('')
  }

  useEffect(() => {
    if (!initialQuestions[count]) {
      console.log(123)
      setMessages([...messages, 'У меня больше нет вопросов'])
      return
    }
    setMessages([...messages, initialQuestions[count]])
  }, [count])

  return {
    messages,
    textArea,
    onChange,
    sendAnswer,
  }
}