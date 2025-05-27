import yourName1 from "/YourName1.png";
import yourName2 from "/YourName2.png";
import yourName3 from "/YourName3.png";
import weatheringWithYou1 from "/WeatheringWithYou1.png";
import weatheringWithYou2 from "/WeatheringWithYou2.png";
import weatheringWithYou3 from "/WeatheringWithYou3.png";
import Suzume1 from "/Suzume1.png";
import Suzume2 from "/Suzume2.png";
import Suzume3 from "/Suzume3.png";

export const ANIME_TITLES = [
  { id: "YourName", name: "Your Name" },
  { id: "WeatheringWithYou", name: "Weathering with You" },
  { id: "Suzume", name: "Suzume" },
];

export type AnimeAnimationEntry = {
  src: string;
  x: number;
  y: number;
  rotate: number;
};

export const data: Record<string, AnimeAnimationEntry[]> = {
  YourName: [
    {
      src: yourName1,
      x: -470,
      y: -320,
      rotate: -10,
    },
    {
      src: yourName2,
      x: -10,
      y: -350,
      rotate: 10,
    },
    {
      src: yourName3,
      x: 450,
      y: -250,
      rotate: 2,
    },
  ],
  WeatheringWithYou: [
    {
      src: weatheringWithYou1,
      x: -380,
      y: -250,
      rotate: -15,
    },
    {
      src: weatheringWithYou2,
      x: -30,
      y: -300,
      rotate: -5,
    },
    {
      src: weatheringWithYou3,
      x: 350,
      y: -260,
      rotate: 5,
    },
  ],
  Suzume: [
    {
      src: Suzume1,
      x: -500,
      y: -160,
      rotate: -2,
    },
    {
      src: Suzume2,
      x: -10,
      y: -190,
      rotate: 5,
    },
    {
      src: Suzume3,
      x: 450,
      y: -100,
      rotate: 15,
    },
  ],
};
