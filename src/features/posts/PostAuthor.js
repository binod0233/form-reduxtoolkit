import React from "react";
import { useSelector } from "react-redux";

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === 6)
  );

  return <span>by {author ? author.username : "Unknown author"}</span>;
};
