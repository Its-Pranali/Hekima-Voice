import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main.jsx";
import HekimaVoiceSite from "./HekimaVoiceSite.jsx";
import HekimaVoicePreview from "./HekimaVoicePreview.jsx";
import HekimaVoice from "./components/pages/HekimaVoice.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HekimaVoice />} />
          <Route path="/site" element={<HekimaVoiceSite />} />
          <Route path="/preview" element={<HekimaVoicePreview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
