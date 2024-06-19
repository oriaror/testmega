import { stringifyBinaryFile } from "@/helpers/utils"
import { Card } from "@/types/types"
import { useEffect, useState } from "react"
import { useCardList } from "./useCardList"

const initialForm = {
  id: '',
  name: '',
  description: '',
  image: '',
  price: '',
}

type TinitialForm = {
  id: string,
  name: string,
  description: string,
  image: string,
  price: string,
}

export const useAddForm = () => {
  const [form, setForm] = useState<TinitialForm>(initialForm)
  const [disabled, setDisabled] = useState(true)

  const { data, readFromStaorage, onDelete } = useCardList()

  useEffect(() => {
    (form.description.length <= 30 && form.price.length <= 30 && form.name.length <= 30) &&
      (form.description.length !== 0 && form.price.length !== 0 && form.name.length !== 0)
      ? setDisabled(false) : setDisabled(true)
  }, [form])

  
  const onSubmit = () => {
    console.log('submit')
    const temp = { ...form }
    let oldData: Card[] = JSON.parse(localStorage.getItem('data') ?? '[]')
    temp.image = `data:image/png;base64,${form.image}`
    const newData: TinitialForm[] = [...oldData, temp]
    localStorage.setItem('data', JSON.stringify(newData))
    setForm({ ...initialForm, id: new Date().toISOString() })
    readFromStaorage()

  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target)
    const { target: { name, type } } = e

    let newCardForm = { ...form }

    if (type === 'file') {
      const file = e.target.files ? e.target.files[0] : null

      if (file) {
        const reader = new FileReader()

        reader.readAsBinaryString(file)

        reader.onload = (fileEvent) => {
          const res = stringifyBinaryFile(fileEvent.target?.result)
          if (res) {
            return setForm({ ...newCardForm, image: res })
          }
          return null
        }
      }
    }

    if (type === 'text' || type === 'number') {
      console.log(123)
      newCardForm[name as Exclude<keyof Card, 'image' | 'onDelete'>] = e.target.value

      setForm(newCardForm)
    }

    return
  }

  const validation = (name: string) => {
    if (!name) {
      return 'form-control'
    }
    if (name.length > 30) {
      return 'form-control invalid'
    }
    if (name.length <= 30) {
      return 'form-control valid'
    }
    return ''
  }


  return {
    form,
    onSubmit,
    onChange,
    data,
    onDelete,
    validation,
    disabled
  }
}