export const generateRandomHexColor = () => {
  const hexNumbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let hexNum = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexNumbers.length);
    hexNum += hexNumbers[randomIndex];
  }
  return hexNum;
};

const generateRandomRgbIndexNumber = () => {
  return Math.floor(Math.random() * 256);
};
export const generateRandomRGBColor = () => {
  const r = generateRandomRgbIndexNumber();
  const g = generateRandomRgbIndexNumber();
  const b = generateRandomRgbIndexNumber();

  return `rgb(${r}, ${g}, ${b})`;
};
