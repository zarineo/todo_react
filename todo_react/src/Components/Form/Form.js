import Input from "../Input/Input";
import Select from "../Select/Select";

const Form = ({tasks, setTasks, renderTasks, setRenderTasks, value, setValue}) => {
  return (
    <form className="todo__form">
      <Input tasks = {tasks} setTasks = {setTasks}/>
      <Select tasks = {tasks} setTasks = {setTasks} renderTasks={renderTasks} setRenderTasks={setRenderTasks} value={value} setValue={setValue} />
    </form>
  );
};

export default Form;
