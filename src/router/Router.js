import { Routes, Route } from "react-router-dom";
import Detail from "../pages/movie/Detail";
import Home from "../pages/Home";
import Text from "../pages/Text";
import Login from "../pages/auth/login";

export default function Router() {
  return (
    <Routes>
      <Route index path="/home" element={<Home />}></Route>
      <Route path="/:id" element={<Text />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route>
    </Routes>
  );
}
