import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header";
import Home from "./pages/home";


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Home />
    </QueryClientProvider>
  )
}

export default App;
