import logo from "./logo.svg";
import "./App.css";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <div className="up">
            <h1>TELL ME AYNTHING </h1>
      <AddTask />
      <ListTasks />
    </div>
  );
}

export default App;
