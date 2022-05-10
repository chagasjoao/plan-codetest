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

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string;
}

export function Home() {
  const [plans, setPlans] = useState<Plan[]>();
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [discount, setDiscount] = useState(false);

  useEffect(() => {
    api.get<Plan[]>("/plans").then((response) => setPlans(response.data));
    api
      .get("/discount")
      .then((response) => setDiscountAmount(response.data[0].discount));
  }, []);

  return (
    <>
      <Header>
        <h2>Pricing</h2>

        <h1>Try it now for Free</h1>
      </Header>

      <DiscountContainer>
        <Text>Monthly</Text>
        <SwitchButton
          checked={discount}
          onChange={() => setDiscount(!discount)}
        />
        <DiscountTextContainer>
          <Text>Anually</Text>
          <DiscountText>{discountAmount}% discount</DiscountText>
        </DiscountTextContainer>
      </DiscountContainer>

      <PlansContainer>
        {plans &&
          plans.map((plan) => (
            <PlanCard
              key={plan.id}
              planData={plan}
              hasAnuallyDiscount={discount}
              anuallyDiscountAmount={discountAmount}
            />
          ))}
      </PlansContainer>
    </>
  );
}

export default Home;
