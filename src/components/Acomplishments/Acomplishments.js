import React from 'react';

import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2021, text: 'SupErWin Studios LLC'},
 /* { number: 2021, text: 'GIOTM LLC', },*/
    { number: 2021, text: 'McDaniels Trucking & Logistics LLC', },
  { number: 2021, text: 'Budget Cars For Less LLC', },
];

const Accomplishments = () => (
 <Section  id="companies">
   <SectionTitle>Companies</SectionTitle>

   <Boxes>
     {data.map((card, index) => (
         <Box key={index}>

           <BoxNum>{card.number}</BoxNum>
           <BoxText>{card.text}</BoxText>

         </Box>
     ))}
   </Boxes>
 </Section>
);

export default Accomplishments;
