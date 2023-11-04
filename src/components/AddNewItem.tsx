import React, { FC, useState } from "react"
import { AddItemButton } from "../styles"
import NewItemForm from "./NewItemForm"

type AddNewItemProps = {
  onAdd(text: string): void
  toggleButtonText: string
  dark?: boolean
}

const AddNewItem: FC<AddNewItemProps> = (props) => {
  const { onAdd, toggleButtonText, dark } = props
  const [showForm, setShowForm] = useState<boolean>(false)

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text)
          setShowForm(false)
        }}
      ></NewItemForm>
    )
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}

export default AddNewItem
