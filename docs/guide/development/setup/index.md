---
title: Setup
---

# {{ $frontmatter.title }}

## Clone the repo

```bash
git clone git@github.com:metaera/rosterboss.git
```

## Install dependencies

```bash
yarn install
```

## Start the docker stack

```bash
docker-compose up
```

## Stop the docker stack

```bash
docker-compose down
```

## First time database seed

Run this firrst time you checkout the repo.

```bash
docker-compose up mongosetup
```
