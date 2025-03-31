import Button from './Button'

function Header() {
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
      <Button />
    </header>
  )
}

export default Header
