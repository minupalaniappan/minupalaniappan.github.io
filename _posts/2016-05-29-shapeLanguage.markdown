---
layout: project
title: "Working with OpenCV to build ShapeLanguage"
date:   2016-05-29
categories: projects
summary: "I built a shape recognizer on a broken down touch board at Hack Davis 2016."
link: ""
---
I built a winning hack that was able to recognize shapes drawn on the Synaptics Touch board.

### Source
* [Github code](https://github.com/minupalaniappan/ShapeLanguage)
* [Devpost](http://devpost.com/software/shapelanguage)

### Demo
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/ca-KuZu4P08/0.jpg)](http://www.youtube.com/watch?v=ca-KuZu4P08)


### How it came about
This is probably my favorite hack of all time. It was the first project that allowed me to interact with hardware and use the python vision library, OpenCV. The project went on to win an award at HackDavis for best use of Synaptics Touch Hardware. The competition lasted for 24 hours.

### Development proccess
The entire application runs right on the terminal; as a result, handling a Node Server or a Python framework wasn't neccesary; all we had to do was write Python and plugin some javascript to listen to the board.

* Thresholds
This program's efficiency is directly correlated to the thresholds read by the touchboard. If a certain drawing reaches the threshold of a given shape, we then determine that the shape to state was the one drawn.

The first step is to determine the threshold colors in which the board is touched or not touched. Remember at each (x,y) coordinate, we compare it against the threshold.

```python
TOUCH_COLOR_THRESHOLD = 200 //the average white (touched)
AVG_COLOR_THRESHOLD = 150 //the average gray
AREA = 64*72 //total size of the board
```