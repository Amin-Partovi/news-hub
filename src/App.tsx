import { PageLayout } from "components/layouts";
import {
  useGuardianNewsQuery,
  useNYTNewsQuery,
  useNewsAPIQuery,
} from "queries";

function App() {
  const { data } = useGuardianNewsQuery();
  const { data: nyt } = useNYTNewsQuery();
  const { data: news } = useNewsAPIQuery();

  return <PageLayout>app</PageLayout>;
}

export default App;
