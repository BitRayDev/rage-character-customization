import Slider from 'rc-slider';
import React, { useState } from 'react'
import ControlTemplate, { ControlTemplateProps } from '../template';
import './style/slider.scss';
import 'rc-slider/assets/index.css';

export interface SliderControlProps extends ControlTemplateProps {
  minTitle: string
  maxTitle: string
  initialValue?: number
  onValueChanged?: (value: number) => void
}

const SliderControl = (props: SliderControlProps) => {
  const [value, setValue] = useState<number>(props.initialValue ?? 0);

  const onValueChanged = (value : number | number[]) => {
    setValue(value as number)
    props.onValueChanged?.(value as number);
  }

  return (
    <ControlTemplate title={props.title}>
      <div className="slider-control">
        {props.minTitle}
        <Slider
          style={sliderStyle}
          railStyle={railStyle}
          trackStyle={trackStyle}
          handleStyle={handleStyle}
          onChange={onValueChanged}
          value={value}
        />
        {props.maxTitle}
      </div>
    </ControlTemplate>
  )
}
export default SliderControl

const sliderStyle : React.CSSProperties = {
  padding: 0,
  height: '.4vw',
}
const railStyle : React.CSSProperties = {
  margin: 0,
  height: '100%'
}
const trackStyle : React.CSSProperties = {
  margin: 0,
  height: '100%',
  backgroundColor: '#FFAA2C'
}
const handleStyle : React.CSSProperties = {
  height: '.8vw',
  width: '1.5vw',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  margin: 0,

  opacity: '1',
  backgroundColor: 'white',

  border: 'none',
  borderRadius: '100vw',

  boxShadow: 'none'
}