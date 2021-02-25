import styled from "styled-components";

const Container = styled.div`
  padding-top: 1%;
  padding-bottom: 1%;
  font-size: 0;
  display: flex;
  flex-direction: row;
`;

const ImageStyler = styled.img`
  width: 10%;
  height: 25px;
  margin-right: 1%;
  border-radius: 50%;
  margin-top: 1%;
`;

const NameStyler = styled.h6`
  color: #555;
  letter-spacing: -0.5px;
  margin-right: 2%;
  margin-top: 4%;
`;

const CategoryStyler = styled.h6`
  background: #ccc;
  width: 14%;
  height: 20px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  font-size: 10px;
  padding: 2%;
  margin-top: 7px;
`;

export default function ShotAuthorComponent(props) {
  const { author } = props;
  let category = null;
  if (author.isPro) {
    category = "Pro";
  }
  if (author.isTeam) {
    category = "Team";
  }
  return (
    <Container>
      <ImageStyler src={author.avatarUrl} />
      <NameStyler>{author.name}</NameStyler>
      {category && <CategoryStyler> {category} </CategoryStyler>}
    </Container>
  );
}
