import React, { useState } from 'react'
import ControlTemplate, { ControlTemplateProps } from '../template';
import './style/color-picker.scss';

export interface ColorPickerProps extends ControlTemplateProps {
  colors: string[]
  initialIndex?: number
  onColorSelected?: (color: string, index: number) => void
}

const ColorPickerControl = (props: ColorPickerProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(props.initialIndex ?? 0);

  const onColorSelected = (color: string, index: number) => {
    setSelectedIndex(index);
    props.onColorSelected?.(color, index);
  }

  const colorElements = props.colors.map((color, index) => (
    <div
      className={`color-picker__color ${index === selectedIndex ? "color-picker__color_active" : ""}`}
      style={{backgroundColor: color}}
      onClick={() => onColorSelected(color, index)}>
    </div>
  ))

  return (
    <ControlTemplate title={props.title}>
      <div className="color-picker">
        {colorElements}
      </div>
    </ControlTemplate>
  )
}

export default ColorPickerControl