import React from 'react'
import { ImageSlotData } from '..'
import './style/image-slot.scss'

export interface ImageSlotProps extends ImageSlotData{
  isActive?: boolean
  onClick?: () => void
}

const ImageSlot = (props: ImageSlotProps) => {
  return (
    <div className="image-slot" onClick={props.onClick}>
      <p className="image-slot__title">{props.title}</p>
      <svg className={`image-slot__indicator image-slot__indicator_${props.isActive ? "active" : ""}`} viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M101.457 51C101.457 79.1665 78.8474 102 50.957 102C23.0667 102 0.457031 79.1665 0.457031 51C0.457031 22.8335 23.0667 0 50.957 0C78.8474 0 101.457 22.8335 101.457 51ZM8.62742 51C8.62742 74.6095 27.579 93.7487 50.957 93.7487C74.335 93.7487 93.2866 74.6095 93.2866 51C93.2866 27.3905 74.335 8.25128 50.957 8.25128C27.579 8.25128 8.62742 27.3905 8.62742 51Z" fill="inherit" />
      </svg>
      <img className="image-slot__image" src={props.image}/>
    </div>
  )
}
export default ImageSlot