import React from "react";
import { toast } from "react-toastify";
import { usePlan } from "../../hooks/usePlan";

import {
  Header,
  DiscountContainer,
  PlansContainer,
  AddWrapper,
} from "./styles";

import EditablePlanCard from "../../components/EditablePlan";
import FormDiscount from "../../components/FormDiscount";

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string;
}

export function Home() {
  const { plans, addPlan } = usePlan();

  function handleAddPlan() {
    if (plans!.length >= 4) {
      toast("You can have 4 plans max!", {
        type: "info",
      });
      return;
    }

    addPlan();

    toast("Plan added succesfully!", {
      type: "success",
    });
  }

  return (
    <>
      <Header>
        <h2>Admin</h2>

        <h1>Editing page</h1>
      </Header>

      <DiscountContainer>
        <FormDiscount />
      </DiscountContainer>

      <AddWrapper>
        <span onClick={() => handleAddPlan()} aria-hidden="true">
          Add new plan
        </span>
      </AddWrapper>

      <PlansContainer>
        {plans &&
          plans.map((plan) => (
            <div key={plan.id}>
              <EditablePlanCard planData={plan} />
            </div>
          ))}
      </PlansContainer>
    </>
  );
}

export default Home;
