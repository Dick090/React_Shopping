import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Events from "./component/Events";
import Groccery from "./component/Groccery";
// import Home from "./component/Home";
import MyForm from "./component/MyForm";
import Header from "./component/Pages/Header";
import Layout from "./component/Pages/Layout";
import Home from "./component/Pages/Home/Home";
import About from "./component/Pages/About/About";
import Contact from "./component/Pages/Contact";
import NotFound from "./component/Pages/NotFound";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={localStorage.getItem("auth") ? (<Navigate to="/dashboard" />) : (
                  <MyForm />
                )
              }
            />
            <Route path="about"element={localStorage.getItem("auth") ? (<Navigate to="/dashboard" />) : (
            <MyForm />
                )
              }
            />
            <Route path="contact"element={localStorage.getItem("auth") ? (<Navigate to="/dashboard" />
                ) : (
                  <MyForm />
                )
              }
            />
            <Route path="register"element={localStorage.getItem("auth") ? (<Navigate to="/dashboard" />
                ) : (
                  <MyForm />
                )
              }
            />
            <Route path="dashboard"element={localStorage.getItem("auth") ? <Dashboard /> : <MyForm />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>   
  );
}

export default App;
