import BooksCollection from "../widgets/BooksCollection";
import { Container } from "@mui/material";
import Filters from "../widgets/Filters";

export const Dashboard = () => {
  return (
    <Container>
      <Filters />
      <BooksCollection />
    </Container>
  );
};
