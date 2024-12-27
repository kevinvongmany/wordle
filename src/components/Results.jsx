import { useContext } from "react";
import AppContext from "../AppContext";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import { FaCopy } from "react-icons/fa";

const Results = () => {
  
  const { guesses, turn, maxTurns } = useContext(AppContext);
  
  function generateWordleResult(input) {
    const colorToEmoji = {
      green: "🟦",
      yellow: "🟨",
      grey: "⬜",
      red: "🟥",
      undefined: "",
    };

    let result = [];

    input.forEach((row) => {
      if (!row) {
        return;
      }
      let rowResult = "";
      row.forEach((cell) => {
        if (cell?.hardMode && cell?.colour === "grey") {
          cell.colour = "red";
        }
        rowResult += colorToEmoji[cell?.colour];
      });
      result.push(rowResult);
    });

    return result;
  }

  const handleCopy = () => {
    const shareString = `Wordpam score ${turn}/${maxTurns}\n\n${generateWordleResult(guesses).join("\n")}\n\nhttps://wordpam.com/ 🕎`;
    copy(shareString);
    toast.success("Copied to clipboard!");
  }
  

  return (
    <div className="mb-4">
      <button 
        onClick={handleCopy} 
        className="bg-green-800 text-white px-4 py-2 mb-6 rounded hover:bg-green-700 transition duration-300"
      >
        <FaCopy className="inline-block mr-2" />
        Share results! 
      </button>
      {generateWordleResult(guesses).map((row, i) => (
        <p key={i}>{row}</p>
      ))}
    </div>
  );
};

export default Results;
