import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding-top: 1%;
  padding-bottom: 1%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: #111;
  font-size: 12px;
`;

const CommentsAndLikesStyler = styled.h5`
  color: #aaa;
  display: flex;
  margin-left: 20%;
`;

export default function ShotCommentsAndLikesComponent(props) {
  return (
    <Container>
      <CommentsAndLikesStyler>
        <FontAwesomeIcon icon={faComment} /> {props.commentsCount}
      </CommentsAndLikesStyler>
      <CommentsAndLikesStyler>
        <FontAwesomeIcon icon={faHeart} /> {props.likesCount}
      </CommentsAndLikesStyler>
    </Container>
  );
}
