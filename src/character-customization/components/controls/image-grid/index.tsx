import React, { useState } from 'react'
import './style/image-grid.scss'

import ImageSlot, { ImageSlotProps } from './components/image-slot'

export interface ImageSlotData {
  title?: string
  image: string
}
export interface ImageGridProps {
  imageSlots: ImageSlotData[]
  onSlotSelected?: () => void
}

const ImageGrid = (props : ImageGridProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSlotClicked = (slotIndex : number) => {
    setSelectedIndex(slotIndex);
    props.onSlotSelected?.();
  }

  const imageSlotElements = props.imageSlots.map((imageSlot, index) => (
    <ImageSlot {...imageSlot} isActive={selectedIndex === index} onClick={() => onSlotClicked(index)}/>
  ));

  return (
    <div className="image-grid">
      {imageSlotElements}
    </div>
  )
}
export default ImageGrid