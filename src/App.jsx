import { useState } from "react";
import { handleColorChange } from "../src/utils/handleColorChange.js";
import { getComplementaryColor } from "../src/utils/getComplementaryColor.js";

function FavoriteColor() {
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const rootStyle = {
    backgroundColor: getComplementaryColor(color),
    minHeight: "100vh",
  };

  return (
    <div style={rootStyle}>
      <div className="flex flex-col items-center justify-center h-screen gap-10 fon">
        <h1
          className="text-[6rem] font-bold text-center mb-10"
          style={{ color: textColor }}
        >
          My favorite color is {color}
        </h1>
        <button
          className="rounded-full bg-blue-500 h-40 w-3/4 text-white"
          type="button"
          onClick={() => handleColorChange("blue", setColor, setTextColor)}
        >
          Blue
        </button>
        <button
          className="rounded-full bg-pink-500 h-40 w-3/4 text-white"
          type="button"
          onClick={() => handleColorChange("pink", setColor, setTextColor)}
        >
          Pink
        </button>
        <button
          className="rounded-full bg-black h-40 w-3/4 text-white"
          type="button"
          onClick={() => handleColorChange("black", setColor, setTextColor)}
        >
          Black
        </button>
        <button
          className="rounded-full bg-orange-500 h-40 w-3/4 text-white"
          type="button"
          onClick={() => handleColorChange("orange", setColor, setTextColor)}
        >
          Orange
        </button>
        <button
          className="rounded-full bg-purple-500 h-40 w-3/4 text-white"
          type="button"
          onClick={() => handleColorChange("purple", setColor, setTextColor)}
        >
          Purple
        </button>
        <button
          className="rounded-full bg-red-500 h-40 w-3/4 text-white"
          type="button"
          onClick={() => handleColorChange("red", setColor, setTextColor)}
        >
          Red
        </button>
        <button
          className="rounded-full bg-green-500 h-40 w-3/4 text-white"
          type="button"
          onClick={() => handleColorChange("green", setColor, setTextColor)}
        >
          Green
        </button>
        <button
          className="rounded-full bg-yellow-500 h-40 w-3/4 text-white"
          type="button"
          onClick={() => handleColorChange("yellow", setColor, setTextColor)}
        >
          Yellow
        </button>
        <button
          className="rounded-full bg-magenta-500 h-40 w-3/4 text-white"
          type="button"
          onClick={() => handleColorChange("magenta", setColor, setTextColor)}
        >
          Magenta
        </button>
      </div>
    </div>
  );
}

export default FavoriteColor;
