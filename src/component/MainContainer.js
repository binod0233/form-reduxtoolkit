import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../app/Navbar";
import { AddPostForm } from "../features/posts/AddPostForm";
import { PostsList } from "../features/posts/PostsList";
// import { EditPostForm } from "../features/posts/EditPostForm";
import { SinglePostPage } from "../features/posts/SinglePostPage";

export default function MainContainer() {
  return (
    <BrowserRouter>
      <Navbar />
      <SinglePostPage />
      <Routes>
        {/* <Route
          path="/"
          element={
            <>
              <AddPostForm />
              <PostsList />
            </>
          }
        /> */}
        <Route path="/" component={SinglePostPage} />
        {/* <Route exact path="/editPost/:postId" component={EditPostForm} /> */}
      </Routes>
    </BrowserRouter>
  );
}
