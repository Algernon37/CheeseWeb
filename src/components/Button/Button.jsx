import style from './button.module.sass';

const  Button = ({onOpen}) => {

  return (
    <button onClick={onOpen} className={style.headerButton}>
        Связаться
    </button>
  )
}

export default Button

