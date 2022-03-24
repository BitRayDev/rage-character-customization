import React, { useState } from 'react';
import './assets/style/character-customization.scss';

import Selector from './components/selector';
import SwitchControl from './components/controls/switch';
import SliderControl from './components/controls/slider';
import ColorPickerControl from './components/controls/color-picker';
import OptionSelectorControl from './components/controls/option-selector';
import ImageGrid from './components/controls/image-grid';
import Button from './components/button';

import dna from './assets/img/icons/dna.svg';
import mask from './assets/img/icons/mask.svg';
import appearance from './assets/img/icons/appearance.svg';
import hair from './assets/img/icons/hair.svg';
import cloths from './assets/img/icons/cloths.svg';

import nose from './assets/img/icons/nose.svg';
import eye from './assets/img/icons/eye.svg';
import lips from './assets/img/icons/lips.svg';
import cheek from './assets/img/icons/cheek.svg';
import neck from './assets/img/icons/neck.svg';
import chin from './assets/img/icons/chin.svg';

import father0 from './assets/img/slots-images/fathers/father0.png';
import InputControl from './components/controls/input';

type SectionType = "DNA" | "Face" | "Appearance" | "Hair" | "Cloths";

const CharacterCustomization = ({ }) => {
  const [currentSection, setCurrentSection] = useState<SectionType>("DNA");

  return (
    <div className="character-customization">
      <p className="character-customization__title">CОЗДАНИЕ ПЕРСОНАЖА</p>
      <p className="character-customization__subtitle">Просто создайте себе
        своего персонажа. :)</p>
      <div className="character-customization__constructor">
        <div className="character-customization__navigation">
          <Selector title='ДНК' icon={dna} isActive={currentSection === "DNA"} onClick={() => setCurrentSection("DNA")}></Selector>
          <Selector title='Черты лица' icon={mask} isActive={currentSection === "Face"} onClick={() => setCurrentSection("Face")}></Selector>
          <Selector title='Внешний вид' icon={appearance} isActive={currentSection === "Appearance"} onClick={() => setCurrentSection("Appearance")}></Selector>
          <Selector title='Волосы' icon={hair} isActive={currentSection === "Hair"} onClick={() => setCurrentSection("Hair")}></Selector>
          <Selector title='Одежда' icon={cloths} isActive={currentSection === "Cloths"} onClick={() => setCurrentSection("Cloths")}></Selector>
        </div>
        <div className="character-customization__options">
          <div className="character-customization__controls">
            <SwitchControl title="Родители" options={[
              { text: "Мать" },
              { text: "Отец" }
            ]} initialIndex={0}></SwitchControl>
            <SliderControl title="Цвет кожи" minTitle="Мать" maxTitle="Отец"></SliderControl>
            <SliderControl title="Форма лица" minTitle="Мать" maxTitle="Отец"></SliderControl>
            <SliderControl title="Размер кончика носа" minTitle="-" maxTitle="+"></SliderControl>
            <ColorPickerControl title="Цвет чего-то там" colors={colors}></ColorPickerControl>
            <OptionSelectorControl title="Выбор чего-то" options={['Вариант 1', 'Вариант 2', 'Вариант 3']}></OptionSelectorControl>
            <SwitchControl title="Категория" options={[
              { icon: nose },
              { icon: eye },
              { icon: lips },
              { icon: cheek },
              { icon: neck },
              { icon: chin },
            ]} initialIndex={0}></SwitchControl>
            <InputControl title="Kek"></InputControl>
            <ImageGrid imageSlots={ testFathers }></ImageGrid>
          </div>
          <div className="character-customization__buttons">
            <div className="character-customization__primary-button">
              <Button text='Сохранить Персонажа' type="primary"></Button>
            </div>
            <div className="character-customization__secondary-button">
              <Button text='Сгенерировать Случайно'></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CharacterCustomization;

const colors = [
  'white',
  '#FF7B7B',
  '#FF4646',
  '#FF2222',
  '#FFC69C',
  '#FFAC7D',
  '#FF8B66',
  '#FF6F31',
  '#FFF59F',
  '#FFDD66',
  '#FFC165',
  '#FF9649',
  '#FF9C0A',
  '#BDFF7B',
  '#93FF60',
  '#58FF69',
  '#51FF62',
  '#39FFC4',
  '#55FFF5',
  '#4BDFFF',
  '#4BBEFF',
  '#609FFF',
  '#4563FF',
  '#5438FF',
  '#5E44FF',
  '#6A36FF',
  '#323232',
  '#FF39BC',
  '#FF36EB',
  '#C345FF',
  '#9F5454',
  '#9A9B4E',
  '#3B834F',
  '#3B6379',
  '#25805F',
  '#661111',
  '#776161',
  '#0F2142',
  '#628713'
]

const testFathers = [
  {
    title: "John",
    image: father0
  },
  {
    title: "Franklin",
    image: father0
  },
  {
    title: "Graham Coxon",
    image: father0
  },
  {
    title: "John",
    image: father0
  },
  {
    title: "John",
    image: father0
  },
  {
    title: "John",
    image: father0
  },
]
