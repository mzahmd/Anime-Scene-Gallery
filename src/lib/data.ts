import p1 from "../tmp/p1.png";
import p2 from "../tmp/p2.png";
import p3 from "../tmp/p3.png";
import p4 from "../tmp/p4.png";

interface Image {
  src: string;
}

export const data: Record<string, Image[]> = {
  "Dragonball Z": [
    {
      src: p1,
    },
    {
      src: p2,
    },
    {
      src: p3,
    },
    {
      src: p4,
    },
  ],
};
