import { useState } from "react";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import Programs from "./Programs";
import Impact from "./Impact";
import Support from "./Support";
import Contact from "./Contact";
import SpreadHope from "./SpreadHope";

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
        </>
    );
}
export default HekimaVoice;