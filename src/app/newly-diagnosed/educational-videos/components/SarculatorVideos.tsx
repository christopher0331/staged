import React from 'react';
import { VideoItem } from '../components/VideoItem';
import { VideoSection } from '../components/VideoSection';

export const SarculatorVideos: React.FC = () => {
  return (
    <VideoSection id="sarculator" title="Sarculator" color="blue">
      <VideoItem 
        title="The Sarculator Nomogram"
        presenter="Dr. Nam Bui, Stanford Cancer Institute"
        date="August 2024"
        description="What is It and What is Its Role in the Treatment of Patients with Localized Sarcomas in the Extremities and the Retroperitoneal"
        link="https://www.youtube.com/watch?v=V7Rn7ZBCTw8"
      />
    </VideoSection>
  );
};
