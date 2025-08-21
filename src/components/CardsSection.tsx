import { Grid } from "@chakra-ui/react";
import CardItem from "./CardItem";
import { cardsData } from "./data";
import { Fragment } from "react/jsx-runtime";
const CardsSection = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {cardsData?.map((item, index) => (
        <Fragment key={index}>
          <CardItem {...item} />
        </Fragment>
      ))}
    </Grid>
  );
};

export default CardsSection;
