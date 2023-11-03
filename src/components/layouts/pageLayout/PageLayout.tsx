import React from "react";
import { Header, Footer, Container } from "components/layouts";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <Container>{children}</Container>
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
