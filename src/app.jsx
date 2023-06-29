import { Layout } from "@/components/common";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "@/pages";

function App() {
  let basename = "/";

  const matchPreviewDeployment = window.location.pathname.match(/preview\/pr-\d+/);

  if (matchPreviewDeployment) {
    basename += matchPreviewDeployment[0];
  }

  return (
    <Layout>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
