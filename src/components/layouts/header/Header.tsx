import React from "react";
import { Container } from "components/layouts";
import { TEXTS } from "texts";
import { Logo } from "components/elements";

const Header = (): React.ReactElement => {
  return (
    <header className="gradient-bg shadow-xl">
      <Container>
        <div className="space-y-2 py-6 ">
          <Logo />
          <p className="text-xl font-medium text-gray-300 first-letter:text-4xl ">
            {TEXTS.SITE_DESCRIPTION}
          </p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
