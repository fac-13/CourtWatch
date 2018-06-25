
[![Build Status](https://travis-ci.org/fac-13/CourtWatch.svg?branch=master)](https://travis-ci.org/fac-13/CourtWatch)

[![codecov](https://codecov.io/gh/fac-13/CourtWatch/branch/master/graph/badge.svg)](https://codecov.io/gh/fac-13/CourtWatch)

# CourtWatch

An MVP developed over three weeks for the charity [Women in Prison](http://www.womeninprison.org.uk/) by [@haydnba](https://github.com/haydnba) and [@GiuliaTeggi](https://github.com/GiuliaTeggi) as part of the [@foundersandcoders](https://github.com/foundersandcoders) coding bootcamp. 

## Problem statement

During design week we met with Women in Prison to define their problem and come up with a possible tech solution. The charity would like to set up a volunteer-led project called CourtWatch to monitor court hearings involving women. To do so, however, it needs a way to let volunteer know when a hearing is coming up - even at short notice - so they can book to attend it and report on it. In the medium term the data gathered by volunteers will be used for campaigns and awareness raising activities.

The problem statement we defined for our MVP is: 

>A CourtWatch volunteer needs a way to know when a hearing is coming up so that they can easily book to attend it and report on it. 

## Our solution 

The solution initially envisaged by the charity was a website dedicated to the project where volunteers could add new court hearings and book to attend them. The website would also be used by the charity to share training resources and campaign news with the volunteers. 

After conducting some research, however, we realised that hearings taking place at magistrates courts are made public only on the same day. Therefore we decided to integrate the website with an email messaging services (using SendGrid), so that, whenever a new hearing is added to the website, volunteers are instantly notified about it and can quickly book to attend it, without the need to go and check the website every time. We also explored using Twilio for sending texts but, given the time we had, for our MVP we decided to focus on emails.

## Our MVP: user stories

- As a user (volunteer, coordinator, solicitor, social worker, defendant etc.) I can quickly add an upcoming hearing to the website. 
- As a user, I can view all the upcoming court hearings and click on each one of them to view more details about them. 
- As a volunteer, I can express my interest in joining CourtWatch and consequently receive an email with further info on the project and a link to sign up. 
- As a volunteer, after signing up I can receive instant email notifications whenever a new hearing is added to the website. These emails include a link to a page with more details about the new hearing where I can book to attend it.    

## Tech stack 

| Front end             | Backend              | Testing    | Other     |
|:---------------------:|:--------------------:|:----------:|:----------:
| HTML5                 | Node.js              | Jest       | SendGrid  |
| SASS                  | Express              | Travis CI  | Moment.js |
| React.js              | MongoDB              |            |           |        











