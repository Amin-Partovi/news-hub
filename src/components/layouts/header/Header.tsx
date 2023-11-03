import React from "react";

import { Container } from "components/layouts";
import { TEXTS } from "texts";
import Logo from "assets/news-hub-logo.png";

const Header = (): React.ReactElement => {
  return (
    <header className="gradient-bg shadow-xl">
      <Container>
        <div className="flex gap-4 items-center py-6">
          <img src={Logo} alt="news hub logo" width={250} />

          <p className="text-xl font-medium text-gray-300 first-letter:text-4xl hidden md:inline">
            {TEXTS.SITE_DESCRIPTION}
          </p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
