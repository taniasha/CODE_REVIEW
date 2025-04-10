import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
// import './main.jsx';
import axios from 'axios';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Markdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
// import "prismjs/components/prism-jsx";
import { highlight } from 'prismjs';
import prism from "prismjs";

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(`function sum(){
    return 1+1}`)
  const [review, setReview] = useState('')

  useEffect(()=>{
    prism.highlightAll()
  },[])
  

  async function reviewCode(){
     const response = await axios.post('http://localhost:3000/ai/get-review',{code})
     setReview(response.data);
  }


  return (
    <>
      <main>
        <div className="left">
          <div className="code">
           <Editor 
           value={code}
           onValueChange = {code=> setCode(code)}
           highlight= {code=> prism.highlight(code, prism.languages.javascript, "javascript")}
           padding = {10}
           style = {{
            fontFamily: "Fira code, Fira Mono, monospace",
            fontSize: 16,
            border: "1px solid #ddd",
            borderRadius: "5px",
            height: "100%",
            width: "100%"
           }} 
          />         
          </div>
          <div className="review" onClick={reviewCode}>Review</div>
        </div>
        <div className="right">
          <Markdown
            rehypePlugins = {[ rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App
