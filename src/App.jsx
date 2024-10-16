import CompletedTodoList from "./components/CompletedTodoList";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="dark:bg-[#030A1C] w-full h-screen flex justify-center items-start pt-8">
      <div className="w-[750px] mx-8 md:mx-0">
        <div className="main-title-box">
          <h1 className="dark:text-white text-[#030A1C] text-center text-2xl md:text-3xl font-bold ">
            Todo Manager
          </h1>
          <div className="w-72 sm:w-96 h-0.5 bg-[#030A1C] dark:bg-white m-auto relative after:content-[''] after:w-3 after:h-3 after:rounded-full after:bg-[#030A1C] after:dark:bg-white after:absolute after:top-[-5px] after:left-0 before:content-[''] before:w-3 before:h-3 before:rounded-full before:dark:bg-white before:bg-[#030A1C] before:absolute before:top-[-5px] before:right-0"></div>
        </div>
        <div className="w-full bg-[#091026] shadow-2xl mt-16 p-12 rounded-lg">
          <InputBox />
          <TodoList />
          <div className="complete-task w-full mt-8">
            <h3 className="text-white text-center text-lg">
              Last Completed Todos
            </h3>
            <CompletedTodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
