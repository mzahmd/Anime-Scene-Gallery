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
  "Dragonball Z": [
    {
      src: p1,
      initial: {
        x: 100,
        y: -160,
      },
      animate: {
        x: 110,
        y: -155,
      },
    },
    {
      src: p2,
      initial: {
        x: 510,
        y: -170,
      },
      animate: {
        x: 530,
        y: -165,
        rotate: 10,
      },
    },
    {
      src: p3,
      initial: {
        x: 100,
        y: 140,
      },
      animate: {
        x: 120,
        y: 145,
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
  //     src: p3,
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
