import * as React from "react";
import { useState } from "react";
import InputField from "components/InputField";

const Home: React.FC = () => {
  const [todoInputData, setTodoInputData] = useState<string>("");
  return (
    <main className="home">
      <div className="home__container">
        <div className="home__input-body">
          <InputField
            todoInputData={todoInputData}
            setTodoInputData={setTodoInputData}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
