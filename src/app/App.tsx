import "@/shared/styles/index.css";
import { AppRouter } from "./router/AppRouter";

import { withProviders } from "./providers";

const App = withProviders(() => {
  return <AppRouter />;
});

export default App;
