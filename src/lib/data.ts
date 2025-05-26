import p1 from "../tmp/p1.jpg";
import p2 from "../tmp/p2.jpg";
import p3 from "../tmp/p3.png";
// import p4 from "../tmp/p4.png";
// import p5 from "../tmp/p5.png";
// import p6 from "../tmp/p6.png";

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
  Dragonball: [
    {
      src: p1,
      initial: {
        x: -440,
        y: -250,
      },
      animate: {
        x: window.innerWidth / 2 / 4 - 510,
        y: window.innerHeight / 2 / 4 - 250,
      },
    },
    {
      src: p2,
      initial: {
        x: 500,
        y: -300,
      },
      animate: {
        x: window.innerWidth / 2 / 4 / 2,
        y: window.innerHeight / 2 / 4 - 300,
        rotate: 10,
      },
    },
    {
      src: p3,
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
  // Naruto: [
  //   {
  //     src: p4,
  //     initial: {
  //       x: 100,
  //       y: 100,
  //     },
  //     animate: {
  //       x: 110,
  //     },
  //   },
  //   {
  //     src: p5,
  //     initial: {
  //       x: 400,
  //       y: -120,
  //     },
  //     animate: {
  //       x: 420,
  //       y: -115,
  //     },
  //   },
  //   {
  //     src: p6,
  //     initial: {
  //       x: 400,
  //       y: -120,
  //     },
  //     animate: {
  //       x: 420,
  //       y: -115,
  //     },
  //   },
  // ],
};
