import { useContext } from "react";
import AppContext from "../AppContext";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

const Results = () => {
  
  const { guesses, turn, maxTurns } = useContext(AppContext);
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

  const handleCopy = () => {
    const shareString = `Kevdle score ${turn}/${maxTurns}\n\n${generateWordleResult(guesses).join("\n")}\n\nhttps://kevdle.netlify.app/`;
    copy(shareString);
    toast.success("Copied to clipboard!");
  }
  

  return (
    <div>
      {generateWordleResult(guesses).map((row, i) => (
        <p key={i}>{row}</p>
      ))}
      <button onClick={handleCopy} className="bg-gray-800 text-white px-4 py-2 mt-8 mb-6 rounded">
        Share
      </button>
    </div>
  );
};

export default Results;
