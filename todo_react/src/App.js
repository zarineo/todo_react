import Reklama from './reklama';


const App = () => {
  return <div className="todo">
  <form className = "todo__form">
    <div className="todo__input">
      <input className="todo__text" type="text"/>
      <button className="todo__add"></button>
    </div>
    <select className="todo__options">
      <option value="all">все</option>
      <option value="active">активные</option>
      <option value="completed">завершённые</option>
    </select>
  </form>
  <ul className="todo__items">
  </ul>
  <Reklama title = "Зарегистрируйтесь в ВК" text = "Вот вам реклама для того, чтобы вы зарегистрировались в ВК." link="https://vk.com/"/>
  <Reklama title = "Зарегистрируйтесь в ВТК" text = "Не обязательно регистрироваться так-то." link="https://vt.ru/"/>

</div>;
}

export default App;
