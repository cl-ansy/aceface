import { cn } from "@/lib/utils";

import { DECK } from "@/components/Card/constants";
import Card from "@/components/Card/Card";
import AllCards from "@/assets/cards.svg";

export default function CardShow() {
  return (
    <div>
      <div className="hidden">
        <AllCards />
      </div>
      <div className={cn("card", `card-1`)}>
        <svg width="2.5in" height="3.5in">
          <use href="#svg-card-2C" />
        </svg>
      </div>
      <div className={cn("card", `card-2`)}>
        <svg width="2.5in" height="3.5in">
          <use href="#svg-card-2D" />
        </svg>
      </div>
      <div className={cn("card", `card-2`)}>
        <svg width="2.5in" height="3.5in">
          <use href="#svg-card-2H" />
        </svg>
      </div>
      <div className={cn("card", `card-2`)}>
        <svg width="2.5in" height="3.5in">
          <use href="#svg-card-2S" />
        </svg>
      </div>
      <div className="">
        <svg width="2.5in" height="3.5in">
          <use href="#svg-card-JC" />
        </svg>
      </div>
      {/* {DECK.map((card, i) => (
        <Card idx={i} key={`${card}-${i}`} selector={card} />
      ))} */}
    </div>
  );
}
