"use client";

import { Suspense } from "react";

import LoadingProgress from "@/game/common/loaders/LoadingProgress";
import TableCamera from "@/game/common/cameras/TableCamera";
import TableControls from "@/game/common/controls/TableControls";
import TableLighting from "@/game/common/lighting/TableLighting";

export default function TableScene({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TableCamera />
      <TableControls />
      <TableLighting />

      <Suspense fallback={<LoadingProgress />}>{children}</Suspense>
    </>
  );
}
