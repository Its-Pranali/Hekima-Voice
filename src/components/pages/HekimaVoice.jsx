import { useState } from "react";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import Programs from "./Programs";
import Impact from "./Impact";
import Support from "./Support";
import Contact from "./Contact";

function HekimaVoice() {
    return (
        <>
            <Hero />
            <WhoWeAre />
            <WhatWeDo />
            <Programs />
            <Impact />
            <Support />
            <Contact />
        </>
    );
}
export default HekimaVoice;