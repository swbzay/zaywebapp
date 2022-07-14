import React from 'react';
import {DiFirebase, DiReact, DiUbuntu, DiUnitySmall, DiZend} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
      <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
        I've worked with a range of technologies from Front-end to Design
    </SectionText>
      <List>
          <ListItem>
              <DiReact size={"3rem"} />
              <ListContainer>
                  <ListTitle>Front-End</ListTitle>
                  <ListParagraph>
                      Experience  <br />
                      Javascript  <br />
                      React.js
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiUbuntu size={"3rem"} />
              <ListContainer>
                  <ListTitle>Back-End</ListTitle>
                  <ListParagraph>
                      Experience  <br />
                      Java <br />
                      NodeJs <br />
                      Databases <br />
                      Firebase
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiUnitySmall size={"3rem"} />
              <ListContainer>
                  <ListTitle>Game-Dev</ListTitle>
                  <ListParagraph>
                      Experience  <br />
                      Unity C# <br />
                      Unreal C++
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
      <SectionDivider />
  </Section>
);

export default Technologies;
