import logo from "./logo.svg";
import "./App.css";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <div className="up">
            <h2>TELL ME AYNTHING </h2>
      <AddTask />
      <ListTasks />
    </div>
  );
}

export default App;
