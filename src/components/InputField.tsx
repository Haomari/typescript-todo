import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  setTodoInputData: React.Dispatch<React.SetStateAction<string>>;
  todoInputData: string;
}

const InputField = ({ setTodoInputData, todoInputData }: Props) => {

	const ref = useRef(null);
	const [buttonWidth, setButtonWidth] = useState<number>(0)

	useLayoutEffect(() => {
		const hight: any = ref.current.offsetWidth
    setButtonWidth(ref?.current?.offsetWidth as any);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInputData(e.target.value);
  };

  return (
    <div className="main-input">
      <input
			
        placeholder="Enter a Task"
        type="text"
        value={todoInputData}
        onChange={handleChange}
      />
      <div ref={ref}>
        <button></button>
      </div>
    </div>
  );
};

export default InputField;
