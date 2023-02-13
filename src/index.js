import React from "react";
import './index.css';
import {createRoot} from "react-dom/client";
import GifApp from "./GifApp";

const divRoot=document.querySelector('#root');
const root=createRoot(divRoot)

root.render(<GifApp />)