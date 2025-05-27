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
      x: window.innerWidth / 4 / 2 - 700,
      y: window.innerHeight / 4 / 2 - 300,
      rotate: -10,
    },
    {
      src: yourName2,
      x: window.innerWidth / 4 - 500,
      y: window.innerHeight / 4 - 430,
      rotate: 10,
    },
    {
      src: yourName3,
      x: window.innerWidth / 2 - 450,
      y: window.innerHeight / 2 - 500,
      rotate: 0,
    },
  ],
  WeatheringWithYou: [
    {
      src: weatheringWithYou1,
      x: window.innerWidth / 4 - 800,
      y: window.innerHeight / 4 - 350,
      rotate: -15,
    },
    {
      src: weatheringWithYou2,
      x: window.innerWidth / 4 / 2 - 200,
      y: window.innerHeight / 4 / 2 - 300,
      rotate: -5,
    },
    {
      src: weatheringWithYou3,
      x: window.innerWidth / 4  + 50,
      y: window.innerHeight / 4  - 300,
      rotate: 5,
    },
  ],
  Suzume: [
    {
      src: Suzume1,
      x: window.innerWidth / 4 - 800,
      y: window.innerHeight / 4 - 350,
      rotate: -2,
    },
    {
      src: Suzume2,
      x: window.innerWidth / 4 / 2 - 150,
      y: window.innerHeight / 4 / 2 - 240,
      rotate: 5,
    },
    {
      src: Suzume3,
      x: window.innerWidth / 2 - 350,
      y: window.innerHeight / 2 - 400,
      rotate: 15,
    },
  ],
};
