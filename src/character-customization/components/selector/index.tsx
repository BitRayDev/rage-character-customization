import React from 'react'
import './style/selector.scss'

export interface SelectorProps {
  icon: string
  title: string
  isActive?: boolean
  onClick?: () => void
}

const Selector = (props: SelectorProps) => {
  return (
    <div className="character-customization-selector" onClick={props.onClick}>
      <svg className="character-customization-selector__background" viewBox="0 0 131 151" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={`character-customization-selector__hexagon ${props.isActive ? "character-customization-selector__hexagon_active" : ""}`} d="M64.9574 22.2612L111.694 49.2448V103.212L64.9574 130.196L18.2205 103.212V49.2448L64.9574 22.2612Z" />
        <path className={`character-customization-selector__inner-border ${props.isActive ? "character-customization-selector__inner-border_active" : ""}`} fillRule="evenodd" clipRule="evenodd" d="M65.4571 15.5761L13.3635 45.6524V105.805L65.4571 135.881L117.551 105.805V45.6524L65.4571 15.5761ZM119.551 44.4977L65.4571 13.2667L11.3635 44.4977V106.96L65.4571 138.191L119.551 106.96V44.4977Z" />
        <path className={`character-customization-selector__outer-border ${props.isActive ? "character-customization-selector__outer-border_active" : ""}`} fillRule="evenodd" clipRule="evenodd" d="M65.4571 0.65271L130.475 38.1907V113.267L65.4571 150.805L0.439453 113.267V38.1907L65.4571 0.65271ZM126.475 40.5001L65.4571 5.27151L4.43945 40.5001V110.957L65.4571 146.186L126.475 110.957V40.5001Z" />
        <defs>
          <linearGradient id="paint0_linear_1_116" x1="17.5" y1="72" x2="119.171" y2="74.8023" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AB71BE" />
            <stop offset="1" stopColor="#1A75FF" />
          </linearGradient>
          <linearGradient id="paint1_linear_1_116" x1="-8.85548" y1="72.6532" x2="141.888" y2="73.7219" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AB71BE" />
            <stop offset="1" stopColor="#1A75FF" />
          </linearGradient>
        </defs>
      </svg>
      <img className={`character-customization-selector__icon ${props.isActive ? "character-customization-selector__icon_active" : ""}`} src={props.icon} />
      <p className={`character-customization-selector__title ${props.isActive ? "character-customization-selector__title_active" : ""}`} >{props.title}</p>
    </div>
  )
}

export default Selector