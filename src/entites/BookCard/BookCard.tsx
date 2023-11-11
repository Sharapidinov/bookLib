import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Book } from "@/shared/types";
import { styles } from "./styles";

type BookCardProps = {
  book: Book;
};

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card css={styles.root}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        css={styles.image}
        image={book?.volumeInfo.imageLinks?.thumbnail}
      />
      <CardContent css={styles.content}>
        <Typography
          css={styles.title}
          gutterBottom
          variant="h6"
          component="p"
        >
          {book.volumeInfo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" css={styles.author}>
          {book.volumeInfo.authors}
        </Typography>
      </CardContent>
    </Card>
  );
};
