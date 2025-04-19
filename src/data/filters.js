const genre = [
  { id: 1, label: "PC", value: "pc" },
  { id: 2, label: "Play Station", value: "playstation" },
  { id: 3, label: "Xbox", value: "xbox" },
  { id: 4, label: "iOS", value: "mac" },
  { id: 5, label: "Android", value: "android" },
  { id: 6, label: "Linux", value: "linux" },
  { id: 7, label: "Nintendo", value: "nintendo" },
  { id: 8, label: "Web", value: "web" },
];

const platformCodes = {
  pc: 1,
  playstation: 2,
  xbox: 3,
  mac: 4,
  android: 8,
  linux: 6,
  nintendo: 7,
  web: 14,
};

const reversePlatformCodes = {
  1: "PC",
  2: "Play Station",
  3: "Xbox",
  4: "iOS",
  8: "Android",
  6: "Linux",
  7: "Nintendo",
  14: "Web",
};

const sortBy = [
  { id: 1, label: "Relevance", value: "" },
  { id: 2, label: "Date added", value: "-added" },
  { id: 3, label: "Name", value: "name" },
  { id: 4, label: "Release date", value: "-released" },
  { id: 5, label: "Popularity", value: "-metacritic" },
  { id: 6, label: "Average rating", value: "-rating" },
];

export { genre, sortBy, platformCodes, reversePlatformCodes };
