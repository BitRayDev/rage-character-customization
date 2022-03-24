import React from 'react'
import './style/template.scss';

export interface ControlTemplateProps {
  title: string
  children?: JSX.Element
}

const ControlTemplate = (props: ControlTemplateProps) => {
  return (
    <div className="control-template">
      <p className="control-template__title">{props.title}</p>
      <div className="control-template__slot">
        {props.children}
      </div>
    </div>
  )
}

export default ControlTemplate