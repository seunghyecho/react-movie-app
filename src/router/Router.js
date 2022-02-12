import { Routes, Route } from "react-router-dom";
import Layout from "../component/layout";
import Home from "../pages/Home";
import Detail from "../pages/movie/Detail";
import About from "../pages/About";
import Article from "../pages/Article";
import Articles from "../pages/Articles";
import Profile from "../pages/Profile";
import LogIn from "../pages/auth/login";
import Text from "../pages/Text";
import Notfound from "../pages/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />}></Route>
        </Route>
        {/* <Route path="/:id" element={<Text />}></Route> */}
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
}
