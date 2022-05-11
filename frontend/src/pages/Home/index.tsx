import React, { useEffect, useState } from "react";
import api from "../../services/api";
import {
  Header,
  DiscountContainer,
  PlansContainer,
  Text,
  SwitchButton,
  DiscountTextContainer,
  DiscountText,
} from "./styles";

import PlanCard from "../../components/Plans";
import { usePlan } from "../../hooks/usePlan";

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string;
}

export function Home() {
  const { plans, discount } = usePlan();
  const [isAnually, setIsAnually] = useState(false);

  return (
    <>
      <Header>
        <h2>Pricing</h2>

        <h1>Try it now for Free</h1>
      </Header>

      <DiscountContainer>
        <Text>Monthly</Text>
        <SwitchButton
          checked={isAnually}
          onChange={() => setIsAnually(!isAnually)}
        />
        <DiscountTextContainer>
          <Text>Anually</Text>
          <DiscountText>{discount}% discount</DiscountText>
        </DiscountTextContainer>
      </DiscountContainer>

      <PlansContainer>
        {plans &&
          plans.map((plan, key) => (
            <PlanCard
              key={plan.id}
              highlighted={key === 1}
              planData={plan}
              hasAnuallyDiscount={isAnually}
            />
          ))}
      </PlansContainer>
    </>
  );
}

export default Home;
