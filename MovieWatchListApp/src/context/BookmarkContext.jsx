import React, { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const { userData } = useContext(UserContext);

  const [getBookmark, setGetBookmark] = useState([]);

  useEffect(() => {
    if (userData && userData.email) {
      const storedUsers = JSON.parse(localStorage.getItem("listofusers")) || [];
      const currentUser = storedUsers.find(
        (user) => user.email === userData.email
      );

      if (currentUser && currentUser.watchlist) {
        setGetBookmark(currentUser.watchlist);
      } else {
        setGetBookmark([]);
      }
    }
  }, [userData]);

  useEffect(() => {
    if (userData && userData.email) {
      const storedUsers = JSON.parse(localStorage.getItem("listofusers")) || [];
      const updatedUsers = storedUsers.map((user) => {
        if (user.email === userData.email) {
          return { ...user, watchlist: getBookmark };
        }
        return user;
      });
      localStorage.setItem("listofusers", JSON.stringify(updatedUsers));
    }
  }, [getBookmark, userData]);

  const addBookmark = (movie) => {
    if (!getBookmark.some((m) => m.imdbID === movie.imdbID)) {
      setGetBookmark([...getBookmark, movie]);
    }
  };

  const removeBookmark = (imdbID) => {
    setGetBookmark(getBookmark.filter((movie) => movie.imdbID !== imdbID));
  };

  return (
    <BookmarkContext.Provider
      value={{ getBookmark, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
