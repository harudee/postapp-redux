import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postSave } from "../store";
import { useSelector } from "react-redux";
import { Container, Form } from "react-bootstrap";

const Save = (props) => {
  const dispatcher = useDispatch();
  const { posts } = useSelector((store) => store);

  const [postDto, setPostDto] = useState({
    id: "",
    title: "",
    content: "",
  });

  console.log(postDto);

  const changeValue = (e) => {
    setPostDto({
      ...postDto,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatcher(postSave(postDto));
    alert("등록완료");
    props.history.push("/");
  };

  return (
    <Container>
      <h1>글쓰기</h1>
      <hr />
      <br />

      <Form>
        <div class="form-group">
          <label for="id">Id:</label>
          <input
            type="text"
            class="form-control"
            name="id"
            onChange={changeValue}
          ></input>
          <label for="title">Title:</label>
          <input
            type="text"
            class="form-control"
            name="title"
            onChange={changeValue}
          />
          <br />
        </div>
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea
            onChange={changeValue}
            class="form-control"
            rows="5"
            name="content"
          ></textarea>
          <br />
        </div>
        <button type="button" class="btn btn-info" onClick={submit}>
          글쓰기완료
        </button>
      </Form>
    </Container>
  );
};

export default Save;
