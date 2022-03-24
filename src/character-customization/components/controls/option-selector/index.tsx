import React, { useEffect, useState } from 'react'
import ControlTemplate, { ControlTemplateProps } from '../template';
import './style/option-selector.scss';

export interface OptionSelectorProps extends ControlTemplateProps {
  options: string[]
  initialIndex?: number
  onOptionSelected?: (option: string, index: number) => void
}

const OptionSelectorControl = (props: OptionSelectorProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(props.initialIndex ?? 0);

  useEffect(() => {
    props.onOptionSelected?.(props.options[selectedIndex], selectedIndex);
  }, [selectedIndex])

  const onPreviousButtonClick = () => {
    if (selectedIndex == 0) {
      setSelectedIndex(props.options.length - 1);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  }
  const onNextButtonClick = () => {
    if (selectedIndex == props.options.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  }

  return (
    <ControlTemplate title={props.title}>
      <div className="option-selector">
        <div className="option-selector__button option-selector__button_left" onClick={onPreviousButtonClick}>
          -
        </div>
        {props.options[selectedIndex]}
        <div className="option-selector__button option-selector__button_right" onClick={onNextButtonClick}>
          +
        </div>
      </div>
    </ControlTemplate>
  )
}

export default OptionSelectorControl