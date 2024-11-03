import { useContext } from "react";
import AppContext from "../AppContext";

const Results = () => {
  
  const { guesses } = useContext(AppContext);
  console.log(guesses);
  
  function generateWordleResult(input) {
    const colorToEmoji = {
      green: "🟩",
      yellow: "🟨",
      grey: "⬛",
      undefined: "",
    };

    let result = [];

    input.forEach((row) => {
      if (!row) {
        return;
      }
      let rowResult = "";
      row.forEach((cell) => {
        rowResult += colorToEmoji[cell?.colour];
      });
      result.push(rowResult);
    });

    return result;
  }
  

  return (
    <div>
      {generateWordleResult(guesses).map((row, i) => (
        <p key={i}>{row}</p>
      ))}
    </div>
  );
};

export default Results;
