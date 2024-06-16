import { useState } from "react"

export const useImageUpload = () => {
  const [base64Data, setBase64Data] = useState<any>(null)

  const handleReaderLoaded = (e: any) => {
    console.log("file uploaded 2: ", e);
    let binaryString = e.target.result;
    setBase64Data(btoa(binaryString))
  };

  const onChange = (e: any) => {
    let file = e.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded
      reader.readAsBinaryString(file)
    }
  }
  return [base64Data, onChange]
}