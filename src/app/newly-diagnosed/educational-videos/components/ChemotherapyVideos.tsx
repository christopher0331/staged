import React from 'react';
import { VideoItem } from '../components/VideoItem';
import { VideoSection } from '../components/VideoSection';



export const ChemotherapyVideos: React.FC = () => {
  return (
    <VideoSection id="chemo" title="Chemotherapy and Targeted Agents" color="teal">
      <VideoItem 
        title="Current Treatment Options for Leiomyosarcoma"
        presenter="Dr. Neeta Somaiah, Sarcoma Medical Oncologist, MD Anderson Cancer Center"
        date="June 20, 2024"
        description="Hosted by the NLMSF"
      />
      
      <VideoItem 
        title="How patient co-morbidities can impact chemotherapy treatment"
        presenter="Dr. Elise Nassif, Sarcoma Medical Oncologist, MD Anderson Cancer Center"
        date="April 14, 2023"
        description="Hosted by the NLMSF"
        link="https://youtu.be/qcwqPNfPkpA"
      />
      
      <VideoItem 
        title="The Use of Trabectedin in the Treatment of LMS"
        presenter="Dr. Jonathan Trent, Sarcoma Medical Oncologist, Sylvester Comprehensive Cancer Center"
        date="January 29, 2023"
        description="Hosted by the NLMSF"
        link="https://youtu.be/efuZXkaRncQ"
      />
      
      <VideoItem 
        title="The Use of Votrient in the Treatment of Sarcomas/Leiomyosarcoma"
        presenter="Dr. Neeta Somaiah, Sarcoma Medical Oncologist, MD Anderson Cancer Center"
        date="January 20, 2023"
        description="Hosted by the NLMSF"
        link="https://youtu.be/zk6CNU11VE0"
      />
    </VideoSection>
  );
};
