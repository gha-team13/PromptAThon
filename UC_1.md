```mermaid
---
title: UC-01 — Stick-Man Use-Case Model
config:
  layout: elk
---
flowchart LR
    actor@{shape: text, label: "👤", pos: "b", h: 48}
    actorLabel["IT Engineering /<br/>Active Directory Administrator"]

    er["Quest Enterprise Reporter"]
    discovery["Discovery Manager"]
    nodes["Localized node servers"]
    ad["On-premises Active Directory<br/>TD Global Forest and standalone domains"]
    database[("Offline SQL database")]
    report["Report Manager"]
    result["Nested-group tree report"]

    actor --- actorLabel
    actorLabel -->|Schedules and initiates| discovery
    discovery -->|Runs discovery job| nodes
    nodes -->|Queries group memberships| ad
    nodes -.->|Does not retrieve| credentials["Hashed credentials<br/>or user passwords"]
    nodes -->|Extracts nested-group data| er
    er -->|Aggregates data| database
    actorLabel -->|Uses| report
    report -->|Queries| database
    report -->|Generates| result
    result --> outcome(["Accurate report<br/>without live AD performance degradation"])

    classDef actorStyle fill:#fdf4ff,stroke:#e879f9,color:#701a75;
    classDef systemStyle fill:#eef2ff,stroke:#818cf8,color:#1e1b4b;
    classDef adStyle fill:#f0fdfa,stroke:#2dd4bf,color:#134e4a;
    classDef dataStyle fill:#f5f3ff,stroke:#a78bfa,color:#3b0764;
    classDef outcomeStyle fill:#f0fdf4,stroke:#4ade80,color:#14532d;
    classDef excludedStyle fill:#fff1f2,stroke:#fb7185,color:#881337;

    class actor,actorLabel actorStyle;
    class er,discovery,nodes,report systemStyle;
    class ad adStyle;
    class database dataStyle;
    class result,outcome outcomeStyle;
    class credentials excludedStyle;
