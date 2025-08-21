import { Grid } from "@chakra-ui/react";
import CardItem from "./CardItem";
import { cardsData } from "./data";
import { Fragment } from "react/jsx-runtime";

const CardsSection = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={{ base: 5, sm: 2, lg: 6 }}
      paddingX={{ base: "2rem", sm: ".2rem", xl: "0rem" }}
      pos={"relative"}
      marginTop={{ base: "1rem", md: "0rem" }}
    >
      {cardsData?.map((item, index) => (
        <Fragment key={index}>
          <CardItem {...item} />
        </Fragment>
      ))}
    </Grid>
  );
};

export default CardsSection;
