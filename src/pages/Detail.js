import { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postDelete } from "../store";

const Detail = ({ match, props }) => {
  const id = match.params.id;
  const dispacher = useDispatch();
  const { posts } = useSelector((store) => store);
  const post = posts.filter((post) => post.id == id);

  //삭제하기
  const deleteOne = () => {
    dispacher(postDelete(post[0].id));
    alert("삭제완료");
  };

  return (
    <div>
      <h1>글상세보기</h1>
      <hr />
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>{post[0].id}</Card.Header>
        <Card.Body>
          <h4 class="card-title">{post[0].title}</h4>
          <div>{post[0].content}</div>

          <Link
            to={`/`}
            type="button"
            class="btn btn-danger"
            onClick={deleteOne}
          >
            삭제
          </Link>
          <Link to={`/post/${post[0].id}/update`} class="btn btn-info">
            수정
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
