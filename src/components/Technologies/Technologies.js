import React from 'react';
import {DiCode, DiFirebase, DiJavascript, DiJavascript1, DiReact, DiUbuntu, DiUnitySmall, DiZend} from 'react-icons/di';
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
              <DiCode size={"3rem"} />
              <ListContainer>
                  <ListTitle>Front-End</ListTitle>
                  <ListParagraph>
                      Javascript <br />
                       TypeScript <br />
                      CSS / SASS <br />
                      HTML <br />
                      JSON
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiUbuntu size={"3rem"} />
              <ListContainer>
                  <ListTitle>Back-End</ListTitle>
                  <ListParagraph>
                      Java  <br />
                      AWS  <br />
                      MongoDB <br />
                      MySQL <br />
                      Firebase <br />
                      Docker  <br />
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiReact size={"3rem"} />
              <ListContainer>
                  <ListTitle>Frameworks / Libraries</ListTitle>
                  <ListParagraph>
                      ReactJs / Redux  <br />
                      Node.Js <br />
                      MaterialUI
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiUnitySmall size={"3rem"} />
              <ListContainer>
                  <ListTitle>Game-Dev</ListTitle>
                  <ListParagraph>
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
