import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./pages/Homepage/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container, ThemeProvider } from "@mui/material";

import { theme } from "./component/config/theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Container> */}
        <Router>
          <div className="App">
            <header>
              <Header />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
          </div>
          <ToastContainer closeOnClick autoClose={3000} />
        </Router>
        {/* </Container> */}
      </ThemeProvider>
    </>
  );
}

export default App;
