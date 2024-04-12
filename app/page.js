"use client";
import { Container, Typography } from "@mui/material";
import { styled } from "styled-components";

const Text = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export default function Home() {
  return (
    <Container>
      <Typography>세상에 이런 폰트가 나오다니 천재인듯</Typography>
      <Text>세상에 이런 폰트가 나오다니 천재인듯</Text>
    </Container>
  );
}
