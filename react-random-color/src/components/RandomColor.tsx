import { useState } from "react";
import {
  generateRandomHexColor,
  generateRandomRGBColor,
} from "../utility/utility";

type TypeOfColor = "hex" | "rgb";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState<TypeOfColor>("hex");
  const [color, setColor] = useState("#000000");

  const setRandomColor = () => {
    if (typeOfColor === "hex") {
      const newColor = generateRandomHexColor();
      setColor(newColor);
    } else {
      const newColor = generateRandomRGBColor();
      setColor(newColor);
    }
  };

  return (
    <div style={{ backgroundColor: color }} className="h-screen w-full">
      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => {
          setTypeOfColor("hex");
        }}
      >
        Set Hex Color
      </button>
      <button
        type="button"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => {
          setTypeOfColor("rgb");
        }}
      >
        Set RGB Color
      </button>
      <button
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={setRandomColor}
      >
        Generate Random Color
      </button>

      <div> {color}</div>
    </div>
  );
};

export default RandomColor;
