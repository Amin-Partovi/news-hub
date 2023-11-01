import React from "react";
import { Container } from "components/layouts";
import { LinkedinIcon, GithubIcon } from "lucide-react";
import { EXTERNAL_LINKS } from "utils";

const Footer = (): React.ReactElement => {
  return (
    <footer className="bg-primary-foreground">
      <Container>
        <div className="flex justify-end py-8 space-x-6">
          <a
            href={EXTERNAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noreferrer"
            aria-label="link to linkedin profile"
          >
            <LinkedinIcon />
          </a>
          <a
            href={EXTERNAL_LINKS.GITHUB}
            target="_blank"
            rel="noreferrer"
            aria-label="link to github profile"
          >
            <GithubIcon />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
