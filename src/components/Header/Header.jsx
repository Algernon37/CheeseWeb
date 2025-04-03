import Button from '../Button/Button';
import ModaleWindow from '../ModalWindow/ModalWindow';
import style from './header.module.sass';

import { useState } from 'react';

const Header = () => {
    const [ showModal, setShowModal ] = useState(false);
  
    const handleCloseModal = () => {
      setShowModal(false);
    }

    const handleOpenModal = () => {
      setShowModal(true);
    }
  
  return (
    <header className="flex h-[100px] place-items-center">
      <div className="flex h-full w-full place-items-center content-center">
        <a>Обо мне</a>
        <a>Ассортимент</a>
        <a>Отзывы</a>
        <a>Гарантии</a>
        <a>Часто задаваемые вопросы</a>
        <a>Контакты</a>
      </div>
      <Button onOpen={handleOpenModal}/>
      <ModaleWindow show={showModal} onClose={handleCloseModal} />
      <a href="https://t.me/capcheese" target="_blank" className={`${style.icon} ${style.telegram}`}></a>
      <a href="https://t.me/capcheese" target='_blank' className={`${style.icon} ${style.instagram}`}></a>
      <div className={style.switch}>
        <div className={`${style.theme} ${style.light}`}>
        </div>
      </div>
    </header>
  )
}

export default Header
