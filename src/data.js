import { v4 as uuidv4 } from "uuid";

const ChillHop = () => {
  return [
    {
      name: "Sunrise Hike",
      cover: "https://i.scdn.co/image/ab67616d0000b273637be863935fb86c56392acb",
      artist: "Ruck P",
      id: uuidv4(),
      active: true,
      color: ["#392e4c", "#feb38b"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12029",
    },
    {
      name: "Meadow",
      cover: "https://i.scdn.co/image/ab67616d0000b273be62e4b7069a919936646728",
      artist: "iamalex, azula, Dayle",
      id: uuidv4(),
      active: false,
      color: ["#d54948", "#6cc7b6"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12698",
    },
    {
      name: "Momentary Loss",
      cover: "https://i.scdn.co/image/ab67616d0000b2737d019714ec21ce21d31df352",
      artist: "Aarigod",
      id: uuidv4(),
      active: false,
      color: ["#243215", "#586761"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13008",
    },
    {
      name: "She Wont't Say",
      cover: "https://i.scdn.co/image/ab67616d0000b273084e106f28b2fdfc8ac25382",
      artist: "Psalm Trees, Guillaume Muschalle",
      id: uuidv4(),
      active: false,
      color: ["#f5da70", "#2a3b2e"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10535",
    },
    {
      name: "Home Court",
      cover: "https://i.scdn.co/image/ab67616d0000b273a6edabcbfde28527f5ea0db8",
      artist: "Blue Wednesday, Shopan",
      id: uuidv4(),
      active: false,
      color: ["#363e62", "#a06a9b"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11232",
    },
  ];
};

export default ChillHop;
