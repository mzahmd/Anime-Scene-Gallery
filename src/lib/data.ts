import p1 from "../tmp/p1.png";
import p2 from "../tmp/p2.png";
import p3 from "../tmp/p3.png";
import p4 from "../tmp/p4.png";

export interface Image {
  src: string;
  initial: {
    x?: number;
    y?: number;
  };
  animate: {
    x?: number;
    y?: number;
  };
}

export const data: Record<string, Image[]> = {
  "Dragonball Z": [
    {
      src: p1,
      initial: {
        x: 100,
        y: 100,
      },
      animate: {
        x: 110,
      },
    },
    {
      src: p2,
      initial: {
        x: 400,
        y: -120,
      },
      animate: {
        x: 420,
        y: -115,
      },
    },
    // {
    //   src: p3,
    //   initial: {
    //     x: 100,
    //     y: 140,
    //   },
    //   animate: {
    //     x: 120,
    //     y: 145,
    //   },
    // },
    // {
    //   src: p4,
    //   initial: {
    //     x: 100,
    //     y: 100,
    //   },
    //   animate: {
    //     x: 120,
    //     y: 100,
    //   },
    // },
  ],
};
