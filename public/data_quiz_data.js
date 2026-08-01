window.dataQuizData = {
    "da_mock3": [
        {
            "id": 1,
            "type": "DROPDOWN",
            "q": "You need to test whether an object is an instance of a specific class.<br>How should you set up the unit test?<br>Complete the code by selecting the correct option from each drop-down list.",
            "code": "[b1] unittest\nclass TestIsInstance([b2]):\n    def [b3]\n        [b4]\n\nif __name__ == '__main__':\n    unittest.main()",
            "options": [
                [
                    "define",
                    "import",
                    "include",
                    "using"
                ],
                [
                    "unittest.TestCase",
                    "test.TestCase",
                    "TestCase.unittest",
                    "TestCase.test"
                ],
                [
                    "assert_isInstance(self):",
                    "eval_isInstance(self):",
                    "test_isInstance(self):",
                    "try_isInstance(self):"
                ],
                [
                    "self.assertIsInstance(obj, cls, msg=None)",
                    "test.assertIsInstance(obj, cls, msg=None)",
                    "this.assertIsInstance(obj, cls, msg=None)"
                ]
            ],
            "a": [
                "import",
                "unittest.TestCase",
                "test_isInstance(self):",
                "self.assertIsInstance(obj, cls, msg=None)"
            ]
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "You develop a Python application for your company.<br><br>You want to add notes to your code so other team members will understand it.<br><br>What should you do?",
            "options": [
                "Place the notes within /* and */ in any code segment.",
                "Place the notes within <!-- and --> in any code segment.",
                "Place the notes after # on any line.",
                "Place the notes after // on any line."
            ],
            "a": 2
        },
        {
            "id": 3,
            "type": "DROPDOWN",
            "q": "You are writing a program to randomly assign rooms (room_number) and team-building groups (group) for a company retreat.<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "import random\nroomsAssigned=[1]\nroom_number=1\ngroupList=[\"Ropes\",\"Rafting\",\"Obstacle\",\"Wellness\"]\ncount=0\nprint(\"Welcome to CompanyPro's Team-Building Weekend!\")\nname=input(\"Please enter your name (q to quit)? \")\nwhile name.lower() != 'q' and count < 50:\n    while room_number in roomsAssigned:\n        [b1]\n    print(f\"{name}, your room number is {room_number}\")\n    roomsAssigned.append(room_number)\n    [b2]\n    print(f\"You are in the {group} group this afternoon.\")\n    name=input(\"Please enter your name (q to quit)? \")",
            "options": [
                [
                    "room_number=random(1,50)",
                    "room_number=random.randint(1,50)",
                    "room_number=random.shuffle(1,50)",
                    "room_number=random.random(1,50)"
                ],
                [
                    "group = random.choice(groupList)",
                    "group = random.randrange(groupList)",
                    "group = random.shuffle(groupList)",
                    "group = random.sample(groupList)"
                ]
            ],
            "a": [
                "room_number=random.randint(1,50)",
                "group = random.choice(groupList)"
            ]
        },
        {
            "id": 4,
            "type": "DROPDOWN",
            "q": "A company needs help updating their file system. You must create a simple file-manipulation program that performs the following actions:<br><br>• Creates a file using the specified name.<br>• Appends the phrase \"End of listing\" to the file.<br><br>You need to complete the code to meet the requirements.<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "import os\nfile = [b1]\n    [b2](\"End of listing\")\nfile.close()",
            "options": [
                [
                    "open('myFile.txt', 'a')",
                    "open('myFile.txt', 'r')",
                    "open('myFile.txt', 'w')"
                ],
                [
                    "append",
                    "file.add",
                    "file.write",
                    "write"
                ]
            ],
            "a": [
                "open('myFile.txt', 'a')",
                "file.write"
            ]
        },
        {
            "id": 5,
            "type": "DROPDOWN",
            "q": "You are creating a program that accepts user input. The program must cast the input into an integer, and properly handle the error if it cannot do so.<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "while True:\n    [b1]\n        x = int(input(\"Please enter a number: \"))\n        break\n    [b2] ValueError:\n        print(\"Not a valid number. Try again...\")",
            "options": [
                [
                    "try:",
                    "else:",
                    "except:",
                    "raise:",
                    "finally:"
                ],
                [
                    "try",
                    "else",
                    "except",
                    "raise",
                    "finally"
                ]
            ],
            "a": [
                "try:",
                "except"
            ]
        },
        {
            "id": 6,
            "type": "DROPDOWN",
            "q": "A company needs help updating their file system. You must create a simple file-manipulation program that performs the following actions:<br><br>• Checks to see whether a file exists.<br>• If the file exists, displays its contents.<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "import os\nif [b1]\n    file = open('myFile.txt')\n    [b2]\n    file.close()",
            "options": [
                [
                    "isfile('myFile.txt'):",
                    "os.exist('myFile.txt'):",
                    "os.find('myFile.txt'):",
                    "os.path.isfile('myFile.txt'):"
                ],
                [
                    "output('myFile.txt')",
                    "print(file.get('myFile.txt'))",
                    "print(file.read())",
                    "print('myFile.txt')"
                ]
            ],
            "a": [
                "os.path.isfile('myFile.txt'):",
                "print(file.read())"
            ]
        },
        {
            "id": 7,
            "type": "DND",
            "q": "You are developing a program that prints all prime numbers between 2 and 100. The program must:\n• Loop through numbers from 2 to 100.\n• Determine whether each number is prime.\n• Stop checking a number once a divisor is found.\n\nComplete the code by dragging the correct code segments to the correct placement. <br><span style='font-size: 15px; font-style: italic;'>Note: Each code segment may be used once, more than once, or not at all.</span>",
            "code": "[target1]\n    for i in range(2, p):\n        if p % i == 0:\n            is_prime = False\n            [target2]\n    if is_prime == True:\n        print(p)\n    [target3]",
            "options": [
                "break",
                "continue",
                "p = p + 1",
                "p = 2\nis_prime = True\nwhile p <= 100:",
                "p = 2\nwhile p <= 100:\n    is_prime = True"
            ],
            "a": [
                "p = 2\nwhile p <= 100:\n    is_prime = True",
                "break",
                "p = p + 1"
            ]
        },
        {
            "id": 8,
            "type": "DROPDOWN",
            "q": "You develop a Python application for your company.<br><br>You need to complete the code so that the print statements are accurate.<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "numList = [1, 2, 3, 4, 5]\nalphaList = [\"a\", \"b\", \"c\", \"d\", \"e\"]\n[b1]\n    print(\"The values in numList are equal to alphaList\")\n[b2]\n    print(\"The values in numList are not equal to alphaList\")",
            "options": [
                [
                    "if numList = alphaList :",
                    "if numList == alphaList :",
                    "if numList += alphaList :"
                ],
                [
                    "else :",
                    "elif :",
                    "elseif :"
                ]
            ],
            "a": [
                "if numList == alphaList :",
                "else :"
            ]
        },
        {
            "id": 9,
            "type": "MCQ",
            "q": "What does the following statement do?<br><br><code>data = input()</code>",
            "options": [
                "Creates an HTML input element",
                "Allows a user to enter text in the console",
                "Displays all input peripheral devices on the computer",
                "Displays a message box that allows user input"
            ],
            "a": 1
        },
        {
            "id": 10,
            "type": "TF",
            "q": "For each statement about the following function, select True or False.",
            "code": "def grosspay(hours=40, rate=25, pieces=0, piecerate=0, salary=0):\n    overtime=0\n    if pieces > 0:\n        return pieces * piecerate\n    if salary > 0:\n        pass\n    if hours > 40:\n        overtime = (hours - 40) * (1.5 * rate)\n        return overtime + (40 * rate)\n    else:\n        return hours * rate",
            "options": [
                "A function call of grosspay() will create a syntax error.",
                "A function call of grosspay(salary=50000) will return nothing.",
                "A function call of grosspay(pieces=500, piecerate=4) will return a result of 2000."
            ],
            "a": [
                "FALSE",
                "FALSE",
                "TRUE"
            ]
        },
        {
            "id": 11,
            "type": "DROPDOWN",
            "q": "You are writing code to meet the following requirements:<br><br>• Allow users to repeatedly enter words.<br>• Output the number of characters in each word.<br><br>Complete the code by selecting the correct option from each drop-down list.",
            "code": "x = \"Hello\"\n[b1] x != \"QUIT\":\n    num = 0\n    [b2] char [b3] x:\n        num += 1\n    print(num)\n    x = input(\"Enter a new word or QUIT to exit: \")",
            "options": [
                [
                    "for",
                    "if",
                    "while"
                ],
                [
                    "for",
                    "if",
                    "while"
                ],
                [
                    "and",
                    "or",
                    "in",
                    "not"
                ]
            ],
            "a": [
                "while",
                "for",
                "in"
            ]
        },
        {
            "id": 12,
            "type": "TF",
            "q": "You are creating a Python program that compares numbers. You need to ensure that the comparisons are accurate.<br><br>For each statement, select True or False.",
            "code": "01 num1 = eval(input(\"Please enter the first number: \"))\n02 num2 = eval(input(\"Please enter the second number: \"))\n03 if num1 == num2:\n04     print(\"The two numbers are equal.\")\n05 if num1 <= num2:\n06     print(\"Number 1 is less than number 2.\")\n07 if num1 > num2:\n08     print(\"Number 1 is greater than number 2.\")\n09 if num2 = num1:\n10     print(\"The two numbers are the same.\")",
            "options": [
                "The print statement at line 04 will print only if the two numbers are equal in value.",
                "The print statement at line 06 will print only if num1 is less than num2.",
                "The print statement at line 08 will print only if num1 is greater than num2.",
                "The statement at line 09 is an invalid comparison."
            ],
            "a": [
                true,
                false,
                true,
                true
            ]
        },
        {
            "id": 13,
            "type": "DROPDOWN",
            "q": "A game development company needs a way to find the number of words in a list that contain a specific letter.<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "# Function accepts list of words and letter to search for.\n# Returns count of the number of words that contain that letter.\ndef count_letter(letter, word_list):\n    count = 0\n    \n    for [b1]\n        if [b2]\n            count += 1\n    return count\n\n# word_list is populated by the readWords() function. Code not shown.\nword_list = readWords()\n\nletter = input(\"Which letter would you like to count\")\nletter_count = count_letter(letter, word_list)\nprint(\"There are: \", letter_count, \" words that contain \", letter)",
            "options": [
                [
                    "word_list in word:",
                    "word in word_list:",
                    "word == word_list:",
                    "word is word_list:"
                ],
                [
                    "word is letter:",
                    "letter is word:",
                    "word in letter:",
                    "letter in word:"
                ]
            ],
            "a": [
                "word in word_list:",
                "letter in word:"
            ]
        },
        {
            "id": 14,
            "type": "DND",
            "q": "You are creating a guessing game. The program must:<br>• Generate a random number between 1 and 10.<br>• Allow the user up to three guesses.<br>• Stop immediately if the correct guess is entered.<br><br>Complete the code by moving the appropriate code segments into the correct locations.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct placement.</span>",
            "code": "from random import randint\ntarget = randint(1,10)\nchance = 1\nprint (\"Guess an integer from 1 to 10. You will have 3 chances.\")\n[target1]\n    guess = int(input(\"Guess an integer: \"))\n    if guess > target:\n        print (\"Guess is too high\")\n    elif guess < target:\n        print (\"Guess is too low\")\n    else:\n        print (\"Guess is just right!\")\n        [target2]\n    [target3]",
            "options": [
                "break",
                "chance += 1",
                "chance = 2",
                "pass",
                "while chance < 3",
                "while chance < 3:",
                "while chance <= 3:"
            ],
            "a": [
                "while chance <= 3:",
                "break",
                "chance += 1"
            ]
        },
        {
            "id": 15,
            "type": "DROPDOWN",
            "q": "You are creating a function to calculate admission fees (admission_fee) based on the following rules:<br><br>• Anyone under age 5 = free admission<br>• Anyone age 5 or older who is in school = $10<br>• Anyone age 5 to 17 who is not in school = $20<br>• Anyone older than age 17 who is not in school = $50<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "def admission_fee(age, school):\n    rate = 0\n    [b1]\n        rate = 10\n    [b2]\n        [b3]\n            rate = 20\n        else:\n            rate = 50\n    return rate",
            "options": [
                [
                    "if age >= 5 and school == True:",
                    "if age >= 5 and age <= 17:",
                    "if age >= 5 and school == False:"
                ],
                [
                    "elif age >= 5 and school == False:",
                    "else age >= 5 and school == False:",
                    "elif age >= 5 and school == True:"
                ],
                [
                    "if age >= 5 and school == True:",
                    "if age >= 5 and school == False:",
                    "if age <= 17:"
                ]
            ],
            "a": [
                "if age >= 5 and school == True:",
                "elif age >= 5 and school == False:",
                "if age <= 17:"
            ]
        },
        {
            "id": 16,
            "type": "MCQ",
            "q": "The Script.py file contains the following code:<br><br><code>import sys\nprint(sys.argv[2])</code><br><br>You run the following command:<br><code>python Script.py Cheese Bacon Bread</code><br><br>What is the output of the command?",
            "options": [
                "Cheese",
                "Bacon",
                "Bread",
                "Script.py"
            ],
            "a": 1
        },
        {
            "id": 17,
            "type": "DROPDOWN",
            "q": "A coworker wrote a program that inputs names into a database. Unfortunately, the program reversed the letters in each name.<br><br>You need to write a Python function that outputs the characters in a name in the correct order.<br><br>Complete the code by selecting the code segment from each drop-down list.",
            "code": "#Function reverses characters in a string.\n#returns new string in reversed order.\n\ndef reverse_name(backward_name):\n    forward_name = \"\"\n    length = [b1]\n    while length >= 0:\n        forward_name += [b2]\n        length = length-1\n    return forward_name\n\nprint(reverse_name(\"nohtyp\"))",
            "options": [
                [
                    "backward_name:",
                    "len(backward_name)-1",
                    "range(0,len(backward_name),-1)",
                    "range(len(backward_name)-1,-1,-1)"
                ],
                [
                    "backward_name[index]",
                    "backward_name[length]",
                    "backward_name[length+1]",
                    "backward_name[len(backward_name)-len(forward_name)]"
                ]
            ],
            "a": [
                "len(backward_name)-1",
                "backward_name[length]"
            ]
        },
        {
            "id": 18,
            "type": "TF",
            "q": "You create the following Python function to calculate the power of a number. Line numbers are included for reference only.<br><br>For each statement, select True or False.",
            "code": "01 # The calc_power function calculates exponents\n02 # x is the base\n03 # y is the exponent\n04 # The value of x raised to the y power is returned\n05 def calc_power(x, y):\n06     comment = \"# Return the value\"\n07     return x ** y # raise x to the y power",
            "options": [
                "Python will not check the syntax of lines 01 through 04.",
                "The pound sign (#) is optional for lines 02 and 03.",
                "The string in line 06 will be interpreted as a comment.",
                "Line 07 contains an inline comment."
            ],
            "a": [
                true,
                false,
                false,
                true
            ]
        },
        {
            "id": 19,
            "type": "MCQ",
            "q": "A friend asks you to refactor and document the following Python code:<br><br>What is the result?",
            "code": "value1 = 9\nvalue2 = 4\n\nanswer = (value1 % value2 * 10) // 2.0 ** 3.0 + value2",
            "options": [
                "The value 5.667 is displayed.",
                "The value 5.0 is displayed.",
                "A syntax error occurs.",
                "The value 129 is displayed."
            ],
            "a": 1
        },
        {
            "id": 20,
            "type": "MCQ",
            "q": "You write the following function to read a data file and print each line of the file. Line numbers are included for reference only.<br><br>When you run the program, you receive an error on line 03.<br><br>What is causing the error?",
            "code": "01 def read_file(file):\n02     line = None\n03     if os.path.isfile(file):\n04         data = open(file, 'r')\n05         for line in data:\n06             print(line)",
            "options": [
                "The isfile method does not accept one parameter.",
                "The isfile method does not exist in the path object.",
                "The path method does not exist in the os object.",
                "You need to import the os library."
            ],
            "a": 3
        },
        {
            "id": 21,
            "type": "MCQ2",
            "q": "You work on a team that is developing a game.<br><br>You need to write code that generates a random number that meets the following requirements:<br>• The number is a multiple of 5.<br>• The lowest number is 5.<br>• The highest number is 100.<br><br>Which two code segments will meet the requirements? Each correct answer presents a complete solution. (Choose 2.)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "options": [
                "from random import randint\nprint(randint(1, 20) * 5)",
                "from random import randint\nprint(randint(0, 20) * 5)",
                "from random import randrange\nprint(randrange(0, 100, 5))",
                "from random import randrange\nprint(randrange(5, 105, 5))"
            ],
            "a": [
                0,
                3
            ]
        },
        {
            "id": 22,
            "type": "DROPDOWN",
            "q": "You are writing a Python program to determine if a number (num) the user inputs is one, two, or more than two digits (digits).<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "num = int(input(\"Enter a number with 1 or 2 digits: \"))\ndigits = \"0\"\n[b1]\n    digits = \"1\"\n[b2]\n    digits = \"2\"\n[b3]\n    digits = \">2\"\nprint(digits + \" digits.\")",
            "options": [
                [
                    "if num > -10 and num < 10:",
                    "if num > -100 and num < 100:"
                ],
                [
                    "if num > -100 and num < 100:",
                    "elif num > -100 and num < 100:",
                    "if num > -10 and num < 10:",
                    "elif num > -10 and num < 10:"
                ],
                [
                    "else:",
                    "elif:"
                ]
            ],
            "a": [
                "if num > -10 and num < 10:",
                "elif num > -100 and num < 100:",
                "else:"
            ]
        },
        {
            "id": 23,
            "type": "MCQ",
            "q": "You write the following code to determine a student's final grade based on their current grade (grade) and rank (rank):<br><br>What value will print?",
            "code": "grade = 76\nrank = 3\n\nif grade > 80 and rank >= 3:\n    grade += 10\nelif grade >= 70 and rank > 3:\n    grade += 5\nelse:\n    grade -= 5\n\nprint(grade)",
            "options": [
                "71",
                "76",
                "81",
                "86"
            ],
            "a": 0
        },
        {
            "id": 24,
            "type": "MTF",
            "q": "You need to identify the data types of various type operations.<br><br>Move the appropriate data types from the list on the left to the correct type operations on the right. You may use each data type once, more than once, or not at all.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "labels": [
                "int",
                "float",
                "str",
                "bool"
            ],
            "options": [
                "type(+1E10)",
                "type(5.0)",
                "type(\"True\")",
                "type(False)"
            ],
            "a": {
                "type(+1E10)": "float",
                "type(5.0)": "float",
                "type(\"True\")": "str",
                "type(False)": "bool"
            }
        },
        {
            "id": 25,
            "type": "MCQ2",
            "q": "A bicycle company is creating a program that allows customers to log the number of miles biked. The program will send messages based on how many miles the customer logs.<br><br>You write the following Python code. Line numbers are included for reference only.<br><br>You need to define the two required functions.<br><br>Which two code segments should you use for line 01 and line 04? Each correct answer presents part of the solution. (Choose 2.)",
            "code": "01\n02     name = input(\"What is your name? \")\n03     return name\n04\n05     calories = miles * calories_per_mile\n06     return calories\n07 distance = int(input(\"How many miles did you bike this week? \"))\n08 burn_rate = 50\n09 biker = get_name()\n10 calories_burned = calc_calories(distance, burn_rate)\n11 print(biker, \", you burned about \", calories_burned, \" calories.\")",
            "options": [
                "01 def get_name():",
                "01 def get_name(biker):",
                "01 def get_name(name):",
                "04 def calc_calories():",
                "04 def calc_calories(miles, burn_rate):",
                "04 def calc_calories(miles, calories_per_mile):"
            ],
            "a": [
                0,
                5
            ]
        },
        {
            "id": 26,
            "type": "MCQ",
            "q": "Review the following code:<br><br>What is the output of the print statement?",
            "code": "x = \"oranges\"\ny = \"apples\"\nz = \"bananas\"\n\ndata = \"{1} and {0} and {2}\"\nprint(data.format(z, y, x))",
            "options": [
                "oranges and apples and bananas",
                "apples and oranges and bananas",
                "bananas and oranges and apples",
                "apples and bananas and oranges"
            ],
            "a": 3
        },
        {
            "id": 27,
            "type": "TF",
            "q": "For each statement about try statements, select True or False.",
            "options": [
                "A try statement can have one or more except clauses.",
                "A try statement can have a finally clause without an except clause.",
                "A try statement can have a finally clause and an except clause.",
                "A try statement can have one or more finally clauses."
            ],
            "a": [
                true,
                true,
                true,
                false
            ]
        },
        {
            "id": 28,
            "type": "TF",
            "q": "The following function calculates the value of an expression that uses an exponent. Line numbers are included for reference only.<br><br>For each statement, select True or False.",
            "code": "01 def calc_power(a, b):\n02     return a**b\n03 base = input(\"Enter the number for the base: \")\n04 exponent = input(\"Enter the number for the exponent: \")\n05 result = calc_power(base, exponent)\n06 print(\"The result is \" + result)",
            "options": [
                "The code will generate an error in line 03 and line 04.",
                "The code will generate an error in line 02 and line 05.",
                "The code will correctly output data to the console."
            ],
            "a": [
                false,
                true,
                false
            ]
        },
        {
            "id": 29,
            "type": "TF",
            "q": "Review the following code segment:<br><br><code>f = open(\"python.txt\", \"a\")<br>f.write(\"This is a line of text.\")<br>f.close()</code>",
            "options": [
                "A file named python.txt is created if it does not exist.",
                "The data in the file will be overwritten.",
                "Other code can open the file after this code runs."
            ],
            "a": [
                true,
                false,
                true
            ]
        },
        {
            "id": 30,
            "type": "MCQ2",
            "q": "You are creating an eCommerce script that accepts input from the user and outputs the data in a comma-delimited format.<br><br>You write the following code to accept input:<br><br><code>item = input(\"Enter the item name: \")<br>sales = int(input(\"Enter the quantity: \"))</code><br><br>The output must meet the following requirements:<br>• Enclose strings in double quotes.<br>• Do not enclose numbers in quotes or other characters.<br>• Separate items by commas.<br><br>You need to complete the code to meet the requirements.<br><br>Which two code segments could you use? Each correct answer presents a complete solution. (Choose 2.)",
            "options": [
                "print('\"' + item + '\",' , sales)",
                "print('\"{0}\",{1}'.format(item, sales))",
                "print(item + ',' + sales)",
                "print(f'\"{item}\", {sales}')"
            ],
            "a": [
                1,
                3
            ]
        },
        {
            "id": 31,
            "type": "MTF",
            "q": "You are writing a Python application that includes multiple operations on the same line of code. You need to determine the correct order of operations.<br><br>Move the type of operation from the list on the left to the correct locations on the right, with the type of operation that will be performed first at the top and the type of operation that will be performed last at the bottom.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct response.</span>",
            "headers": [
                "Operation Types",
                "Operation Types in Order"
            ],
            "placeholder": "<span style='color: #64748b; font-size: 13px;'>Operation Type</span>",
            "labels": [
                "Addition and Subtraction",
                "And",
                "Exponents",
                "Multiplication and Division",
                "Parentheses",
                "Unary positive, negative, not"
            ],
            "options": [
                "<span style='white-space:nowrap;'>Operation type performed first</span>",
                "​",
                "​​",
                "​​​",
                "​​​​",
                "​​​​​"
            ],
            "a": {
                "<span style='white-space:nowrap;'>Operation type performed first</span>": "Parentheses",
                "​": "Exponents",
                "​​": "Unary positive, negative, not",
                "​​​": "Multiplication and Division",
                "​​​​": "Addition and Subtraction",
                "​​​​​": "And"
            }
        },
        {
            "id": 32,
            "type": "TF",
            "q": "You are writing a function that increments the player score in a game. The function has the following requirements:<br>• If no value is specified for points, then points start at one.<br>• If bonus is True, then points must be doubled.<br><br>You write the following code. Line numbers are included for reference only.",
            "code": "01 def increment_score(score, bonus, points):<br>02     if bonus == True:<br>03         points = points * 2<br>04     score = score + points<br>05     return score<br>06 points = 5<br>07 score = 10<br>08 new_score = increment_score(score, True, points)",
            "options": [
                "To meet the requirements, you must change line 01 to: def increment_score(score, bonus, points = 1):",
                "If you do not change line 01 and the function is called with only two parameters, an error occurs.",
                "Line 03 will also modify the value of the variable points declared at line 06."
            ],
            "a": [
                true,
                true,
                false
            ]
        },
        {
            "id": 33,
            "type": "MTF",
            "q": "You need to identify the results of performing various slicing operations on the following sequence structure:<br><br><code>alph = \"abcdefghijklmnopqrstuvwxyz\"</code>",
            "options": [
                "alph[3:6]",
                "alph[:6]"
            ],
            "labels": [
                "def",
                "cde",
                "cdef",
                "abcdef",
                "defg",
                "abcde"
            ],
            "a": {
                "alph[3:6]": "def",
                "alph[:6]": "abcdef"
            }
        },
        {
            "id": 34,
            "type": "SHORT",
            "q": "Review the following code segment:<br><br>How many lines of output does the code print?<br><span style='font-size: 12px; font-style: italic;'>Enter the number as an integer.</span>",
            "code": "product = 2<br>n = 5<br>while (n != 0):<br>    product *= n<br>    print(product)<br>    n -= 1<br>    if n == 3:<br>        break",
            "a": "2"
        },
        {
            "id": 35,
            "type": "DROPDOWN",
            "q": "You find errors while evaluating the following code. Line numbers are included for reference only. You need to correct the code at line 03 and line 06.",
            "code": "01 numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n02 index = 0\n03     [b1]\n04     print(numbers[index])\n05 \n06     [b2]\n07         break\n08     else :\n09         index += 1",
            "options": [
                [
                    "while (index < 10) :",
                    "while [index < 10]",
                    "while (index < 5) :",
                    "while [index < 5]"
                ],
                [
                    "if numbers[index] == 6 :",
                    "if numbers[index] == 6",
                    "if numbers(index) = 6 :",
                    "if numbers(index) != 6"
                ]
            ],
            "a": [
                "while (index < 10) :",
                "if numbers[index] == 6 :"
            ]
        },
        {
            "id": 36,
            "type": "MCQ",
            "q": "You are developing a script to calculate the final score in a racing game. The score depends on the base points, time penalty, and a multiplier.<br><br>What is the final value of the <code>final_score</code> variable?",
            "code": "base_points = 50\npenalty = 3\n\nfinal_score = base_points - penalty * 2 ** 3 // 4 + (base_points % 7)",
            "options": [
                "45",
                "93",
                "44",
                "25"
            ],
            "a": 0
        },
        {
            "id": 37,
            "type": "MCQ",
            "q": "You are building a time-tracking application. You run the script and encounter a NameError on line 02.<br><br>What is causing the error?",
            "code": "01 \n02 def get_current_year():\n03     now = datetime.datetime.now()\n04     return now.year\n05 print(get_current_year())",
            "options": [
                "You need to import the datetime module.",
                "The get_current_year function must take a parameter.",
                "The now() method does not exist in the datetime object.",
                "The year attribute requires parentheses to be called."
            ],
            "a": 0
        },
        {
            "id": 38,
            "type": "MCQ",
            "q": "You are creating an automated email generation script for a travel agency:<br><br>What is the output of the print statement?",
            "code": "city = \"Paris\"\nnights = 3\nprice = 450.50\n\nemail = \"Your trip to {0} for {1} nights will cost ${2}.\"\nprint(email.format(city, nights, price))",
            "options": [
                "Your trip to Paris for 3 nights will cost $450.50.",
                "Your trip to {city} for {nights} nights will cost ${price}.",
                "A syntax error occurs because the variables are different data types.",
                "Your trip to 3 for 450.50 nights will cost $Paris."
            ],
            "a": 0
        },
        {
            "id": 39,
            "type": "TF",
            "q": "You are implementing an authentication module that must handle multiple error types seamlessly. For each statement about exception handling, select True or False.",
            "options": [
                "A single try block can be followed by multiple except blocks to handle different exceptions.",
                "The finally block is only executed if no exceptions are raised.",
                "You can use the Exception keyword to catch any general error that occurs.",
                "If an exception is raised inside a try block, the program will always crash immediately."
            ],
            "a": [
                true,
                false,
                true,
                false
            ]
        },
        {
            "id": 40,
            "type": "TF",
            "q": "You are building an application that needs to securely log user transactions into a text file:<br><br><code>with open(\"transactions.txt\", \"a\") as file:<br>&nbsp;&nbsp;&nbsp;&nbsp;file.write(\"User login successful\\n\")</code><br><br>For each statement, select True or False.",
            "options": [
                "Using the with statement ensures the file is automatically closed when the block ends.",
                "The mode \"a\" guarantees that existing data in the file will not be overwritten.",
                "If transactions.txt does not exist, the code will throw a FileNotFoundError."
            ],
            "a": [
                true,
                true,
                false
            ]
        }
    ],
    "mock3": [
        {
            "id": 1,
            "type": "DROPDOWN",
            "q": "You need to test whether an object is an instance of a specific class.<br>How should you set up the unit test?<br>Complete the code by selecting the correct option from each drop-down list.",
            "code": "[b1] unittest\nclass TestIsInstance([b2]):\n    def [b3]\n        [b4]\n\nif __name__ == '__main__':\n    unittest.main()",
            "options": [
                [
                    "define",
                    "import",
                    "include",
                    "using"
                ],
                [
                    "unittest.TestCase",
                    "test.TestCase",
                    "TestCase.unittest",
                    "TestCase.test"
                ],
                [
                    "assert_isInstance(self):",
                    "eval_isInstance(self):",
                    "test_isInstance(self):",
                    "try_isInstance(self):"
                ],
                [
                    "self.assertIsInstance(obj, cls, msg=None)",
                    "test.assertIsInstance(obj, cls, msg=None)",
                    "this.assertIsInstance(obj, cls, msg=None)"
                ]
            ],
            "a": [
                "import",
                "unittest.TestCase",
                "test_isInstance(self):",
                "self.assertIsInstance(obj, cls, msg=None)"
            ]
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "You develop a Python application for your company.<br><br>You want to add notes to your code so other team members will understand it.<br><br>What should you do?",
            "options": [
                "Place the notes within /* and */ in any code segment.",
                "Place the notes within <!-- and --> in any code segment.",
                "Place the notes after # on any line.",
                "Place the notes after // on any line."
            ],
            "a": 2
        },
        {
            "id": 3,
            "type": "DROPDOWN",
            "q": "You are writing a program to randomly assign rooms (room_number) and team-building groups (group) for a company retreat.<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "import random\nroomsAssigned=[1]\nroom_number=1\ngroupList=[\"Ropes\",\"Rafting\",\"Obstacle\",\"Wellness\"]\ncount=0\nprint(\"Welcome to CompanyPro's Team-Building Weekend!\")\nname=input(\"Please enter your name (q to quit)? \")\nwhile name.lower() != 'q' and count < 50:\n    while room_number in roomsAssigned:\n        [b1]\n    print(f\"{name}, your room number is {room_number}\")\n    roomsAssigned.append(room_number)\n    [b2]\n    print(f\"You are in the {group} group this afternoon.\")\n    name=input(\"Please enter your name (q to quit)? \")",
            "options": [
                [
                    "room_number=random(1,50)",
                    "room_number=random.randint(1,50)",
                    "room_number=random.shuffle(1,50)",
                    "room_number=random.random(1,50)"
                ],
                [
                    "group = random.choice(groupList)",
                    "group = random.randrange(groupList)",
                    "group = random.shuffle(groupList)",
                    "group = random.sample(groupList)"
                ]
            ],
            "a": [
                "room_number=random.randint(1,50)",
                "group = random.choice(groupList)"
            ]
        },
        {
            "id": 4,
            "type": "DROPDOWN",
            "q": "A company needs help updating their file system. You must create a simple file-manipulation program that performs the following actions:<br><br>• Creates a file using the specified name.<br>• Appends the phrase \"End of listing\" to the file.<br><br>You need to complete the code to meet the requirements.<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "import os\nfile = [b1]\n    [b2](\"End of listing\")\nfile.close()",
            "options": [
                [
                    "open('myFile.txt', 'a')",
                    "open('myFile.txt', 'r')",
                    "open('myFile.txt', 'w')"
                ],
                [
                    "append",
                    "file.add",
                    "file.write",
                    "write"
                ]
            ],
            "a": [
                "open('myFile.txt', 'a')",
                "file.write"
            ]
        },
        {
            "id": 5,
            "type": "DROPDOWN",
            "q": "You are creating a program that accepts user input. The program must cast the input into an integer, and properly handle the error if it cannot do so.<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "while True:\n    [b1]\n        x = int(input(\"Please enter a number: \"))\n        break\n    [b2] ValueError:\n        print(\"Not a valid number. Try again...\")",
            "options": [
                [
                    "try:",
                    "else:",
                    "except:",
                    "raise:",
                    "finally:"
                ],
                [
                    "try",
                    "else",
                    "except",
                    "raise",
                    "finally"
                ]
            ],
            "a": [
                "try:",
                "except"
            ]
        },
        {
            "id": 6,
            "type": "DROPDOWN",
            "q": "A company needs help updating their file system. You must create a simple file-manipulation program that performs the following actions:<br><br>• Checks to see whether a file exists.<br>• If the file exists, displays its contents.<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "import os\nif [b1]\n    file = open('myFile.txt')\n    [b2]\n    file.close()",
            "options": [
                [
                    "isfile('myFile.txt'):",
                    "os.exist('myFile.txt'):",
                    "os.find('myFile.txt'):",
                    "os.path.isfile('myFile.txt'):"
                ],
                [
                    "output('myFile.txt')",
                    "print(file.get('myFile.txt'))",
                    "print(file.read())",
                    "print('myFile.txt')"
                ]
            ],
            "a": [
                "os.path.isfile('myFile.txt'):",
                "print(file.read())"
            ]
        },
        {
            "id": 7,
            "type": "DND",
            "q": "You are developing a program that prints all prime numbers between 2 and 100. The program must:\n• Loop through numbers from 2 to 100.\n• Determine whether each number is prime.\n• Stop checking a number once a divisor is found.\n\nComplete the code by dragging the correct code segments to the correct placement. <br><span style='font-size: 15px; font-style: italic;'>Note: Each code segment may be used once, more than once, or not at all.</span>",
            "code": "[target1]\n    for i in range(2, p):\n        if p % i == 0:\n            is_prime = False\n            [target2]\n    if is_prime == True:\n        print(p)\n    [target3]",
            "options": [
                "break",
                "continue",
                "p = p + 1",
                "p = 2\nis_prime = True\nwhile p <= 100:",
                "p = 2\nwhile p <= 100:\n    is_prime = True"
            ],
            "a": [
                "p = 2\nwhile p <= 100:\n    is_prime = True",
                "break",
                "p = p + 1"
            ]
        },
        {
            "id": 8,
            "type": "DROPDOWN",
            "q": "You develop a Python application for your company.<br><br>You need to complete the code so that the print statements are accurate.<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "numList = [1, 2, 3, 4, 5]\nalphaList = [\"a\", \"b\", \"c\", \"d\", \"e\"]\n[b1]\n    print(\"The values in numList are equal to alphaList\")\n[b2]\n    print(\"The values in numList are not equal to alphaList\")",
            "options": [
                [
                    "if numList = alphaList :",
                    "if numList == alphaList :",
                    "if numList += alphaList :"
                ],
                [
                    "else :",
                    "elif :",
                    "elseif :"
                ]
            ],
            "a": [
                "if numList == alphaList :",
                "else :"
            ]
        },
        {
            "id": 9,
            "type": "MCQ",
            "q": "What does the following statement do?<br><br><code>data = input()</code>",
            "options": [
                "Creates an HTML input element",
                "Allows a user to enter text in the console",
                "Displays all input peripheral devices on the computer",
                "Displays a message box that allows user input"
            ],
            "a": 1
        },
        {
            "id": 10,
            "type": "TF",
            "q": "For each statement about the following function, select True or False.",
            "code": "def grosspay(hours=40, rate=25, pieces=0, piecerate=0, salary=0):\n    overtime=0\n    if pieces > 0:\n        return pieces * piecerate\n    if salary > 0:\n        pass\n    if hours > 40:\n        overtime = (hours - 40) * (1.5 * rate)\n        return overtime + (40 * rate)\n    else:\n        return hours * rate",
            "options": [
                "A function call of grosspay() will create a syntax error.",
                "A function call of grosspay(salary=50000) will return nothing.",
                "A function call of grosspay(pieces=500, piecerate=4) will return a result of 2000."
            ],
            "a": [
                "FALSE",
                "FALSE",
                "TRUE"
            ]
        },
        {
            "id": 11,
            "type": "DROPDOWN",
            "q": "You are writing code to meet the following requirements:<br><br>• Allow users to repeatedly enter words.<br>• Output the number of characters in each word.<br><br>Complete the code by selecting the correct option from each drop-down list.",
            "code": "x = \"Hello\"\n[b1] x != \"QUIT\":\n    num = 0\n    [b2] char [b3] x:\n        num += 1\n    print(num)\n    x = input(\"Enter a new word or QUIT to exit: \")",
            "options": [
                [
                    "for",
                    "if",
                    "while"
                ],
                [
                    "for",
                    "if",
                    "while"
                ],
                [
                    "and",
                    "or",
                    "in",
                    "not"
                ]
            ],
            "a": [
                "while",
                "for",
                "in"
            ]
        },
        {
            "id": 12,
            "type": "TF",
            "q": "You are creating a Python program that compares numbers. You need to ensure that the comparisons are accurate.<br><br>For each statement, select True or False.",
            "code": "01 num1 = eval(input(\"Please enter the first number: \"))\n02 num2 = eval(input(\"Please enter the second number: \"))\n03 if num1 == num2:\n04     print(\"The two numbers are equal.\")\n05 if num1 <= num2:\n06     print(\"Number 1 is less than number 2.\")\n07 if num1 > num2:\n08     print(\"Number 1 is greater than number 2.\")\n09 if num2 = num1:\n10     print(\"The two numbers are the same.\")",
            "options": [
                "The print statement at line 04 will print only if the two numbers are equal in value.",
                "The print statement at line 06 will print only if num1 is less than num2.",
                "The print statement at line 08 will print only if num1 is greater than num2.",
                "The statement at line 09 is an invalid comparison."
            ],
            "a": [
                true,
                false,
                true,
                true
            ]
        },
        {
            "id": 13,
            "type": "DROPDOWN",
            "q": "A game development company needs a way to find the number of words in a list that contain a specific letter.<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "# Function accepts list of words and letter to search for.\n# Returns count of the number of words that contain that letter.\ndef count_letter(letter, word_list):\n    count = 0\n    \n    for [b1]\n        if [b2]\n            count += 1\n    return count\n\n# word_list is populated by the readWords() function. Code not shown.\nword_list = readWords()\n\nletter = input(\"Which letter would you like to count\")\nletter_count = count_letter(letter, word_list)\nprint(\"There are: \", letter_count, \" words that contain \", letter)",
            "options": [
                [
                    "word_list in word:",
                    "word in word_list:",
                    "word == word_list:",
                    "word is word_list:"
                ],
                [
                    "word is letter:",
                    "letter is word:",
                    "word in letter:",
                    "letter in word:"
                ]
            ],
            "a": [
                "word in word_list:",
                "letter in word:"
            ]
        },
        {
            "id": 14,
            "type": "DND",
            "q": "You are creating a guessing game. The program must:<br>• Generate a random number between 1 and 10.<br>• Allow the user up to three guesses.<br>• Stop immediately if the correct guess is entered.<br><br>Complete the code by moving the appropriate code segments into the correct locations.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct placement.</span>",
            "code": "from random import randint\ntarget = randint(1,10)\nchance = 1\nprint (\"Guess an integer from 1 to 10. You will have 3 chances.\")\n[target1]\n    guess = int(input(\"Guess an integer: \"))\n    if guess > target:\n        print (\"Guess is too high\")\n    elif guess < target:\n        print (\"Guess is too low\")\n    else:\n        print (\"Guess is just right!\")\n        [target2]\n    [target3]",
            "options": [
                "break",
                "chance += 1",
                "chance = 2",
                "pass",
                "while chance < 3",
                "while chance < 3:",
                "while chance <= 3:"
            ],
            "a": [
                "while chance <= 3:",
                "break",
                "chance += 1"
            ]
        },
        {
            "id": 15,
            "type": "DROPDOWN",
            "q": "You are creating a function to calculate admission fees (admission_fee) based on the following rules:<br><br>• Anyone under age 5 = free admission<br>• Anyone age 5 or older who is in school = $10<br>• Anyone age 5 to 17 who is not in school = $20<br>• Anyone older than age 17 who is not in school = $50<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "def admission_fee(age, school):\n    rate = 0\n    [b1]\n        rate = 10\n    [b2]\n        [b3]\n            rate = 20\n        else:\n            rate = 50\n    return rate",
            "options": [
                [
                    "if age >= 5 and school == True:",
                    "if age >= 5 and age <= 17:",
                    "if age >= 5 and school == False:"
                ],
                [
                    "elif age >= 5 and school == False:",
                    "else age >= 5 and school == False:",
                    "elif age >= 5 and school == True:"
                ],
                [
                    "if age >= 5 and school == True:",
                    "if age >= 5 and school == False:",
                    "if age <= 17:"
                ]
            ],
            "a": [
                "if age >= 5 and school == True:",
                "elif age >= 5 and school == False:",
                "if age <= 17:"
            ]
        },
        {
            "id": 16,
            "type": "MCQ",
            "q": "The Script.py file contains the following code:<br><br><code>import sys\nprint(sys.argv[2])</code><br><br>You run the following command:<br><code>python Script.py Cheese Bacon Bread</code><br><br>What is the output of the command?",
            "options": [
                "Cheese",
                "Bacon",
                "Bread",
                "Script.py"
            ],
            "a": 1
        },
        {
            "id": 17,
            "type": "DROPDOWN",
            "q": "A coworker wrote a program that inputs names into a database. Unfortunately, the program reversed the letters in each name.<br><br>You need to write a Python function that outputs the characters in a name in the correct order.<br><br>Complete the code by selecting the code segment from each drop-down list.",
            "code": "#Function reverses characters in a string.\n#returns new string in reversed order.\n\ndef reverse_name(backward_name):\n    forward_name = \"\"\n    length = [b1]\n    while length >= 0:\n        forward_name += [b2]\n        length = length-1\n    return forward_name\n\nprint(reverse_name(\"nohtyp\"))",
            "options": [
                [
                    "backward_name:",
                    "len(backward_name)-1",
                    "range(0,len(backward_name),-1)",
                    "range(len(backward_name)-1,-1,-1)"
                ],
                [
                    "backward_name[index]",
                    "backward_name[length]",
                    "backward_name[length+1]",
                    "backward_name[len(backward_name)-len(forward_name)]"
                ]
            ],
            "a": [
                "len(backward_name)-1",
                "backward_name[length]"
            ]
        },
        {
            "id": 18,
            "type": "TF",
            "q": "You create the following Python function to calculate the power of a number. Line numbers are included for reference only.<br><br>For each statement, select True or False.",
            "code": "01 # The calc_power function calculates exponents\n02 # x is the base\n03 # y is the exponent\n04 # The value of x raised to the y power is returned\n05 def calc_power(x, y):\n06     comment = \"# Return the value\"\n07     return x ** y # raise x to the y power",
            "options": [
                "Python will not check the syntax of lines 01 through 04.",
                "The pound sign (#) is optional for lines 02 and 03.",
                "The string in line 06 will be interpreted as a comment.",
                "Line 07 contains an inline comment."
            ],
            "a": [
                true,
                false,
                false,
                true
            ]
        },
        {
            "id": 19,
            "type": "MCQ",
            "q": "A friend asks you to refactor and document the following Python code:<br><br>What is the result?",
            "code": "value1 = 9\nvalue2 = 4\n\nanswer = (value1 % value2 * 10) // 2.0 ** 3.0 + value2",
            "options": [
                "The value 5.667 is displayed.",
                "The value 5.0 is displayed.",
                "A syntax error occurs.",
                "The value 129 is displayed."
            ],
            "a": 1
        },
        {
            "id": 20,
            "type": "MCQ",
            "q": "You write the following function to read a data file and print each line of the file. Line numbers are included for reference only.<br><br>When you run the program, you receive an error on line 03.<br><br>What is causing the error?",
            "code": "01 def read_file(file):\n02     line = None\n03     if os.path.isfile(file):\n04         data = open(file, 'r')\n05         for line in data:\n06             print(line)",
            "options": [
                "The isfile method does not accept one parameter.",
                "The isfile method does not exist in the path object.",
                "The path method does not exist in the os object.",
                "You need to import the os library."
            ],
            "a": 3
        },
        {
            "id": 21,
            "type": "MCQ2",
            "q": "You work on a team that is developing a game.<br><br>You need to write code that generates a random number that meets the following requirements:<br>• The number is a multiple of 5.<br>• The lowest number is 5.<br>• The highest number is 100.<br><br>Which two code segments will meet the requirements? Each correct answer presents a complete solution. (Choose 2.)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "options": [
                "from random import randint\nprint(randint(1, 20) * 5)",
                "from random import randint\nprint(randint(0, 20) * 5)",
                "from random import randrange\nprint(randrange(0, 100, 5))",
                "from random import randrange\nprint(randrange(5, 105, 5))"
            ],
            "a": [
                0,
                3
            ]
        },
        {
            "id": 22,
            "type": "DROPDOWN",
            "q": "You are writing a Python program to determine if a number (num) the user inputs is one, two, or more than two digits (digits).<br><br>Complete the code by selecting the correct code segment from each drop-down list.",
            "code": "num = int(input(\"Enter a number with 1 or 2 digits: \"))\ndigits = \"0\"\n[b1]\n    digits = \"1\"\n[b2]\n    digits = \"2\"\n[b3]\n    digits = \">2\"\nprint(digits + \" digits.\")",
            "options": [
                [
                    "if num > -10 and num < 10:",
                    "if num > -100 and num < 100:"
                ],
                [
                    "if num > -100 and num < 100:",
                    "elif num > -100 and num < 100:",
                    "if num > -10 and num < 10:",
                    "elif num > -10 and num < 10:"
                ],
                [
                    "else:",
                    "elif:"
                ]
            ],
            "a": [
                "if num > -10 and num < 10:",
                "elif num > -100 and num < 100:",
                "else:"
            ]
        },
        {
            "id": 23,
            "type": "MCQ",
            "q": "You write the following code to determine a student's final grade based on their current grade (grade) and rank (rank):<br><br>What value will print?",
            "code": "grade = 76\nrank = 3\n\nif grade > 80 and rank >= 3:\n    grade += 10\nelif grade >= 70 and rank > 3:\n    grade += 5\nelse:\n    grade -= 5\n\nprint(grade)",
            "options": [
                "71",
                "76",
                "81",
                "86"
            ],
            "a": 0
        },
        {
            "id": 24,
            "type": "MTF",
            "q": "You need to identify the data types of various type operations.<br><br>Move the appropriate data types from the list on the left to the correct type operations on the right. You may use each data type once, more than once, or not at all.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "labels": [
                "int",
                "float",
                "str",
                "bool"
            ],
            "options": [
                "type(+1E10)",
                "type(5.0)",
                "type(\"True\")",
                "type(False)"
            ],
            "a": {
                "type(+1E10)": "float",
                "type(5.0)": "float",
                "type(\"True\")": "str",
                "type(False)": "bool"
            }
        },
        {
            "id": 25,
            "type": "MCQ2",
            "q": "A bicycle company is creating a program that allows customers to log the number of miles biked. The program will send messages based on how many miles the customer logs.<br><br>You write the following Python code. Line numbers are included for reference only.<br><br>You need to define the two required functions.<br><br>Which two code segments should you use for line 01 and line 04? Each correct answer presents part of the solution. (Choose 2.)",
            "code": "01\n02     name = input(\"What is your name? \")\n03     return name\n04\n05     calories = miles * calories_per_mile\n06     return calories\n07 distance = int(input(\"How many miles did you bike this week? \"))\n08 burn_rate = 50\n09 biker = get_name()\n10 calories_burned = calc_calories(distance, burn_rate)\n11 print(biker, \", you burned about \", calories_burned, \" calories.\")",
            "options": [
                "01 def get_name():",
                "01 def get_name(biker):",
                "01 def get_name(name):",
                "04 def calc_calories():",
                "04 def calc_calories(miles, burn_rate):",
                "04 def calc_calories(miles, calories_per_mile):"
            ],
            "a": [
                0,
                5
            ]
        },
        {
            "id": 26,
            "type": "MCQ",
            "q": "Review the following code:<br><br>What is the output of the print statement?",
            "code": "x = \"oranges\"\ny = \"apples\"\nz = \"bananas\"\n\ndata = \"{1} and {0} and {2}\"\nprint(data.format(z, y, x))",
            "options": [
                "oranges and apples and bananas",
                "apples and oranges and bananas",
                "bananas and oranges and apples",
                "apples and bananas and oranges"
            ],
            "a": 3
        },
        {
            "id": 27,
            "type": "TF",
            "q": "For each statement about try statements, select True or False.",
            "options": [
                "A try statement can have one or more except clauses.",
                "A try statement can have a finally clause without an except clause.",
                "A try statement can have a finally clause and an except clause.",
                "A try statement can have one or more finally clauses."
            ],
            "a": [
                true,
                true,
                true,
                false
            ]
        },
        {
            "id": 28,
            "type": "TF",
            "q": "The following function calculates the value of an expression that uses an exponent. Line numbers are included for reference only.<br><br>For each statement, select True or False.",
            "code": "01 def calc_power(a, b):\n02     return a**b\n03 base = input(\"Enter the number for the base: \")\n04 exponent = input(\"Enter the number for the exponent: \")\n05 result = calc_power(base, exponent)\n06 print(\"The result is \" + result)",
            "options": [
                "The code will generate an error in line 03 and line 04.",
                "The code will generate an error in line 02 and line 05.",
                "The code will correctly output data to the console."
            ],
            "a": [
                false,
                true,
                false
            ]
        },
        {
            "id": 29,
            "type": "TF",
            "q": "Review the following code segment:<br><br><code>f = open(\"python.txt\", \"a\")<br>f.write(\"This is a line of text.\")<br>f.close()</code>",
            "options": [
                "A file named python.txt is created if it does not exist.",
                "The data in the file will be overwritten.",
                "Other code can open the file after this code runs."
            ],
            "a": [
                true,
                false,
                true
            ]
        },
        {
            "id": 30,
            "type": "MCQ2",
            "q": "You are creating an eCommerce script that accepts input from the user and outputs the data in a comma-delimited format.<br><br>You write the following code to accept input:<br><br><code>item = input(\"Enter the item name: \")<br>sales = int(input(\"Enter the quantity: \"))</code><br><br>The output must meet the following requirements:<br>• Enclose strings in double quotes.<br>• Do not enclose numbers in quotes or other characters.<br>• Separate items by commas.<br><br>You need to complete the code to meet the requirements.<br><br>Which two code segments could you use? Each correct answer presents a complete solution. (Choose 2.)",
            "options": [
                "print('\"' + item + '\",' , sales)",
                "print('\"{0}\",{1}'.format(item, sales))",
                "print(item + ',' + sales)",
                "print(f'\"{item}\", {sales}')"
            ],
            "a": [
                1,
                3
            ]
        },
        {
            "id": 31,
            "type": "MTF",
            "q": "You are writing a Python application that includes multiple operations on the same line of code. You need to determine the correct order of operations.<br><br>Move the type of operation from the list on the left to the correct locations on the right, with the type of operation that will be performed first at the top and the type of operation that will be performed last at the bottom.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct response.</span>",
            "headers": [
                "Operation Types",
                "Operation Types in Order"
            ],
            "placeholder": "<span style='color: #64748b; font-size: 13px;'>Operation Type</span>",
            "labels": [
                "Addition and Subtraction",
                "And",
                "Exponents",
                "Multiplication and Division",
                "Parentheses",
                "Unary positive, negative, not"
            ],
            "options": [
                "<span style='white-space:nowrap;'>Operation type performed first</span>",
                "​",
                "​​",
                "​​​",
                "​​​​",
                "​​​​​"
            ],
            "a": {
                "<span style='white-space:nowrap;'>Operation type performed first</span>": "Parentheses",
                "​": "Exponents",
                "​​": "Unary positive, negative, not",
                "​​​": "Multiplication and Division",
                "​​​​": "Addition and Subtraction",
                "​​​​​": "And"
            }
        },
        {
            "id": 32,
            "type": "TF",
            "q": "You are writing a function that increments the player score in a game. The function has the following requirements:<br>• If no value is specified for points, then points start at one.<br>• If bonus is True, then points must be doubled.<br><br>You write the following code. Line numbers are included for reference only.",
            "code": "01 def increment_score(score, bonus, points):<br>02     if bonus == True:<br>03         points = points * 2<br>04     score = score + points<br>05     return score<br>06 points = 5<br>07 score = 10<br>08 new_score = increment_score(score, True, points)",
            "options": [
                "To meet the requirements, you must change line 01 to: def increment_score(score, bonus, points = 1):",
                "If you do not change line 01 and the function is called with only two parameters, an error occurs.",
                "Line 03 will also modify the value of the variable points declared at line 06."
            ],
            "a": [
                true,
                true,
                false
            ]
        },
        {
            "id": 33,
            "type": "MTF",
            "q": "You need to identify the results of performing various slicing operations on the following sequence structure:<br><br><code>alph = \"abcdefghijklmnopqrstuvwxyz\"</code>",
            "options": [
                "alph[3:6]",
                "alph[:6]"
            ],
            "labels": [
                "def",
                "cde",
                "cdef",
                "abcdef",
                "defg",
                "abcde"
            ],
            "a": {
                "alph[3:6]": "def",
                "alph[:6]": "abcdef"
            }
        },
        {
            "id": 34,
            "type": "SHORT",
            "q": "Review the following code segment:<br><br>How many lines of output does the code print?<br><span style='font-size: 12px; font-style: italic;'>Enter the number as an integer.</span>",
            "code": "product = 2<br>n = 5<br>while (n != 0):<br>    product *= n<br>    print(product)<br>    n -= 1<br>    if n == 3:<br>        break",
            "a": "2"
        },
        {
            "id": 35,
            "type": "DROPDOWN",
            "q": "You find errors while evaluating the following code. Line numbers are included for reference only. You need to correct the code at line 03 and line 06.",
            "code": "01 numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n02 index = 0\n03     [b1]\n04     print(numbers[index])\n05 \n06     [b2]\n07         break\n08     else :\n09         index += 1",
            "options": [
                [
                    "while (index < 10) :",
                    "while [index < 10]",
                    "while (index < 5) :",
                    "while [index < 5]"
                ],
                [
                    "if numbers[index] == 6 :",
                    "if numbers[index] == 6",
                    "if numbers(index) = 6 :",
                    "if numbers(index) != 6"
                ]
            ],
            "a": [
                "while (index < 10) :",
                "if numbers[index] == 6 :"
            ]
        },
        {
            "id": 36,
            "type": "MCQ",
            "q": "You are developing a script to calculate the final score in a racing game. The score depends on the base points, time penalty, and a multiplier.<br><br>What is the final value of the <code>final_score</code> variable?",
            "code": "base_points = 50\npenalty = 3\n\nfinal_score = base_points - penalty * 2 ** 3 // 4 + (base_points % 7)",
            "options": [
                "45",
                "93",
                "44",
                "25"
            ],
            "a": 0
        },
        {
            "id": 37,
            "type": "MCQ",
            "q": "You are building a time-tracking application. You run the script and encounter a NameError on line 02.<br><br>What is causing the error?",
            "code": "01 \n02 def get_current_year():\n03     now = datetime.datetime.now()\n04     return now.year\n05 print(get_current_year())",
            "options": [
                "You need to import the datetime module.",
                "The get_current_year function must take a parameter.",
                "The now() method does not exist in the datetime object.",
                "The year attribute requires parentheses to be called."
            ],
            "a": 0
        },
        {
            "id": 38,
            "type": "MCQ",
            "q": "You are creating an automated email generation script for a travel agency:<br><br>What is the output of the print statement?",
            "code": "city = \"Paris\"\nnights = 3\nprice = 450.50\n\nemail = \"Your trip to {0} for {1} nights will cost ${2}.\"\nprint(email.format(city, nights, price))",
            "options": [
                "Your trip to Paris for 3 nights will cost $450.50.",
                "Your trip to {city} for {nights} nights will cost ${price}.",
                "A syntax error occurs because the variables are different data types.",
                "Your trip to 3 for 450.50 nights will cost $Paris."
            ],
            "a": 0
        },
        {
            "id": 39,
            "type": "TF",
            "q": "You are implementing an authentication module that must handle multiple error types seamlessly. For each statement about exception handling, select True or False.",
            "options": [
                "A single try block can be followed by multiple except blocks to handle different exceptions.",
                "The finally block is only executed if no exceptions are raised.",
                "You can use the Exception keyword to catch any general error that occurs.",
                "If an exception is raised inside a try block, the program will always crash immediately."
            ],
            "a": [
                true,
                false,
                true,
                false
            ]
        },
        {
            "id": 40,
            "type": "TF",
            "q": "You are building an application that needs to securely log user transactions into a text file:<br><br><code>with open(\"transactions.txt\", \"a\") as file:<br>&nbsp;&nbsp;&nbsp;&nbsp;file.write(\"User login successful\\n\")</code><br><br>For each statement, select True or False.",
            "options": [
                "Using the with statement ensures the file is automatically closed when the block ends.",
                "The mode \"a\" guarantees that existing data in the file will not be overwritten.",
                "If transactions.txt does not exist, the code will throw a FileNotFoundError."
            ],
            "a": [
                true,
                true,
                false
            ]
        }
    ]
};
