---
title: "Chat Server"
pubdate: 2019-11-26
author: Audi Bailey
authorURL: https://twitter.com/Audi_Bailey
tags:
    - "C"
    - "Operating Systems"
    - "Console App"
    - "Server"
    - "Client"
    - "CAB403"
    - "University Project"
featured: project/placeholder.png
---

# Overview
Chat Server was an assessment from the unit CAB403: Systems Programming in Semester 2 of 2019 at Queensland University of Technology. The task was to develop a client/server system for an online multi-client
message server. The purpose of this service is to manage a queue of text messages to be
delivered to connected/subscribed connections. All connected clients can add a message and
each message is associated with a channel ID. Clients are subscribed to multiple channels and when any of the subscribed channels has a new message, the clients can fetch and see it.

# Design
The language the class taught was C, so naturally the language of this project was C with only the standard library. This assessment used many advanced BSD libraries and implemented various algorithms. One of the libraries used was pthreads and an algorithm implemented was a reader writer algorithm with mutexing.

# Result
The final result I got was 97/100. I lost majority of the marks from a bug that failed to detect when the user was already subscribed to a channel and resent the same subscribe message when attempting to resubscribe.

It is uploaded as is on [GitHub](https://github.com/audibailey/cab403-chatserver) 
with no alterations other than some information on how to make it run with the
provided examples.
