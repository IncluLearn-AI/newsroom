---
translationKey: prep-2026-09-demo-deployment
locale: en
sourceLang: de
translationStatus: machine
slug: automated-demo-deployment-path-prepared
title: "Automated demo deployment path prepared"
summary: "A reproducible deployment path for the test demo was prepared between the application and VM, with clear repository boundaries, a runner and documented security gates."
publishedAt: 2026-09-22T17:09:00+02:00
event:
  start: 2026-09-17
  end: 2026-09-21
projectPhase: preparation
retroactive: true
category: project-progress
format: brief
dossiers:
  - prep-2026-09
tags:
  - Deployment
  - CI/CD
  - Security
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

An automated deployment path for the public test demo was prepared between the platform repository and the project VM.

Responsibilities were deliberately separated: the application owns its build, container image and application-level deployment logic, while the VM documentation owns the host target state, runtime environment, tunnel and self-hosted runner.

Security gates for a later production path were documented as well. Application rollback and data restoration are treated as separate operational concerns.

The current path serves the **test demo**. The preparation is intended to make later changes reproducible to build, check and deploy without implying that a production operating state has already been reached.
