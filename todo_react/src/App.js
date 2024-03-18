import Reklama from "./Components/Reklama/reklama";
import Form from "./Components/Form/Form";
import Container from "./Components/Container/Container";

const App = () => {
  return (
    <div className="todo">
      <Form />
      <Container />
      <Reklama
        title="Зарегистрируйтесь в ВК"
        text="Вот вам реклама для того, чтобы вы зарегистрировались в ВК."
        link="https://vk.com/"
      />
      <Reklama
        title="Зарегистрируйтесь в ВТК"
        text="Не обязательно регистрироваться так-то."
        link="https://vt.ru/"
      />
    </div>
  );
};

export default App;
