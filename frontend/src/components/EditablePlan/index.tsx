import React from "react";
import {
  CardContainer,
  TitleWrapper,
  Title,
  Price,
  FeaturesWrapper,
  SubscribeButton,
} from "./styles";

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string;
}

interface PlanProps {
  planData: Plan;
}

export function EditablePlans({ planData }: PlanProps) {
  const { name, price, features } = planData;
  const arrayFeatures = features.split(",");

  return (
    <CardContainer>
      <TitleWrapper>
        <Title>{name}</Title>
        <Price>R$ {price / 100}</Price>
      </TitleWrapper>

      <FeaturesWrapper>
        {arrayFeatures.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
      </FeaturesWrapper>

      <SubscribeButton>
        {price === 0 ? "Get started" : "Try it now"}
      </SubscribeButton>
    </CardContainer>
  );
}

export default EditablePlans;
