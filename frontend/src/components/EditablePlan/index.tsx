import { Formik } from "formik";
import React, { ChangeEvent, useCallback, memo, useState } from "react";
import { toast } from "react-toastify";
import {
  SortableContainer,
  SortableElement,
  SortableElementProps,
  SortableContainerProps,
  SortableHandle,
} from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";

import { usePlan } from "../../hooks/usePlan";

import {
  CardContainer,
  TitleWrapper,
  Title,
  Price,
  FeaturesWrapper,
  SubscribeButton,
  IconWrapper,
  EditIcon,
  DeleteIcon,
  CancelIcon,
  PlanNameInput,
  PlanPriceInput,
  PlanFeaturesInput,
  Form,
  AddFeatureIcon,
  OrderIcon,
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

interface ElementSortableProps extends SortableElementProps {
  value: string;
  sortIndex: number;
}

interface ContainerSortableProps extends SortableContainerProps {
  items: string[];
}

export function EditablePlans({ planData }: PlanProps) {
  const { id, name, price, features } = planData;
  const [arrayWithFeatures, setArrayWithFeatures] = useState(
    features.split(",")
  );
  const [isEditing, setIsEditing] = useState(false);
  const { deletePlan, plans, updatePlan } = usePlan();
  const [renderAgain, setForceRenderAgain] = useState(false);

  function handleAddFeature() {
    const feature = `New feature ${arrayWithFeatures.length + 1}`;
    arrayWithFeatures.push(feature);
    setArrayWithFeatures([...arrayWithFeatures]);
  }

  function handleEditInputFeature(value: string, index: number) {
    arrayWithFeatures[index] = value;
    setArrayWithFeatures([...arrayWithFeatures]);
  }

  function deletePlanFeature(index: number) {
    setArrayWithFeatures((prev) => prev.filter((p, i) => i !== index));
    setForceRenderAgain(!renderAgain);
  }

  function handleDeletePlan(planId: string) {
    if (plans!.length <= 2) {
      toast("You need at least 2 plans!", {
        type: "error",
      });
      return;
    }

    deletePlan(planId);

    toast("Plan deleted successfully!", {
      type: "info",
    });
  }

  function handleEditCancel() {
    setIsEditing(!isEditing);

    setArrayWithFeatures(features.split(","));
  }

  const DragHandle = SortableHandle(() => <OrderIcon />);

  const SortableItem = memo(
    SortableElement<ElementSortableProps>(({ value, sortIndex }: any) => (
      <div>
        <PlanFeaturesInput
          type="text"
          defaultValue={value}
          placeholder="New feature"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleEditInputFeature(e.target.value, sortIndex);
          }}
        />
        <div>
          <DeleteIcon onClick={() => deletePlanFeature(sortIndex)} />

          <DragHandle />
        </div>
      </div>
    ))
  );

  const SortableList = SortableContainer<ContainerSortableProps>(
    // eslint-disable-next-line react/no-unused-prop-types
    ({ items }: { items: string[] }) => {
      return (
        <FeaturesWrapper>
          {items.map((value, index) => (
            <SortableItem
              key={`item-${index}`}
              index={index}
              sortIndex={index}
              value={value}
            />
          ))}

          <AddFeatureIcon onClick={() => handleAddFeature()} />
        </FeaturesWrapper>
      );
    }
  );

  const SortableCallback = useCallback(() => {
    return (
      <SortableList
        lockAxis="y"
        items={arrayWithFeatures}
        useDragHandle
        onSortEnd={({ oldIndex, newIndex }) => {
          if (oldIndex !== newIndex) {
            setArrayWithFeatures(
              arrayMoveImmutable(arrayWithFeatures, oldIndex, newIndex)
            );

            setForceRenderAgain(!renderAgain);
          }
        }}
      />
    );
  }, [renderAgain]);

  const initialPrice = price / 100;

  return (
    <>
      <IconWrapper>
        {isEditing ? (
          <CancelIcon onClick={() => handleEditCancel()} />
        ) : (
          <EditIcon onClick={() => setIsEditing(!isEditing)} />
        )}

        <DeleteIcon onClick={() => handleDeletePlan(id)} />
      </IconWrapper>
      <CardContainer>
        {isEditing ? (
          <Formik
            enableReinitialize
            initialValues={{ name, initialPrice }}
            onSubmit={async (values, { setSubmitting }) => {
              const nameToUpdate = values.name;
              const sanitizePrice = values.initialPrice
                .toString()
                .replace(/,/g, ".")
                .replace(/\.(?=.*\.)/g, "");
              const priceWithCents = Number(sanitizePrice).toFixed(2);
              const priceToUpdate = Number(priceWithCents) * 100;

              const featureToUpdate = arrayWithFeatures.toString();

              const updatePlanData = {
                id,
                name: nameToUpdate,
                price: priceToUpdate,
                features: featureToUpdate,
              };

              const response = await updatePlan(updatePlanData);

              if (!response) {
                toast("Something went wrong", {
                  type: "error",
                });

                return;
              }

              toast("Plan edited successfully", {
                type: "success",
              });

              setIsEditing(!isEditing);
              setSubmitting(false);
            }}
          >
            {({ handleSubmit, values, handleChange, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <TitleWrapper>
                  <PlanNameInput
                    type="text"
                    id="name"
                    placeholder="Plan name"
                    value={values.name}
                    onChange={handleChange}
                  />

                  <PlanPriceInput
                    type="text"
                    id="price"
                    placeholder="R$ 10.00"
                    value={values.initialPrice}
                    onChange={(e) => {
                      setFieldValue("initialPrice", e.target.value);
                    }}
                  />
                </TitleWrapper>

                <SortableCallback />

                <SubscribeButton type="submit">Save Changes</SubscribeButton>
              </Form>
            )}
          </Formik>
        ) : (
          <>
            <TitleWrapper>
              <Title>{name}</Title>
              <Price>
                {(price / 100).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Price>
            </TitleWrapper>

            <FeaturesWrapper>
              {arrayWithFeatures.map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </FeaturesWrapper>
            <SubscribeButton>
              {price === 0 ? "Get started" : "Try it now"}
            </SubscribeButton>
          </>
        )}
      </CardContainer>
    </>
  );
}

export default EditablePlans;
