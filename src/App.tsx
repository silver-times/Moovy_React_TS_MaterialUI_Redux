import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
// importing Pages
import Homepage from "./pages/Homepage";
import DetailsPage from "./pages/DetailsPage";
import RatingsPage from "./pages/RatingsPage";
import NotFoundPage from "./pages/NotFoundPage";
// importing components
import Navbar from "./components/Navbar";
import theme from "./styles/theme";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/details/:imdbID" element={<DetailsPage />} />
            <Route path="/ratings" element={<RatingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
