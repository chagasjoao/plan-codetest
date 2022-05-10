import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import api from "../../services/api";
import Button from "../../components/Button";

import {
  Header,
  DiscountContainer,
  PlansContainer,
  Text,
  FormDiscount,
  EditIcon,
  DeleteIcon,
  IconWrapper,
  AddWrapper,
} from "./styles";

import EditablePlanCard from "../../components/EditablePlan";

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string;
}

export function Home() {
  const [plans, setPlans] = useState<Plan[]>();
  const [discountAmount, setDiscountAmount] = useState<number>(0);

  useEffect(() => {
    api.get<Plan[]>("/plans").then((response) => setPlans(response.data));
    api
      .get("/discount")
      .then((response) => setDiscountAmount(response.data[0].discount));
  }, []);

  function handleDeletePlan(planId: string) {
    if (plans!.length <= 2) {
      toast("You need at least 2 plans!", {
        type: "error",
      });
      return;
    }

    api
      .delete("/plans", {
        data: {
          id: planId,
        },
      })
      .then(() => setPlans((prev) => prev!.filter((p) => p.id !== planId)));

    toast("Plan deleted successfully!", {
      type: "info",
    });
  }

  function handleAddPlan() {
    if (plans!.length >= 4) {
      toast("You can only have 4 plans!", {
        type: "info",
      });

      return;
    }

    const newPlan = {
      name: "New plan",
      price: "1000",
      features: "Feature 1,Feature 2",
    };
    api
      .post("/plans", newPlan)
      .then((response) => setPlans((prev) => [...prev!, response.data]));

    toast("Plan added successfully!", {
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
        <Formik
          enableReinitialize
          initialValues={{ discount: discountAmount }}
          onSubmit={(values, { setSubmitting }) => {
            api
              .patch("/discount", values)
              .then((response) => setDiscountAmount(response.data.discount));

            toast("Discount edited successfully!", {
              type: "info",
            });

            setSubmitting(false);
          }}
        >
          {({ handleSubmit, values, handleChange }) => (
            <FormDiscount onSubmit={handleSubmit}>
              <Text>Discount</Text>
              <input
                id="discount"
                type="number"
                placeholder="15"
                value={values.discount}
                onChange={handleChange}
              />

              <Button
                type="submit"
                disabled={
                  !values.discount || values.discount === discountAmount
                }
              >
                Save
              </Button>
            </FormDiscount>
          )}
        </Formik>
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
              <IconWrapper>
                <EditIcon />
                <DeleteIcon onClick={() => handleDeletePlan(plan.id)} />
              </IconWrapper>
              <EditablePlanCard planData={plan} />
            </div>
          ))}
      </PlansContainer>
    </>
  );
}

export default Home;
