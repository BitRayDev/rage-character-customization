import React, { useState } from 'react'
import ControlTemplate, { ControlTemplateProps } from '../template';
import './style/input.scss';

export interface InputControlProps extends ControlTemplateProps {
  placeholder?: string
  onValueChanged?: (value: string) => void
}

const InputControl = (props: InputControlProps) => {
  const [value, setValue] = useState<string>();

  const onValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onValueChanged?.(e.target.value);
  }

  return (
    <ControlTemplate title={props.title}>
      <div className="input-control">
        <input className="input-control__input" type="text" onChange={onValueChanged} value={value}/>
      </div>
    </ControlTemplate>
  )
}

export default InputControl