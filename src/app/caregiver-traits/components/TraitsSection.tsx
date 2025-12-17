import React from 'react';
import TraitCard from './TraitCard';

const TraitsSection = () => {
  const traits = [
    {
      id: 'compassion',
      title: 'Compassion',
      description: 'Trying to understand what the loved one is experiencing and responding to that. Natural empathy and compassion – gentleness draws us together.',
      traitType: 'compassion' as const
    },
    {
      id: 'patience',
      title: 'Patience',
      description: '"Patience is a virtue" – still remains true! Patience while caregiving enhances calmness to be able to help with treatment side effects and pain management.',
      traitType: 'patience' as const
    },
    {
      id: 'dependability',
      title: 'Dependability/Reliability',
      description: 'Our loved ones are depending on us to travel in the treatment journey with them as much as possible. Being dependable is a balancing act with trying to remain independent. Making a plan on how we will be there with our loved one is key to day-to-day, week-to-week routine so that we remain reliable and dependable to follow through caregiving commitment.',
      traitType: 'dependability' as const
    },
    {
      id: 'flexibility',
      title: 'Flexibility',
      description: 'Great routines established may from time to time require change. Here again, reliability and flexibility are a balance. Moods, care needs, abilities, and behaviors all play a part in the "routine." Empathy and patience come into play once again.',
      linkText: 'Read this article from ASCO about caregiver support in stressful times',
      linkUrl: 'https://www.cancer.net/blog/2020-06/if-you-have-self-doubt-when-caring-loved-one-with-cancer?cmpid=ks_net_blog_dcnews_-_all_06-05-20_blog',
      traitType: 'flexibility' as const
    }
  ];

  return (
    <div className="traits-section">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text mb-6">Key Caregiver Traits</h2>
      {traits.map((trait) => (
        <div id={trait.id} key={trait.id} className="scroll-mt-24">
          <TraitCard
            title={trait.title}
            description={trait.description}
            linkText={trait.linkText}
            linkUrl={trait.linkUrl}
            traitType={trait.traitType}
          />
        </div>
      ))}
    </div>
  );
};

export default TraitsSection;
