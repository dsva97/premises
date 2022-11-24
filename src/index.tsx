import fs from "fs";
import path from "path";
import React from "react";
import ReactDOM from "react-dom/server";
import { App } from "./App";

const distPath = path.join(__dirname, "..", "dist");
const indexDistPath = path.join(distPath, "index.html");

const contentIndex = ReactDOM.renderToString(<App />);

fs.writeFileSync(indexDistPath, contentIndex);
