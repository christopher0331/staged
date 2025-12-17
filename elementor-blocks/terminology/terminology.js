(function(){
  const el = (sel, root=document) => root.querySelector(sel);
  const listEl = document.getElementById('nlmsf-term-list');
  const inputEl = document.getElementById('nlmsf-term-input');
  if (!listEl || !inputEl) return;

  const terms = [
    {t:'Active comparator arm', d:'The group of patients that is given an effective (or potentially effective) treatment as opposed to a placebo comparator (“sugar pill”) in a clinical trial, which is then compared to the experimental arm. Also called Active Control.'},
    {t:'Adverse event', d:'An occurrence that has a negative impact on the health or well-being of a patient in a clinical trial during or within a certain length of time after the study.'},
    {t:'Blinded study', d:'A type of study in which the patients (single-blinded) or both the patients and their doctors (double-blinded) do not know which drug or treatment is being given.'},
    {t:'Cancer recurrence', d:'Cancer that has come back, usually after a period of time during which the cancer could not be detected.'},
    {t:'Compassionate use', d:'A way for patients with a serious disease or condition who have no other treatment options to gain access to an investigational drug that has not been FDA approved for that disease or condition. Also referred to as expanded access.'},
    {t:'Dose escalation study', d:'A type of study where enrolled patients receive different doses of the drug or investigational agent to determine the recommended phase 2 dose (RP2D).'},
    {t:'Dose limiting toxicities', d:'Side effects of a treatment that are serious enough to prevent an increase in dose of that treatment.'},
    {t:'Drug holiday', d:'When a patient does not take a medication for a specified period. Can be temporary and last anywhere from a few days to months. Also referred to as a medication vacation.'},
    {t:'Eligibility criteria', d:'A set of characteristics defined by the research investigator based on safety and efficacy of the treatment, used to determine whether a patient can enroll on a clinical trial.'},
    {t:'Endpoint', d:'In clinical trials, an outcome that can be measured objectively to assess whether a treatment worked.'},
    {t:'Exclusion criteria', d:'A type of eligibility criteria. These are a set of characteristics used to determine when a patient cannot participate in a clinical trial.'},
    {t:'First line therapy', d:'The first treatment given for a disease. Often part of a standard set of treatments. Also called induction therapy, primary therapy and primary treatment.'},
    {t:'Generic drug', d:'A drug manufactured to be the same as an already approved brand-name drug with the same active ingredient(s), dosage, route of administration, and safety profile.'},
    {t:'Inclusion criteria', d:'The characteristics required for entry into a clinical trial. Examples: men and women between certain ages; specific disease characteristics.'},
    {t:'Informed consent', d:'Process in which patients are given important information, including possible risks and benefits, of a treatment, genetic testing or a clinical trial.'},
    {t:'Institutional Review Board (IRB)', d:'A group of scientists, doctors, clergy, and patient advocates that reviews and approves the detailed plan for a clinical trial.'},
    {t:'In vitro drug testing', d:'Evaluation of a drug in a laboratory within a test tube or laboratory dish.'},
    {t:'In vivo drug testing', d:'Evaluation of a drug in a living organism, such as an animal or human body, and not in a test tube or laboratory dish.'},
    {t:'Off label', d:'The use of a drug for a condition that does not have an FDA approved indication.'},
    {t:'Open-label study', d:'A type of study in which both the doctors and the patients are aware of the treatment that is being given.'},
    {t:'Orphan drug', d:'A drug used to treat, prevent, or diagnose an orphan disease. In the U.S., a rare disease affects fewer than 200,000 people.'},
    {t:'Placebo', d:'An inactive drug or treatment that looks the same as, and is given the same way as, an active drug or treatment being tested.'},
    {t:'Protocol', d:'Detailed plan of how a new drug will be studied, including what the study will do, how, and why.'},
    {t:'Randomization', d:'The process by which participants in clinical trials are assigned (by chance) to separate groups that are given different treatments.'},
    {t:'Recommended phase 2 dose (RP2D)', d:'The dose of a drug or combination identified in a Phase 1 dose-finding study for continued study.'},
    {t:'Response Evaluation Criteria in Solid Tumors (RECIST)', d:'A standard way to measure how well a patient responds to treatment (tumors shrink, stay the same, grow, or spread).'},
    {t:'Risk-Benefit Ratio', d:'An analysis that determines the potential harm (risk) versus the potential advantages (benefit) of a treatment.'},
    {t:'Schedule of assessments', d:'A timeline of activities (imaging, blood work, doctor visits) while enrolled in a trial.'},
    {t:'Standard of care', d:'Treatment for a disease that is accepted and widely used by doctors.'},
    {t:'Subject', d:'A person participating in a clinical trial.'},
    {t:'Treatment arm or Experimental arm', d:'The group of patients given the new treatment under evaluation.'},
    {t:'Wash-out', d:'A required period of time without treatment before a patient enters a clinical trial.'},
    {t:'Disease free survival (DFS)', d:'The average length of time from the start of treatment that patients remain cancer free.'},
    {t:'Overall response rate (ORR)', d:'Also called Objective response rate. The percentage of patients whose cancer shrinks or disappears after treatment.'},
    {t:'Overall survival (OS)', d:'The average length of time patients are alive after the start of treatment.'},
    {t:'Progression free survival (PFS)', d:'The average length of time after the start of treatment in which a person is alive and their cancer does not grow or spread.'},
    {t:'Time to treatment discontinuation (TTD)', d:'The amount of time from when a treatment was started to when it was stopped.'}
  ];

  const sorted = [...terms].sort((a,b)=>a.t.localeCompare(b.t, undefined, {sensitivity:'base'}));

  function render(items){
    listEl.innerHTML = '';
    if (!items.length){
      listEl.innerHTML = '<div class="nlmsf-term-empty">No results found.</div>';
      return;
    }
    const frag = document.createDocumentFragment();
    items.forEach(({t,d}, idx)=>{
      const id = 'term-'+idx;
      const row = document.createElement('div');
      row.className = 'nlmsf-term-row';
      row.innerHTML = `
        <button class="nlmsf-term-toggle" aria-expanded="false" aria-controls="${id}">
          <span class="nlmsf-term-word">${t}</span>
          <svg class="nlmsf-term-caret" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M5.5 7.5l4.5 5 4.5-5"/></svg>
        </button>
        <div id="${id}" class="nlmsf-term-panel" role="region" aria-label="Definition of ${t}">
          <p class="nlmsf-term-def">${d}</p>
        </div>`;
      frag.appendChild(row);
    });
    listEl.appendChild(frag);
  }

  function filter(q){
    const qn = q.trim().toLowerCase();
    if (!qn) return render(sorted);
    const out = sorted.filter(({t,d}) => t.toLowerCase().includes(qn) || d.toLowerCase().includes(qn));
    render(out);
  }

  // Interactions
  listEl.addEventListener('click', (e)=>{
    const btn = e.target.closest('.nlmsf-term-toggle');
    if (!btn) return;
    const panel = btn.nextElementSibling;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    panel.style.maxHeight = expanded ? '0px' : panel.scrollHeight + 'px';
  });

  listEl.addEventListener('keydown', (e)=>{
    const btn = e.target.closest('.nlmsf-term-toggle');
    if (!btn) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); btn.click();
    }
  });

  inputEl.addEventListener('input', (e)=> filter(e.target.value));

  // Initial render
  render(sorted);
})();
