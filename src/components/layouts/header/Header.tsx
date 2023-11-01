import React from "react";
import { Container } from "components/layouts";
import { TEXTS } from "texts";
import { Logo } from "components/elements";

const Header = (): React.ReactElement => {
  return (
    <header className="bg-primary-foreground">
      <Container>
        <div className="space-y-4 py-8 ">
          <Logo />
          <p className="text-xl font-semibold text-accent-foreground first-letter:text-4xl ">
            {TEXTS.SITE_DESCRIPTION}
          </p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
