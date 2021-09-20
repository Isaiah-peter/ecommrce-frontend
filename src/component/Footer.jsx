import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p``;

const SocialMediaContainer = styled.div``;
const SocialIcon = styled.div``;

const Right = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shoppy</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore
          obcaecati ducimus fuga ipsa enim explicabo? Dicta officia, id debitis
        </Description>
        <SocialMediaContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialMediaContainer>
      </Left>
      <Right></Right>
      <Center></Center>
    </Container>
  );
};

export default Footer;
