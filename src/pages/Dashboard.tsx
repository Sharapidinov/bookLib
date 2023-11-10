import BooksCollection from "../widgets/BooksCollection";
import { Container } from "@mui/material";
import Filters from "../widgets/Filters";

const Dashboard = () => {
  return (
    <Container>
      <Filters />
      <BooksCollection />
    </Container>
  );
};

export default Dashboard;
