---
translationKey: prep-2026-09-infrastructure
locale: en
sourceLang: de
sourceVersionHash: "b08b01e8ad3538cf2c121a9147f5a338b538daca"
translationStatus: machine
slug: reproducible-infrastructure-and-test-access-prepared
title: "Why demo operation and production operation are deliberately separated"
summary: "IncluLearn.AI's technical foundation is being built reproducibly and with clear responsibility boundaries. The public test demo can be deployed automatically, while remaining deliberately separate from later production operation with real data and stronger security requirements."
publishedAt: 2026-09-22T17:02:00+02:00
updatedAt: 2026-09-23T08:32:00+02:00
event:
  start: 2026-09-10
  end: 2026-09-21
projectPhase: preparation
retroactive: true
category: project-progress
format: article
keyFindings:
  - "Host infrastructure, application and individual processing services have separate technical responsibilities so that changes remain traceable and services replaceable."
  - "The VM is managed as a reproducible target state wherever practical rather than through undocumented manual changes."
  - "The public test path serves the demo and is not evidence that production-grade data, rights or security processes are already complete."
  - "For a later production path, application rollback, data restoration and the deployment runner's trust boundary are treated as separate concerns."
openQuestions:
  - "Which operational and recovery requirements must be demonstrated before real pilot data are introduced?"
  - "Which processing services need local execution, and which might later run externally under suitable data-protection conditions?"
partnerQuestions:
  - "Which availability, recovery or institutional-integration requirements would be indispensable for a realistic pilot in your organisation?"
related:
  - prep-2026-09-vision-prototype
  - prep-2026-09-processing-tts
  - prep-2026-09-ai-governance
dossiers:
  - prep-2026-09
tags:
  - Infrastructure
  - Reproducibility
  - Deployment
  - Security
  - Responsibility boundaries
authors: []
evidence: project-source
sources:
  - title: "IncluLearn.AI Vision Prototype"
    url: "https://inclulearn-test.owli-ai.com/"
    kind: official-primary
aiAssisted: true
featured: false
draft: false
---

## In brief

For external readers, technical infrastructure matters when it enables a subject-relevant property: **changes should be reproducible, test operation must not be confused with production, and security or recovery questions should be addressed before the first real data incident.**

Host, application and processing services are therefore deliberately separated.

## Three layers with different responsibilities

The current architecture distinguishes:

### Host and base infrastructure

The project VM provides the operating system, container runtime, network foundations, tunnel, runner and host security. Its target state is described through Ansible, Docker Compose and versioned scripts wherever practical.

### Application

The web platform owns its source code, container build, demo Compose definition and application-level deployment logic.

### Processing services

Independent services such as text to speech own their own code, API contract, tests and later containers. A separate integration layer should coordinate only those service versions that are actually integrated.

These boundaries reduce unnecessary coupling. Replacing a TTS engine, for example, should not require changes throughout the web interface and host configuration if the service contract remains stable.

## Reproducible target state rather than "it works on this server"

The VM repository follows the principle of describing configuration as code or versioned documentation wherever possible.

This includes the Docker baseline, reproducible performance baselines, local model runtime, operational tools and test-deployment infrastructure.

The long-term benefit is traceability: if a change causes problems, it should be possible to understand **what** changed and how a defined state can be restored.

## The public demo is intentionally only a test path

The vision prototype is publicly reachable. The underlying web application remains locally bound, while external access is provided through an outbound tunnel.

More important than the network detail is the editorial distinction: **this path exists for the test demo.**

It does not mean that all requirements for real user or examination data have already been satisfied. Productive authentication, full backend persistence and the later processing services are not yet integrated as one production system.

## Deployment is not a separate project achievement

The earlier newsroom treated the automated demo deployment path as its own news item. Editorially, that was too technical and granular.

It is more useful to treat deployment as part of the same infrastructure decision: application and host have separate responsibilities, and demo changes can be built, checked and deployed reproducibly.

That is necessary preparation, but not sufficient proof of production readiness.

## Rollback is not the same as data restoration

The project distinguishes:

- **application rollback** — returning from a faulty software version,
- **data restore** — recovering stored data after loss or corruption.

They require different tests and evidence.

While the vision prototype uses synthetic demo data, the risk is limited. Before productive data are introduced, this becomes a central operational requirement.

## The deployment runner is a trust boundary

Automated deployment means that a runner is allowed to make changes to the target environment. The runner therefore becomes security-relevant itself.

The infrastructure planning treats it as a separate trust boundary that needs appropriate review before production use. Concrete internal security details are intentionally not published in the newsroom.

## Why this matters to partners

Media centres, universities and other organisations do not need to care which repository owns a Compose file.

The relevant questions are:

- Can a pilot be updated reproducibly?
- Can a faulty version be rolled back?
- Are data recovery and software rollback planned separately?
- Is test operation clearly separated from production?
- Can individual services later be replaced without rebuilding the whole system?

These questions become more important as the project moves closer to real pilot data.
