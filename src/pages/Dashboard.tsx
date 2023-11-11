import BooksCollection from "../widgets/BooksCollection";
import { Container, css } from "@mui/material";
import Filters from "../widgets/Filters";

const styles = {
  root: css({
    padding: '16px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    '@media (max-width: 599px)': {
      padding: '12px 0',
      gap: '12px',
    },
  }),
};


export const Dashboard = () => {
  return (
    <Container css={styles.root}>
      <Filters />
      <BooksCollection />
    </Container>
  );
};
