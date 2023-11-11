export type Book = {
  id: string;
  volumeInfo: {
    imageLinks: {
      thumbnail: string;
    };
    title: string;
    authors: string;
    categories: [string]
  };
};

export type Error = {
  data: {
    error: {
      message: string;
    };
  };
};
