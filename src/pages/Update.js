import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postUpdate } from "../store";

const Update = (props) => {
  const id = props.match.params.id;
  const { posts } = useSelector((store) => store);
  const dispacher = useDispatch();
  const post = posts.filter((post) => post.id == id);

  const [postDto, setPostDto] = useState({
    id: post[0].id,
    title: post[0].title,
    content: post[0].content,
  });

  const changeValue = (e) => {
    setPostDto({
      ...postDto,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispacher(postUpdate(postDto));
    alert("수정완료");
    props.history.push("/");
  };

  return (
    <Container>
      <div>
        <h1>글수정하기</h1>
        <hr />
        <br />
        <br />

        <Form>
          <div class="form-group">
            <label for="id">Id: {post[0].id}</label>

            <br />
            <br />
            <label for="title">Title: </label>
            <input
              type="text"
              name="title"
              class="form-control"
              onChange={changeValue}
            />
            <br />
            <label for="content">Content: </label>
            <textarea
              class="form-control"
              rows="5"
              name="content"
              onChange={changeValue}
            ></textarea>
            <br />

            <button type="button" class="btn btn-info" onClick={submit}>
              수정완료
            </button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Update;
