import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! <br />
        I'm Jirat Chutrakul
      </SectionTitle>
      <SectionText>
        Currently im working for SS Developers, a team
        which makes alot of quality web apps and products for generic use
      </SectionText>
      <Button onClick={() => window.location = "#about"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
