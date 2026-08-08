import { useState } from "react";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import Programs from "./Programs";
import Impact from "./Impact";
import Support from "./Support";
import Contact from "./Contact";
import SpreadHope from "./SpreadHope";
import Gallery from "./Gallery";

function HekimaVoice() {
    return (
        <>
            <Hero />
            <WhoWeAre />
            <WhatWeDo />
            <Programs />
            <Impact />
            <SpreadHope />
            <Support />
            <Contact />
            <Gallery />
        </>
    );
}
export default HekimaVoice;