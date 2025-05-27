import yourName1 from "../tmp/YourName1.png";
import yourName2 from "../tmp/YourName2.png";
import yourName3 from "../tmp/YourName3.png";
import weatheringWithYou2 from "../tmp/WeatheringWithYou2.png";
import Suzume1 from "../tmp/Suzume1.png";
import Suzume2 from "../tmp/Suzume2.png";
import Suzume3 from "../tmp/Suzume3.png";

export interface Image {
  src: string;
  initial: {
    x?: number;
    y?: number;
  };
  animate: {
    x?: number;
    y?: number;
    rotate?: number;
  };
}

export const data: Record<string, Image[]> = {
  YourName: [
    {
      src: yourName1,
      initial: {
        x: -510,
        y: -250,
      },
      animate: {
        x: window.innerWidth / 2 / 4 - 510,
        y: window.innerHeight / 2 / 4 - 250,
      },
    },
    {
      src: yourName2,
      initial: {
        x: 500,
        y: -270,
      },
      animate: {
        x: window.innerWidth / 2 / 4 / 2,
        y: window.innerHeight / 2 / 4 - 270,
        rotate: 10,
      },
    },
    {
      src: yourName3,
      initial: {
        x: 200,
        y: -250,
      },
      animate: {
        x: window.innerWidth / 2 / 4 + 200,
        y: window.innerHeight / 2 / 4 - 250,
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
        x: window.innerWidth / 2 / 4 / 2 + 10,
        y: window.innerHeight / 2 / 4 - 170,
        rotate: -5,
      },
    },
  ],
  Suzume: [
    {
      src: Suzume1,
      initial: {
        x: 500,
        y: -170,
      },
      animate: {
        x: window.innerWidth / 2 / 4 / 2 + 10,
        y: window.innerHeight / 2 / 4 - 170,
        rotate: -5,
      },
    },
    {
      src: Suzume2,
      initial: {
        x: 500,
        y: -17,
      },
      animate: {
        x: window.innerWidth / 2 / 4 / 2 + 10,
        y: window.innerHeight / 2 / 4 - 17,
        rotate: -5,
      },
    },
    {
      src: Suzume3,
      initial: {
        x: 200,
        y: -100,
      },
      animate: {
        x: window.innerWidth / 2 / 4 + 200,
        y: window.innerHeight / 2 / 4 - 100,
        rotate: 15,
      },
    },
  ],
};
