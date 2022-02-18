import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import AllCourse from "./Component/AllCourse/AllCourse";
import Footer from "./Component/Footer/Footer";
import About from "./Component/About/About";
import SingleCourse from "./Component/SingleCourse/SingleCourse";
import CategoryCourse from "./Component/CategoryCourse/CategoryCourse";
import Cart from "./Component/Cart/Cart";
import { useEffect, useState } from "react";
import {
  addToDb,
  clearTheCart,
  decreaseDb,
  getStoredCart,
  increaseDb,
  removeFromDb,
} from "./Component/Cart/managecart";

function App() {
  const [cart, setCart] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://amrapi.jstutul.xyz/apiv4/course/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  useEffect(() => {
    if (courses.length) {
      const savedCourses = getStoredCart();
      const storedCart = [];
      for (const key in savedCourses) {
        const addedCourse = courses.find(
          (course) => course.id === parseInt(key)
        );
        if (addedCourse) {
          const quantity = savedCourses[key];
          addedCourse.quantity = quantity;
          storedCart.push(addedCourse);
        }
      }
      setCart(storedCart);
    }
  }, [courses]);
  const handleAddToCart = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
    addToDb(course.id);
    updateCart();
  };
  console.log(cart);
  const updateCart = () => {
    const savedCourses = getStoredCart();
    const storedCart = [];
    for (const key in savedCourses) {
      const addedCourse = courses.find((course) => course.id === parseInt(key));
      if (addedCourse) {
        const quantity = savedCourses[key];
        addedCourse.quantity = quantity;
        storedCart.push(addedCourse);
      }
    }
    setCart(storedCart);
  };
  const removeItem = (id) => {
    console.log(id);
    removeFromDb(id);
    updateCart();
  };
  const handleClearCart = () => {
    clearTheCart();
    updateCart();
  };
  const handlePlusCart = (id) => {
    increaseDb(id);
    updateCart();
  };
  const handleMinusCart = (id) => {
    decreaseDb(id);
    updateCart();
  };
  return (
    <div>
      <Router>
        <Header cartitem={cart}></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/category/:id"
            element={<CategoryCourse />}
          ></Route>
          <Route exact path="/courses" element={<AllCourse />}></Route>
          <Route
            exact
            path="/courses/:id"
            element={<SingleCourse handleAddToCart={handleAddToCart} />}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeItem={removeItem}
                handleClearCart={handleClearCart}
                handlePlusCart={handlePlusCart}
                handleMinusCart={handleMinusCart}
              />
            }
          ></Route>
          <Route exact path="*" element={<Home />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
