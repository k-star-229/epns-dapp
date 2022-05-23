---
title: Integrating EPNS Notifications in Front ends
description: Integrate EPNS into your dApp and Mobile Apps
parent: N/A
tags:
  - EPNS
  - FrontEnd SDK
  - Notification
slug: EPNS-in-front-ends
contentType: guides
root: false
---
# Integrating EPNS in Frontend
**Level**: Beginner  
**Estimated Time**: 10 minuntes

## Learning Objectives

- Learn how to integrate the EPNS decentralized notification service into your React Frontend Dapp.
- Fetch and render all your notifications in a react application

## Pre-requisites

- Basic knowledge of React.

## Sections
- [Setting up the environment](#setup)
- [Fetching the notifications](#fetching-the-notifications)
- [Parsing the notifications](#parsing-the-notifications)
- [Rendering the notifications](#rendering-the-notifications)

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn install` 

#### For a new react project run:    `npm install @epnsproject/frontend-sdk-staging` 

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.



## Fetching-The-Notifications
The first step is to import the just installed package.
```javascript
import { api, utils, NotificationItem } from "@epnsproject/frontend-sdk-staging";
```

Then the next step is to define the required variables to make a request to fetch some notifications!
```javascript
// define the variables required to make a request
const walletAddress = "0x1234567890abcdcdefghijklmnopqrstuvwxyz123";
const pageNumber = 1;
const itemsPerPage = 20;
// define the variables required to make a request
```
And finally we make a request to fetch some notifications!
```javascript
//fetch the notifications
const fetchedNotifications = await api.fetchNotifications(walletAddress, itemsPerPage, pageNumber)
console.log(fetchedNotifications);
//fetch the notifications
```
**output**:
```
 {
	 "count":  5,
	 "results": [{
			"payload_id":  33724,
			"channel":  "0x34bdfafE0CE10FE1c4bb3a8A0699F312DecD43a2",
			"epoch":  "2021-09-21T11:31:13.000Z",
			"payload":  {
				"apns":  {
					"payload":  {
						"aps":  {
						"category":  "withappicon",
						"mutable-content":  1,
						"content-available":  1
					},	
				},
				"fcm_options": {
				"image":  "https://backend-staging.epns.io/cache/bafkreifib6dpdlvf2obmilzna3iwnqvfiiepylsqwlgcljyyzt7axpng5q.jpg"
				}
			},
			"data":  {
			"app":  "BTC Tracker",
			"sid":  "39499",
			"url":  "https://epns.io/btctracker",
			"acta":  "",
			"aimg":  "",
			"amsg":  "BTC at [d:$42,571.37]\n\nHourly Movement: [s:0.26%]\nDaily Movement: [t:-7.00%]\nWeekly Movement: [t:-5.95%][timestamp: 1632204001]",
			"asub":  "BTC Price Movement",
			"icon":  "https://backend-staging.epns.io/cache/bafkreifib6dpdlvf2obmilzna3iwnqvfiiepylsqwlgcljyyzt7axpng5q.jpg",
			"type":  "1",
			"epoch":  "1632223873",
			"appbot":  "0",
			"hidden":  "0",
			"secret":  ""
			},
			"android":  {
				"notification":  {
				"icon":  "@drawable/ic_stat_name",
				"color":  "#e20880",
				"image":  "https://backend-staging.epns.io/cache/bafkreifib6dpdlvf2obmilzna3iwnqvfiiepylsqwlgcljyyzt7axpng5q.jpg",
				"default_vibrate_timings":  true
				}
			},
			"notification":  {
			"body":  "\nHourly Movement: 0.26%\nDaily Movement: -7.00%\nWeekly Movement: -5.95%",
			"title":  "BTC Tracker - BTC at $42,571.37"
			}
		}
	 }]
 }l
```

## Parsing-The-Notifications

The next step is to parse the just fetched notifications, essentially convert the massive object we have you above into a more readable format.
```
//parse the notification fetched
const parsedResponse = utils.parseApiResponse(fetchedNotifications.results);
console.log(parsedResponse);
//parse the notification fetched
```

**output**:
```
[{
	cta: string,
	title: string,
	message:  string,
	icon: string,
	url: string,
	sid: string
}]
```


## Rendering-The-Notifications
Finally we proceed to render the object above as a notification using JSX
```javascript
// This is used to render the text present in a notification body as a JSX element
<NotificationItem
	notificationTitle="ETH Tracker - ETH at $3,235.16"
	notificationBody="\[d:Summary & Latest Balance]\n---------\n\n[➕] [d:ETH: ] [b:2.961] [t:ETH] [[dg:+-0.000 ETH]][timestamp: 1630069200]"
	cta="www.cta.com"
/>
```
 **output**:
 ![render notification output](https://res.cloudinary.com/xand6r/image/upload/v1632235676/Screenshot_2021-09-21_at_15.44.49_s6vfta.png)
