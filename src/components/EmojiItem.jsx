function Emoji({ emoji }) {
  let icon = "";
  switch (emoji) {
    case "exceptional":
      icon = "💥";
      break;
    case "recommended":
      icon = "👌";
      break;
    case "meh":
      icon = "🤷‍♂️";
      break;
    case "skip":
      icon = "😑";
      break;
    default:
      icon = "👎";
  }

  return <p className="w-fit text-2xl">{icon}</p>;
}

export default Emoji;
