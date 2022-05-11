import React from "react";
import { usePlan } from "../../hooks/usePlan";
import {
  CardContainer,
  TitleWrapper,
  Title,
  Price,
  FeaturesWrapper,
  SubscribeButton,
  PriceWithDiscount,
} from "./styles";

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string;
}

interface PlanProps {
  planData: Plan;
  hasAnuallyDiscount: boolean;
  highlighted: boolean;
}

export function Plans({
  planData,
  hasAnuallyDiscount,
  highlighted,
}: PlanProps) {
  const { discount } = usePlan();
  const { name, price, features } = planData;
  const arrayFeatures = features.split(",");

  const priceWithCents = price / 100;
  const totalAnuallyPrice = (priceWithCents * 12).toFixed(2);
  const anuallyPriceWithDiscount = (
    Number(totalAnuallyPrice) -
    (priceWithCents * 12 * discount!) / 100
  ).toFixed(2);

  return (
    <CardContainer highlightedCard={highlighted}>
      <TitleWrapper>
        <Title>{name}</Title>

        {hasAnuallyDiscount ? (
          <PriceWithDiscount>
            <p>R$ {anuallyPriceWithDiscount}</p>
            {price !== 0 ? <p>R$ {totalAnuallyPrice}</p> : null}
          </PriceWithDiscount>
        ) : (
          <Price>R$ {priceWithCents.toFixed(2)}</Price>
        )}
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

export default Plans;
