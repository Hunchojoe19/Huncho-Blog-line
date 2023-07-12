import Home from "./pages/Home";
import "./style/style.scss";
import "./media.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Details from "./pages/Details";
import AddBlog from "./pages/AddBlog";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import CategoryBlog from "./pages/CategoryBlog";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import SignIn from "./pages/SignIn";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import TagBlog from "./pages/TagBlog";

function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => setUser(null));
    setActive("login");
    navigate("/login");
  };
  return (
    <>
      <Header
        setActive={setActive}
        active={active}
        user={user}
        handleLogout={handleLogout}
      />
      <ToastContainer position="top-center" />
      <Routes>
        {/* <Route
          path="/"
          element={<Home setActive={setActive} active={active} user={user} />}
        /> */}
        <Route
          path="/search"
          element={<Home setActive={setActive} user={user} />}
        />
        <Route
          path="/single/:id"
          element={<Details setActive={setActive} user={user} />}
        />
        <Route
          path="/add"
          element={user?.uid ? <AddBlog user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/update/:id"
          element={user?.uid ? <AddBlog user={user} /> : <Navigate to="/" />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={<Home setActive={setActive} user={user} active={active} />}
        />
        <Route path="/blogs" element={<Blogs setActive={setActive} />} />
        <Route path="/tag/:tag" element={<TagBlog setActive={setActive} />} />
        <Route
          path="/category/:category"
          element={<CategoryBlog setActive={setActive} />}
        />
        <Route
          path="/login"
          element={<SignIn setActive={setActive} setUser={setUser} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
