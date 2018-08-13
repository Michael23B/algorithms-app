let text = `#Algorithms
Binary Search
Generic implementation of a binary search algorithm.
Breadth First Search
Iterative depth-first search that returns the node with the target data.
Depth First Search
Iterative depth-first search that returns the node with the target data.
Fisher Yates Shuffle
Implementation of Fishes-Yates shuffle algorithm.
Heap Sort
Heap sort generic implementation.
Merge Sort
Merge sort generic implementation.
#Binary Tree
Paths With Sum
Given a binary tree, find all paths (from a node to a leaf) that sum to a given number.
Binary Tree From Sorted Array
Creates a binary tree and returns the root from a sorted array.
Random Element
Create a Binary Tree class from scratch with Insert, Remove and Find methods.In addition, add a GetRandom() method that returns a random node. All nodes should be equally likely to be chosen.
Successor
Write an algorithm to find the "next" node (in-order successor) of a given node in a binary search tree. You may assume that each node has a link to it's parent.
Is Subtree
Find whether a binary tree is a subtree of another binary tree. This implementation defines subtree as sharing the same data for each node and the same children for each node (including null children).
Depth Lists
Return a list for each depth of a binary tree. Array-based tree with IEnumerable implemented to move through the array in order.
#Bits
Draw Line
A monochrome screen is stored as a single array of bytes, allowing eight consecutive pixels to be stored in one byte. The screen has width w, where w is divisible by 8 (that is, no byte will be split across rows). The height of the screen, of course, can be derived from the length of the array and the width. Implement a function that draws a horizontal line from(xl, y) to(x2, y). Function signiture: drawLine(byte[] screen, int width, int x, int x2, int y).
Binary To String
Given a real number between 0 and 1 that is passed in as a double, print the binary representation. If it cannot be represented in 32 characters, print "ERROR.".
Longest Bit Sequence
Given an int, you can flip exactly one bit from 0 to 1. Find the longest sequence of 1s you could create.
Power Of Two
The code checks if n is a power of two since powers of two are represented as a 1 followed only by 0s. Taking 1 away removes the first 1 and changes all the 0s to 1s meaning the & matches no digits and results in 0. Since n == 0 also returns true but isn't a power of 2 we need to check for n != 0 first.
Insertion
Given two 32-bit numbers, N and M, and two bit positions, i and j, insert M into N starting at bit j and ending at bit i. You may assume there is enough bits for M to fit.
Pairwise Swap
Swap the even and odd bits in an integer using as few instructions as possible.
Convert Int To Int
Write a function to determine the number of bits you would need to flip to convert int A to int B.
#DataStructures
Stack
Stack implementation using my linked list.
imple Graph
Simple graph implementation for use in some exercises. Has links to nodes and thats about it.
Queue
Generic implementation of a queue using my linked list implementation. Code is largely the same as stack implementation.
Priority Queue
Generic implementation of a priority queue using my own queue implementation.
Min Heap
Array based min-heap.
Linked List
Generic implementation of a linked list. Allows access to elements directly as well as passing nodes in to methods manually, meaning it's unsafe but allows for neat optimizations in certain situations.
Binary Search Tree
Generic implementation of a Binary Search Tree.
AVL Tree
Generic implementation of an AVL Tree.
#Dynamic Programming
Staircase Steps
A child is running up a staircase with n steps and can hop either 1, 2 or 3 steps at a time. Count how many possible ways the child could run up the steps.
Power Set
The power set of any set S is the set of all subsets of S, including the empty set and S itself.
Path Through Grid
Given a grid, find a path from the top left to the bottom right using only right and down movements. Some squares are off limits and the path cannot contain them.
Parentheses Permutations
Return all valid permutations of n pairs of parentheses.
Coins
Given an infinite number of coins in denominations: 25c, 10c, 5c and 1c, find all permutations of coins to represent n cents.
Diving Board
You are building a diving board by placing a bunch of planks of wood end-to-end. Using exactly k planks of sizes shorter or longer generate all possible diving board lengths.
Colour Fill
Implement a colour fill method, like you would see in a paint application.
String Permutations
Compute all permutations of a string of unique characters.
Magic Index
A magic index in a given array A[0...n-1] is defined to be an index such that A[i] == i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.
Tower Of Hanoi
The Tower of Hanoi is a puzzle where you must move a tower from one pole to another. The tower is a stack of pieces. You may only move one piece at a time, place smaller pieces onto larger pieces and you must take the top piece of a stack to move. Implement a function to solve this puzzle.
#Helper
Profiler
Accepts a function and logs the execution time. Usage: Profiler.ProfileAndExecute(() => yourMethod(args), repeat?, name?);
Create Read Me
Generates a README.md file for this GitHub project. Finds every ".cs" file, fetches a description from the comments and generates a relative link to that file.
Extension Methods
A couple of extension methods I've used throughout the project.
#Linked List
MergeK Sorted Lists
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
Partition
Partition a linked list around an element such that all elements less than the partition value come before it and all elements greater come after it. The order of the elements doesn't matter.
Remove Dupes
Remove duplicates from a linked list.
Sum From Lists
Two numbers represented by linked lists where each node contains a single digit. The digits are stored in reverse order. eg. 7 1 6 + 5 9 2 = 617 + 295 -> 2 1 9 (912).
Loop Detection
Given a circular linked list return the point that the loop begins.
#Numbers
Merge Intervals
Given a collection of intervals, merge all overlapping intervals eg. [[1,4],[4,5]] -> [[1,5]].
Most Living People
Given a list of people with their birth and death years, compute the year with most people alive. Where int[n][0] = birth year & int[n][1] = death year
Multiply With Bit Shifting
Perform multiplication using only bit shift operations, addition and subtraction.
Prime
Print all primes to n.
Rotated Array Min
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum value.
Smallest Difference
Given two arrays of integers, find the smallest difference between any two elements, one from each array.
Sum Swap
Given two arrays of integers, find a pair of values (one value from each array) that you can swap to
Swap Numbers In Place
Write a function to swap a number in place.
Add Operations
Write methods for multiply, subtract and divide (*,-,/) using only the add (+) operator.
Contiguous Sequence Largest Sum
Given an array of integers, find the contiguous sequence with the largest sum.
Fibonacci
Return the n-th Fibonacci number.
K Difference
Given an array of n distinct numbers, find all pairs that have a difference of k.
#Queue
Queue Animal Shelter
An animal shelter that operates on a first-in first-out basis housing only cats and dogs. Customers can request either a cat, a dog or any animal. They receive the oldest of that type. Implement a queue with the following operations: enqueue, dequeueAny, dequeueDog and dequeueCat.
#Searching and Sorting
Tic Tac Toe Winner
Write a function that determines the winner of a game of Tic Tac Toe.
Sorted Merge
Given two sorted arrays (A and B) where A has enough space at the end to fit B, merge array B into array A.
#Stack
Sort Stack
Implement a stack sorting method using only an additional stack (no other data structures). Methods allowed: Push(), Pop(), Peek(), IsEmpty().
Min Stack
Stack that can also return the minimum value in constant time.
#Strings
Pattern Matching
Knuth-Morris-Pratt pattern matching algorithm.
String To Int
Implement atoi which converts a string to an integer.
Unique Chars
Check if a string is made of distinct characters.
Int To Words
Given an integer, return the english words to say that number.
Palindrome Permutation
Determine whether a string is a permutation of a palindrome.
#UnitTests
AVL Tree Tests
Unit tests for AVL Tree.
Heap Tests
Unit tests for heap.
Linked List Tests
Unit tests for linked list.
Queue Tests
Unit tests for queue.
Stack Tests
Unit tests for stack.
Test Helper Classes
Dummy classes used during unit testing.
`
export default text;