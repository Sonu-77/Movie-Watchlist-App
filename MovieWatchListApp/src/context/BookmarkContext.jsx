import React, { createContext, useState } from "react";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [getBookmark, setGetBookmark] = useState([]);

  const addBookmark = (movie) => {
    const isBookmarked = getBookmark.some((m) => m.imdbID === movie.imdbID);

    if (!isBookmarked) {
      // Add the movie to the bookmarks only if it's not already present
      setGetBookmark((prevMovies) => [...prevMovies, movie]);
    }
  };

  const removeBookmark = (id) => {
    setGetBookmark((preMovie) => preMovie.filter((movie) => movie.id != id));
  };

  return (
    <BookmarkContext.Provider
      value={{ getBookmark, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
