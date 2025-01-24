// src/App.jsx
import { React, useState } from "react";
import WebUSB_TP from "./Components/WebUSB_TP";
import WebBluetooth_TP from "./Components/WebBluetooth_TP";
import { PrintTemplate } from "./Components/PrintTemplate";
import "./App.css";
import icons from "./Components/icons";


const App = () => {
  const [preview, setPreview] = useState(false);
  const small_width_Template = PrintTemplate(32); // For 58mm paper width
  const large_width_Template = PrintTemplate(48); // For 80mm paper width

  return (
    <>
      <div style={{ display: "flex", textAlign: "center" }}>
        <div style={{ fontSize: "10rem", color: "#707070" }}>{icons.printer}</div>
        <div><div style={{ display: "flex", justifyItems: "center", alignItems: "center" }}>
          <h1 style={
            { color: "#000", textAlign: "center" }
          }>
            <span style={
              { color: "#cc0000", fontWeight: "bold" }
            }>Thermal </span>
            Printer </h1>
        </div>
          <div className="btn-container">
            <WebUSB_TP template={small_width_Template} />
            <WebBluetooth_TP template={large_width_Template} />
            <button className="print-btn" onClick={() => setPreview(!preview)}> Preview </button>
          </div>
        </div>

      </div>
      {preview && (
        <div className="preview">
          <h2>Preview</h2>
          <div className="preview-content">
            <div className="receipt">
              <h3>Small Paper Width (58mm)</h3>
              <pre>{small_width_Template}</pre>
            </div>
            <div className="receipt">
              <h3>Large Paper Width (80mm)</h3>
              <pre>{large_width_Template}</pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
