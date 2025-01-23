import { useState } from "react";
import "./App.css";
import StarRating from "./components/StarRating";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StarRating noOfStars={12}></StarRating>
    </>
  );
}

export default App;
