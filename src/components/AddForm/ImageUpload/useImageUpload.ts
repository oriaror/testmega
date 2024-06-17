import { stringifyBinaryFile } from "@/helpers/utils";
import { useState } from "react"
export const useImageUpload = () => {

  const [fileString, setFileString] = useState<string | null>(null)

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null

    if (file) {
      const reader = new FileReader()

      reader.readAsBinaryString(file)

      reader.onload = (fileEvent) => {
        const res = stringifyBinaryFile(fileEvent.target?.result)
        if (res) {
          return setFileString(res)
        }
        return null
      }
    }
  }
  return {
    fileString,
    uploadFile
  }
}