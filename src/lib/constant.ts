import yourName1 from "/YourName1.png";
import yourName2 from "/YourName2.png";
import yourName3 from "/YourName3.png";
import weatheringWithYou2 from "/WeatheringWithYou2.png";
import Suzume1 from "/Suzume1.png";
import Suzume2 from "/Suzume2.png";
import Suzume3 from "/Suzume3.png";

export const ANIME_TITLES = [
  { id: "YourName", name: "Your Name" },
  { id: "WeatheringWithYou", name: "Weathering with You" },
  { id: "Suzume", name: "Suzume" },
];

export type Image = {
  src: string;
  initial: {
    x: number;
    y: number;
  };
  animate: {
    x: number;
    y: number;
    rotate: number;
  };
};

export const data: Record<string, Image[]> = {
  YourName: [
    {
      src: yourName1,
      initial: {
        x: -500,
        y: -430,
      },
      animate: {
        x: window.innerWidth / 4 - 500,
        y: window.innerHeight / 4 - 430,
        rotate: -10,
      },
    },
    {
      src: yourName2,
      initial: {
        x: -700,
        y: -300,
      },
      animate: {
        x: window.innerWidth / 4 / 2 - 700,
        y: window.innerHeight / 4 / 2 - 300,
        rotate: 10,
      },
    },
    {
      src: yourName3,
      initial: {
        x: -450,
        y: -500,
      },
      animate: {
        x: window.innerWidth / 2 - 450,
        y: window.innerHeight / 2 - 500,
        rotate: 0,
      },
    },
  ],
  WeatheringWithYou: [
    {
      src: weatheringWithYou2,
      initial: {
        x: 500,
        y: -170,
      },
      animate: {
        x: window.innerWidth / 4 / 2 - 200,
        y: window.innerHeight / 4 / 2 - 300,
        rotate: -5,
      },
    },
  ],
  Suzume: [
    {
      src: Suzume1,
      initial: {
        x: -500,
        y: -70,
      },
      animate: {
        x: window.innerWidth / 4 - 800,
        y: window.innerHeight / 4 - 350,
        rotate: -2,
      },
    },
    {
      src: Suzume2,
      initial: {
        x: -20,
        y: -135,
      },
      animate: {
        x: window.innerWidth / 4 / 2 - 150,
        y: window.innerHeight / 4 / 2 - 240,
        rotate: 5,
      },
    },
    {
      src: Suzume3,
      initial: {
        x: 200,
        y: -100,
      },
      animate: {
        x: window.innerWidth / 2 - 350,
        y: window.innerHeight / 2 - 400,
        rotate: 15,
      },
    },
  ],
};
