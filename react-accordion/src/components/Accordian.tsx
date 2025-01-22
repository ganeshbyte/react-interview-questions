import type { AccordionDataType } from "./type";

const Accordian = ({
  id,
  question,
  answer,
  onClick,
  isSelect,
}: AccordionDataType) => {
  return (
    <div className="ring-1 ring-gray-300 p-5 w-[600px] m-3 ">
      <div className="flex gap-5">
        <div>Question : {question}</div>
        <button
          className="ring-1 ring-blue-300 px-4 py-1 rounded-md text-white font-bold text-2xl bg-blue-300 "
          onClick={() => {
            onClick(id);
          }}
        >
          +
        </button>
      </div>

      {isSelect && <div> Answer: {answer}</div>}
    </div>
  );
};

export default Accordian;
