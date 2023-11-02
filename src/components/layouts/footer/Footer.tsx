import React from "react";
import { Container } from "components/layouts";
import { LinkedinIcon, GithubIcon } from "lucide-react";
import { EXTERNAL_LINKS } from "utils";

const Footer = (): React.ReactElement => {
  return (
    <footer className="gradient-bg">
      <Container>
        <div className="flex justify-end py-4 space-x-8">
          <a
            href={EXTERNAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noreferrer"
            aria-label="link to linkedin profile"
          >
            <LinkedinIcon color="white" size={30} />
          </a>
          <a
            href={EXTERNAL_LINKS.GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="link to github profile"
          >
            <GithubIcon color="white" size={30} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
