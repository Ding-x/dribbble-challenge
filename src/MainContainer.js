import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import ShotComponent from "./components/ShotComponent";

const Container = styled.div`
  padding-left: 3%;
  padding-bottom: 1%;
  display: flex;
  flex-wrap: wrap;
`;

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { shots: [] };
  }

  async componentDidMount() {
    const res = await axios.get("https://dribbble.s3.amazonaws.com/uploads/_/shots.json");
    if (res.status === 200) {
      this.setState({
        shots: res.data,
      });
    }
  }

  render() {
    return (
      <Container>
        {this.state.shots.map((shot, index) => {
          return (
            <ShotComponent
              key={index}
              imageUrl={shot.stillUrl}
              videoUrl={shot.videoUrl}
              author={shot.author}
              likesCount={shot.likesCount}
              commentsCount={shot.commentsCount}
              title={shot.title}
            />
          );
        })}
      </Container>
    );
  }
}
