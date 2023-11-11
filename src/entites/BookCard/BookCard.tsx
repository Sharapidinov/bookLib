import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Book } from "@/shared/types";
import { styles } from "./styles";
import BookImage from "@/assets/noneBookImage.png"
type BookCardProps = {
  book: Book;
};

export const BookCard = ({ book }: BookCardProps) => {
    const category = book.volumeInfo.categories?.[0]?.split("&")[0];



    return (
    <Card css={styles.root}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        css={styles.image}
        image={book?.volumeInfo.imageLinks?.thumbnail || BookImage}
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
          <Typography variant="body2" color="text.secondary" css={styles.categories}>
              {category}
          </Typography>
      </CardContent>
    </Card>
  );
};
