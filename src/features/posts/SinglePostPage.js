import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

import { PostAuthor } from "./PostAuthor";
// import { TimeAgo } from "./TimeAgo";
// import { ReactionButtons } from "./ReactionButtons";
// import { selectPostById } from "./postsSlice";

export const SinglePostPage = ({ match }) => {
  // const { postId } = match.params;

  // const post = useSelector((state) => selectPostById(state, postId));
  // console.log("postId", post);
  const [post, setPost] = useState([]);
  const [number, setNumber] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  // useEffect(() => {
  //   fetchUserdata();
  // }, []);
  async function fetchUserdata() {
    setLoading(true);

    const res = await fetch(`http://localhost:4000/posts/${number}`);
    const json = await res.json();
    console.log("json", json);
    setPost(json);
    setLoading(false);
  }
  // console.log("possssssssssssssst", loading);
  // const onSavePostClicked = () => {
  //   fetchUserdata();
  // };
  console.log("number", number);
  console.log("post", post);
  const inputEl = useRef(null);
  const formik = useFormik({
    initialValues: {
      number: 0,
    },
    onSubmit: (values) => {
      console.log("valusssssssssssssssses", values);
      inputEl.current.value = "";

      setNumber(values.number);
      values.number = NaN;
      fetchUserdata();
      values.restform();
    },
  });

  return (
    <section>
      <h1>hello</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="number"
          id="postTitle"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <br />
        <label htmlFor="image">Image:</label>
        <input
          name="image"
          placeholder="binod0233"
          type="file"
          ref={inputEl}
          onChange={(e) => {
            setFile(e.target.files);
          }}
        />
        <br />
        <br />
        <br />

        <button type="submit">Search user</button>
      </form>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          {/* <TimeAgo timestamp={post.date} /> */}
        </div>
        <p className="post-content">{post.content}</p>
        {/* <ReactionButtons post={post} /> */}
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
};
