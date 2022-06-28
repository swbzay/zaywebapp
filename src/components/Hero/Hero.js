import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                {/* Welcome to <br /> */}
                Developer
            </SectionTitle>
            <SectionText>
                “We can ignore reality, but we cannot ignore the consequences of ignoring reality."
            </SectionText>
                <Button onClick={() => window.location = 'https://xavionmcdaniels.com/#about'}>Learn More</Button>
        </LeftSection>
    </Section>
);

export default Hero;