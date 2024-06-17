import { initialData } from "@/helpers"
import { Card } from "@/types/types"
import { useState, useEffect } from "react"

export const useCardList = () => {
  const [data, setData] = useState<Card[]>([])

  const readFromStaorage = () => {
    if (localStorage.getItem('data')) {
      const items: Card[] = JSON.parse(localStorage.getItem('data') || '""')
      setData([...initialData, ...items])
    } else {
      localStorage.setItem('data', JSON.stringify(initialData))
    }
    const localData = localStorage.getItem('data')
    if (localData) {
      setData(JSON.parse(localData))
    }
  }

  useEffect(() => {
    readFromStaorage()
  }, [])

  return { data, readFromStaorage }
}