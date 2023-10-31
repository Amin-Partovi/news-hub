import { useGuardianNewsQuery } from "queries";
import React from "react";

function App() {
  const { data } = useGuardianNewsQuery();

  return <div>app</div>;
}

export default App;
