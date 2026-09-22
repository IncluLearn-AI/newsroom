---
translationKey: prep-2026-09-infrastructure
locale: en
sourceLang: de
sourceVersionHash: "bb7afd71f0d989dcb72a3ba89f0e496e5bff19d3"
translationStatus: machine
slug: reproducible-infrastructure-and-test-access-prepared
title: "Reproducible infrastructure and test access prepared"
summary: "The project VM was structured as a versioned target state, with reproducible system configuration, a performance baseline and a secured public test path."
publishedAt: 2026-09-22T17:02:00+02:00
event:
  start: 2026-09-10
  end: 2026-09-12
projectPhase: preparation
retroactive: true
category: project-progress
format: article
dossiers:
  - prep-2026-09
tags:
  - Infrastructure
  - Reproducibility
  - Deployment
authors: []
evidence: project-source
sources: []
aiAssisted: true
featured: false
draft: false
---

## Infrastructure as a versioned target state

The technical basis of IncluLearn.AI was prepared so that changes to the project VM can be reproduced through infrastructure as code, containers and versioned scripts wherever possible. This includes an Ansible structure, a Docker baseline and tools for repeatable system tests.

An initial performance baseline documents CPU, memory and storage characteristics of the provided environment. A local environment for running AI models was prepared as well, without treating this as a final production model architecture.

## Public test access without opening server ports

A public test path was prepared through an outbound tunnel for later demonstrations. The web service remains locally bound on the VM, and the production domain was not switched prematurely.

## Context

This preparation creates a verifiable technical starting point. Credentials, internal security details and administrative accounts are intentionally not documented in the public newsroom.
