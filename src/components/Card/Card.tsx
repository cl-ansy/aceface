import { cn } from "@/lib/utils";
import * as Cards from "@/components/card/CardFactory";

import "@/components/Card/Card.scss";

export default function Card({
  idx,
  selector,
}: {
  idx: number;
  selector: string;
}) {
  const CardSVG = Cards[selector as keyof typeof Cards];
  return (
    <div className={cn("card", `card-${idx}`)}>
      <CardSVG />
    </div>
  );
}
