import Input from './Components/Input/Input';
import Reklama from './Components/Reklama/reklama';
import Select from './Components/Select/Select';

const App = () => {
  return <div className="todo">
  <form className = "todo__form">
    <Input />
    <Select />
    </form>
  <ul className="todo__items">
  </ul>
  <Reklama title = "Зарегистрируйтесь в ВК" text = "Вот вам реклама для того, чтобы вы зарегистрировались в ВК." link="https://vk.com/"/>
  <Reklama title = "Зарегистрируйтесь в ВТК" text = "Не обязательно регистрироваться так-то." link="https://vt.ru/"/>

</div>;
}

export default App;
