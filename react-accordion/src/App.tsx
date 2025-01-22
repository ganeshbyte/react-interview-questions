import { useState } from "react";
import "./App.css";
import Accordian from "./components/Accordian";
import data from "./components/data";

function App() {
  const [isMultipleSelect, setIsMultipleSelect] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);
  const [multiSelectItems, setIsMultipleSelectItems] = useState<number[]>([]);

  const handleMultiSelect = () => {
    setIsMultipleSelect(!isMultipleSelect);
  };

  const handleAccordionClick = (currentId: number) => {
    if (isMultipleSelect) {
      setIsMultipleSelectItems((prev: number[]) => {
        if (prev.includes(currentId)) {
          // when we click on same accordion
          return prev.filter((item) => item !== currentId);
        } else {
          //when we click on different accordion
          return [...prev, currentId];
        }
      });
    } else {
      //for only single selection
      setSelected(currentId === selected ? null : currentId);
    }
  };

  return (
    <>
      <div className="mx-auto flex justify-center items-center ">
        <button
          className={`bg-${
            isMultipleSelect ? "green" : "red"
          }-300 p-3 rounded-md mt-5`}
          onClick={handleMultiSelect}
        >
          multi Slected <span> {isMultipleSelect ? "Enable" : "Disable"} </span>
        </button>
      </div>
      {data.length > 0 ? (
        <>
          <div className="flex flex-col justify-center items-center mx-auto mt-10">
            {data.map((data) => (
              <Accordian
                id={data.id}
                answer={data.answer}
                question={data.question}
                key={data.id}
                onClick={handleAccordionClick}
                isSelect={
                  isMultipleSelect
                    ? multiSelectItems.includes(data.id)
                    : data.id == selected
                }
              ></Accordian>
            ))}
          </div>
        </>
      ) : (
        <>
          <div>NO Question Found</div>
        </>
      )}
    </>
  );
}

export default App;
