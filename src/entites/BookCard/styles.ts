import { css } from "@emotion/react";

export const styles = {
  root: css({
    padding: "12px",
    boxShadow: 'none',
    border: '1px solid #d2d2d2',
    transition: '0.2s',
    '&:hover': {
      border: '1px solid #191919'
    },
    '@media (max-width: 599px)': {
      padding: "8px 12px",
    },
  }),
  image: css({
    objectFit: "contain",
    width: "fit-content",
    margin: "0 auto",
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    '@media (max-width: 599px)': {
      height: '120px !important'
    },
  }),
  content: css({
    padding: "12px 0 0!important",
  }),
  title: css({
    font: "600 18px/20px Roboto",
    paddingBottom: '0',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    '@media (max-width: 599px)': {
      font: "500 14px Roboto",
    },
  }),
  author: css({
    marginBottom:10,
    '@media (max-width: 599px)': {
      font: "400 11px Roboto",
    },
  }),
  categories: css({

    '@media (max-width: 599px)': {
      font: "400 11px Roboto",
    },
  })
};
  