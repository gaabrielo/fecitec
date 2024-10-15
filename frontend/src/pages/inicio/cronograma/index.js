import React from 'react';

import { Divider, Chip, Button } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import cronogramaPresencial from '../../../json/cronograma_presencial.json';

// import { cronogramaPresencial as linkCronograma } from '../../../json/config.json'

function ItemPresencial(item, i) {
  return (
    <TimelineItem key={i}>
      <TimelineOppositeContent color="text.secondary">
        {item.horario}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {i !== cronogramaPresencial.length - 1 && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <div className="itemTimeline">
          <p>{item.atividade}</p>
          <span>{item.ensalamento}</span>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}

function Cronograma() {
  return (
    <div className="timeline">
      <Divider>
        <Chip
          label="Cronograma do dia 24/10 (segunda-feira)"
          sx={{ fontSize: '1.2rem', padding: '25px 25px' }}
        />
      </Divider>
      <Timeline className="component" position="alternate">
        {cronogramaPresencial.map(ItemPresencial)}
      </Timeline>
      {/* <a href={linkCronograma} download='FECITEC-CRONOGRAMA-PRESENCIAL' style={{ marginBottom: '20px' }}>
                <Button variant='contained' color='success' startIcon={<CloudDownloadIcon />} size='large'>
                    cronograma com instruções
                </Button>
            </a> */}
    </div>
  );
}

export default Cronograma;
