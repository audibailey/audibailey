---
title: "Flying Postman"
pubdate: 2019-11-26
author: Audi Bailey
authorURL: https://twitter.com/Audi_Bailey
tags:
    - "C#"
    - "Travelling Salesman Problem"
    - "Console App"
    - "Math"
    - "Object Orientated Programming"
    - "CAB201"
    - "University Project"
featured: project/flyingpostman.png
---

# Overview
Flying Postman was an assessment from the unit CAB201: Programming Principles in Semester 1 of 2019 at Queensland University of Technology. The task was to write a command line program to accept a mail file, plane specification file, trip starting time (in 24-hour time format), and optionally an output file as input arguments. The mail file contained the absolute x, y coordinates and the mail desitnation. The plane speciifcation contained the range, speed, take off time, landing time and refuel time. The program is to produce an itinerary for the flight listing the order in which the stations should be visited so as to minimize the tour length. 

# Design
The language the class taught was C#, so naturally the language of this project was C# with only the standard library. This assessment uses the required inputs and produces the desired output using various travelling salesman algorithms for finding the shortest tour length. 

The 3 algorithms used were:
    * Nearest Insertion Algorithm
    * Modified Nearest Insertion Algorithm 
    * 2-Opt Algorithm

Another algorithm used was the heaps algorithm for brute forcing the shortest tour length. This algorithm was only used for a certain dataset. 

# Result
The final result I got was 57/50. Seven extra points were awarded as I provided a working bonus level.

It is uploaded as is on [GitHub](https://github.com/audibailey/cab201-flyingpostman) 
with no alterations other than some information on how to make it run with the
provided examples.
