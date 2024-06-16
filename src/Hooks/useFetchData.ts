import { useEffect, useState } from "react"
import { Card } from "@/types/types"
import initialData from "@/helpers/initialData"

interface IFetchData {
  data: Card[],
  setLocalItem: (card: Card) => void
  deleteLocalItem?: () => void
}

const useFetchData = (): IFetchData => {
  const [data, setData] = useState<Card[]>([])


  const setLocalItem = (value: Card) => {
    let prev = localStorage.getItem('data')
    prev = JSON.parse(prev || '""')
    console.log(prev)
    const next: any = [...[prev], value].flat()
    console.log(next)
    localStorage.removeItem('data')
    localStorage.setItem('data', JSON.stringify(next))
    setData(next)
  }

  const setInititalData = () => {
    if (localStorage.getItem('data')) {
      const items: Card[] = JSON.parse(localStorage.getItem('data') || '""')
      setData(items)
    } else {
      localStorage.setItem('data', JSON.stringify(initialData))
    }
  }

  useEffect(() => {
    setInititalData()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return { data, setLocalItem }
}

export default useFetchData;