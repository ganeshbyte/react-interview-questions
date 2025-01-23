import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = ({ noOfStars = 5 }: { noOfStars?: number }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleStarClick = (currentIndex: number) => {
    setRating(currentIndex);
  };

  const handleMouseEnter = (currentIndex: number) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {Array(noOfStars)
        .fill(null)
        .map((_, index) => {
          const isFilledStar = index + 1 <= (hover || rating);

          return (
            <span
              key={index}
              onClick={() => handleStarClick(index + 1)}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={handleMouseLeave}
              className={`star ${isFilledStar ? "filled" : ""}`}
            >
              {isFilledStar ? <FaStar /> : <FaRegStar />}
            </span>
          );
        })}
    </div>
  );
};

export default StarRating;

// Corresponding CSS file (StarRating.css)
