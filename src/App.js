import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/pages/auth/Login";
import Layout from "./components/atoms/Layout";
import Header from "./components/organisms/Header";
import Register from "./components/pages/auth/Register";
import ViewProfile from "./components/pages/user/ViewProfile";
import Home from "./components/pages/Home";
import UpdateProfile from "./components/pages/user/UpdateProfile";

function App() {

  return (
    <div className="App">
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view-profile" element={<ViewProfile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
