export function getComplementaryColor(color) {
  switch (color) {
    case "blue":
      return "red";
    case "pink":
      return "green";
    case "black":
      return "white";
    case "orange":
      return "yellow";
    case "purple":
      return "blue";
    case "red":
      return "pink";
    case "green":
      return "black";
    case "yellow":
      return "gray";
    case "magenta":
      return "gray";
    default:
      return "";
  }
}
