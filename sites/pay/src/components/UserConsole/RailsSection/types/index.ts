import type { Rail } from "@/pay-types";

export type RailTableRow = Rail & {
  userAddress: string;
  isPayer: boolean;
  isSettling: boolean;
};
