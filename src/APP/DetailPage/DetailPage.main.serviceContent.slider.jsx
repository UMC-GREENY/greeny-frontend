import React, { useState } from "react";
import styled from "styled-components";
import { tokens } from "stylis";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
`;

const ImageBox = styled.div`
  width: 566px;
  height: 424px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease-in-out;
`;

const IconsContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
`;

const Icon = styled.div`
    width: 10px;
    height: 10px;
    opacity: 0.5px;
    background-color: ${(props) => (props.active ? "#FFFFFF" : "#ccc")};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0 4px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #333;
  }
`;

const Slider = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleIconClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <Container className="slider-container">
      <ImagesContainer className="slider-images">
        <ImageBox>
          {images.map((image, index) => {
            console.log(image); // 이렇게 중괄호로 묶어주어야 합니다.
            return (
              <Image
                key={index}
                src={'https://umc-greeny.s3.ap-northeast-2.amazonaws.com/' + image}
                alt={`Image ${index}`}
                active={selectedImageIndex === index}
              />
            );
          })}
        </ImageBox>
        <IconsContainer className="slider-icons">
          {images.map((_, index) => (
            <Icon
              key={index}
              active={selectedImageIndex === index}
              onClick={() => handleIconClick(index)}
            >
            </Icon>
          ))}
        </IconsContainer>
      </ImagesContainer>
    </Container>
  );
  
};


export default Slider;
