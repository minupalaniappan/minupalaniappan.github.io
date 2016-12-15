class Box:
     def __init__(self, height, width, depth):
     	self.height = height
        self.width = width
     	self.depth = depth

def canBoxBeStacked (bigger, smaller):
	if ((bigger.depth * bigger.width) >= (smaller.depth * smaller.width)):
		return (True)
	return (False)

def sortBoxes (boxItems):
	sortedBoxes = []
	while boxItems:
		maximum = boxItems[0]
		for box in boxItems: 
			if not canBoxBeStacked(maximum, box): 
				maximum = box
		sortedBoxes.append(maximum)
		boxItems.remove(maximum)

	#for box in sortedBoxes:
		#print box.height, box.width, box.depth

	return (sortedBoxes)


def buildBoxes (boxes):
	n = len(boxes)
	rotations = []
	index = 0
	for box in range(n):
		#first permutation
		rotations.append(boxes[box])
		#second permutation
		rotations.append(Box(boxes[box].depth, boxes[box].height, boxes[box].width))
		#third permutation
		rotations.append(Box(boxes[box].width, boxes[box].depth, boxes[box].height))

	n = len(rotations)
	sortedRotations = sortBoxes(rotations)
	return (sortedRotations)

def calculateHeight (rotations):
	lenOfElements = len(rotations)
	heights = [0] * lenOfElements
	
	for element in range(lenOfElements):
		heights[element] = rotations[element].height

	for x in range(1, lenOfElements):
		for y in range(x):
			if (rotations[x].width < rotations[y].width and 
				rotations[x].depth < rotations[y].depth and
				heights[x] < heights[y] + rotations[x].height):
				heights[x] =  heights[y] + rotations[x].height

	return (max(heights))

def executeFile (boxes):
	rotations = buildBoxes(boxes)
	val = calculateHeight(rotations)
	return (val)


arr = [Box(4, 6, 7), Box(1, 2, 3), Box(4, 5, 6), Box(10, 12, 32)]
val = executeFile(arr)

print "The maximum height for this stack is", val






 