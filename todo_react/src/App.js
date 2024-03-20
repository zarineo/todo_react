import { useState, useEffect } from 'react';
import Reklama from './Components/Reklama/reklama';
import Form from './Components/Form/Form';
import Container from './Components/Container/Container';

const App = () => {
  const [tasks, setTasks] = useState(
    localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [],
  );

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks));
  }, [tasks]);

  const [value, setValue] = useState('all');
  const [renderTasks, setRenderTasks] = useState([]);

  useEffect(() => {
    if (value === 'all') {
      setRenderTasks(tasks);
    } else if (value === 'active') {
      setRenderTasks(tasks.filter((item) => item.isCompleted === false));
    } else if (value === 'completed') {
      setRenderTasks(tasks.filter((item) => item.isCompleted === true));
    }
  }, [value, tasks]);

  return (
    <div className="todo">
      <Form
        tasks={tasks}
        setTasks={setTasks}
        renderTasks={renderTasks}
        setRenderTasks={setRenderTasks}
        value={value}
        setValue={setValue}
      />
      <Container
        tasks={tasks}
        setTasks={setTasks}
        renderTasks={renderTasks}
        setRenderTasks={setRenderTasks}
      />
      {/* <Reklama
        title="Зарегистрируйтесь в ВК"
        text="Вот вам реклама для того, чтобы вы зарегистрировались в ВК."
        link="https://vk.com/"
      />
      <Reklama
        title="Зарегистрируйтесь в ВТК"
        text="Не обязательно регистрироваться так-то."
        link="https://vt.ru/"
      /> */}
      Привет, Зарина!
    </div>
  );
};

export default App;
