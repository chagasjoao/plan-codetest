import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";

import api from "../services/api";

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string;
}

type PlanContextType = {
  plans: Plan[] | undefined;
  discount: number | undefined;
  addPlan: () => void;
  deletePlan: (planId: string) => void;
  updatePlan: (planDataToUpdate: Plan) => void;
  updateDiscount: (newDiscount: { discount: number }) => void;
};

type PlanContextProviderProps = {
  children: ReactNode;
};

export const PlanContext = createContext({} as PlanContextType);

export function PlanContextProvider(props: PlanContextProviderProps) {
  const { children } = props;
  const [plans, setPlans] = useState<Plan[]>();
  const [discount, setDiscountAmount] = useState(0);

  useEffect(() => {
    api.get<Plan[]>("/plans").then((response) => setPlans(response.data));
    api
      .get("/discount")
      .then((response) => setDiscountAmount(response.data[0].discount));
  }, []);

  function updatePlan(planDataToUpdate: Plan) {
    console.log(planDataToUpdate.price);

    const indexToUpdate = plans!.findIndex((p) => p.id === planDataToUpdate.id);
    plans![indexToUpdate] = planDataToUpdate;

    api.patch("/plans", planDataToUpdate).then(() => setPlans([...plans!]));
  }

  function deletePlan(planId: string) {
    api
      .delete("/plans", {
        data: {
          id: planId,
        },
      })
      .then(() => setPlans((prev) => prev!.filter((p) => p.id !== planId)));
  }

  function addPlan() {
    const newPlan = {
      name: "New plan",
      price: "1000",
      features: "Feature 1,Feature 2",
    };
    api
      .post("/plans", newPlan)
      .then((response) => setPlans((prev) => [...prev!, response.data]));
  }

  function updateDiscount(newDiscount: { discount: number }) {
    api
      .patch("/discount", newDiscount)
      .then((response) => setDiscountAmount(response.data.discount));
  }

  const contextValue = useMemo(
    () => ({
      plans,
      discount,
      addPlan,
      deletePlan,
      updatePlan,
      updateDiscount,
    }),
    [plans, discount]
  );

  return (
    <PlanContext.Provider value={contextValue}>{children}</PlanContext.Provider>
  );
}
