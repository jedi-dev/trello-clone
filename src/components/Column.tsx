import React, { FC } from "react"
import { ColumnContainer, ColumnTitle } from "../styles"

type ColumnProps = {
  text: string
  children?: React.ReactNode
}

const Column: FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  )
}

export default Column
