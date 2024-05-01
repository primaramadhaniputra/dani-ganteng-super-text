import React from "react";
import {Text} from "../src";
import ReactDOM from "react-dom/client";

const App = () => (
  <div>
    <Text
      currency={{
        locales: "id-ID",
        options: {
          style: "currency",
          currency: "IDR",
        },
      }}
      style={{fontSize: "50px"}}
    >
      1000000
    </Text>
    <div style={{display: "flex", gap: "20px"}}>
      <Text
        truncate={{
          from: 0,
          to: 16,
        }}
        style={{fontSize: "50px"}}
      >
        NO MY TEXT TRUNCATE
      </Text>
      <Text style={{fontSize: "50px"}}>(GUESS WHAT ?)</Text>
    </div>

    <Text
      style={{fontSize: "50px"}}
      highlight={{
        highlightText: ["DANI ADALAH", "GANTENG"],
        highlightStyle: {
          color: "white",
          fontWeight: "bold",
          background: "blue",
          fontSize: "30px",
          textDecoration: "underline overline",
        },
      }}
    >
      highlight DANI ADALAH MANUSIA GANTENG
    </Text>
    <Text style={{fontSize: "50px"}}>DOING NOTHING</Text>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
