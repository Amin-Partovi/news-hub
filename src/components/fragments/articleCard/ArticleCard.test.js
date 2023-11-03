import { render, screen } from "@testing-library/react";
import { dateToShortFormat } from "utils";
import ArticleCard from "./ArticleCard";

test("ArticleCard renders with required props", () => {
  const props = {
    author: "John Doe",
    pubDate: "2023-11-02T15:53:51Z",
    title: "Sample Article",
    webUrl: "https://example.com/sample-article",
    logo: "logo-url",
    sectionName: "Sample Section",
  };

  render(<ArticleCard {...props} />);

  screen.getByText(props.title);
  screen.getByText(props.author);
  screen.getByText(dateToShortFormat(props.pubDate));
  screen.getByText(props.sectionName);
  const href = screen.getByRole("link").getAttribute("href");
  expect(href).toBe(props.webUrl);
});
