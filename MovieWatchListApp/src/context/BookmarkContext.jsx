import React, { createContext, useState, useEffect } from "react";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [getBookmark, setGetBookmark] = useState(() => {
    const savedBookmark = localStorage.getItem("bookmarks");
    try {
      return savedBookmark ? JSON.parse(savedBookmark) : [];
    } catch (error) {
      console.error("Failed to parse bookmarks from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    if (getBookmark.length > 0) {
      localStorage.setItem("bookmarks", JSON.stringify(getBookmark));
    }
  }, [getBookmark]);

  const addBookmark = (movie) => {
    const isBookmarked = getBookmark.some((m) => m.imdbID === movie.imdbID);

    if (!isBookmarked) {
      const updatedBookmarks = [...getBookmark, movie];
      setGetBookmark(updatedBookmarks);
      // Removed redundant localStorage.setItem
    }
  };

  const removeBookmark = (imdbID) => {
    const updatedBookmarks = getBookmark.filter((movie) => movie.imdbID !== imdbID);
    setGetBookmark(updatedBookmarks);
    // localStorage is handled by useEffect
  };

  return (
    <BookmarkContext.Provider
      value={{ getBookmark, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

