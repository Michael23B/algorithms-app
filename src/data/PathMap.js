//TODO: Hard-coded URLs since I can't be bothered at the moment to strip the markdown from my readme file or generate a new one.
//      Will make it programmatic later.

const PathMap = {
    "Binary Search": "PracticeQuestionsSharp/Algorithms/BinarySearch.cs",
    "Breadth First Search": "PracticeQuestionsSharp/Algorithms/BreadthFirstSearch.cs",
    "Depth First Search": "PracticeQuestionsSharp/Algorithms/DepthFirstSearch.cs",
    "Fisher Yates Shuffle": "PracticeQuestionsSharp/Algorithms/FisherYatesShuffle.cs",
    "Heap Sort": "PracticeQuestionsSharp/Algorithms/HeapSort.cs",
    "Merge Sort": "PracticeQuestionsSharp/Algorithms/MergeSort.cs",

    "Paths With Sum": "PracticeQuestionsSharp/Exercises/Binary%20Tree/PathsWithSum.cs",
    "Binary Tree From Sorted Array": "PracticeQuestionsSharp/Exercises/Binary%20Tree/BinaryTreeFromSortedArray.cs",
    "Random Element": "PracticeQuestionsSharp/Exercises/Binary%20Tree/RandomElement.cs",
    "Successor": "PracticeQuestionsSharp/Exercises/Binary%20Tree/Successor.cs",
    "Is Subtree": "PracticeQuestionsSharp/Exercises/Binary%20Tree/IsSubtree.cs",
    "Depth Lists": "PracticeQuestionsSharp/Exercises/Binary%20Tree/DepthLists.cs",

    "Draw Line": "PracticeQuestionsSharp/Exercises/Bits/DrawLine.cs",
    "Binary To String": "PracticeQuestionsSharp/Exercises/Bits/BinaryToString.cs",
    "Longest Bit Sequence": "PracticeQuestionsSharp/Exercises/Bits/LongestBitSequence.cs",
    "Power Of Two": "PracticeQuestionsSharp/Exercises/Bits/PowerOfTwo.cs",
    "Insertion": "PracticeQuestionsSharp/Exercises/Bits/Insertion.cs",
    "Pairwise Swap": "PracticeQuestionsSharp/Exercises/Bits/PairwiseSwap.cs",
    "Convert Int To Int": "PracticeQuestionsSharp/Exercises/Bits/ConvertIntToInt.cs",

    "Stack": "PracticeQuestionsSharp/DataStructures/Stack.cs",
    "Simple Graph": "PracticeQuestionsSharp/DataStructures/SimpleGraph.cs",
    "Queue": "PracticeQuestionsSharp/DataStructures/Queue.cs",
    "Priority Queue": "PracticeQuestionsSharp/DataStructures/PriorityQueue.cs",
    "Min Heap": "PracticeQuestionsSharp/DataStructures/MinHeap.cs",
    "Linked List": "PracticeQuestionsSharp/DataStructures/LinkedList.cs",
    "Binary Search Tree": "PracticeQuestionsSharp/DataStructures/BinarySearchTree.cs",
    "AVL Tree": "PracticeQuestionsSharp/DataStructures/AVLTree.cs",

    "Staircase Steps": "PracticeQuestionsSharp/Exercises/Dynamic%20Programming/StaircaseSteps.cs",
    "Power Set": "PracticeQuestionsSharp/Exercises/Dynamic%20Programming/PowerSet.cs",
    "Path Through Grid": "PracticeQuestionsSharp/Exercises/Dynamic%20Programming/PathThroughGrid.cs",
    "Parentheses Permutations": "PracticeQuestionsSharp/Exercises/Dynamic%20Programming/ParenthesesPermutations.cs",
    "Coins": "PracticeQuestionsSharp/Exercises/Dynamic%20Programming/Coins.cs",
    "Diving Board": "PracticeQuestionsSharp/Exercises/Dynamic%20Programming/DivingBoard.cs",
    "Colour Fill": "PracticeQuestionsSharp/Exercises/Dynamic%20Programming/ColourFill.cs",
    "String Permutations": "PracticeQuestionsSharp/Exercises/Dynamic%20Programming/StringPermutations.cs",
    "Magic Index": "PracticeQuestionsSharp/Exercises/Dynamic%20Programming/MagicIndex.cs",
    "Tower Of Hanoi": "PracticeQuestionsSharp/Exercises/Dynamic%20Programming/TowerOfHanoi.cs",

    "Profiler": "PracticeQuestionsSharp/Helper/Profiler.cs",
    "Create Read Me": "PracticeQuestionsSharp/Helper/CreateReadMe.cs",
    "Extension Methods": "PracticeQuestionsSharp/Helper/ExtensionMethods.cs",

    "MergeK Sorted Lists": "PracticeQuestionsSharp/Exercises/Linked%20List/MergeKSortedLists.cs",
    "Partition": "PracticeQuestionsSharp/Exercises/Linked%20List/Partition.c",
    "Remove Dupes": "PracticeQuestionsSharp/Exercises/Linked%20List/RemoveDupes.cs",
    "Sum From Lists": "PracticeQuestionsSharp/Exercises/Linked%20List/SumFromLists.cs",
    "Loop Detection": "PracticeQuestionsSharp/Exercises/Linked%20List/LoopDetection.cs",

    "Merge Intervals": "PracticeQuestionsSharp/Exercises/Numbers/MergeIntervals.cs",
    "Most Living People": "PracticeQuestionsSharp/Exercises/Numbers/MostLivingPeople.cs",
    "Multiply With Bit Shifting": "PracticeQuestionsSharp/Exercises/Numbers/MultiplyWithBitShifting.cs",
    "Prime": "PracticeQuestionsSharp/Exercises/Numbers/Prime.cs",
    "Rotated Array Min": "PracticeQuestionsSharp/Exercises/Numbers/RotatedArrayMin.cs",
    "Smallest Difference": "PracticeQuestionsSharp/Exercises/Numbers/SmallestDifference.cs",
    "Sum Swap": "PracticeQuestionsSharp/Exercises/Numbers/SumSwap.cs",
    "Swap Numbers In Place": "PracticeQuestionsSharp/Exercises/Numbers/SwapNumbersInPlace.cs",
    "Add Operations": "PracticeQuestionsSharp/Exercises/Numbers/AddOperations.cs",
    "Contiguous Sequence Largest Sum": "PracticeQuestionsSharp/Exercises/Numbers/ContiguousSequenceLargestSum.cs",
    "Fibonacci": "PracticeQuestionsSharp/Exercises/Numbers/Fibonacci.cs",
    "K Difference": "PracticeQuestionsSharp/Exercises/Numbers/KDifference.cs",

    "Program": "PracticeQuestionsSharp/Program.cs",

    "Queue Animal Shelter": "PracticeQuestionsSharp/Exercises/Queue/QueueAnimalShelter.cs",

    "Tic Tac Toe Winner": "PracticeQuestionsSharp/Exercises/Searching%20and%20Sorting/TicTacToeWinner.cs",
    "Sorted Merge": "PracticeQuestionsSharp/Exercises/Searching%20and%20Sorting/SortedMerge.cs",

    "Sort Stack": "PracticeQuestionsSharp/Exercises/Stack/SortStack.cs",
    "Min Stack": "PracticeQuestionsSharp/Exercises/Stack/MinStack.cs",

    "Pattern Matching": "PracticeQuestionsSharp/Exercises/Strings/PatternMatching.cs",
    "String To Int": "PracticeQuestionsSharp/Exercises/Strings/StringToInt.cs",
    "Unique Chars": "PracticeQuestionsSharp/Exercises/Strings/UniqueChars.cs",
    "Int To Words": "PracticeQuestionsSharp/Exercises/Strings/IntToWords.cs",
    "Palindrome Permutation": "PracticeQuestionsSharp/Exercises/Strings/PalindromePermutation.cs",

    "AVL Tree Tests": "UnitTests/AVLTreeTests.cs",
    "Heap Tests": "UnitTests/HeapTests.cs",
    "Linked List Tests": "UnitTests/LinkedListTests.cs",
    "Queue Tests": "UnitTests/QueueTests.cs",
    "Stack Tests": "UnitTests/StackTests.cs",
    "Test Helper Classes": "UnitTests/TestHelperClasses.cs",

    "": "",
}

export default PathMap;