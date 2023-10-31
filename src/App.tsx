import {
  useGuardianNewsQuery,
  useNYTNewsQuery,
  useNewsAPIQuery,
} from "queries";

function App() {
  const { data } = useGuardianNewsQuery();
  const { data: nyt } = useNYTNewsQuery();
  const { data: news } = useNewsAPIQuery();

  return <div>app</div>;
}

export default App;
