import * as React from "react";
import { useState } from "react";
import InputField from "components/InputField";
import { nanoid } from "nanoid";

import { Todo } from "assets/model";

const Home: React.FC = () => {
  const [todoInputData, setTodoInputData] = useState<string>("");
  const [todoData, setTodoData] = useState<Todo[]>([]);

  console.log(todoData);

  const newTodo = () => {
    setTodoData((prevTodoData) => [
      ...prevTodoData,
      {
        id: nanoid(),
        isDone: false,
        text: todoInputData,
      },
    ]);
    setTodoInputData("");
  };

  return (
    <main className="home">
      <div className="home__container">
        <div className="home__input-body">
          <InputField
            todoInputData={todoInputData}
            setTodoInputData={setTodoInputData}
            newTodo={newTodo}
          />
        </div>
        <div className="home__tasks">
          <div className="home__tasks_active">
            <div className="heading">Active Tasks</div>
            <div className="tasks">
              <TodoTask />
            </div>
          </div>
          <div className="home__tasks_completed">
            <div className="heading">Completed Tasks</div>
            <div className="tasks">
              <TodoTask />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
