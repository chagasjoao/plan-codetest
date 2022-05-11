import { useContext } from "react";
import { PlanContext } from "../contexts/PlanContext";

export function usePlan() {
  const value = useContext(PlanContext);
  return value;
}
