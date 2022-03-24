import React, { useState } from 'react'
import ControlTemplate, { ControlTemplateProps } from '../template';
import './style/switch.scss';

export interface SwitchOption {
  text?: string
  icon?: string
}

export interface SwitchControlProps extends ControlTemplateProps {
  options: SwitchOption[]
  initialIndex?: number
  onOptionSelected?: (option: SwitchOption | string, optionIndex: number) => void
}

const SwitchControl = (props: SwitchControlProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(props.initialIndex ?? 0);

  const onOptionClick = (option: SwitchOption | string, index: number) => {
    setSelectedIndex(index);
    props.onOptionSelected?.(option, index);
  }

  const optionElements = props.options.map((option, index) => {
    return (
      <p className={`switch-control__option ${index === selectedIndex ? "switch-control__option_active" : ""}`}
        onClick={() => onOptionClick(option, index)}>
        {option.icon ? <img src={option.icon} className="switch-control__option-icon"/> : ""}
        {option.text}
      </p>
    )
  })

  return (
    <ControlTemplate title={props.title}>
      <div className="switch-control">
        {optionElements}
      </div>
    </ControlTemplate>
  )
}

export default SwitchControl