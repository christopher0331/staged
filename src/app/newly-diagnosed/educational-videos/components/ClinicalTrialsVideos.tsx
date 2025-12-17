import React from 'react';
// Explicitly import with full path to help TypeScript resolve the module
import { VideoItem } from '../components/VideoItem';
import { VideoSection } from '../components/VideoSection';

export const ClinicalTrialsVideos: React.FC = () => {
  return (
    <VideoSection id="clinical-trials" title="Clinical Trials" color="red">
      <VideoItem 
        title="General discussion about clinical trials and Peposertib (M3814) Trial"
        presenter="Dr. Candace Haddox, Dana-Farber Cancer Institute and Harvard Medical School"
        date="February 26, 2025"
        description="Presentation of the novel Phase 1 Clinical Trial using Peposertib (M3814) and low dose Liposomal Doxorubicin in Patients with Metastatic Leiomyosarcoma and other Soft Tissue Sarcomas"
        link="https://youtu.be/jVMw7irewYI"
      />
      
      <VideoItem 
        title="Zanzalintinib (XL092) Clinical Trial for Leiomyosarcoma"
        presenter="Dr. Seth Pollack, Lurie Cancer Center, Northwestern University"
        date="January 31, 2025"
        description="Discussion of the Phase II Clinical Trial for Leiomyosarcoma patients with metastatic or surgically unresectable tumors using Zanzalintinib (XL092) (a Tyrosine Kinase Inhibitor)"
        link="https://youtu.be/h4mi-aJT1tk"
      />
      
      <VideoItem 
        title="STRASS 2/3 Clinical Trial for Retroperitoneal Leiomyosarcoma"
        presenter="Dr. John Mullinax, Moffit Cancer Center"
        date="January 2025"
        description="Discussion of the STRASS 2/3 Clinical Trial for the Initial Treatment of Retroperitoneal Leiomyosarcoma and Liposarcoma"
        link="https://youtu.be/EPeR4Wui3Bs"
      />
      
      <VideoItem 
        title="Phase 1a/2 Clinical Trial of GI-102 for Advanced Sarcoma"
        presenter="Dr. Vishu Avutu, Memorial Sloan Kettering Cancer Center"
        date="August 2024"
        description="GI-102 works by boosting the power of your immune system to find and kill cancer cells by blocking CTLA-4 and increasing immune cells through IL-2"
        link="https://youtu.be/kfOK0sNa4JQ"
      />
      
      <VideoItem 
        title="Clinical Trials Perspectives: Panel Discussion"
        description="Panel discussion by Sarcoma Medical Oncologists"
        date="February 2024"
        link="https://youtu.be/ioL0850rt7A"
      />
      
      <VideoItem 
        title="Lurbinectedin Clinical Trial Overview"
        presenter="Dr. Gregory Cote, Massachusetts General Hospital"
        date="August 8, 2023"
        description="Dr. Cote provides a thorough overview of how clinical trials are done to bring new drugs such as Lurbinectedin to patients, and discusses his current clinical trial using Lurbinectedin with Doxorubicin"
        link="https://youtu.be/AU46FmcSc3Y"
      />
      
      <VideoItem 
        title="Cabozantinib Combined with PD-1 and CTLA-4 Inhibition Trial"
        presenter="Dr. Brian Van Tine, The Siteman Cancer Center, Washington University"
        date="July 20, 2023"
        description="Updates on ongoing clinical trials for leiomyosarcoma patients including Cabozantinib with immunotherapy, the SUNRISE Trial, and more"
        link="https://www.youtube.com/watch?v=ZHpMtNTwSRw"
      />
      
      <VideoItem 
        title="Updates on Three Promising Active LMS Clinical Trials"
        presenter="Dr. Brian Van Tine, The Siteman Cancer Center, Washington University"
        date="April 14, 2023"
        link="https://youtu.be/V80SxCwx_cE"
      />
      
      <VideoItem 
        title="Clinical Trials in Soft Tissue Sarcoma: The Efficacy of Early-Phase Clinical Trials"
        presenter="Dr. Elise Nassif, MD Anderson Cancer Center"
        date="September 21, 2022"
        link="https://youtu.be/vArSCfUnAbM"
      />
      
      <VideoItem 
        title="Unesbulin: New Treatment for Leiomyosarcoma (Upcoming Clinical Trial)"
        presenter="Dr. Brian Van Tine, Siteman Cancer Center, Washington University"
        date="June 28, 2022"
        link="https://youtu.be/HbwUvXcl7wg"
      />
      
      <VideoItem 
        title="New Treatment Approaches for LMS in Preclinical or Clinical Trials"
        presenter="Dr. Matthew Ingham, Columbia University Medical Center"
        date="June 8, 2022"
        description="Discussion on new treatment approaches for LMS that are in preclinical or clinical trials"
        link="https://youtu.be/mY2q7q5VOlA"
      />
    </VideoSection>
  );
};


