import {
  useGuardianNewsQuery,
  useNYTNewsQuery,
  useNewsAPIQuery,
} from "queries";

function App() {
  const { data } = useGuardianNewsQuery();
  const { data: nyt } = useNYTNewsQuery();
  const { data: news } = useNewsAPIQuery();

  console.log({ data, nyt, news });

  return <div>app</div>;
}

export default App;
