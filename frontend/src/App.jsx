import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import ReviewPage from "./pages/ReviewPage";
import "./App.css";

function App() {
  const [review, setReview] = useState(``);

  return (
    <>
      <Routes>
        <Route path="/" element={<ReviewPage />} />
      </Routes>
    </>
  );
}

export default App;
