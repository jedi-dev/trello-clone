import React, { FC, useState } from "react"
import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles"

type NewItemFormProps = {
  onAdd(text: string): void
}

const NewItemForm: FC<NewItemFormProps> = ({ onAdd }) => {
  const [text, setText] = useState<string>("")
  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={(e) => setText(e.target.value)}>
        <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
      </NewItemInput>
    </NewItemFormContainer>
  )
}

export default NewItemForm
