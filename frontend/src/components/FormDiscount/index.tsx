import { Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import { usePlan } from "../../hooks/usePlan";
import Button from "../Button";

import { FormDiscountComponent, Text } from "./styles";

export default function FormDiscount() {
  const { discount, updateDiscount } = usePlan();
  return (
    <Formik
      enableReinitialize
      initialValues={{ discount: discount! }}
      onSubmit={(values, { setSubmitting }) => {
        updateDiscount(values);

        toast("Discount edited successfully!", {
          type: "info",
        });

        setSubmitting(false);
      }}
    >
      {({ handleSubmit, values, handleChange }) => (
        <FormDiscountComponent onSubmit={handleSubmit}>
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
            disabled={!values.discount || values.discount === discount}
          >
            Save
          </Button>
        </FormDiscountComponent>
      )}
    </Formik>
  );
}
