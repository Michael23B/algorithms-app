const categoryMap = {
    'Algorithms': 'PracticeQuestionsSharp/Algorithms/',
    'Binary Tree': 'PracticeQuestionsSharp/Exercises/Binary%20Tree/',
    'Bits': 'PracticeQuestionsSharp/Exercises/Bits/',
    'DataStructures': 'PracticeQuestionsSharp/DataStructures/',
    'Dynamic Programming': 'PracticeQuestionsSharp/Exercises/Dynamic%20Programming/',
    'Helper': 'PracticeQuestionsSharp/Helper/',
    'Linked List': 'PracticeQuestionsSharp/Exercises/Linked%20List/',
    'Numbers': 'PracticeQuestionsSharp/Exercises/Numbers/',
    'Queue': 'PracticeQuestionsSharp/Exercises/Queue/',
    'Searching and Sorting': 'PracticeQuestionsSharp/Exercises/Searching%20and%20Sorting/',
    'Stack': 'PracticeQuestionsSharp/Exercises/Stack/',
    'Strings': 'PracticeQuestionsSharp/Exercises/Strings/',
    'UnitTests': 'UnitTests/'
}

//Removes all spaces and adds '.cs' to generate a filename
function GetPath(category, name) {
    return categoryMap[category] + name.replace(/ /g,'') + '.cs';
}

export default GetPath;