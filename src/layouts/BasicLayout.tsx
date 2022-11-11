import { Container, Stack } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";

type Props = { children: React.ReactNode };

function BasicLayout({ children }: Props) {
  return (
    <Stack direction="column">
      <Container maxWidth={false} disableGutters>
        {children}
      </Container>
      <Container maxWidth={false} disableGutters>
        <Footer />
      </Container>
    </Stack>
  );
}

export default BasicLayout;
