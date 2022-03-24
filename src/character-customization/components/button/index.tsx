import React from 'react'
import './style/button.scss'

export interface ButtonProps {
  text: string,
  type?: "primary" | "default"
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`button button_type_${props.type ?? "default"}`} onClick={props.onClick}>
      {props.text}
    </button>
  )
}
export default Button