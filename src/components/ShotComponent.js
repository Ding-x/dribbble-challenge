import React, { Component } from "react";
import styled from "styled-components";
import ShotAuthorComponent from "./ShotAuthorComponent";
import ShotActionComponent from "./ShotCommentsAndLikesComponent";

const Shot = styled.div`
  margin-top: 3%;
  margin-right: 3%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 616px) {
    width: 96.5%;
  }
  @media screen and (min-width: 616px) and (max-width: 946px) {
    width: 46.75%;
  }
  @media screen and (min-width: 946px) and (max-width: 1322px) {
    width: 30.25%;
  }
  @media screen and (min-width: 1322px) {
    width: 22%;
  }
`;

const MediaContainer = styled.div`
  position: relative;
`;

const BottomContainer = styled.div`
  padding-top: 1%;
  padding-bottom: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ImageStyler = styled.img`
  display: inline-block;
  width: 100%;
  border-radius: 20px;
  position: relative;
`;

const VideoStyler = styled.video`
  display: inline-block;
  width: 100%;
  border-radius: 20px;
  position: relative;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 80px;
  opacity: 0.6;
  padding-left: 5%;
  padding-top: 5%;
  bottom: 0px;
  position: absolute;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 18px;
  color: white;
  background-image: linear-gradient(to right, #555, #111);
`;

export default class ShotComponent extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = { isTitleVisible: false };
  }
  render() {
    const isVideo = !!this.props.videoUrl;
    return (
      <Shot>
        <MediaContainer
          onMouseOver={() => {
            this.setState({ isTitleVisible: true });
            if (this.videoRef && this.videoRef.current) {
              this.videoRef.current.play();
            }
          }}
          onMouseOut={() => {
            this.setState({ isTitleVisible: false });
            if (this.videoRef && this.videoRef.current) {
              this.videoRef.current.pause();
            }
          }}
        >
          {isVideo ? (
            <VideoStyler ref={this.videoRef} loop muted src={this.props.videoUrl} />
          ) : (
            <ImageStyler src={this.props.imageUrl} />
          )}
          {this.state.isTitleVisible && <TitleContainer>{this.props.title}</TitleContainer>}
        </MediaContainer>

        <BottomContainer>
          <ShotAuthorComponent author={this.props.author} />
          <ShotActionComponent likesCount={this.props.likesCount} commentsCount={this.props.commentsCount} />
        </BottomContainer>
      </Shot>
    );
  }
}
