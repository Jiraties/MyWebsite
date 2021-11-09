import React from 'react';
import { DiCode, DiCodeBadge, DiFirebase, DiJavascript, DiReact, DiWebplatform, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I worked with plenty of front-end technologies like React , Sass , Typescript and more
    </SectionText>
    <List>
      <ListItem>
        <DiCode size = "3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            JavaScript , TypeScript<br/>HTML , CSS<br/>Sass
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size = "3rem" />
        <ListContainer>
        <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            React JS<br/>Redux<br/>React Router
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeBadge size = "3rem" />
        <ListContainer>
          <ListTitle>Non Web Development</ListTitle>
          <ListParagraph>
          C++ For Unreal Engine<br/>Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
