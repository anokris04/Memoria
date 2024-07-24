import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Header from "./components/Header";
import FooterComp from "./components/FooterComp";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create-post" element={<CreatePost/>} />
              <Route path="/update-post/:postId" element={<UpdatePost/>} />
            </Route>
            <Route path="/post/:postSlug" element={<PostPage />} />
          </Routes>
        </div>
        <FooterComp />
      </BrowserRouter>
    </div>
  );
};

export default App;
