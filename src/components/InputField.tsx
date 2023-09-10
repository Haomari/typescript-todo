import { useRef, useState } from "react";

interface Props {
  setTodoInputData: React.Dispatch<React.SetStateAction<string>>;
  todoInputData: string;
	newTodo: () => void;
}

const InputField = ({ setTodoInputData, todoInputData, newTodo }: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInputData(e.target.value);
  };

  return (
    <div className="main-input">
      <div className="main-input__body">
        <input
          tabIndex={1}
          placeholder="Enter a Task"
          type="text"
          value={todoInputData}
          onChange={handleChange}
        />
        <div>
          <button onClick={newTodo} tabIndex={2}>GO</button>
        </div>
      </div>
    </div>
  );
};

export default InputField;
