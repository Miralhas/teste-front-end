import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header";
import Home from "./pages/home";
import { ModalProvider } from "./contexts/modal-context";

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Header />
        <Home />
      </ModalProvider>
    </QueryClientProvider>
  )
}

export default App;
