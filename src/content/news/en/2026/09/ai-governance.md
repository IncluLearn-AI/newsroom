---
translationKey: prep-2026-09-ai-governance
locale: en
sourceLang: de
sourceVersionHash: "be8f16bfca8bca922c30cee9d771d1822d5dbc57"
translationStatus: machine
slug: ai-governance-and-human-review-established
title: "AI may prepare — but not approve itself: four governance rules for IncluLearn.AI"
summary: "IncluLearn.AI deliberately separates AI involvement, subject review and approval. Human ownership, risk-based review, provenance and cautious data classification are intended to make AI useful without transferring responsibility to the system."
publishedAt: 2026-09-22T17:04:00+02:00
updatedAt: 2026-09-23T08:31:00+02:00
event:
  start: 2026-09-13
  end: 2026-09-21
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "Creation and review status are separate dimensions: AI-generated content can later be human-verified while remaining traceable as AI-generated."
  - "AI systems and agents must never classify their own output as VERIFIED or APPROVED."
  - "Human review is risk-based: plausibility checking, verification and approval have different depths and purposes."
  - "Personal output and accessibility preferences are not permission roles and must not automatically be interpreted as medical diagnoses."
openQuestions:
  - "Which review depth is appropriate for which artefact class and use case without making professional conversion unnecessarily slow?"
  - "How can provenance become understandable in the future platform without overwhelming users with technical metadata?"
partnerQuestions:
  - "Which information do you need in order to trust and efficiently review an AI-prepared subject representation?"
  - "Where in your workflow should human approval remain mandatory even if automated checks become very strong?"
related:
  - prep-2026-09-vision-prototype
  - prep-2026-09-requirements
  - prep-2026-09-service-priorities
dossiers:
  - prep-2026-09
tags:
  - AI governance
  - Human review
  - Provenance
  - Data classification
  - Responsibility
authors: []
evidence: project-source
sources: []
aiAssisted: true
featured: true
draft: false
---

## In brief

IncluLearn.AI aims to use AI extensively for research, preprocessing, structuring and generation. That should not make responsibility for subject-relevant results disappear into a model or agent.

The governance therefore does not reduce the question to "AI allowed" versus "AI forbidden". It uses four practical rules: **assign responsibility, make AI involvement visible, choose review depth according to risk, and treat data according to its protection needs.**

## Rule 1: AI involvement and review status are different

The governance first records **how** an artefact was created:

- human,
- AI-assisted,
- AI-generated,
- AI-agent.

Separately, it records **how far a human has reviewed it**:

- unreviewed,
- plausibility checked,
- verified,
- approved for a defined purpose.

This avoids a common confusion. Content can be strongly AI-generated and still later be carefully verified by a human. Conversely, human-created content is not automatically approved.

## Rule 2: A system may not approve itself

IncluLearn.AI agents must not classify their own output as VERIFIED or APPROVED.

Automated tests, schema checks and consistency checks can provide evidence, but they do not simulate human review.

External publication, productive deployment, rights changes and other consequential actions require explicit human approval.

The newsroom already follows this principle: an agent can research and prepare a Draft PR, but publication follows human approval.

## Rule 3: Review depth depends on purpose and risk

Human review does not simply mean that someone has read the output once.

The governance distinguishes:

### Plausibility checked

Suitable for internal working states. Review focuses on obvious subject or logical errors and conspicuous hallucinations.

### Verified

For subject-relevant use. Depending on the artefact, this can include checking claims against original sources, reproducing calculations, testing code, or checking semantic equivalence and usability of accessible representations.

### Approved

Approval applies to a **specific purpose**, such as internal pilot use, teaching or publication. It does not automatically cover other purposes.

For the later platform, "subject approved" and "publicly provided" must therefore remain different states.

## Rule 4: Accessibility preferences are personal context, not roles

IncluLearn.AI may later support individual output preferences such as mathematical notation, level of detail, screen-reader or Braille settings, or audio/tactile preferences.

The governance deliberately specifies that:

- such preferences are **not permission roles**,
- they should not be modelled as medical diagnoses,
- once linked to an identifiable account they form personal-data context,
- whether special categories of personal data are involved depends on actual content and context,
- institutional administrators should not automatically see personal output profiles.

## Data classes help determine appropriate AI services

The project uses four basic protection classes:

- **PUBLIC**
- **INTERNAL**
- **CONFIDENTIAL**
- **RESTRICTED**

If classification is unclear, the stricter plausible class applies temporarily.

This matters because a powerful external AI service is not automatically appropriate for every data class. A modular architecture can use local and external components differently depending on purpose and protection needs.

## Provenance should make review more efficient

Provenance does not mean displaying every technical operation in the main interface.

For relevant results, it should remain possible to determine:

- which source and version were used,
- which AI or agent participated,
- which automated steps or rules were applied,
- which version a human reviewed,
- for which purpose it was approved.

If several output formats later derive from the same semantics, this traceability can help avoid repeating the same corrections in multiple places.

## Governance should enable research, not block it

The documentation is project-specific and does not replace binding THM rules or formal legal review.

Its pragmatic goal is to increase documentation and control where influence, autonomy, personal data, external impact or potential harm increase, while avoiding unnecessary bureaucracy for simple assistance.

The resulting product question is central to IncluLearn.AI: **How much automation can we use while keeping the points of human responsibility visible and workable?**
