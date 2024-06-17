import { useEffect, useState } from "react"
import { Card } from "@/types/types"
import { initialData } from "@/helpers"

interface IFetchData {
  data: Card[],
  setLocalItem: (card: Card) => void
  deleteLocalItem?: () => void
}

const useFetchData = (): IFetchData => {
  const [data, setData] = useState<Card[]>([])


  const setLocalItem = (value: Card) => {
    const temp = { ...value }
    let oldData: Card[] = JSON.parse(localStorage.getItem('data') ?? '[]')

    temp.image = `data:image/png;base64,${value.image}`

    const newData: Card[] = [...oldData, temp]

    localStorage.setItem('data', JSON.stringify(newData))
    setData(newData)
  }

  const setInititalData = () => {
    if (localStorage.getItem('data')) {
      const items: Card[] = JSON.parse(localStorage.getItem('data') || '""')
      setData(items)
    } else {
      localStorage.setItem('data', JSON.stringify(initialData))
    }
  }

  const readFromStaorage = () => {
    const localData = localStorage.getItem('data')
    console.log(localData, 'localData')
    if (localData) {
      console.log('qweqweqweqweqwe')
      setData(JSON.parse(localData))
    }
  }

  useEffect(() => {
    readFromStaorage()
  }, [])

  return { data, setLocalItem }
}

export default useFetchData;