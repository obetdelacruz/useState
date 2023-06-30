export function getComplementaryColor(color) {
  switch (color) {
    case "blue":
      return "red";
    case "pink":
      return "green";
    case "black":
      return "white";
    default:
      return "";
  }
}
