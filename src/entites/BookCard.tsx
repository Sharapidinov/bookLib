import React from 'react';
import { Typography, Card, CardMedia, CardContent} from "@mui/material";
import {css} from "@emotion/react";
const styles = {
    root:css({
        width:"calc(25% - 24px)",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px;",
        background:"#f5f5f5",
        padding:"16px"
    }),
    image:css({
        objectFit:"contain",
        width:"fit-content",
        margin:"0 auto",
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
    }),
    content:css({
        padding:"0"
    }),
    title:css({
        font:"600 18px/20px Roboto"
    })
}

const BookCard = ({book}) => {
    return (
        <Card css={styles.root}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                css={styles.image}
                image={book?.volumeInfo.imageLinks?.thumbnail}
            />
            <CardContent css={styles.content}>
                <Typography css={styles.title} gutterBottom variant="h6" component="div">
                    {book.volumeInfo.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {book.volumeInfo.authors}
                </Typography>
            </CardContent>

        </Card>
    );
};

export default BookCard;