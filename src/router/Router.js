import { Routes, Route } from "react-router-dom";
import Layout from "../component/layout";
import Home from "../pages/Home";
import Detail from "../pages/movie/Detail";
import About from "../pages/About";
import Article from "../pages/article/Article";
import Articles from "../pages/Articles";
import Profile from "../pages/Profile";
import LogIn from "../pages/auth/login";
import Notfound from "../pages/NotFound";
import Posts from "../pages/article/Posts";
import Comments from "../pages/article/Comments";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/articles" element={<Articles />}>
          <Route index path="/articles/posts" element={<Posts />}></Route>
          <Route path="/articles/comments" element={<Comments />}></Route>
          <Route path=":url" element={<Article />}></Route>
        </Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
}
