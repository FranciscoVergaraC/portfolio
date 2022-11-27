import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {BiPaint} from 'react-icons/bi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br></br>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a whide range of Technologies in the web development world.
      From Back-end to Front-end
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              HTML<br/>
              CSS<br/>
              React.js
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Node.js  <br/>
              Express.js  <br/>
              Databases
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiPaint size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Figma
            </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
