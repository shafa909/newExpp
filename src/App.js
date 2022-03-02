import "./css/reset.css";
import PageRoutes from "./routes/";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state);
  console.log(cart);
  const [title, setTitle] = useState("Exceptionly");

  useEffect(() => {
    document.title = cart;
  }, [cart]);
  return <PageRoutes />;
}

export default App;
