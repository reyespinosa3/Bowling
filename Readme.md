# Welcome to the Multiple Bowling League Score Tracker
---
The Multiple Bowling League Score Tracker is an app that will provide one place to store and view bowling scores from a single or multiple bowling leagues. You'll be able to store individual game and league information "in the cloud" and access it from any device. The app will provide you with an overall league bowling average, as well as an individual bowling average.

## Entity Relationship Diagram
---
![alt text](https://i.imgur.com/z2tEJLn.png)
## Technologies Used
---
  * HTML - CSS - Javascript - JQuery
## Wireframes
---
### Home Page
![alt text](https://i.imgur.com/H1bCMMK.png)
### By League Page

### By Game Page

## Routes
---
| URL | HTTP Verb | Action | Description |
| ------- | ------ | ------ | ------ |
| home | GET | SHOW | Shows Log In and Sign Up |
| user/new | POST | CREATE | Create New User Account |
| user/:id | GET | SHOW | Shows User Account |
| user/league | GET | SHOW | Shows User leagues |
| user/league/new | POST | CREATE | Create New League |
| user/games | GET | SHOW | Shows User games |

### User Persona 1
Retired, +70 year old who has worked with computers and is pretty tech savvy. Enjoys bowling in multiple leagues and wants a way to track individual game scores and/or view by league.

### User Persona 2
Person in their 20's, very tech savvy and loves bowling. Is trying to become a professional bowler and needs a tool to track all the games he bowls to determine patterns in his bowling.

### User Persona 3
Person in their 30's, is familiar with computers and mobile apps. Would like a way to track their league scores in a simple to use tool that they can access anywhere. Doesn't like getting a print out each week from the bowling alley.

## MVP User Stories
---
As a User I should be able to:
-- Log in or Sign in to view current and historical data
-- Enter in the name of the bowling alley and league I am part of
-- See my bowling average per league
-- Enter individual game score
-- See cumulative bowling average for all games

## Stretch Goals User Stories
As a User I should be able to:
-- see a representation of my individual games (graph)
-- see a representation of my league scores (graph)
-- add league team members
-- add league team member scores
