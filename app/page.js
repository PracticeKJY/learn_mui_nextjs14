"use client";
import { Button, Container, Typography, useTheme } from "@mui/material";
import { styled } from "styled-components";

const Text = styled("div")(({ theme }) => ({
  fontSize: 24,
  fontWeight: 600,
  color: theme.palette.neutral[25], // 예시로 색상 적용
}));

// const Text = styled.div`
//   font-size: 24px;
//   font-weight: 600;
// `;

export default function Home() {
  const theme = useTheme();

  return (
    <Container>
      <Typography>세상에 이런 폰트가 나오다니 천재인듯</Typography>
      <Text>세상에 이런 폰트가 나오다니 천재인듯</Text>
      <Button style={{ backgroundColor: theme.palette.primary[50] }}>My Custom Button</Button>
    </Container>
  );
}
