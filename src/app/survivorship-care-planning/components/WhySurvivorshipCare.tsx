import React from 'react';

const WhySurvivorshipCare = () => {
  return (
    <div id="why-important" className="rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
        <h2 className="text-2xl font-bold text-white">Why is Survivorship Care Important?</h2>
      </div>
      
      <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            The good news for cancer survivorship is that the numbers are growing, with an estimated 17 million survivors living in the United States alone. Unfortunately, cancer treatments are not without consequence and these survivors are dealing with the long-term effects of treatments with little guidance. The Institute of Medicine (IOM) researched the state of care for cancer survivors and found that little guidance is available for survivors and their healthcare providers to overcome the medical and psychosocial problems that may arise post-treatment.
          </p>
          
          <p className="text-gray-700 mt-5 leading-relaxed">
            The IOM suggests that once a person has completed cancer therapy, he or she should be provided with a summary of the treatments received and a follow up "care plan". This care plan should summarize the potential late effects, their prevention, symptoms, and treatment, recommendations for cancer screening; psychosocial effects, financial issues, recommendations for a healthy lifestyle, genetic counseling, referrals for follow-up care and a list of support resources. While this plan is extremely important, the resources required to create it have made it hard to incorporate into practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySurvivorshipCare;
