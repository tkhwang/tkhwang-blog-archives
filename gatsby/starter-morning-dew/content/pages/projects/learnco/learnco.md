---
title: project - Learnco
slug: projects/learnco
cover: ./learnco-home.png
disqus: true
type: page
---

TL;DR

- @codestates / Feb. 2019 ~ May. 2019
- Full-stack development
  - Front-end : React, Javascript
  - Back-end : Node, Express, GraphQL, Sequelize, MySQL
  - DevOps : AWS EC2, S3, ELB, Cloudfront, Scotty, CircleCI

![learnco-home](https://user-images.githubusercontent.com/365500/58155896-ceabd700-7caf-11e9-8a3e-e883becb2104.png)

## #1. Add user interaction : study status, feedback

### 1-1. Student's study status

- Use can check the completeness of the study contents.
- (1) study contents, (2) homework submit, (3) Overall status
- DB update for storing student's study status / GraphQL API and resolver / Lottie animation in React

![img](https://user-images.githubusercontent.com/365500/58160322-30bd0a00-7cb9-11e9-9074-587bef7a569e.gif)

### 1-2. User feedback on study material

- User view : User can give the feedback of each study contents.
- Admin view : Admin can check all the feedbacks of students on each content.

User view : User can give the feedback of each study contents.

![img](https://user-images.githubusercontent.com/365500/58161210-cd33dc00-7cba-11e9-9914-7ac1bbc377da.gif)

Admin view : Admin can check all the feedbacks of students on each content.

![img](https://user-images.githubusercontent.com/365500/58161216-d02ecc80-7cba-11e9-96dc-835b67345176.gif)

### 1-3. Student's Homework Submit Status

- Admin can register homeworks on each course.

![img](https://user-images.githubusercontent.com/365500/58243044-edcb6700-7d8a-11e9-956f-8a59b7cb9ff3.gif)

- Add REST API to submit homework status
- When PR is submited in github, circleCI script calls REST POST api for submitting homework.

![img](https://user-images.githubusercontent.com/365500/58243062-f2901b00-7d8a-11e9-9224-417c6b2012de.gif)

![img](https://user-images.githubusercontent.com/365500/58160638-d1132e80-7cb9-11e9-8830-da8a75ac0d97.png)

## #2. UI update

### 2-1 User Avatar using Gravatar service

![img](https://user-images.githubusercontent.com/365500/58160854-349d5c00-7cba-11e9-8554-cb9314d2fd8b.png)

### 2-2 Login drawer bar and animation

![img](https://user-images.githubusercontent.com/365500/58069308-aea4e680-7bcf-11e9-90ba-86e56d78e39d.gif)

### 2-3 Apply Card-view UI using ant design

- Ant design card-view

![img](https://user-images.githubusercontent.com/365500/58069384-f7f53600-7bcf-11e9-9f4e-203e9ea55875.png)

### 2-4 Apply Hover Color on mouse event

![img](https://user-images.githubusercontent.com/365500/58161936-2d774d80-7cbc-11e9-9a43-e3b219fc4c31.gif)

### 2-5 Font update for better readability using Google web-font

![img](https://user-images.githubusercontent.com/365500/58156261-ab355c00-7cb0-11e9-92a1-54aee169fde2.png)

## #3 CI/CD pipeline using circleCI

Server @AWS EC2

- Checkin : pull-request merged into dev branch.
- @CircleCI :
- new code

![img](https://user-images.githubusercontent.com/365500/58156565-5e05ba00-7cb1-11e9-9c2b-c37f3e817a93.png)

Client @AWS S3

- checkin : pull-request merged into dev branch.

![img](https://user-images.githubusercontent.com/365500/58156886-1fbcca80-7cb2-11e9-9c1d-0fa77c5dd760.png)
