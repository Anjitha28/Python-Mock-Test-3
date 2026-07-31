const quizData = {
    "1": [
        {
            "id": 1,
            "type": "MTF",
            "q": "You are reviewing several Python expressions and must determine the data type each expression evaluates to.<br>Move the appropriate data type from the list on the left to the correct expression on the right.<br>You may use each data type once, more than once, or not at all.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "type(25 // 4)",
                "type(25 / 4)",
                "type(\"25\")",
                "type(25 > 4)"
            ],
            "labels": [
                "int",
                "float",
                "str",
                "bool"
            ],
            "a": {
                "type(25 // 4)": "int",
                "type(25 / 4)": "float",
                "type(\"25\")": "str",
                "type(25 > 4)": "bool"
            }
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "You are evaluating the following expression:<br><br>What is the value of result?<br><span style='font-size: 15px; font-style: italic;'>Select the correct answer.</span>",
            "code": "result = 5 + 3 * 2 ** 2",
            "options": [
                "64",
                "17",
                "29",
                "19"
            ],
            "a": 1
        },
        {
            "id": 3,
            "type": "TF",
            "q": "You are reviewing the following code:<br><br>For each statement below, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "a = [10, 20, 30]\nb = [10, 20, 30]\nc = a",
            "options": [
                "a == b evaluates to True.",
                "a is b evaluates to True.",
                "a is c evaluates to True.",
                "b is not c evaluates to True."
            ],
            "a": [
                true,
                false,
                true,
                true
            ]
        },
        {
            "id": 4,
            "type": "DROPDOWN",
            "q": "You are developing a program that manages a list of product prices. The program must: • Add a new price (150) • Sort the list • Reverse the list <br><br>Complete the code by selecting the correct option from each drop-down list.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "code": "prices = [300, 200, 400]\n# Add new price\n[b1]\n# Sort prices\n[b2]\n# Reverse prices\n[b3]",
            "options": [
                "prices.append(150)",
                "prices.sort()",
                "prices.reverse()",
                "prices.add(150)",
                "prices.sorted()"
            ],
            "a": [
                "prices.append(150)",
                "prices.sort()",
                "prices.reverse()"
            ]
        },
        {
            "id": 5,
            "type": "SHORT",
            "q": "Evaluate the following expression:<br><br>What value is printed?<br><span style='font-size: 15px; font-style: italic;'>Enter the number as an integer.</span>",
            "code": "value = (10 % 4 * 3) + 2 ** 2\nprint(value)",
            "a": "10"
        },
        {
            "id": 6,
            "type": "MTF",
            "q": "You are working with the following string:<br><br>Match each slicing expression to its result.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "code": "word = \"programming\"",
            "options": [
                "word[:4]",
                "word[3:7]",
                "word[7:]"
            ],
            "labels": [
                "prog",
                "gram",
                "ming",
                "program"
            ],
            "a": {
                "word[:4]": "prog",
                "word[3:7]": "gram",
                "word[7:]": "ming"
            }
        },
        {
            "id": 7,
            "type": "MCQ",
            "q": "You are evaluating the following code:<br><br>What is printed?",
            "code": "nums = [5, 10, 15, 20]\nprint(10 in nums)",
            "options": [
                "True",
                "False",
                "10",
                "Error"
            ],
            "a": 0
        },
        {
            "id": 8,
            "type": "TF",
            "q": "You are reviewing the following code:<br><br>For each statement below, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "x = -5\ny = +x\nz = not (x > 0)",
            "options": [
                "y will store -5.",
                "z will store True.",
                "The unary + operator changes the value of x.",
                "The not operator returns a boolean value."
            ],
            "a": [
                true,
                true,
                false,
                true
            ]
        },
        {
            "id": 9,
            "type": "MCQ",
            "q": "You are reviewing the following code:<br><br>What happens when this code executes?",
            "code": "data = [10, 20, 30]\nprint(data[3])",
            "options": [
                "30 is printed",
                "None is printed",
                "IndexError occurs",
                "0 is printed"
            ],
            "a": 2
        },
        {
            "id": 10,
            "type": "MCQ2",
            "q": "You are designing a condition that must evaluate to True only if: • x is greater than 5 AND • y is less than 10 <br><br>Which two expressions meet the requirement?<br><span style='font-size: 15px; font-style: italic;'>Each correct answer presents a complete solution. (Choose 2.)<br>Note: You will receive partial credit for each correct answer.</span>",
            "options": [
                "x > 5 and y < 10",
                "x > 5 or y < 10",
                "(x > 5) and (y < 10)",
                "x >= 5 and y <= 10"
            ],
            "a": [
                0,
                2
            ]
        }
    ],
    "2": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "You are writing a program that determines whether a number is positive, negative, or zero. Review the following code:<br><br>What is printed?",
            "code": "num = -5\nif num > 0:\n    print(\"Positive\")\nelif num < 0:\n    print(\"Negative\")\nelse:\n    print(\"Zero\")",
            "options": [
                "Positive",
                "Negative",
                "Zero",
                "Nothing"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "TF",
            "q": "You are reviewing the following code:<br><br>For each statement below, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "score = 85\nif score >= 50:\n    if score >= 75:\n        print(\"Distinction\")\n    else:\n        print(\"Pass\")\nelse:\n    print(\"Fail\")",
            "options": [
                "If score = 60, the output will be \"Pass\".",
                "If score = 40, the output will be \"Fail\".",
                "If score = 90, the output will be \"Distinction\".",
                "If score = 75, the output will be \"Pass\"."
            ],
            "a": [
                true,
                true,
                true,
                false
            ]
        },
        {
            "id": 3,
            "type": "SHORT",
            "q": "Review the following code:<br><br>How many lines of output are printed?<br><span style='font-size: 15px; font-style: italic;'>Enter the number as an integer.</span>",
            "code": "count = 1\nwhile count <= 4:\n    print(count)\n    count += 1",
            "a": "4"
        },
        {
            "id": 4,
            "type": "DD",
            "q": "You are building a program that searches for a value in a list. The program must: • Loop through numbers • Stop immediately once the value 7 is found <br><br>Complete the code by selecting the correct option from the drop-down list.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for correct selection.</span>",
            "code": "numbers = [2, 4, 6, 7, 8]\nfor n in numbers:\n    if n == 7:\n        print(\"Found\")\n        [b1]",
            "options": [
                "break",
                "continue",
                "pass"
            ],
            "a": [
                "break"
            ]
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "Review the following code:<br><br>What is printed?",
            "code": "for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)",
            "options": [
                "1 2 3 4 5",
                "1 2 4 5",
                "3",
                "1 2 3"
            ],
            "a": 1
        },
        {
            "id": 6,
            "type": "MTF",
            "q": "You are analyzing different range() expressions.<br>Match each expression with the correct sequence produced.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "range(4)",
                "range(1,5)",
                "range(0,6,2)"
            ],
            "labels": [
                "0 1 2 3",
                "1 2 3 4",
                "0 2 4"
            ],
            "a": {
                "range(4)": "0 1 2 3",
                "range(1,5)": "1 2 3 4",
                "range(0,6,2)": "0 2 4"
            }
        },
        {
            "id": 7,
            "type": "MCQ2",
            "q": "You are designing a login validation rule. The program must allow access only if: • age is 18 or older AND • has_id is True <br><br>Which two expressions meet the requirement?<br><span style='font-size: 15px; font-style: italic;'>Each correct answer presents a complete solution. (Choose 2.)</span>",
            "options": [
                "age >= 18 and has_id",
                "age > 18 or has_id",
                "(age >= 18) and (has_id == True)",
                "age >= 18 or has_id == True"
            ],
            "a": [
                0,
                2
            ]
        },
        {
            "id": 8,
            "type": "TF",
            "q": "You are reviewing the following code:<br><br>For each statement below, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "for i in range(3):\n    print(i)\nelse:\n    print(\"Done\")",
            "options": [
                "The loop prints 0 1 2.",
                "\"Done\" is printed after the loop completes normally.",
                "The else block executes only if break is used.",
                "The else block is optional in a for loop."
            ],
            "a": [
                true,
                true,
                false,
                true
            ]
        },
        {
            "id": 9,
            "type": "MCQ",
            "q": "You are reviewing the following code:<br><br>What happens when this code runs?",
            "code": "x = 1\nwhile x < 5:\n    print(x)",
            "options": [
                "Prints 1 2 3 4",
                "Prints 1 only",
                "Infinite loop",
                "Syntax Error"
            ],
            "a": 2
        },
        {
            "id": 10,
            "type": "SHORT",
            "q": "Review the following code:<br><br>How many lines of output are printed?<br><span style='font-size: 15px; font-style: italic;'>Enter the number as an integer.</span>",
            "code": "for i in range(2):\n    for j in range(2):\n        print(i, j)",
            "a": "4"
        }
    ],
    "3": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "You are creating a console-based application that asks a user to enter their age.<br>Which statement correctly reads input from the console and stores it in a variable named age?",
            "options": [
                "age = console.read()",
                "age = input()",
                "read(age)",
                "age.input()"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "DROPDOWN",
            "q": "You are writing a program that must: • Accept a number from the user • Convert it to an integer • Multiply it by 2 <br><br>Complete the code by selecting the correct option from each drop-down list.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "code": "num = [b1](\"Enter a number: \")\nresult = num * 2\nprint(result)",
            "options": [
                "int(input)",
                "int(input())",
                "input(int)",
                "float(input())"
            ],
            "a": [
                "int(input())"
            ]
        },
        {
            "id": 3,
            "type": "MCQ2",
            "q": "You are writing a billing program. The program must: • Display customer name • Display total amount • Format output as: Name: John, Total: 500 <br><br>Which two code segments correctly meet the requirement?<br><span style='font-size: 15px; font-style: italic;'>Each correct answer presents a complete solution. (Choose 2.)</span>",
            "options": [
                "print(\"Name:\", name, \"Total:\", total)",
                "print(f\"Name: {name}, Total: {total}\")",
                "print(\"Name: {0}, Total: {1}\".format(name, total))",
                "print(name + total)"
            ],
            "a": [
                1,
                2
            ]
        },
        {
            "id": 4,
            "type": "TF",
            "q": "You are reviewing the following code:<br><br>For each statement below, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "f = open(\"data.txt\", \"w\")\nf.write(\"Hello\")\nf.close()",
            "options": [
                "If the file does not exist, it will be created.",
                "If the file exists, its previous contents will be overwritten.",
                "The file must be manually closed.",
                "\"w\" mode allows reading the file."
            ],
            "a": [
                true,
                true,
                true,
                false
            ]
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "You are writing a logging program.<br>Which file mode allows you to add new content to the end of a file without deleting existing content?",
            "options": [
                "\"r\"",
                "\"w\"",
                "\"a\"",
                "\"rw\""
            ],
            "a": 2
        },
        {
            "id": 6,
            "type": "DROPDOWN",
            "q": "You are developing a program that: • Opens a file in read mode • Reads all contents • Prints the contents <br><br>Complete the code by selecting the correct option from each drop-down list.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "code": "file = open(\"info.txt\", \"[b1]\")\ndata = file.[b2]()\nprint(data)\nfile.close()",
            "options": [
                [
                    "r",
                    "w",
                    "a"
                ],
                [
                    "read",
                    "write",
                    "append"
                ]
            ],
            "a": [
                "r",
                "read"
            ]
        },
        {
            "id": 7,
            "type": "MCQ",
            "q": "You are reviewing the following code:<br><br>What is the advantage of using with in this context?",
            "code": "with open(\"data.txt\", \"r\") as f:\n    content = f.read()",
            "options": [
                "It makes the file read faster",
                "It automatically closes the file",
                "It prevents file overwriting",
                "It allows writing only"
            ],
            "a": 1
        },
        {
            "id": 8,
            "type": "TF",
            "q": "You are reviewing the following code:<br><br>For each statement below, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "import os\nif os.path.exists(\"report.txt\"):\n    print(\"File exists\")",
            "options": [
                "The os module must be imported before using os.path.exists().",
                "The function returns True if the file exists.",
                "os.path.exists() deletes the file if found.",
                "The function can check for directories as well."
            ],
            "a": [
                true,
                true,
                false,
                true
            ]
        },
        {
            "id": 9,
            "type": "SHORT",
            "q": "Review the following script:<br>The program is executed using:<br><code>python script.py Red Blue Green</code><br><br>What is printed?",
            "code": "import sys\nprint(sys.argv[1])",
            "a": "Red"
        },
        {
            "id": 10,
            "type": "MCQ2",
            "q": "You are designing a program that opens a file. The program must: • Avoid crashing if the file does not exist • Handle the error gracefully <br><br>Which two approaches meet the requirement?<br><span style='font-size: 15px; font-style: italic;'>Each correct answer presents a complete solution. (Choose 2.)</span>",
            "code": "A.\ntry:\n    f = open(\"data.txt\", \"r\")\nexcept FileNotFoundError:\n    print(\"File not found\")\n\nB.\nopen(\"data.txt\")\n\nC.\nimport os\nif os.path.exists(\"data.txt\"):\n    f = open(\"data.txt\", \"r\")\n\nD.\nf = open(\"data.txt\", \"w\")",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "a": [
                0,
                2
            ]
        }
    ],
    "4": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "<strong>Objective:</strong> Design a utility to calculate the area of floor plans for an architectural firm.<br><br>Which syntax correctly defines the function to achieve this?",
            "options": [
                "function area(length, width):",
                "def area(length, width):",
                "define area(length, width):",
                "area(length, width):"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "SHORT",
            "q": "<strong>Logic Check:</strong> A basic arithmetic helper is required in an internal math module.<br><br>What is the output of the following function?<br><span style='font-size: 15px; font-style: italic;'>Enter the number as an integer.</span>",
            "code": "def multiply(a, b):\n    return a * b\n\nresult = multiply(4, 5)\nprint(result)",
            "a": "20"
        },
        {
            "id": 3,
            "type": "TF",
            "q": "<strong>Code Review:</strong> Evaluate a greeting routine within an automated customer support bot.<br><br>Select True or False for each statement regarding the <code>greet</code> implementation below.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "def greet(name, message=\"Hello\"):\n    print(message, name)",
            "options": [
                "Calling greet(\"John\") prints \"Hello John\".",
                "Calling greet(\"John\", \"Hi\") prints \"Hi John\".",
                "Default parameters must always be the first parameter.",
                "The function can be called using keyword arguments."
            ],
            "a": [
                true,
                true,
                false,
                true
            ]
        },
        {
            "id": 4,
            "type": "DD",
            "q": "<strong>Task:</strong> Finalize a tax calculation utility by completing the function call below for a price of 100 and a tax of 20.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for correct selection.</span>",
            "code": "def calculate_price(price, tax):\n    return price + tax\n\n# Answer Area\ntotal = calculate_price([b1])",
            "options": [
                "100, 20",
                "price=100, tax=20",
                "tax=20, price=100",
                "20, 100"
            ],
            "a": [
                "price=100, tax=20"
            ]
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "<strong>Scope Analysis:</strong> Investigate a variable-lifecycle issue in a data processing routine.<br><br>What is the value of 'x' when this code completes?",
            "code": "x = 10\ndef update():\n    x = 5\nupdate()\nprint(x)",
            "options": [
                "5",
                "10",
                "None",
                "Error"
            ],
            "a": 1
        },
        {
            "id": 6,
            "type": "DD",
            "q": "<strong>Requirement:</strong> Standardize the documentation for an internal math library to ensure long-term maintainability.<br><br>Select the correct docstring format.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for correct selection.</span>",
            "code": "def add(a, b):\n    [b1]\n    return a + b",
            "options": [
                "\"\"\"This function adds two numbers\"\"\"",
                "// This function adds two numbers",
                "This function adds two numbers",
                "/* This function adds two numbers */"
            ],
            "a": [
                "\"\"\"This function adds two numbers\"\"\""
            ]
        },
        {
            "id": 7,
            "type": "TF",
            "q": "<strong>Validation Trace:</strong> Analyze the behavior of a user-input parity filter within a registration form.<br><br>Determine the truth of each operational statement for the <code>check_even</code> function.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "def check_even(num):\n    if num % 2 == 0:\n        return \"Even\"\n    return \"Odd\"",
            "options": [
                "The function always returns a value.",
                "If num = 4, the function returns \"Even\".",
                "If num = 3, the function returns \"Odd\".",
                "Both return statements will execute for the same input."
            ],
            "a": [
                true,
                true,
                true,
                false
            ]
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "<strong>Diagnostics:</strong> Inspect a simple display function for unexpected return behaviors.<br><br>What result is assigned after this code executes?",
            "code": "def show():\n    print(\"Hello\")\nresult = show()\nprint(result)",
            "options": [
                "Hello",
                "Hello None",
                "None",
                "Error"
            ],
            "a": 2
        },
        {
            "id": 9,
            "type": "MCQ2",
            "q": "<strong>Architecture:</strong> Implement an aggregation tool capable of processing a dynamic list of price entries.<br><br>Which two function definitions meet this flexibility requirement?<br><span style='font-size: 15px; font-style: italic;'>Each correct answer presents a complete solution. (Choose 2.)</span>",
            "options": [
                "def total(*numbers):",
                "def total(numbers):",
                "def total(**numbers):",
                "def total(a, b, *numbers):"
            ],
            "a": [
                0,
                3
            ]
        },
        {
            "id": 10,
            "type": "SHORT",
            "q": "<strong>Finalization:</strong> Verify the discount-logic integrity for a premium user loyalty formula.<br><br>Calculate the final output for a price of 120.<br><span style='font-size: 15px; font-style: italic;'>Enter the value as a number.</span>",
            "code": "def calculate_discount(price):\n    if price > 100:\n        return price * 0.9\n    return price\nprint(calculate_discount(120))",
            "a": "108.0"
        }
    ],
    "5": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "You are writing a program that converts user input to an integer.<br>Which code correctly handles invalid input without crashing?",
            "code": "A.\nx = int(input())\n\nB.\ntry:\n    x = int(input())\nexcept:\n    print(\"Invalid input\")\n\nC.\nhandle:\n    x = int(input())\n\nD.\ncatch ValueError:\n    print(\"Invalid\")",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "DD",
            "q": "You are writing a program that divides two numbers entered by the user. The program must: • Catch division by zero errors • Display \"Cannot divide by zero\" <br><br>Complete the code by selecting the correct exception type.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for correct selection.</span>",
            "code": "try:\n    result = 10 / 0\nexcept [b1]:\n    print(\"Cannot divide by zero\")",
            "options": [
                "ValueError",
                "ZeroDivisionError",
                "TypeError",
                "FileNotFoundError"
            ],
            "a": [
                "ZeroDivisionError"
            ]
        },
        {
            "id": 3,
            "type": "TF",
            "q": "<strong>Data Engineering:</strong> You are troubleshooting a data ingestion script. The script must safely attempt to open a required data file and guarantee that cleanup operations run regardless of success or failure.<br><br>Analyze the following code block. For each statement below, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "try:\n    f = open(\"data.txt\")\nexcept FileNotFoundError:\n    print(\"File not found\")\nfinally:\n    print(\"Execution completed\")",
            "options": [
                "The finally block always executes.",
                "The finally block runs only if an exception occurs.",
                "The finally block runs even if no exception occurs.",
                "The except block runs if the file does not exist."
            ],
            "a": [
                true,
                false,
                true,
                true
            ]
        },
        {
            "id": 4,
            "type": "MTF",
            "q": "You are designing a program that handles different types of exceptions.<br>Match each exception with the scenario that causes it.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "Dividing a number by zero",
                "Converting \"abc\" to int",
                "Adding string and integer"
            ],
            "labels": [
                "ValueError",
                "TypeError",
                "ZeroDivisionError"
            ],
            "a": {
                "Dividing a number by zero": "ZeroDivisionError",
                "Converting \"abc\" to int": "ValueError",
                "Adding string and integer": "TypeError"
            }
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "You are writing a function that must: • Raise an error if the age entered is negative. <br><br>Which code correctly raises an exception?",
            "code": "A.\nif age < 0:\n    print(\"Invalid age\")\n\nB.\nif age < 0:\n    raise ValueError(\"Invalid age\")\n\nC.\nif age < 0:\n    except ValueError\n\nD.\nif age < 0:\n    error(\"Invalid age\")",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "a": 1
        },
        {
            "id": 6,
            "type": "TF",
            "q": "<strong>Inventory Management:</strong> You are testing an e-commerce platform's checkout system. The system must verify that sufficient stock exists before processing an order.<br><br>Analyze the behavior of the following assertion check where <code>x</code> represents the current stock level of an item. For each statement below, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "x = 10\nassert x > 5",
            "options": [
                "The assertion passes.",
                "An AssertionError is raised.",
                "If x = 3, the assertion would fail.",
                "assert is commonly used in testing."
            ],
            "a": [
                true,
                false,
                true,
                true
            ]
        },
        {
            "id": 7,
            "type": "DD",
            "q": "You are writing a unit test to verify that two values are equal.<br>Complete the test method by selecting the correct assertion method.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for correct selection.</span>",
            "code": "import unittest\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.[b1](5, 2 + 3)",
            "options": [
                "assertEqual",
                "assertTrue",
                "assertIs",
                "assertIn"
            ],
            "a": [
                "assertEqual"
            ]
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "<strong>Financial Analytics:</strong> You are reviewing a risk assessment module. The <code>divide</code> function calculates a financial ratio based on user-submitted data.<br><br>What is a potential issue with this implementation?",
            "code": "def divide(a, b):\n    try:\n        return a / b\n    except:\n        return 0",
            "options": [
                "It handles only ZeroDivisionError",
                "It hides all types of errors",
                "It causes syntax error",
                "It does not handle division"
            ],
            "a": 1
        },
        {
            "id": 9,
            "type": "MCQ2",
            "q": "You are designing a program that opens a file safely. The program must: • Prevent crash if file does not exist • Display an error message <br><br>Which two code segments meet the requirement? (Choose 2.)",
            "code": "A.\ntry:\n    f = open(\"data.txt\", \"r\")\nexcept FileNotFoundError:\n    print(\"File not found\")\n\nB.\nf = open(\"data.txt\", \"r\")\n\nC.\nimport os\nif os.path.exists(\"data.txt\"):\n    f = open(\"data.txt\", \"r\")\nelse:\n    print(\"File not found\")\n\nD.\nf = open(\"data.txt\", \"w\")",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "a": [
                0,
                2
            ]
        },
        {
            "id": 10,
            "type": "SHORT",
            "q": "Review the following code:<br><br>What is missing from this code?",
            "code": "try\n    x = int(\"abc\")\nexcept ValueError\n    print(\"Error\")",
            "a": ":"
        }
    ],
    "6": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "You are writing a program that uses functions from the random module.<br>Which statement correctly imports the module?",
            "options": [
                "include random",
                "using random",
                "import random",
                "random.import()"
            ],
            "a": 2
        },
        {
            "id": 2,
            "type": "DROPDOWN",
            "q": "You are developing a game that must generate a random number between 1 and 10 (inclusive).<br>Complete the code by selecting the correct option from the drop-down list.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for correct selection.</span>",
            "code": "import random\nnumber = random.[b1](1, 10)\nprint(number)",
            "options": [
                "randint",
                "randrange",
                "random",
                "choice"
            ],
            "a": [
                "randint"
            ]
        },
        {
            "id": 3,
            "type": "MCQ",
            "q": "Review the following code:<br><br>Which values can be printed?",
            "code": "import random\nprint(random.randrange(0, 10, 2))",
            "options": [
                "1, 3, 5, 7, 9",
                "0, 2, 4, 6, 8",
                "2, 4, 6, 8, 10",
                "0 to 10 inclusive"
            ],
            "a": 1
        },
        {
            "id": 4,
            "type": "TF",
            "q": "You are reviewing the following code:<br><br>For each statement below, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "import os\nif os.path.exists(\"data.txt\"):\n    print(\"File exists\")",
            "options": [
                "os must be imported before using os.path.exists().",
                "os.path.exists() returns a boolean value.",
                "os.path.exists() deletes the file after checking.",
                "This function can check for directories as well."
            ],
            "a": [
                true,
                true,
                false,
                true
            ]
        },
        {
            "id": 5,
            "type": "DD",
            "q": "You are writing a script that must read the first command-line argument provided by the user.<br>Complete the code by selecting the correct option.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for correct selection.</span>",
            "code": "import sys\nvalue = sys.argv[[b1]]\nprint(value)",
            "options": [
                "0",
                "1",
                "2",
                "-1"
            ],
            "a": [
                "1"
            ]
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "You are writing a program that must calculate the square root of a number.<br>Which code correctly performs this operation?",
            "code": "A.\nimport math\nprint(math.sqrt(16))\n\nB.\nimport math\nprint(math.square(16))\n\nC.\nsqrt(16)\n\nD.\nmath.root(16)",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "a": 0
        },
        {
            "id": 7,
            "type": "TF",
            "q": "You are reviewing the following code:<br><br>For each statement below, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "import random as r\nprint(r.randint(1,5))",
            "options": [
                "random is imported with alias r.",
                "r.randint(1,5) generates a random integer.",
                "The alias changes how the module works internally.",
                "Using an alias is optional."
            ],
            "a": [
                true,
                true,
                false,
                true
            ]
        },
        {
            "id": 8,
            "type": "MCQ2",
            "q": "You are building a system utility script. The script must: • Check whether a file exists • Generate a random number <br><br>Which two modules must be imported? (Choose 2.)",
            "options": [
                "sys",
                "os",
                "random",
                "math"
            ],
            "a": [
                1,
                2
            ]
        },
        {
            "id": 9,
            "type": "MCQ",
            "q": "You are writing a program that lists all files in the current directory.<br>Which code correctly performs this task?",
            "code": "A.\nimport os\nprint(os.listdir())\n\nB.\nprint(list.files())\n\nC.\nimport sys\nprint(sys.files())\n\nD.\nos.files()",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "a": 0
        },
        {
            "id": 10,
            "type": "SHORT",
            "q": "Review the following code:<br><br>What is printed?",
            "code": "import random\nimport sys\nnumbers = [10, 20, 30, 40]\nindex = random.randint(0, 3)\nprint(numbers[index])",
            "a": "4"
        }
    ],
    "mock1": [
        {
            "id": 1,
            "type": "DROPDOWN",
            "q": "You need to test whether an object is an instance of a specific class.<br>How should you set up the unit test?<br>Complete the code by selecting the correct option from each drop-down list.<br><span style='font-size: 12px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You are writing a program to randomly assign rooms (room_number) and team-building groups (group) for a company retreat.<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "A company needs help updating their file system. You must create a simple file-manipulation program that performs the following actions:<br><br>• Creates a file using the specified name.<br>• Appends the phrase \"End of listing\" to the file.<br><br>You need to complete the code to meet the requirements.<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "A company needs help updating their file system. You must create a simple file-manipulation program that performs the following actions:<br><br>• Checks to see whether a file exists.<br>• If the file exists, displays its contents.<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You are developing a program that prints all prime numbers between 2 and 100. The program must:\n• Loop through numbers from 2 to 100.\n• Determine whether each number is prime.\n• Stop checking a number once a divisor is found.\n\nComplete the code by dragging the correct code segments to the correct placement. <br><span style='font-size: 15px; font-style: italic;'>Note: Each code segment may be used once, more than once, or not at all. You will receive partial credit for each correct selection.</span>",
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
            "q": "For each statement about the following function, select True or False.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You are writing code to meet the following requirements:<br><br>• Allow users to repeatedly enter words.<br>• Output the number of characters in each word.<br><br>Complete the code by selecting the correct option from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You are creating a Python program that compares numbers. You need to ensure that the comparisons are accurate.<br><br>For each statement, select True or False.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "A game development company needs a way to find the number of words in a list that contain a specific letter.<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You are creating a function to calculate admission fees (admission_fee) based on the following rules:<br><br>• Anyone under age 5 = free admission<br>• Anyone age 5 or older who is in school = $10<br>• Anyone age 5 to 17 who is not in school = $20<br>• Anyone older than age 17 who is not in school = $50<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "A coworker wrote a program that inputs names into a database. Unfortunately, the program reversed the letters in each name.<br><br>You need to write a Python function that outputs the characters in a name in the correct order.<br><br>Complete the code by selecting the code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You create the following Python function to calculate the power of a number. Line numbers are included for reference only.<br><br>For each statement, select True or False.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You work on a team that is developing a lottery application.<br><br>You need to write code that generates a random number that meets the following requirements:<br>• The number is a multiple of 10.<br>• The lowest number is 10.<br>• The highest number is 200.<br><br>Which two code segments will meet the requirements? Each correct answer presents a complete solution. (Choose 2.)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "options": [
                "from random import randint\nprint(randint(1, 20) * 10)",
                "from random import randint\nprint(randint(0, 20) * 10)",
                "from random import randrange\nprint(randrange(0, 200, 10))",
                "from random import randrange\nprint(randrange(10, 210, 10))"
            ],
            "a": [
                0,
                3
            ]
        },
        {
            "id": 22,
            "type": "DROPDOWN",
            "q": "You are writing a Python program for a weather app to determine if a temperature (temp) is Freezing, Cold, or Warm.<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "code": "temp = int(input(\"Enter the temperature: \"))\nstatus = \"Unknown\"\n[b1]\n    status = \"Freezing\"\n[b2]\n    status = \"Cold\"\n[b3]\n    status = \"Warm\"\nprint(\"It is \" + status + \".\")",
            "options": [
                [
                    "if temp < 0:",
                    "if temp > 0:"
                ],
                [
                    "elif temp < 30:",
                    "if temp < 30:",
                    "elif temp > 30:",
                    "if temp > 30:"
                ],
                [
                    "else:",
                    "elif:"
                ]
            ],
            "a": [
                "if temp < 0:",
                "elif temp < 30:",
                "else:"
            ]
        },
        {
            "id": 23,
            "type": "MCQ",
            "q": "You write the following code to determine an employee's salary bonus based on their base salary and years of experience:<br><br>What value will print?",
            "code": "salary = 4000\nexperience = 5\n\nif salary > 5000 and experience >= 5:\n    salary += 1000\nelif salary >= 3000 and experience > 3:\n    salary += 500\nelse:\n    salary -= 200\n\nprint(salary)",
            "options": [
                "4500",
                "5000",
                "3800",
                "4000"
            ],
            "a": 0
        },
        {
            "id": 24,
            "type": "MTF",
            "q": "You need to identify the data types of various operations.<br><br>Move the appropriate data types from the list on the left to the correct operations on the right. You may use each data type once, more than once, or not at all.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "labels": [
                "int",
                "float",
                "str",
                "bool"
            ],
            "options": [
                "type(3.14)",
                "type(-42)",
                "type(\"False\")",
                "type(True)"
            ],
            "a": {
                "type(3.14)": "float",
                "type(-42)": "int",
                "type(\"False\")": "str",
                "type(True)": "bool"
            }
        },
        {
            "id": 25,
            "type": "MCQ2",
            "q": "A fitness company is creating a program that allows runners to log their steps. The program will calculate the distance run based on stride length.<br><br>You write the following Python code. Line numbers are included for reference only.<br><br>You need to define the two required functions.<br><br>Which two code segments should you use for line 01 and line 04? Each correct answer presents part of the solution. (Choose 2.)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "code": "01\n02     name = input(\"What is your name? \")\n03     return name\n04\n05     distance = steps * stride_length\n06     return distance\n07 step_count = int(input(\"How many steps did you run? \"))\n08 stride = 2.5\n09 runner = get_runner()\n10 total_distance = calc_distance(step_count, stride)\n11 print(runner, \", you ran \", total_distance, \" feet.\")",
            "options": [
                "01 def get_runner():",
                "01 def get_runner(runner):",
                "01 def get_runner(name):",
                "04 def calc_distance():",
                "04 def calc_distance(steps, stride):",
                "04 def calc_distance(steps, stride_length):"
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
            "code": "x = \"truck\"\ny = \"suv\"\nz = \"sedan\"\n\ndata = \"{1} and {0} and {2}\"\nprint(data.format(z, y, x))",
            "options": [
                "sedan and truck and suv",
                "truck and suv and sedan",
                "suv and sedan and truck",
                "suv and truck and sedan"
            ],
            "a": 2
        },
        {
            "id": 27,
            "type": "TF",
            "q": "For each statement about try statements, select True or False.",
            "options": [
                "An else clause in a try statement only executes if no exceptions were raised.",
                "A try statement can have a finally clause without an except clause.",
                "A try statement can have a finally clause and an except clause.",
                "The finally clause is skipped if an exception is caught."
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
            "q": "The following function calculates a discounted price. Line numbers are included for reference only.<br><br>For each statement, select True or False.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "code": "01 def calc_discount(price, pct):\n02     return price - (price * pct)\n03 retail = input(\"Enter the retail price: \")\n04 discount = input(\"Enter the discount decimal: \")\n05 result = calc_discount(retail, discount)\n06 print(\"The final price is \" + str(result))",
            "options": [
                "The code will generate a TypeError in line 03 and line 04.",
                "The code will generate an error in line 02 and line 05 because strings cannot be multiplied like floats.",
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
            "q": "Review the following code segment:<br><br><code>f = open(\"data.csv\", \"w\")<br>f.write(\"ID,Name,Role\\n\")<br>f.close()</code>",
            "options": [
                "A file named data.csv is created if it does not exist.",
                "The data in the file will be appended to existing data.",
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
            "q": "You are creating an HR script that accepts input from the user and outputs the data in a comma-delimited format.<br><br>You write the following code to accept input:<br><br><code>name = input(\"Enter employee name: \")<br>age = int(input(\"Enter age: \"))</code><br><br>The output must meet the following requirements:<br>• Enclose strings in double quotes.<br>• Do not enclose numbers in quotes or other characters.<br>• Separate items by commas.<br><br>You need to complete the code to meet the requirements.<br><br>Which two code segments could you use? Each correct answer presents a complete solution. (Choose 2.)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "print('\"' + name + '\",' , age)",
                "print('\"{0}\",{1}'.format(name, age))",
                "print(name + ',' + age)",
                "print(f'\"{name}\", {age}')"
            ],
            "a": [
                1,
                3
            ]
        },
        {
            "id": 31,
            "type": "MTF",
            "q": "You are writing a Python application that includes multiple operations on the same line of code. You need to determine the correct order of precedence.<br><br>Move the operations from the list on the left to the correct locations on the right, with highest precedence at the top and lowest precedence at the bottom.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct response.</span>",
            "headers": [
                "Operations",
                "Operations in Order"
            ],
            "placeholder": "<span style='color: #64748b; font-size: 13px;'>Operation Type</span>",
            "labels": [
                "Addition and Subtraction",
                "Logical AND",
                "Exponents (**)",
                "Multiplication and Division",
                "Parentheses ()",
                "Unary positive, negative, bitwise NOT"
            ],
            "options": [
                "<span style='white-space:nowrap;'>Highest precedence</span>",
                "​",
                "​​",
                "​​​",
                "​​​​",
                "​​​​​"
            ],
            "a": {
                "<span style='white-space:nowrap;'>Highest precedence</span>": "Parentheses ()",
                "​": "Exponents (**)",
                "​​": "Unary positive, negative, bitwise NOT",
                "​​​": "Multiplication and Division",
                "​​​​": "Addition and Subtraction",
                "​​​​​": "Logical AND"
            }
        },
        {
            "id": 32,
            "type": "TF",
            "q": "You are writing a function that applies a discount to a retail price. The function has the following requirements:<br>• If no value is specified for the discount percentage, it starts at 10.<br>• If is_member is True, the discount percentage is doubled.<br><br>You write the following code. Line numbers are included for reference only.",
            "code": "01 def apply_discount(price, is_member, discount):\n02     if is_member == True:\n03         discount = discount * 2\n04     price = price - (price * discount / 100)\n05     return price\n06 discount = 5\n07 price = 100\n08 final_price = apply_discount(price, True, discount)",
            "options": [
                "To meet the requirements, you must change line 01 to: def apply_discount(price, is_member, discount = 10):",
                "If you do not change line 01 and the function is called with only two parameters, an error occurs.",
                "Line 03 will permanently modify the value of the variable discount declared at line 06."
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
            "q": "You need to identify the results of performing various slicing operations on the following sequence structure:<br><br><code>digits = \"0123456789\"</code>",
            "options": [
                "digits[2:5]",
                "digits[:4]"
            ],
            "labels": [
                "345",
                "234",
                "1234",
                "0123",
                "2345",
                "01234"
            ],
            "a": {
                "digits[2:5]": "234",
                "digits[:4]": "0123"
            }
        },
        {
            "id": 34,
            "type": "SHORT",
            "q": "Review the following code segment:<br><br>How many lines of output does the code print?<br><span style='font-size: 12px; font-style: italic;'>Enter the number as an integer.</span>",
            "code": "total = 0\nn = 10\nwhile (n > 0):\n    total += n\n    print(total)\n    n -= 2\n    if n == 4:\n        break",
            "a": "3"
        },
        {
            "id": 35,
            "type": "DROPDOWN",
            "q": "You find errors while evaluating the following code. Line numbers are included for reference only. You need to correct the code at line 03 and line 06.",
            "code": "<div class='code-snippet'>01 chars = ['A', 'B', 'C', 'D', 'E']<br>02 index = 0<br>03 [b1]<br>04 &nbsp;&nbsp;&nbsp;&nbsp;print(chars[index])<br>05 <br>06 &nbsp;&nbsp;&nbsp;&nbsp;[b2]<br>07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>08 &nbsp;&nbsp;&nbsp;&nbsp;else :<br>09 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index += 1</div>",
            "options": [
                [
                    "while (index < 5) :",
                    "while [index < 5]",
                    "while (index < 6) :",
                    "while [index < 6]"
                ],
                [
                    "if chars[index] == 'D' :",
                    "if chars[index] == 'D'",
                    "if chars(index) = 'D' :",
                    "if chars(index) != 'D'"
                ]
            ],
            "a": [
                "while (index < 5) :",
                "if chars[index] == 'D' :"
            ]
        },
        {
            "id": 36,
            "type": "MCQ",
            "q": "You are developing a script to calculate net profit. The formula utilizes exponents and floor division.<br><br>What is the final value of the <code>net_profit</code> variable?",
            "code": "revenue = 100\nexpenses = 4\n\nnet_profit = revenue - expenses * 2 ** 2 // 3 + (revenue % 9)",
            "options": [
                "96",
                "88",
                "110",
                "45"
            ],
            "a": 0
        },
        {
            "id": 37,
            "type": "MCQ",
            "q": "You are building a geometry application. You run the script and encounter a NameError on line 03.<br><br>What is causing the error?",
            "code": "01 \n02 def calculate_hypotenuse(a, b):\n03     c_squared = math.pow(a, 2) + math.pow(b, 2)\n04     return math.sqrt(c_squared)\n05 print(calculate_hypotenuse(3, 4))",
            "options": [
                "You need to import the math module.",
                "The math.pow function only accepts floating-point numbers.",
                "The c_squared variable must be globally declared.",
                "The calculate_hypotenuse function must return an integer."
            ],
            "a": 0
        },
        {
            "id": 38,
            "type": "MCQ",
            "q": "You are creating an automated email generation script for a real estate agency:<br><br>What is the output of the print statement?",
            "code": "city = \"Tokyo\"\nrooms = 2\nrent = 1200.50\n\nemail = \"The {1}-room apartment in {0} rents for ${2}.\"\nprint(email.format(city, rooms, rent))",
            "options": [
                "The 2-room apartment in Tokyo rents for $1200.50.",
                "The {rooms}-room apartment in {city} rents for ${rent}.",
                "A syntax error occurs because the variables are different data types.",
                "The Tokyo-room apartment in 2 rents for $1200.50."
            ],
            "a": 0
        },
        {
            "id": 39,
            "type": "TF",
            "q": "You are implementing a robust data pipeline that must handle errors properly. For each statement about exception handling, select True or False.",
            "options": [
                "You can use the 'raise' keyword to intentionally trigger an exception.",
                "A try block can be nested inside another try block or except block.",
                "Variables defined inside a try block are strictly local and cannot be accessed in the except block.",
                "If an exception is raised inside a try block, the program will always crash immediately."
            ],
            "a": [
                true,
                true,
                false,
                false
            ]
        },
        {
            "id": 40,
            "type": "TF",
            "q": "You are building an application that needs to securely log diagnostic data into a text file:<br><br><code>with open(\"server_logs.txt\", \"w\") as log_file:<br>&nbsp;&nbsp;&nbsp;&nbsp;log_file.write(\"System start\\n\")</code><br><br>For each statement, select True or False.",
            "options": [
                "Using the with statement ensures the file is automatically closed when the block ends.",
                "The mode \"w\" guarantees that existing data in the file will not be overwritten.",
                "If server_logs.txt does not exist, the code will throw a FileNotFoundError."
            ],
            "a": [
                true,
                false,
                false
            ]
        }
    ],
    "mock2": [
        {
            "id": 1,
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
            "id": 2,
            "type": "DROPDOWN",
            "q": "You are writing a Python program to determine if a number (num) the user inputs is one, two, or more than two digits (digits).<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "id": 3,
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
            "id": 4,
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
            "id": 5,
            "type": "MCQ2",
            "q": "A bicycle company is creating a program that allows customers to log the number of miles biked. The program will send messages based on how many miles the customer logs.<br><br>You write the following Python code. Line numbers are included for reference only.<br><br>You need to define the two required functions.<br><br>Which two code segments should you use for line 01 and line 04? Each correct answer presents part of the solution. (Choose 2.)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "id": 6,
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
            "id": 7,
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
            "id": 8,
            "type": "TF",
            "q": "The following function calculates the value of an expression that uses an exponent. Line numbers are included for reference only.<br><br>For each statement, select True or False.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "id": 9,
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
            "id": 10,
            "type": "MCQ2",
            "q": "You are creating an eCommerce script that accepts input from the user and outputs the data in a comma-delimited format.<br><br>You write the following code to accept input:<br><br><code>item = input(\"Enter the item name: \")<br>sales = int(input(\"Enter the quantity: \"))</code><br><br>The output must meet the following requirements:<br>• Enclose strings in double quotes.<br>• Do not enclose numbers in quotes or other characters.<br>• Separate items by commas.<br><br>You need to complete the code to meet the requirements.<br><br>Which two code segments could you use? Each correct answer presents a complete solution. (Choose 2.)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "id": 11,
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
            "id": 12,
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
            "id": 13,
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
            "id": 14,
            "type": "SHORT",
            "q": "Review the following code segment:<br><br>How many lines of output does the code print?<br><span style='font-size: 12px; font-style: italic;'>Enter the number as an integer.</span>",
            "code": "product = 2<br>n = 5<br>while (n != 0):<br>    product *= n<br>    print(product)<br>    n -= 1<br>    if n == 3:<br>        break",
            "a": "2"
        },
        {
            "id": 15,
            "type": "DROPDOWN",
            "q": "You find errors while evaluating the following code. Line numbers are included for reference only. You need to correct the code at line 03 and line 06.",
            "code": "<div class='code-snippet'>01 numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<br>02 index = 0<br>03 [b1]<br>04 &nbsp;&nbsp;&nbsp;&nbsp;print(numbers[index])<br>05 <br>06 &nbsp;&nbsp;&nbsp;&nbsp;[b2]<br>07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>08 &nbsp;&nbsp;&nbsp;&nbsp;else :<br>09 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index += 1</div>",
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
            "id": 16,
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
            "id": 17,
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
            "id": 18,
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
            "id": 19,
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
            "id": 20,
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
        },
        {
            "id": 21,
            "type": "DROPDOWN",
            "q": "You are developing a Python program that stores log information in a file. The program must:<br>• Open a file named log.txt<br>• Append new messages without deleting existing data<br><br>Complete the code by selecting the correct option from each drop-down list.<br><span style='font-size: 12px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "code": "file = open(\"log.txt\", \"[b1]\")\nfile.[b2](\"System started\")\nfile.close()",
            "options": [
                [
                    "r",
                    "w",
                    "a"
                ],
                [
                    "read",
                    "write",
                    "append"
                ]
            ],
            "a": [
                "a",
                "write"
            ]
        },
        {
            "id": 22,
            "type": "MCQ",
            "q": "You are reviewing code written by a developer that checks whether a number exists in a list.<br><br>What will the program output?",
            "code": "numbers = [10, 20, 30, 40]\nprint(20 in numbers)",
            "options": [
                "False",
                "True",
                "20",
                "Error"
            ],
            "a": 1
        },
        {
            "id": 23,
            "type": "DND",
            "q": "You are developing a program that processes numbers from 1 to 10. The program must:<br>• Stop the loop immediately when the number 7 is encountered.<br><br>Complete the code by moving the correct code segment into the blank.<br><span style='font-size: 12px; font-style: italic;'>Note: You will receive partial credit for correct placement.</span>",
            "code": "for i in range(1, 11):\n    if i == 7:\n        [target1]\n    print(i)",
            "options": [
                "break",
                "continue",
                "pass"
            ],
            "a": [
                "break"
            ]
        },
        {
            "id": 24,
            "type": "DROPDOWN",
            "q": "You are creating a program that stores student marks. The program must:<br>• Add a new mark to the list<br>• Sort the list<br><br>Complete the code by selecting the correct option from each drop-down list.<br><span style='font-size: 12px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "code": "marks = [70, 85, 60]\nmarks.[b1](90)\nmarks.[b2]()\nprint(marks)",
            "options": [
                [
                    "append",
                    "insert",
                    "sort",
                    "sorted"
                ],
                [
                    "append",
                    "insert",
                    "sort",
                    "sorted"
                ]
            ],
            "a": [
                "append",
                "sort"
            ]
        },
        {
            "id": 25,
            "type": "TF",
            "q": "You are reviewing the following Python code:<br><br>For each statement below, select True or False.<br><span style='font-size: 12px; font-style: italic;'>Note: You will receive partial credit for each correct answer.</span>",
            "code": "score = 75\nif score >= 50:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
            "options": [
                "The program prints Pass when score is 75.",
                "The program prints Fail when score is below 50.",
                "The else block executes when the condition is False."
            ],
            "a": [
                true,
                true,
                true
            ]
        },
        {
            "id": 26,
            "type": "DROPDOWN",
            "q": "You are developing a Python program that reads data from a file. The program must:<br>• Check if the file records.txt exists.<br>• Read and print its contents if it exists.<br><br>Complete the code by selecting the correct option from each drop-down list.<br><span style='font-size: 12px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "code": "import os\nif [b1](\"records.txt\"):\n    file = open(\"records.txt\",\"r\")\n    print(file.[b2]())\n    file.close()",
            "options": [
                [
                    "os.path.exists",
                    "os.exists",
                    "os.path.check"
                ],
                [
                    "read",
                    "write",
                    "open"
                ]
            ],
            "a": [
                "os.path.exists",
                "read"
            ]
        },
        {
            "id": 27,
            "type": "DD",
            "q": "You are creating a program that generates a random number between 1 and 100.<br><br>Complete the code by selecting the correct option.",
            "code": "import random\nnum = random.[b1](1,100)\nprint(num)",
            "options": [
                "randint",
                "rand",
                "range",
                "random"
            ],
            "a": [
                "randint"
            ]
        },
        {
            "id": 28,
            "type": "MCQ",
            "q": "You are reviewing the following code:<br><br>What is the output?",
            "code": "for i in range(3):\n    print(i)",
            "options": [
                "1 2 3",
                "0 1 2",
                "0 1 2 3",
                "1 2"
            ],
            "a": 1
        },
        {
            "id": 29,
            "type": "TF",
            "q": "You are reviewing the following code:<br><br>Select True or False.",
            "code": "x = 10\nif x > 5:\n    print(\"High\")\nelse:\n    print(\"Low\")",
            "options": [
                "The program prints High.",
                "The program prints Low when x = 10.",
                "The if block runs when the condition is True."
            ],
            "a": [
                true,
                false,
                true
            ]
        },
        {
            "id": 30,
            "type": "DD",
            "q": "You are writing a program that checks whether a number exists in a list.<br><br>Complete the code.",
            "code": "numbers = [5,10,15]\nif 10 [b1] numbers:\n    print(\"Found\")",
            "options": [
                "in",
                "is",
                "==",
                "not"
            ],
            "a": [
                "in"
            ]
        },
        {
            "id": 31,
            "type": "SHORT",
            "q": "Review the following code:<br><br>How many lines of output will be printed?<br><span style='font-size: 12px; font-style: italic;'>Enter the number as an integer.</span>",
            "code": "for i in range(2):\n    for j in range(2):\n        print(i,j)",
            "a": "4"
        },
        {
            "id": 32,
            "type": "DD",
            "q": "You are creating a loop that prints numbers until 5.<br><br>Complete the code.",
            "code": "x = 1\n[b1] x <= 5:\n    print(x)\n    x += 1",
            "options": [
                "if",
                "for",
                "while"
            ],
            "a": [
                "while"
            ]
        },
        {
            "id": 33,
            "type": "MCQ",
            "q": "You are teaching a new colleague how to build reusable components in Python.<br><br>Which keyword defines a function?",
            "options": [
                "function",
                "define",
                "def",
                "func"
            ],
            "a": 2
        },
        {
            "id": 34,
            "type": "SHORT",
            "q": "You are reviewing a basic math utility function in a financial application.<br><br>What is the output of this code?",
            "code": "def add(a,b):\n    return a+b\nprint(add(3,7))",
            "a": "10"
        },
        {
            "id": 35,
            "type": "TF",
            "q": "You are implementing a default greeting for a user profile system.<br><br>Review the following code and select True or False for each statement.",
            "code": "def greet(name=\"Student\"):\n    print(\"Hello\",name)",
            "options": [
                "greet() prints Hello Student",
                "greet(\"Ana\") prints Hello Ana",
                "Default parameters must be declared first."
            ],
            "a": [
                true,
                true,
                false
            ]
        },
        {
            "id": 36,
            "type": "MCQ",
            "q": "You are developing a script that processes color themes from the command line.<br>Program execution:<br><code>python script.py Red Blue</code><br><br>What is the output?",
            "code": "import sys\nprint(sys.argv[1])",
            "options": [
                "script.py",
                "Red",
                "Blue",
                "Error"
            ],
            "a": 1
        },
        {
            "id": 37,
            "type": "DD",
            "q": "You are building a text parser that needs to extract the first letter of a company name.<br><br>Complete the code that prints the first character of a string.",
            "code": "text = \"Python\"\nprint(text[[b1]])",
            "options": [
                "0",
                "1",
                "-1",
                "2"
            ],
            "a": [
                "0"
            ]
        },
        {
            "id": 38,
            "type": "TF",
            "q": "You are reviewing the coding standards for a new team project regarding code documentation.<br><br>Select True or False for each statement.",
            "code": "# calculate total\ntotal = 10 + 5",
            "options": [
                "Comments are ignored during execution.",
                "Comments improve code readability.",
                "Comments change program output."
            ],
            "a": [
                true,
                true,
                false
            ]
        },
        {
            "id": 39,
            "type": "MCQ",
            "q": "You are debugging an automated billing formula that calculates a total including flat fees and multipliers.<br><br>Evaluate the following expression. What is the output?",
            "code": "print(10 + 5 * 2)",
            "options": [
                "30",
                "20",
                "25",
                "15"
            ],
            "a": 1
        },
        {
            "id": 40,
            "type": "DD",
            "q": "You are updating a data export tool that must overwrite previous export files with new data.<br><br>Complete the code to overwrite file contents.",
            "code": "file = open(\"data.txt\",\"[b1]\")\nfile.write(\"Hello\")\nfile.close()",
            "options": [
                "r",
                "a",
                "w"
            ],
            "a": [
                "w"
            ]
        }
    ],
    "mock3": [
        {
            "id": 1,
            "type": "DROPDOWN",
            "q": "You need to test whether an object is an instance of a specific class.<br>How should you set up the unit test?<br>Complete the code by selecting the correct option from each drop-down list.<br><span style='font-size: 12px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You are writing a program to randomly assign rooms (room_number) and team-building groups (group) for a company retreat.<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "A company needs help updating their file system. You must create a simple file-manipulation program that performs the following actions:<br><br>• Creates a file using the specified name.<br>• Appends the phrase \"End of listing\" to the file.<br><br>You need to complete the code to meet the requirements.<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "A company needs help updating their file system. You must create a simple file-manipulation program that performs the following actions:<br><br>• Checks to see whether a file exists.<br>• If the file exists, displays its contents.<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You are developing a program that prints all prime numbers between 2 and 100. The program must:\n• Loop through numbers from 2 to 100.\n• Determine whether each number is prime.\n• Stop checking a number once a divisor is found.\n\nComplete the code by dragging the correct code segments to the correct placement. <br><span style='font-size: 15px; font-style: italic;'>Note: Each code segment may be used once, more than once, or not at all. You will receive partial credit for each correct selection.</span>",
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
            "q": "For each statement about the following function, select True or False.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You are writing code to meet the following requirements:<br><br>• Allow users to repeatedly enter words.<br>• Output the number of characters in each word.<br><br>Complete the code by selecting the correct option from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You are creating a Python program that compares numbers. You need to ensure that the comparisons are accurate.<br><br>For each statement, select True or False.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "A game development company needs a way to find the number of words in a list that contain a specific letter.<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You are creating a function to calculate admission fees (admission_fee) based on the following rules:<br><br>• Anyone under age 5 = free admission<br>• Anyone age 5 or older who is in school = $10<br>• Anyone age 5 to 17 who is not in school = $20<br>• Anyone older than age 17 who is not in school = $50<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "A coworker wrote a program that inputs names into a database. Unfortunately, the program reversed the letters in each name.<br><br>You need to write a Python function that outputs the characters in a name in the correct order.<br><br>Complete the code by selecting the code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You create the following Python function to calculate the power of a number. Line numbers are included for reference only.<br><br>For each statement, select True or False.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You are writing a Python program to determine if a number (num) the user inputs is one, two, or more than two digits (digits).<br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "A bicycle company is creating a program that allows customers to log the number of miles biked. The program will send messages based on how many miles the customer logs.<br><br>You write the following Python code. Line numbers are included for reference only.<br><br>You need to define the two required functions.<br><br>Which two code segments should you use for line 01 and line 04? Each correct answer presents part of the solution. (Choose 2.)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "The following function calculates the value of an expression that uses an exponent. Line numbers are included for reference only.<br><br>For each statement, select True or False.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "q": "You are creating an eCommerce script that accepts input from the user and outputs the data in a comma-delimited format.<br><br>You write the following code to accept input:<br><br><code>item = input(\"Enter the item name: \")<br>sales = int(input(\"Enter the quantity: \"))</code><br><br>The output must meet the following requirements:<br>• Enclose strings in double quotes.<br>• Do not enclose numbers in quotes or other characters.<br>• Separate items by commas.<br><br>You need to complete the code to meet the requirements.<br><br>Which two code segments could you use? Each correct answer presents a complete solution. (Choose 2.)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "code": "<div class='code-snippet'>01 numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<br>02 index = 0<br>03 [b1]<br>04 &nbsp;&nbsp;&nbsp;&nbsp;print(numbers[index])<br>05 <br>06 &nbsp;&nbsp;&nbsp;&nbsp;[b2]<br>07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>08 &nbsp;&nbsp;&nbsp;&nbsp;else :<br>09 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index += 1</div>",
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
    "d1": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "Which statement best describes data?",
            "options": [
                "Processed information ready for decision making",
                "Raw facts and figures collected for analysis",
                "A business strategy",
                "A summarized report"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "<b>True or False:</b> Data becomes meaningful only after processing and analysis.",
            "options": [
                "True",
                "False"
            ],
            "a": 0
        },
        {
            "id": 3,
            "type": "MCQ",
            "q": "Which data type can store a sentence or phrase?",
            "options": [
                "Integer",
                "Boolean",
                "String",
                "Float"
            ],
            "a": 2
        },
        {
            "id": 4,
            "type": "MCQ",
            "q": "Select the correct data type for the value below.<br><br><div class='code-snippet' style='margin:0;'>is_logged_in = True</div>",
            "options": [
                "Integer",
                "Boolean",
                "String",
                "Float"
            ],
            "a": 1
        },
        {
            "id": 5,
            "type": "MTF",
            "q": "Match the data structure with the description.",
            "options": [
                "Table",
                "Row",
                "Column",
                "List"
            ],
            "labels": [
                "Multiple rows and columns",
                "Single record in a dataset",
                "Attribute or field",
                "Collection of items"
            ],
            "a": {
                "Table": "Multiple rows and columns",
                "Row": "Single record in a dataset",
                "Column": "Attribute or field",
                "List": "Collection of items"
            }
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "Which data structure describes this data?<br><br><div class='code-snippet' style='margin:0;'>[\"Aabid\", \"Jesenia\", \"Mark\"]</div>",
            "options": [
                "Table",
                "List",
                "Graph",
                "Matrix"
            ],
            "a": 1
        },
        {
            "id": 7,
            "type": "MCQ",
            "q": "Which of the following is quantitative data?",
            "options": [
                "Eye color",
                "Age",
                "Country name",
                "Product category"
            ],
            "a": 1
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "<b>True or False:</b> Qualitative data describes categories rather than numeric values.",
            "options": [
                "True",
                "False"
            ],
            "a": 0
        }
    ],
    "d2": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "What is an example of data cleaning?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Arranging Excel data rows in an order that is easy for a user to read",
                "Ensuring that the data in a Word table uses a consistent font",
                "Adding quotation marks to the beginning and end of a tab-delimited file",
                "Removing non-printable characters from a comma-delimited file"
            ],
            "a": 3
        },
        {
            "id": 2,
            "type": "MTF",
            "q": "You are performing descriptive analytics on quarterly sales data. Match the metric with the description.",
            "options": [
                "Average",
                "Max",
                "Min",
                "Sum"
            ],
            "labels": [
                "Mean value of sales",
                "Largest value",
                "Smallest value",
                "Total of all values"
            ],
            "a": {
                "Average": "Mean value of sales",
                "Max": "Largest value",
                "Min": "Smallest value",
                "Sum": "Total of all values"
            }
        },
        {
            "id": 3,
            "type": "MCQ2",
            "q": "You need to create a data view based on aggregations for sales data from the last five years. Which two aggregation methods should you use?",
            "options": [
                "Filtering",
                "Pivoting",
                "Merging",
                "Grouping"
            ],
            "a": [
                1,
                3
            ]
        },
        {
            "id": 4,
            "type": "MCQ",
            "q": "Your company summarized a large dataset for your region. You need to compare results from urban and rural communities. What is the fastest way to obtain this information?",
            "options": [
                "Review data from neighboring regions",
                "Aggregate the data",
                "Disaggregate the data",
                "Collect a new data sample"
            ],
            "a": 2
        },
        {
            "id": 5,
            "type": "DND",
            "q": "Complete the data organization scenarios by dragging the correct method to each situation.",
            "code": "<div style='display:grid; grid-template-columns: 1fr auto; gap:15px; align-items:center;'><div>Arrange distributed items from highest to lowest</div> [target1]<div>Display only items greater than 500</div> [target2]<div>Extract a subset of the dataset containing only the 'Sales' column</div> [target3]</div>",
            "options": [
                "Sorting",
                "Filtering",
                "Slicing",
                "Truncating",
                "Transposing",
                "Appending"
            ],
            "a": [
                "Sorting",
                "Filtering",
                "Slicing"
            ]
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "As part of an ETL process, which action represents Transformation?",
            "options": [
                "Changing data from summary level to detailed level",
                "Converting data from one data type or structure to another",
                "Retrieving data from multiple sources into one destination",
                "Importing a percentage of rows from the source data"
            ],
            "a": 1
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "A file named coursesdata contains structured data. Which programming language could be used to read this data and import it into a database?",
            "options": [
                "SQL",
                "Python",
                "HTML",
                "CSS"
            ],
            "a": 1
        }
    ],
    "data_legacy_analysis": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "A retail manager notices a sudden 20% spike in weekend umbrella sales. Which analysis should the manager use to find the <b>root cause</b> for this unexpected increase?",
            "options": [
                "Predictive Analysis",
                "Diagnostic Analysis",
                "Descriptive Analysis",
                "Prescriptive Analysis"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "TF",
            "q": "A hospital uses historical patient records to forecast how many beds will be needed on Friday nights.<br><br><b>True or False:</b> This is an example of Predictive Analysis.",
            "options": [
                "This is an example of Predictive Analysis."
            ],
            "a": [
                true
            ]
        },
        {
            "id": 3,
            "type": "DROPDOWN",
            "q": "A travel app processes millions of raw GPS coordinates to suggest nearby hotels to tourists.<br><br>The process of converting these raw coordinates into <b>meaningful suggestions</b> is called generating ______.<br><br>Select the correct answer from the dropdown.",
            "code": "Raw GPS Data → [b1]",
            "options": [
                "Noise",
                "Insights",
                "Errors",
                "Files"
            ],
            "a": [
                "Insights"
            ]
        },
        {
            "id": 4,
            "type": "MCQ",
            "q": "Which of the following activities is <b>NOT</b> an example of data analysis?",
            "options": [
                "Identifying patterns in student test scores",
                "Predicting customer churn based on usage",
                "Manually changing the font color of a final report",
                "Summarizing monthly sales by region"
            ],
            "a": 2
        },
        {
            "id": 5,
            "type": "MTF",
            "q": "Match the type of analysis with the <b>real-world scenario</b> it represents.<br><span style='font-size:12px;font-style:italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "Descriptive",
                "Diagnostic",
                "Predictive",
                "Prescriptive"
            ],
            "labels": [
                "Calculating last month's revenue",
                "Finding why profit dropped in June",
                "Estimating next year's market growth",
                "Recommending an automated budget cut"
            ],
            "a": {
                "Descriptive": "Calculating last month's revenue",
                "Diagnostic": "Finding out why profit dropped in June",
                "Predictive": "Estimating next year's market growth",
                "Prescriptive": "Recommending an automated budget cut"
            }
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "An e-commerce manager prints a weekly report showing exactly how many laptops were sold in every city.<br><br>Which type of analysis does this report represent?",
            "options": [
                "Predictive",
                "Prescriptive",
                "Descriptive",
                "Diagnostic"
            ],
            "a": 2
        },
        {
            "id": 7,
            "type": "TF",
            "q": "<b>True or False:</b> Diagnostic analysis is primarily used to forecast whether a company's stock price will rise next month.",
            "options": [
                "Diagnostic analysis forecasts future outcomes."
            ],
            "a": [
                false
            ]
        },
        {
            "id": 8,
            "type": "DD",
            "q": "A logistics company uses historical traffic trends to <b>estimate</b> exactly when a package will arrive at its destination.<br><br>Predictive analysis is used here to ______ the arrival time.",
            "code": "Predictive Analysis → [b1] delivery times",
            "options": [
                "Ignore",
                "Predict",
                "Delete",
                "Store"
            ],
            "a": [
                "Predict"
            ]
        }
    ],
    "ex1": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "<strong>Strategic Analysis:</strong> What is a manager's primary objective when overseeing a business data model?",
            "options": [
                "Maximizing Variance to increase risk-taking",
                "Maintaining the Pulse (Mean) and minimizing Variance (Risk)",
                "Hiding raw data from stakeholders",
                "Building the most complex formulas possible"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "<strong>Data Pulses:</strong> Which function is most appropriate for understanding a 'typical' customer's spend when the dataset contains extreme outliers?",
            "options": [
                "AVERAGE",
                "SUM",
                "MEDIAN",
                "STDEV.P"
            ],
            "a": 2
        },
        {
            "id": 3,
            "type": "TF",
            "q": "<strong>Inventory Intelligence:</strong> Analyze the following statements regarding statistical inventory management.<br><br>For each statement, select True or False by dragging.",
            "options": [
                "High Standard Deviation (STDEV.P) indicates a need for 'Safety Stock'.",
                "Low Standard Deviation allows for 'Just-in-Time' (JIT) stock management.",
                "The MAX function is used exclusively to find 'Dead Stock'.",
                "The MIN function identifies products that are candidates for liquidation."
            ],
            "a": [
                true,
                true,
                false,
                true
            ]
        },
        {
            "id": 4,
            "type": "MTF",
            "q": "<strong>Model Engineering:</strong> Match each layer of the Three-Layer Architecture to its primary function.",
            "options": [
                "Data Lake (Raw)",
                "The Engine (Logic)",
                "The Dashboard (Front)",
                "Assumptions"
            ],
            "labels": [
                "Untouched CSV/SQL imports",
                "Formula-heavy calculation layer",
                "Final reports and KPI tables",
                "Hardcoded inputs and tax rates"
            ],
            "a": {
                "Data Lake (Raw)": "Untouched CSV/SQL imports",
                "The Engine (Logic)": "Formula-heavy calculation layer",
                "The Dashboard (Front)": "Final reports and KPI tables",
                "Assumptions": "Hardcoded inputs and tax rates"
            }
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "<strong>Architecture:</strong> Why is the Kerala Boutique naming convention (e.g., ST-0001-K) essential for model scalability?",
            "options": [
                "It reduces file size significantly",
                "It creates predictable patterns for extraction logic",
                "It prevents Excel from crashing",
                "It automatically formats cells"
            ],
            "a": 1
        },
        {
            "id": 6,
            "type": "DROPDOWN",
            "q": "<strong>Structured Logic:</strong> Identify the correct function to count all 'Hero Product' items that exceed a revenue threshold in a dynamic table.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for correct selection.</span>",
            "code": "[b1](Table_Kerala[Revenue], \">50000\")",
            "options": [
                [
                    "COUNTIFS",
                    "SUMIFS",
                    "VLOOKUP",
                    "AVERAGEIFS"
                ]
            ],
            "a": [
                "COUNTIFS"
            ]
        },
        {
            "id": 7,
            "type": "MCQ",
            "q": "<strong>Hierarchy:</strong> In our architectural framework, which unit represents an entire geographic region (e.g., South India)?",
            "options": [
                "A single cell",
                "A worksheet",
                "An entire workbook",
                "A table row"
            ],
            "a": 2
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "<strong>The 'Esc' Rule:</strong> According to professional standards, where should 'Report_OUTPUT' sheets pull their data from?",
            "options": [
                "Directly from the Data_Raw sheet",
                "From external web sources",
                "Through the Logic_CALC (Engine) layer",
                "From the Home tab"
            ],
            "a": 2
        }
    ],
    "ex2": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "Which XLOOKUP argument defines the value to return if no match is found, eliminating the need for nested IFERROR functions?",
            "options": [
                "lookup_value",
                "return_array",
                "if_not_found",
                "match_mode"
            ],
            "a": 2
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "Analyze the formula <code>=INDEX(A1:C10, 5, 2)</code>. What specific coordinate is this formula targeting?",
            "options": [
                "Row 5, Column 2",
                "Column 5, Row 2",
                "Total columns count",
                "Range height"
            ],
            "a": 0
        },
        {
            "id": 3,
            "type": "TF",
            "q": "<strong>Logic Advantage:</strong> Determine if the following statements about INDEX-MATCH vs. VLOOKUP are True or False.",
            "options": [
                "INDEX-MATCH can look up values to the LEFT of the key column.",
                "VLOOKUP is faster than INDEX-MATCH for datasets with 50+ columns.",
                "INDEX-MATCH remains intact when new columns are inserted in the middle."
            ],
            "a": [
                true,
                false,
                true
            ]
        },
        {
            "id": 4,
            "type": "MCQ",
            "q": "Which Boolean function returns TRUE only if EVERY single logic test within the parenthesis is passed?",
            "options": [
                "OR()",
                "IF()",
                "AND()",
                "NOT()"
            ],
            "a": 2
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "In binary strategic logic, if we multiply two Boolean results (Criteria1 * Criteria2), what numerical result do we get if both criteria are TRUE?",
            "options": [
                "0",
                "1",
                "2",
                "-1"
            ],
            "a": 1
        },
        {
            "id": 6,
            "type": "DROPDOWN",
            "q": "Construct a 2D Lookup formula to find the 'Tax Rate' where the Row is 'Product' and the Column is 'Region'.",
            "code": "=INDEX(Tax_Matrix, MATCH(\"Saree\", Rows, 0), [b1](\"Kerala\", Columns, 0))",
            "options": [
                [
                    "MATCH",
                    "XLOOKUP",
                    "VLOOKUP",
                    "HLOOKUP"
                ]
            ],
            "a": [
                "MATCH"
            ]
        },
        {
            "id": 7,
            "type": "MTF",
            "q": "Match the logic gate with its business requirement.",
            "options": [
                "AND",
                "OR",
                "XOR",
                "NOT"
            ],
            "labels": [
                "Must meet all eligibility rules",
                "Meet either the age OR the income rule",
                "Exclude a specific category from a list",
                "Targeting users who chose A or B, but not both"
            ],
            "a": {
                "AND": "Must meet all eligibility rules",
                "OR": "Meet either the age OR the income rule",
                "XOR": "Targeting users who chose A or B, but not both",
                "NOT": "Exclude a specific category from a list"
            }
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "When using XLOOKUP, setting the <code>match_mode</code> to <b>-1</b> tells Excel to perform which action if an exact match is missing?",
            "options": [
                "Return next larger item",
                "Return next smaller item",
                "Return wildcards",
                "Return a #DIV/0! error"
            ],
            "a": 1
        }
    ],
    "ex3": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "Which shortcut represents the 'Gold Standard' for toggling between relative, absolute, and mixed cell references?",
            "options": [
                "F2",
                "F4",
                "F10",
                "Alt+Shift+R"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "In the mixed reference <b>$A1</b>, which axis is explicitly 'locked' during a formula drag operation?",
            "options": [
                "The Row axis (1)",
                "The Column axis (A)",
                "The entire Workbook",
                "Neither"
            ],
            "a": 1
        },
        {
            "id": 3,
            "type": "SHORT",
            "q": "You have the formula <code>=A$1 + B1</code> in cell C1. If you drag this formula DOWN to cell C2, what will the resulting formula in C2 be?",
            "a": "=A$1 + B2"
        },
        {
            "id": 4,
            "type": "MCQ2",
            "q": "Identify TWO primary reasons for using Absolute References ($C$2) in a financial model.",
            "options": [
                "To prevent references from shifting when copying formulas",
                "To lock external tax rates or assumption variables",
                "To reduce the file size of the calculations",
                "To ensure formulas only work on hidden sheets"
            ],
            "a": [
                0,
                1
            ]
        },
        {
            "id": 5,
            "type": "SHORT",
            "q": "If you copy the formula <code>=$B$5</code> from cell D10 and paste it into cell Z500, what will the formula in Z500 look like?",
            "a": "=$B$5"
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "What does the <b>!</b> symbol signify in the reference <code>'Q3_Sales'!C10</code>?",
            "options": [
                "A logical negation (NOT)",
                "A worksheet boundary identifier",
                "A broken link warning",
                "An important formula tag"
            ],
            "a": 1
        },
        {
            "id": 7,
            "type": "MCQ",
            "q": "When building a 10x10 multiplication table, which referencing style should be applied to the column headers in Row 1 to allow for horizontal and vertical dragging?",
            "options": [
                "A1 (Relative)",
                "$A$1 (Absolute)",
                "A$1 (Mixed Row-locked)",
                "$A1 (Mixed Column-locked)"
            ],
            "a": 2
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "If you drag the formula <code>=$C5</code> to the RIGHT through 5 columns, what stays fixed in the reference?",
            "options": [
                "The Row (5)",
                "The Column (C)",
                "The Worksheet name",
                "The Cell value"
            ],
            "a": 1
        }
    ],
    "ex4": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "Which shortcut key is the universal standard for converting a raw data range into a 'Smart Table'?",
            "options": [
                "Ctrl + S",
                "Ctrl + T",
                "Ctrl + L",
                "Alt + T"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "What is the primary advantage of using a Table instead of a normal range for an inventory list?",
            "options": [
                "It uses colors automatically",
                "It automatically expands when new rows are added at the bottom",
                "It prevents users from deleting data",
                "It hides the formula bar"
            ],
            "a": 1
        },
        {
            "id": 3,
            "type": "SHORT",
            "q": "In a Table named 'Sales', what character is used to refer to 'this row' in a formula like <code>=Sales[[b1]Amount] * 0.1</code>?",
            "a": "@"
        },
        {
            "id": 4,
            "type": "MTF",
            "q": "<strong>Strategic Matching:</strong> Match the Excel Table nomenclature to its respective component.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "Table1[#All]",
                "Table1[#Data]",
                "Table1[#Headers]",
                "Table1[#Totals]"
            ],
            "labels": [
                "Entire table (headers, data, totals)",
                "Rows of data only",
                "Top column names row",
                "Final calculation row at the bottom"
            ],
            "a": {
                "Table1[#All]": "Entire table (headers, data, totals)",
                "Table1[#Data]": "Rows of data only",
                "Table1[#Headers]": "Top column names row",
                "Table1[#Totals]": "Final calculation row at the bottom"
            }
        },
        {
            "id": 5,
            "type": "TF",
            "q": "<strong>Data Integrity:</strong> Select True or False for each statement regarding Data Validation.",
            "options": [
                "A 'Stop' alert prevents users from entering invalid data.",
                "A 'Warning' alert allows invalid data but shows a message.",
                "Drop-down lists can only be created from numbers."
            ],
            "a": [
                true,
                true,
                false
            ]
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "You need to ensure that a 'Quantity' column only accepts whole numbers between 1 and 500. Which tool should you use?",
            "options": [
                "Conditional Formatting",
                "Data Validation",
                "Goal Seek",
                "AutoSum"
            ],
            "a": 1
        },
        {
            "id": 7,
            "type": "SHORT",
            "q": "What is the result of <code>Table1[[#Totals],[Revenue]]</code> if the Revenue column total is 5000?",
            "a": "5000"
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "Which tool provides a visual, button-based way to filter a Table without using the standard filter arrows?",
            "options": [
                "Slicers",
                "Filters",
                "Macros",
                "Sparklines"
            ],
            "a": 0
        }
    ],
    "ex5": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "What is the 'Strategic Logic' behind using Heat Maps in an inventory aging report?",
            "options": [
                "To make the sheet look colorful",
                "To identify business 'Exceptions' without reading every row",
                "To sort the data automatically",
                "To reduce file size"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "Using Icon Sets (Traffic Lights) for Sales Reps, what would a 'Red' light typically signify in a trend analysis?",
            "options": [
                "Top performance",
                "A downward trend or performance drop",
                "Pending data entry",
                "Data error"
            ],
            "a": 1
        },
        {
            "id": 3,
            "type": "TF",
            "q": "<strong>Conditional Rules:</strong> Select True or False for each statement.",
            "options": [
                "Formula-based rules allow you to format an entire row based on one cell value.",
                "You can apply multiple conditional rules to the same range.",
                "Heat Maps only work with text values."
            ],
            "a": [
                true,
                true,
                false
            ]
        },
        {
            "id": 4,
            "type": "DND",
            "q": "<strong>Visualizing Metrics:</strong> You are setting up a dashboard. Move the formatting technique to the most appropriate business scenario.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for correct placement.</span>",
            "code": "<div class='dnd-grid'><div>Show inventory levels as bars:</div> [target1]<div>Flag low performers with Red icons:</div> [target2]<div>Color cells based on profit %:</div> [target3]</div>",
            "options": [
                "Data Bars",
                "Icon Sets",
                "Color Scales"
            ],
            "a": [
                "Data Bars",
                "Icon Sets",
                "Color Scales"
            ]
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "Which feature would you use to show a 'Gradient' fill in a cell based on how close it is to the monthly target?",
            "options": [
                "Icon Sets",
                "Color Scales",
                "Highlight Cells Rules",
                "Data Bars"
            ],
            "a": 3
        },
        {
            "id": 6,
            "type": "SHORT",
            "q": "In a Heat Map for 'Inventory Age', what color would you strategically assign to fabric sitting for 180+ days?",
            "a": "Red"
        },
        {
            "id": 7,
            "type": "MCQ2",
            "q": "Identify TWO business benefits of using Strategic Conditional Formatting.",
            "options": [
                "Faster identification of profit leakage",
                "Automated sorting of spreadsheets",
                "Visual triggers for immediate investigation",
                "Permanent deletion of outdated records"
            ],
            "a": [
                0,
                2
            ]
        },
        {
            "id": 8,
            "type": "TF",
            "q": "<strong>Visual Triggers:</strong> Are the following statements True or False?",
            "options": [
                "Color Scales show a transition between two or three colors.",
                "Conditional Formatting changes the actual value of the cell.",
                "Rules are re-calculated automatically whenever data changes."
            ],
            "a": [
                true,
                false,
                true
            ]
        }
    ],
    "ex6": [
        {
            "id": 1,
            "type": "MTF",
            "q": "<strong>Function Logic:</strong> Match the formula to its analytical purpose.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "=SUMIFS(Revenue, ...)",
                "=COUNTIFS(EmployeeID, ...)",
                "=AVERAGEIFS(Sales, ...)",
                "=MAXIFS(Price, ...)"
            ],
            "labels": [
                "Total earnings across multiple branches",
                "Counting employees meeting a specific target",
                "Benchmarking typical performance of a group",
                "Finding the peak pricing within a segment"
            ],
            "a": {
                "=SUMIFS(Revenue, ...)": "Total earnings across multiple branches",
                "=COUNTIFS(EmployeeID, ...)": "Counting employees meeting a specific target",
                "=AVERAGEIFS(Sales, ...)": "Benchmarking typical performance of a group",
                "=MAXIFS(Price, ...)": "Finding the peak pricing within a segment"
            }
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "Why is <code>AVERAGEIFS</code> used for 'Strategic Benchmarking'?",
            "options": [
                "To find the total revenue of a branch",
                "To compare subset performance (e.g., Manager A vs Manager B)",
                "To count how many items were sold",
                "To find the highest sale value"
            ],
            "a": 1
        },
        {
            "id": 3,
            "type": "SHORT",
            "q": "In the <code>SUMIFS</code> function, which argument must ALWAYS be specified first?",
            "a": "sum_range"
        },
        {
            "id": 4,
            "type": "MCQ2",
            "q": "You need to calculate the Total Sales of 'Linen' in 'Mumbai' during 'Q1'. Which TWO arguments are mandatory for this SUMIFS?",
            "options": [
                "The range containing 'Linen/Silk' names",
                "The range containing 'Branch' names",
                "The range containing 'Employee ID'",
                "The range containing 'Stock Count'"
            ],
            "a": [
                0,
                1
            ]
        },
        {
            "id": 5,
            "type": "TF",
            "q": "<strong>Criteria Logic:</strong> Select True or False for each statement.",
            "options": [
                "SUMIFS can handle more than 100 different criteria.",
                "Wildcards (*) can be used in criteria to find partial matches.",
                "SUMIFS works even if the criteria_ranges are different sizes."
            ],
            "a": [
                true,
                true,
                false
            ]
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "What does 'Filter while Calculating' refer to in advanced analytics?",
            "options": [
                "Using the filter button and then manually summing",
                "Performing a conditional aggregation (like SUMIFS) to isolate segments",
                "Deleting rows that don't match criteria",
                "Sorting data before calculating totals"
            ],
            "a": 1
        },
        {
            "id": 7,
            "type": "SHORT",
            "q": "What is the numerical output of <code>COUNTIFS(A:A, \"*\")</code> if Column A has 5 text entries?",
            "a": "5"
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "If Manager A has an average discount of 15% and Manager B has 5%, what business insight is detected using <code>AVERAGEIFS</code>?",
            "options": [
                "Branch growth",
                "Potential profit leakage",
                "Inventory shortage",
                "Marketing success"
            ],
            "a": 1
        }
    ],
    "ex7": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "Which function is the 'Modern Standard' for retrieving data, replacing the need for VLOOKUP?",
            "options": [
                "HLOOKUP",
                "XLOOKUP",
                "MATCH",
                "INDEX"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "What is the primary risk of using VLOOKUP in a long-term business model?",
            "options": [
                "It makes the file too large",
                "It breaks when you insert or delete columns",
                "It cannot find exact matches",
                "It only works with numbers"
            ],
            "a": 1
        },
        {
            "id": 3,
            "type": "DND",
            "q": "<strong>Retrieval Strategies:</strong> Move the lookup function to its primary strategic advantage.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for correct placement.</span>",
            "code": "<div class='dnd-grid'><div>Retrieve values to the LEFT of the key:</div> [target1]<div>Legacy support for small, static lists:</div> [target2]<div>Return the position of an item:</div> [target3]</div>",
            "options": [
                "XLOOKUP",
                "VLOOKUP",
                "MATCH"
            ],
            "a": [
                "XLOOKUP",
                "VLOOKUP",
                "MATCH"
            ]
        },
        {
            "id": 4,
            "type": "MCQ2",
            "q": "Identify TWO advantages of using <code>INDEX & MATCH</code> over VLOOKUP.",
            "options": [
                "Ability to look to the LEFT of the key column",
                "Immunity to column insertion/deletion",
                "Faster calculation for 1 million rows",
                "Automatic translation of text"
            ],
            "a": [
                0,
                1
            ]
        },
        {
            "id": 5,
            "type": "TF",
            "q": "<strong>Error Handling:</strong> Select True or False for each statement.",
            "options": [
                "IFERROR replaces #N/A with custom text like 'Check ID'.",
                "Reports with visible #N/A codes are considered professional.",
                "XLOOKUP has a built-in 'if_not_found' argument."
            ],
            "a": [
                true,
                false,
                true
            ]
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "What is a 'Common Key' in data relationship logic?",
            "options": [
                "A cell with a green background",
                "A shared identifier (like Employee ID) used to link two different tables",
                "A password to open the file",
                "The most expensive product in a list"
            ],
            "a": 1
        },
        {
            "id": 7,
            "type": "SHORT",
            "q": "In <code>INDEX(A1:A10, 5)</code>, what is the value of the 5th item in the range if A1 is 100, A2 is 200... A5 is 500?",
            "a": "500"
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "Which XLOOKUP argument allows you to pull multiple columns at once by selecting a wide range?",
            "options": [
                "lookup_value",
                "return_array",
                "match_mode",
                "search_mode"
            ],
            "a": 1
        }
    ],
    "ex8": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "What does the 'ETL' process in Power Query stand for?",
            "options": [
                "Extract, Transform, Load",
                "Evaluate, Total, Link",
                "Export, Transfer, List",
                "Excel, Table, Logic"
            ],
            "a": 0
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "Why would a professional use Power Query instead of manual copy-pasting for monthly reports?",
            "options": [
                "It provides better colors",
                "It records and automates the cleaning steps for future data",
                "Manual pasting is more accurate",
                "Power Query requires a special license"
            ],
            "a": 1
        },
        {
            "id": 3,
            "type": "MTF",
            "q": "<strong>BI Infrastructure:</strong> Match the tool to its primary functional domain.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "Power Query",
                "Power Pivot",
                "DAX",
                "Relationships"
            ],
            "labels": [
                "Extracting and Cleaning data",
                "Modeling complex datasets",
                "Creating advanced measures/formulas",
                "Linking two tables via a Key ID"
            ],
            "a": {
                "Power Query": "Extracting and Cleaning data",
                "Power Pivot": "Modeling complex datasets",
                "DAX": "Creating advanced measures/formulas",
                "Relationships": "Linking two tables via a Key ID"
            }
        },
        {
            "id": 4,
            "type": "MCQ2",
            "q": "Identify TWO characteristics of 'Big Data' handling in Excel BI tools.",
            "options": [
                "Processing millions of rows without crashing",
                "Using DAX to calculate cross-table metrics",
                "Replacing all formulas with VBA macros",
                "Hiding columns permanently"
            ],
            "a": [
                0,
                1
            ]
        },
        {
            "id": 5,
            "type": "TF",
            "q": "<strong>Automation Logic:</strong> Select True or False for each statement.",
            "options": [
                "Power Query repeats cleaning steps with a single click (Refresh).",
                "Power Pivot is like a mini-SQL database inside Excel.",
                "VLOOKUP is faster than Power Pivot for 1 million rows."
            ],
            "a": [
                true,
                true,
                false
            ]
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "Which language is used in Power Pivot to create advanced measures like 'Revenue per Rupee of Salary'?",
            "options": [
                "Python",
                "SQL",
                "DAX",
                "VBA"
            ],
            "a": 2
        },
        {
            "id": 7,
            "type": "SHORT",
            "q": "What is the maximum number of rows a standard Excel worksheet can hold?",
            "a": "1048576"
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "You need to combine 12 monthly CSV files into one master Table. Which Power Query feature should you use?",
            "options": [
                "Pivot Column",
                "Merge Queries",
                "Append Queries",
                "Group By"
            ],
            "a": 2
        }
    ],
    "ex9": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "What does a 'Correlation' coefficient of +0.9 between Marketing and Sales indicate?",
            "options": [
                "No relationship",
                "A very strong positive relationship",
                "Marketing causes sales to drop",
                "Error in the data"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "DND",
            "q": "<strong>Predictive Analytics:</strong> Move the statistical term to its correct definition.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for correct placement.</span>",
            "code": "<div class='dnd-grid'><div>Measures relationship strength (-1 to +1):</div> [target1]<div>Projects future values based on history:</div> [target2]<div>Determines the 'line of best fit':</div> [target3]</div>",
            "options": [
                "Correlation",
                "Forecasting",
                "Regression"
            ],
            "a": [
                "Correlation",
                "Forecasting",
                "Regression"
            ]
        },
        {
            "id": 3,
            "type": "SHORT",
            "q": "Which function is used to project future sales based on a linear trend and historical data?",
            "a": "FORECAST.LINEAR"
        },
        {
            "id": 4,
            "type": "MCQ2",
            "q": "Identify TWO metrics found in 'Descriptive Statistics' used for business audits.",
            "options": [
                "Standard Deviation (Risk)",
                "Skewness (Outlier detection)",
                "VLOOKUP (Retrieval)",
                "SUMIFS (Counting)"
            ],
            "a": [
                0,
                1
            ]
        },
        {
            "id": 5,
            "type": "TF",
            "q": "<strong>Trend Analysis:</strong> Select True or False for each statement.",
            "options": [
                "A linear trendline assumes data moves in a straight path.",
                "Seasonality accounts for recurring peaks like festive seasons.",
                "Forecasting is only useful if you have 1 week of data."
            ],
            "a": [
                true,
                true,
                false
            ]
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "Which toolpak must be enabled in Excel to access advanced Regression and Descriptive Statistics?",
            "options": [
                "Macro Pak",
                "Data Analysis Toolpak",
                "Power Map",
                "Solver"
            ],
            "a": 1
        },
        {
            "id": 7,
            "type": "SHORT",
            "q": "What is the term for a data point that is significantly higher or lower than the rest of the group?",
            "a": "Outlier"
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "Why is 'Skewness' important in a finance budget audit?",
            "options": [
                "To find the average spend",
                "To detect if a few massive expenses are inflating the total",
                "To calculate taxes",
                "To sort employee names"
            ],
            "a": 1
        }
    ],
    "ex10": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "What is the '30-Second Insight' rule in visual storytelling?",
            "options": [
                "The chart must take 30 seconds to load",
                "If a manager can't understand the insight in 30 seconds, the chart has failed",
                "Every chart must have 30 different colors",
                "A chart must be updated every 30 seconds"
            ],
            "a": 1
        },
        {
            "id": 2,
            "type": "MTF",
            "q": "<strong>Chart Selection:</strong> Match the chart type to its high-impact use case.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "Waterfall Chart",
                "Pareto (80/20)",
                "Scatter Plot",
                "Bar Chart"
            ],
            "labels": [
                "Visualizing profit/cost leakage",
                "Identifying top assets generating most wealth",
                "Detecting correlation between variables",
                "Comparing simple categorical revenue"
            ],
            "a": {
                "Waterfall Chart": "Visualizing profit/cost leakage",
                "Pareto (80/20)": "Identifying top assets generating most wealth",
                "Scatter Plot": "Detecting correlation between variables",
                "Bar Chart": "Comparing simple categorical revenue"
            }
        },
        {
            "id": 3,
            "type": "SHORT",
            "q": "Which chart is based on the 80/20 rule, identifying the 'Vital Few' assets that generate most of the wealth?",
            "a": "Pareto"
        },
        {
            "id": 4,
            "type": "MCQ2",
            "q": "Identify TWO use cases for a 'Stacked Column Chart'.",
            "options": [
                "Comparing total revenue across branches",
                "Showing the product mix (categories) within each branch",
                "Visualizing individual transaction logs",
                "Calculating the square root of sales"
            ],
            "a": [
                0,
                1
            ]
        },
        {
            "id": 5,
            "type": "TF",
            "q": "<strong>Clarity Logic:</strong> Select True or False for each statement.",
            "options": [
                "3D effects and shadows generally improve chart clarity.",
                "A Pareto chart combines a bar chart and a cumulative line.",
                "Visualizing 'Profit Leakage' is a key goal of a Waterfall chart."
            ],
            "a": [
                false,
                true,
                true
            ]
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "In a Pareto analysis of 100 products, what does the '80/20' principle suggest?",
            "options": [
                "80% of products generate 80% of sales",
                "20% of products generate 80% of the sales",
                "80% of effort yields 100% result",
                "20 products are always defective"
            ],
            "a": 1
        },
        {
            "id": 7,
            "type": "SHORT",
            "q": "In a '100% Stacked Column Chart', what is the total percentage height of every individual column?",
            "a": "100"
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "Why are 'Floating Bars' used in a Waterfall chart?",
            "options": [
                "To show where values decrease or increase relative to the previous point",
                "To make the chart look like a bridge",
                "To hide negative values",
                "To save space"
            ],
            "a": 0
        }
    ],
    "data1": [
        {
            "id": 1,
            "type": "TF",
            "q": "For each statement below, select True or False.",
            "options": [
                "Information is the highest level of the hierarchy and represents the final stage of understanding."
            ],
            "a": [
                false
            ]
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "Which level of the hierarchy is characterized by being 'action-oriented' and built through experience and reflection?",
            "options": [
                "Knowledge",
                "Metadata",
                "Information",
                "Data"
            ],
            "a": 0
        },
        {
            "id": 3,
            "type": "MCQ",
            "q": "Which of the following scenarios best illustrates the difference between data and information?",
            "options": [
                "A printed textbook is data, while a digital ebook is information.",
                "Data is always composed of numbers, while information is always composed of words.",
                "A list of temperatures (32, 34, 31, 35) is information, while a chart showing these temperatures over a week is data.",
                "Random numbers like \"10, 25, 40\" are data, while knowing these represent \"daily sales in dollars\" is information."
            ],
            "a": 3
        },
        {
            "id": 4,
            "type": "TF",
            "q": "For each statement below, select True or False.",
            "options": [
                "Raw data is often meaningless on its own because it lacks context and organization."
            ],
            "a": [
                true
            ]
        }
    ],
    "data2": [
        {
            "id": 1,
            "marks": 1,
            "type": "MCQ",
            "q": "(1 Mark) You have a dataset that includes product review scores and demographic information about the reviewers. There are no subcategories associated with the demographic answers. The table shows a selection of the data.<br><br><img src='product_reviews_demographics.png' style='max-width:100%; border:1px solid #e5e7eb; border-radius:6px; margin-bottom:14px;'><br>Which scenario is an example of disaggregating the dataset?",
            "options": [
                "Display a list of ethnicities that are included in the other option",
                "By average and mode of the scores for each product grouped by the ethnicity of the reviewers",
                "Display the overall average and mode of all scores and a count of all reviews",
                "Display the overall average and mode of all scores on a per-products basis"
            ],
            "a": 0
        },
        {
            "id": 2,
            "marks": 2,
            "type": "MCQ2",
            "q": "(2 Marks) You need to create a data view based on aggregations for further visual analysis. Your data includes sales information for the past five years for food products at your company's stores. Each product belongs to one category. For example, milk belongs to the Dairy category.<br><br>The data view must meet the following requirements:<br>• Include all products and their associated categories.<br>• Include sales subtotals for each category and year.<br>• Display a grand total of sales for each category.<br>• Create a summary of each category for every year.<br><br>Which two aggregation methods should you use to create the data view? (Choose 2)<br><span style='font-size:15px; font-style:italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Filtering",
                "Pivoting",
                "Merging",
                "Grouping"
            ],
            "a": [
                1,
                3
            ]
        },
        {
            "id": 3,
            "marks": 1,
            "type": "MCQ",
            "q": "(1 Mark) As part of an ETL process, which process represents transformation?",
            "options": [
                "Changing data from summary level to detailed level",
                "Retrieving data from many sources into a single destination",
                "Importing a percentage of row from the source data",
                "Converting data from one data type to another data type or structure"
            ],
            "a": 3
        },
        {
            "id": 4,
            "marks": 2,
            "type": "MCQ2",
            "q": "(2 Marks) Each month you need to automatically transform the data from two XML documents into a single flat file with columns and rows that Excel can open and interpret. The document names and structure remain constant. You know the relationship between the two XML documents.<br><br>Which two resources can you use? (Choose 2)<br><span style='font-size:15px; font-style:italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Json",
                "Power Query for Excel (M)",
                "Microsoft Excel",
                "Python"
            ],
            "a": [
                1,
                3
            ]
        },
        {
            "id": 5,
            "marks": 1,
            "type": "MCQ",
            "q": "(1 Mark) What concept allows analysts to drill down into data and examine different levels of information that may be crucial in diagnostic analytics?",
            "options": [
                "Completeness",
                "Granularity",
                "Interpretability",
                "Transparency"
            ],
            "a": 1
        },
        {
            "id": 6,
            "marks": 3,
            "type": "TF",
            "q": "(3 Marks) For each statement about data disaggregation, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Data disaggregation provides a summary of the data",
                "Data disaggregation combines data from different sources",
                "Data Disaggregation can clarify trends and patterns among subgroups"
            ],
            "a": [
                false,
                false,
                true
            ]
        },
        {
            "id": 7,
            "marks": 2,
            "type": "MCQ2",
            "q": "(2 Marks) A coworker is having trouble joining two database tables, Table A and Table B, that were imported from CSV files. They say the tables have no common values. You need to troubleshoot the problem. You look at the data in the original CSV file and find that the RowKey values in the TableA file and the RowID values in the TableB file look identical. Both have three numbers followed by a dash(-) and two letters.<br><br>Which two actions should you complete next? (Choose 2)<br><span style='font-size:15px; font-style:italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Verify that the data in the database was imported as a numeric data type",
                "Trim empty spaces from both of the valid characters",
                "Visually compare the database values to the CSV values",
                "Trim empty spaces from only the right side of the valid characters"
            ],
            "a": [
                2,
                3
            ]
        },
        {
            "id": 8,
            "marks": 4,
            "type": "MTF",
            "q": "(4 Marks) You are using data analytics to help answer business questions about a new product your company released.<br><br>Move each type of data analytics from the list on the left to the correct question on the right.<br><span style='font-size:15px; font-style:italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "Descriptive Analytics",
                "Diagnostic Analytics",
                "Predictive Analytics",
                "Prescriptive Analytics"
            ],
            "labels": [
                "Why did this happen?",
                "What action should we take next?",
                "What might happen in the future?",
                "What happened in the initial product release?"
            ],
            "a": {
                "Descriptive Analytics": "What happened in the initial product release?",
                "Diagnostic Analytics": "Why did this happen?",
                "Predictive Analytics": "What might happen in the future?",
                "Prescriptive Analytics": "What action should we take next?"
            }
        },
        {
            "id": 9,
            "marks": 3,
            "type": "DROPDOWN",
            "q": "(3 Marks) Your marketing department attends a variety of events each year and distributes promotional items to event participants. The table below shows the quantity distributed of each promotional item.<br><br>Complete the sentences about data organization by selecting the correct option from each drop-down list.<br><br><img src='promotional_items_table.png' style='max-width:100%; border:1px solid #e5e7eb; border-radius:6px; margin-bottom:14px;'><br>Can arrange distributed items from highest to lowest: [b1]<br><br>Can limit the display of distributed items to grater than 500: [b2]<br><br>Can limit the display of promotional items to shuffled animals and T-shirt: [b3]<br><br><span style='font-size:15px; font-style:italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                [
                    "Appending",
                    "Filtering",
                    "Sorting",
                    "Truncating",
                    "Transposing",
                    "Slicing"
                ],
                [
                    "Appending",
                    "Filtering",
                    "Sorting",
                    "Truncating",
                    "Transposing",
                    "Slicing"
                ],
                [
                    "Appending",
                    "Filtering",
                    "Sorting",
                    "Truncating",
                    "Transposing",
                    "Slicing"
                ]
            ],
            "a": [
                "Sorting",
                "Filtering",
                "Slicing"
            ]
        },
        {
            "id": 10,
            "marks": 1,
            "type": "MCQ",
            "q": "(1 Mark) The marketing team wants to know which market segment had the highest sales last year. Which type of data analytics should they use?",
            "options": [
                "Descriptive analytics",
                "Prescriptive analytics",
                "Diagnostic analytics",
                "Predictive analytics"
            ],
            "a": 0
        },
        {
            "id": 11,
            "marks": 1,
            "type": "MCQ",
            "q": "(1 Mark) You have a comma-delimited file with 100,000 rows and 200 columns of phone sales data. One column represents the Phone manufacturer.<br><br>You need to analyze all sales data for a specific manufacturer. Which technique should you use?",
            "options": [
                "Deleting",
                "Transposing",
                "Filtering",
                "Truncating"
            ],
            "a": 2
        },
        {
            "id": 12,
            "marks": 1,
            "type": "MCQ",
            "q": "(1 Mark) You are reviewing a database of restaurant menu items. The table below shows a selection of the data. You need to display only items on the dessert menu with a type of cake.<br><br><img src='restaurant_menu_data.png' style='max-width:100%; border:1px solid #e5e7eb; border-radius:6px; margin-bottom:14px;'><br>What should you do to nondestructively limit the data display?",
            "options": [
                "Delete all data that has a menu other than dessert. Then delete all data that has a type other than cake",
                "Sort the data by menu and within each menu, Sort by type",
                "Group the data by menu and then group the data on the dessert menu by type",
                "Add two slicers, one for menu and one for type. Set the menu slicer to dessert and the type slicer to cake"
            ],
            "a": 3
        },
        {
            "id": 13,
            "marks": 1,
            "type": "MCQ",
            "q": "(1 Mark) What is an example of data cleaning?",
            "options": [
                "Arranging Excel data rows in an order that is easy for a user or read",
                "Removing non-printable characters from a comma-delimited file",
                "Ensuring that the data in word table uses a consistent font",
                "Adding quotation marks to the beginning and end of a tab-delimited file"
            ],
            "a": 1
        },
        {
            "id": 14,
            "marks": 4,
            "type": "MATRIX",
            "q": "(4 Marks) From the data in the table below, you create a pivot table to show the combined number of certified virtual and in-person teachers for each class at each school.<br><br>Move the appropriate labels from the list on the left to the correct locations in the Pivot tables on the right. You may use each label once or not at all.<br><br><img src='pivot_teachers_task.png' style='max-width:100%; border:1px solid #e5e7eb; border-radius:6px; margin-bottom:14px;'><br><span style='font-size:15px; font-style:italic;'>Note: You will receive partial credit for each correct response.</span>",
            "rows": [
                "Label 1",
                "Label 2",
                "Label 3",
                "Label 4"
            ],
            "cols": [
                "Data Analytics",
                "Networking",
                "In-Person",
                "Virtual",
                "School A",
                "School B"
            ],
            "a": {
                "0": 1,
                "1": 0,
                "2": 4,
                "3": 5
            }
        },
        {
            "id": 15,
            "marks": 6,
            "type": "DND_PIVOT",
            "q": "(6 Marks) You are performing descriptive analytics on quarterly sales data. Move the appropriate statistical metrics from the list on the left to the correct locations on the right. You may use each metric once, more than once, or not at all.<br><br><table style='width:100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; text-align: center;'><thead><tr style='background: #f1f5f9; color: #1e293b; font-weight: 800;'><th style='padding: 10px; border: 1px solid #e2e8f0;'>Region</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 1</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 2</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 3</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 4</th></tr></thead><tbody><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>North</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>25000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>50000</td></tr><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>South</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>45000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>East</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>32500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>41000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>52500</td></tr><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>West</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>34500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>42500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 1</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>129500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>137500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>163500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>212500</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 2</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>45000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>42500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 3</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>25000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>50000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 4</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 5</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>32375</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>34375</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40875</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>53125</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 6</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>34750</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>31250</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>53750</td></tr></tbody></table><br><span style='font-size:15px; font-style:italic;'>Note: You will receive partial credit for each correct response.</span>",
            "poolHeader": "Statistical metrics",
            "targetHeader": "Answer area",
            "options": [
                "Metric 1",
                "Metric 2",
                "Metric 3",
                "Metric 4",
                "Metric 5",
                "Metric 6"
            ],
            "labels": [
                "Average",
                "Max",
                "Median",
                "Mode",
                "Sum",
                "Min"
            ],
            "a": {
                "Metric 1": "Sum",
                "Metric 2": "Max",
                "Metric 3": "Min",
                "Metric 4": "Mode",
                "Metric 5": "Average",
                "Metric 6": "Median"
            }
        },
        {
            "id": 16,
            "marks": 1,
            "type": "MCQ",
            "q": "(1 Mark) What is an example of data cleaning?",
            "options": [
                "Removing non-printable characters from a comma-delimited file",
                "Ensuring that the data in a Word table uses a consistent font",
                "Arranging Excel data rows in an order that is easy for a user to read",
                "Adding quotation marks to the beginning and end of a tab-delimited file"
            ],
            "a": 0
        },
        {
            "id": 17,
            "marks": 1,
            "type": "MCQ",
            "q": "(1 Mark) Your company has summarized a large set for the region you live in. You need to compare the result from Urban and Rural communities within your region.<br><br>What is the fastest way to obtain this information?",
            "options": [
                "Collect new data sample",
                "Disaggregate the data",
                "Review data from neighboring regions",
                "Aggregate the data"
            ],
            "a": 1
        },
        {
            "id": 18,
            "marks": 1,
            "type": "MCQ",
            "q": "(1 Mark) Your company has summarized a large data set for the region you live in. You need to compare results from urban and rural communities within your region.<br><br>What is the fastest way to obtain the information?",
            "options": [
                "D. Aggregate the data",
                "A. Collect a new Data Sample",
                "B. Review data from neighbouring regions",
                "C. Disaggregate the data"
            ],
            "a": 3
        }
    ],
    "data3": [
        {
            "id": 1,
            "marks": 3,
            "type": "TF",
            "q": "The visualization and data table depict housing price in a region. Review the visual patterns and the data set carefully.<br><br>For each statement about the visualization, select True or False.<br><span style='font-size:12px;font-style:italic;'>Note: You will receive partial credit for each correct selection</span> (3 Marks)",
            "img": "housing_prices_v2_professional.png",
            "options": [
                "An increase of $25000 occurs Each year",
                "The scaling of the graph is misleading",
                "The visualization accurately depict the housing prices shown in the table"
            ],
            "a": [
                false,
                false,
                true
            ]
        },
        {
            "id": 2,
            "marks": 3,
            "type": "TF",
            "q": "The professional visualization and data table below depict housing prices in a region. Review the visual patterns and the data set carefully.<br><br>For each statement about the visualization, select True or False<br><span style='font-size:12px;font-style:italic;'>Note: You will receive partial credit for each correct selection</span> (3 Marks)",
            "img": "housing_prices_professional.png",
            "options": [
                "The visualization accurately depicts the housing prices shown in the table",
                "An annual increase of $25,000 occurs consistently between 2016 and 2025",
                "The visualization uses scaling manipulation to exaggerate growth"
            ],
            "a": [
                true,
                false,
                false
            ]
        },
        {
            "id": 3,
            "marks": 1,
            "type": "MCQ",
            "q": "Which visualization type is commonly used to display the distribution of a continuous variable, with variable values on the x-axis and corresponding frequencies on the y-axis? Select the correct visualization type in the answer area. (1 Mark)",
            "optionImages": [
                "v3_q13_opt1.png",
                "v3_q13_opt2.png",
                "v3_q13_opt3.png",
                "v3_q13_opt4.png"
            ],
            "options": [
                "Option 3",
                "Option 2",
                "Option 4",
                "Option 1"
            ],
            "a": 0
        },
        {
            "id": 4,
            "marks": 1,
            "type": "MCQ2",
            "q": "Which two chart types should you use to rank values in ascending or descending order? (choose 2)<br><br><span style='font-size:12px;font-style:italic;'>Note: You will receive partial credit for each correct selection</span> (1 Mark)",
            "options": [
                "Bar chart",
                "Column chart",
                "Line chart",
                "Bubble chart"
            ],
            "a": [
                0,
                1
            ]
        },
        {
            "id": 5,
            "marks": 1,
            "type": "MCQ",
            "q": "You need to compare three (3) values of each data point in a series which data type should you use? (1 Mark)",
            "options": [
                "Scatter chart",
                "Area chart",
                "Waterfall chart",
                "Bubble chart"
            ],
            "a": 3
        },
        {
            "id": 6,
            "marks": 1,
            "type": "MCQ",
            "q": "You work for a recreational sports company. The table shows the company's recreational vehicle sales data. You need to show how each vehicle type contributes to the company's total sales.<br><br>Which visualization should you use? Select the correct visualization in the answer area. (1 Mark)",
            "img": "vehicle_sales_table.png",
            "optionImages": [
                "v3_q6_optA.png",
                "v3_q6_optB.png",
                "v3_q6_optC.png",
                "v3_q6_optD.png"
            ],
            "options": [
                "Option 1",
                "Option 3",
                "Option 4",
                "Option 2"
            ],
            "a": 0
        },
        {
            "id": 7,
            "marks": 1,
            "type": "MCQ",
            "q": "The visualization below displays sales data for two salespeople. A conclusion indicates that Salesperson 1 has a higher lead to sale rate than salesperson 2.<br><br>(A lead to sales rate is the number of actual sales divided by the number of attempted sales)<br><br>You need to determine the accuracy of this conclusion. What should you conclude? (1 Mark)",
            "img": "sales_lead_comparison.png",
            "options": [
                "The conclusion is accurate",
                "The conclusion is inaccurate because the visualization is missing sales and lead data",
                "The conclusion is inaccurate because the visualization uses size manipulation",
                "The conclusion is inaccurate because the visualization uses scale manipulation"
            ],
            "a": 1
        },
        {
            "id": 8,
            "marks": 1,
            "type": "MCQ",
            "q": "You want to show a friend your monthly budget breakdown to prove that most of your expenditure is food costs. You create a table that shows the flow of money as it moves from one budget category to the next.<br><br>Which visualization type should you use to display your analysis based on the table shown? (1 Mark)",
            "img": "budget_flow_table.png",
            "options": [
                "Time Series Chart",
                "Classification Chart",
                "Correlation Chart",
                "Sankey Chart"
            ],
            "a": 3
        },
        {
            "id": 9,
            "marks": 1,
            "type": "MCQ",
            "q": "A colleague shows you the chart below to indicate that Group A has performed significantly better than Group B on a recent assignment. You do not know the sample size or the results of statistical testing. Which chart element creates the impression of a significant score difference? (1 Mark)",
            "img": "group_comparison_bias.png",
            "options": [
                "The x-axis units of measurement",
                "The color differentiation",
                "The y-axis units of measurement",
                "The z-axis units of measurement"
            ],
            "a": 2
        },
        {
            "id": 10,
            "marks": 1,
            "type": "MCQ",
            "q": "You create the column chart below, which shows sales for different years. Management asks for a way to see demographic information associated with the individual sales records for each year.<br><br>You decide to create tables for each year that show the demographic information for the sales in that year. When someone clicks, the associated table will open.<br><br>Which reporting technique does this represent? (1 Mark)",
            "img": "sales_by_year_column.png",
            "options": [
                "Unpivoting",
                "Distributing",
                "Pivoting",
                "Disaggregating"
            ],
            "a": 3
        },
        {
            "id": 11,
            "marks": 1,
            "type": "MCQ",
            "q": "What is the direction of correlation between variable X and variable Y? (1 Mark)",
            "img": "correlation_direction.png",
            "options": [
                "Negative",
                "Zero",
                "Positive"
            ],
            "a": 2
        },
        {
            "id": 12,
            "marks": 4,
            "type": "TF",
            "q": "You are analyzing statistics for online and in-store purchases with data collected over the past year. Data collected includes surveys from 300 instore customers and 300 online customers.<br><br>Based on the data visualization below, identify which statements about customer purchases over the last year are correct and which statements are incorrect. Select True if the statement is correct or False if the statement is incorrect.<br><br><span style='font-size:12px;font-style:italic;'>Note: You will receive partial credit for each correct selection.</span> (4 Marks)",
            "img": "purchase_stats_comparison.png",
            "options": [
                "In-store customers spent more money than online customers.",
                "The amount spent the most often is the same for online and in-store customers.",
                "Online customers have a larger variance in how much they spend.",
                "The difference between the largest amount spent and the smallest amount spent is higher for in-store customers."
            ],
            "a": [
                false,
                true,
                true,
                false
            ]
        },
        {
            "id": 13,
            "marks": 1,
            "type": "MCQ",
            "q": "You want to show a friend your monthly budget breakdown to prove that most of your expenditure is food costs. You create a table that shows the flow of money as it moves one budget category to the next.<br><br>Which visualization type should you use to display your analysis based on the table shown? (1 Mark)",
            "img": "budget_flow_v2.png",
            "options": [
                "Sankey Diagram",
                "Time Series Chart",
                "Correlation matrix",
                "Classification tree"
            ],
            "a": 0
        },
        {
            "id": 14,
            "marks": 1,
            "type": "MCQ",
            "q": "An analyst claims the visualization below implies that Variable X <b>causes</b> Variable Y. Is the analyst correct in this assertion? (1 Mark)",
            "img": "scatter_correlation_v2.png",
            "options": [
                "Yes",
                "No"
            ],
            "a": 0
        },
        {
            "id": 15,
            "marks": 1,
            "type": "MCQ",
            "q": "You are responsible for e-commerce sales at your company. You need to present the quarterly data shown in the table to upper management using the most accurate and unbiased visualization.<br><br>Which visualization should you choose? Select the correct visualization in the answer area. (1 Mark)",
            "img": "quarterly_sales_table.png",
            "optionImages": [
                "v3_q21_opt1.png",
                "v3_q21_opt2.png",
                "v3_q21_opt3.png",
                "v3_q21_opt4.png"
            ],
            "options": [
                "Option 1",
                "Option 4",
                "Option 3",
                "Option 2"
            ],
            "a": 0
        },
        {
            "id": 16,
            "marks": 1,
            "type": "MCQ",
            "q": "For which scenario should you use a line chart to represent the data? (1 Mark)",
            "options": [
                "The proportion of yes and no answer to a survey question",
                "The binned distribution for the height of different students",
                "The maximum, minimum, and average value for a set of data",
                "The weekly average stock price during a one-year period"
            ],
            "a": 3
        },
        {
            "id": 17,
            "marks": 1,
            "type": "MCQ",
            "q": "Which visualization type is commonly used to display the distribution of a continuous variable, with variable values on the x axis and corresponding frequencies on the Y axis?<br>Select the correct visualization type in the answer area. (1 Mark)",
            "options": [
                "Option C",
                "Option A",
                "Option D",
                "Option B"
            ],
            "optionImages": [
                "v3_q1_optA.png",
                "v3_q1_optB.png",
                "v3_q1_optC.png",
                "v3_q1_optD.png"
            ],
            "a": 0
        },
        {
            "id": 18,
            "marks": 1,
            "type": "MCQ",
            "q": "A college shows you the chart below to indicate that group A has performed significantly better than group B on a recent assignment. You don't know the sample size and the result of the statistical testing.<br><br>Which chart element creates the impression of a significant score difference? (1 Mark)",
            "img": "group_comparison_3d_bias.png",
            "options": [
                "The Color differentiation",
                "The X-axis unit of Measurement",
                "The Z-Axis Unit of Measurement",
                "The Y-Axis unit of measurement"
            ],
            "a": 3
        },
        {
            "id": 19,
            "marks": 1,
            "type": "MCQ",
            "q": "You are given a data set displaying the time of day and number of minutes customers waited in line for service. You need to remove bias from the results by eliminating outliers.<br><br>Which visualization illustrates outliers in your dataset? Select the correct visualization in the answer area. (1 Mark)",
            "optionImages": [
                "v3_q11_opt1.png",
                "v3_q11_opt2.png",
                "v3_q11_opt3.png",
                "v3_q11_opt4.png"
            ],
            "options": [
                "Option 1",
                "Option 2",
                "Option 4",
                "Option 3"
            ],
            "a": 2
        },
        {
            "id": 20,
            "marks": 1,
            "type": "MCQ",
            "q": "A group of students was asked about their favorite flavor of ice cream. The pie chart below illustrates the proportion of each response.<br><br>What can you conclude from the visualization below about ice cream preference for this group of students? (1 Mark)",
            "img": "ice_cream_pie_chart.png",
            "options": [
                "The most students chose vanilla",
                "Fewest students chose chocolate",
                "The fewest students chose strawberry",
                "The most students chose chocolate"
            ],
            "a": 3
        },
        {
            "id": 21,
            "marks": 1,
            "type": "DROPDOWN",
            "q": "Which correlation range most likely describes the relationship between Variable X and Variable Y based on the visualization below? Select the correct answer from the dropdown. (1 Mark)",
            "img": "scatter_correlation_v2.png",
            "code": "Relationship Analysis → [b1]",
            "options": [
                [
                    "No correlation(r=0.00)",
                    "Some correlation(0.00<r<0.99)",
                    "Perfect correlation(r=1.00)"
                ]
            ],
            "a": [
                "Some correlation(0.00<r<0.99)"
            ]
        }
    ],
    "data4": [
        {
            "id": 1,
            "marks": 1,
            "type": "MCQ3",
            "q": "You are tasked with completing a data analysis project for a large organization. During the project, you must handle personally identifiable information (PII).<br><br>Throughout the project, which <b>three principles</b> should you follow? (Choose 3) (1 Mark)",
            "options": [
                "Limit your handling of the PII to only what is necessary for the current analysis.",
                "Remove all PII from your computer after the analysis is complete.",
                "Retain only the PII that you might need for future analysis.",
                "Request all data from the database that contains the PII.",
                "Keep track of the PII that you have during the analysis."
            ],
            "a": [
                0,
                1,
                4
            ]
        },
        {
            "id": 2,
            "marks": 5,
            "type": "DND_PIVOT",
            "q": "Match the type of data analysis on the left to the analysis question it answers on the right. You may use each item once or not at all.<br><br><span style='font-size:12px;font-style:italic;'>Note: You will receive partial credit for each correct response.</span> (5 Marks)<br><br><div style='background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;'><table style='width: 100%; border-collapse: separate; border-spacing: 0 12px;'><thead><tr><th style='text-align: left; font-weight: 800; color: #1e3a5f; text-transform: uppercase; font-size: 13px; padding-bottom: 10px;'>Analysis Question</th><th style='width: 150px;'></th></tr></thead><tbody><tr><td style='padding: 10px; font-weight: 600; color: #334155;'>What happened?</td><td style='text-align: right;'>Box 1</td></tr><tr><td style='padding: 10px; font-weight: 600; color: #334155;'>Why did it happen?</td><td style='text-align: right;'>Box 2</td></tr><tr><td style='padding: 10px; font-weight: 600; color: #334155;'>What should we do next?</td><td style='text-align: right;'>Box 3</td></tr><tr><td style='padding: 10px; font-weight: 600; color: #334155;'>Is there enough evidence to draw conclusion</td><td style='text-align: right;'>Box 4</td></tr><tr><td style='padding: 10px; font-weight: 600; color: #334155;'>What will happen</td><td style='text-align: right;'>Box 5</td></tr></tbody></table></div>",
            "poolHeader": "Analysis Type",
            "options": [
                "Box 1",
                "Box 2",
                "Box 3",
                "Box 4",
                "Box 5"
            ],
            "labels": [
                "Descriptive analysis",
                "Predictive analysis",
                "Hypothesis Testing",
                "Diagnostic analysis",
                "Prescriptive analysis"
            ],
            "a": {
                "Box 1": "Descriptive analysis",
                "Box 2": "Diagnostic analysis",
                "Box 3": "Prescriptive analysis",
                "Box 4": "Hypothesis Testing",
                "Box 5": "Predictive analysis"
            }
        },
        {
            "id": 3,
            "marks": 1,
            "type": "MCQ",
            "q": "You are analyzing sales and determining trends based on a very large dataset that includes the following columns:<br><ul><li>CustomerName</li><li>CustomerEmail</li><li>Birthdate</li><li>FirstPurchaseDate</li><li>MostRecentPurchaseDate</li><li>TotalQuantityPurchased</li><li>TotalSalesAmount</li></ul>You need to validate the data before you start analysis. What should you do? (1 Mark)",
            "options": [
                "Calculate statistics for TotalQuantityPurchased",
                "Analyze FirstPurchaseDates to determine purchasing trends",
                "Create aggregations for all new columns",
                "Verify date ranges and values for all date columns"
            ],
            "a": 3
        },
        {
            "id": 4,
            "marks": 1,
            "type": "MCQ",
            "q": "You believe playing video games increases the chance of a person getting a heart attack. In your research, you notice equal evidence favoring your hypothesis and opposed to it. You spend hours trying to identify problems with the evidence opposed to your hypothesis, but readily accept the evidence in favor.<br><br>Which type of bias are you demonstrating? (1 Mark)",
            "options": [
                "Sampling bias",
                "Affinity bias",
                "Anchoring bias",
                "Motivated Reasoning"
            ],
            "a": 3
        },
        {
            "id": 5,
            "marks": 1,
            "type": "MCQ",
            "q": "You ran a t-test with an alpha value of 1% (a=0.01).<br><br>Which p-value would cause you to <b>reject</b> the null hypothesis? (1 Mark)",
            "options": [
                "0.09",
                "0.011",
                "0.001",
                "0.10"
            ],
            "a": 2
        },
        {
            "id": 6,
            "marks": 2,
            "type": "MCQ2",
            "q": "For which two reasons is it risky to make generalizations from limited sample data?<br><span style='font-size: 15px; font-style: italic;'>Each correct answer presents a complete solution. (Choose 2.)</span> (2 Marks)",
            "options": [
                "Findings from a smaller sample size may not be as precise",
                "Analyzing data from a smaller sample size is faster",
                "A limited sample may not represent a larger population",
                "Limited data samples are easier to collect."
            ],
            "a": [
                0,
                2
            ]
        },
        {
            "id": 7,
            "marks": 1,
            "type": "MCQ",
            "q": "You have a small dataset that contains personally identifiable information (PII). You need to provide the data to an outside source for additional processing.<br><br>What could you do to protect the PII but still allow you to eventually relate the additional analysis to your original data? (1 Mark)",
            "options": [
                "Employ pseudonymization on the PII and use the pseudonym as the key between the new and original datasets.",
                "Retain every text-based PII in the original dataset but convert them to number-based features in the new dataset.",
                "Remove every instance of PII in the original dataset and add them back after the new dataset is retrieved.",
                "Randomly shuffle the original dataset so that each given piece of PII is no longer associated with a particular user."
            ],
            "a": 0
        },
        {
            "id": 8,
            "marks": 1,
            "type": "MCQ",
            "q": "A data scientist at your company creates a machine learning model to help the hiring manager select candidates from thousands of job applicants.<br><br>Which statement best describes how <b>machine learning</b> is used in this scenario? (1 Mark)",
            "options": [
                "The hiring manager queries the machine learning database for qualified applicants",
                "A machine learning model defines the qualifications necessary for a given job or role",
                "The machine learning system converts applicant information into a common format",
                "The machine learning model uses historical data and algorithms to predict future applicant performance"
            ],
            "a": 3
        },
        {
            "id": 9,
            "marks": 1,
            "type": "MCQ",
            "q": "You want to know whether there is a significant difference between the average test scores of male and female students in the same class. You check that the data is approximately normally distributed and that each group has similar variance.<br><br>How would you decide whether the difference in the test score between male and female students is significant? (1 Mark)",
            "options": [
                "Perform a t-test using the means and variance for male and female students and if p-value is less than 0.05 decide that the difference is significant.",
                "Perform a t-test using the medians and variance for male and female students and if p-value is greater than 0.05 decide that the difference is significant.",
                "Perform a t-test using the means and variance for male and female students and if p-value is greater than 0.05 decide that the difference is significant.",
                "Perform a t-test using the medians and variance for male and female students and if p-value is less than 0.05 decide that the difference is significant."
            ],
            "a": 0
        },
        {
            "id": 10,
            "marks": 1,
            "type": "MCQ",
            "q": "A popular social media site records and counts clicks, likes, dislikes, and other user interactions.<br><br>What type of data is collected? (1 Mark)",
            "options": [
                "Imputed Data",
                "Continuous Data",
                "Big Data",
                "Qualitative Data"
            ],
            "a": 2
        },
        {
            "id": 11,
            "marks": 1,
            "type": "MCQ",
            "q": "What is an example of machine learning in predictive analysis? (1 Mark)",
            "options": [
                "Your vehicle turns on a warning sensor because one of its components requires maintenance.",
                "Your streaming service suggests a category of movies based on the last ten movies you watched.",
                "Your computer automatically goes into sleep mode because the battery has less than ten percent power.",
                "Your thermostat adjusts to a higher temperature because you programmed it based on the time of day"
            ],
            "a": 1
        },
        {
            "id": 12,
            "marks": 1,
            "type": "MCQ",
            "q": "What is the goal of data privacy and protection laws such as GDPR, FERPA, and HIPAA? (1 Mark)",
            "options": [
                "To hold violators accountable for mishandling data",
                "To ensure that companies openly share industry data",
                "To tax companies that use private data",
                "To protect companies from liability related to private data"
            ],
            "a": 0
        },
        {
            "id": 13,
            "marks": 1,
            "type": "MCQ",
            "q": "You are analyzing sales activity that occurs on national holidays.<br><br>What level of data granularity will enable you to perform the most precise analysis? (1 Mark)",
            "options": [
                "Weeks",
                "Days",
                "Months",
                "Years",
                "Hours"
            ],
            "a": 4
        },
        {
            "id": 14,
            "marks": 1,
            "type": "MCQ",
            "q": "You conduct a study to identify how much time people exercise daily. You recruit all the study participants at the gym.<br><br>Which type of bias are you demonstrating? (1 Mark)",
            "options": [
                "Sampling bias",
                "Motivated reasoning",
                "Anchoring bias",
                "Confirmation bias"
            ],
            "a": 3
        },
        {
            "id": 15,
            "marks": 1,
            "type": "MCQ",
            "q": "You run a t-test with an alpha value of 5% (a = 0.05) in order to test an alternative hypothesis (H1). You finish the analysis and discover the p-value is 0.017.<br><br>What can you conclude about the null hypothesis (H0)? (1 Mark)",
            "options": [
                "You accept the null hypothesis (H0)",
                "You modify the null hypothesis (H0)",
                "You reject the null hypothesis (H0)",
                "You fail to reject the null hypothesis (H0)"
            ],
            "a": 2
        },
        {
            "id": 16,
            "marks": 3,
            "type": "TF",
            "q": "For each statement about machine learning, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span> (3 Marks)",
            "options": [
                "Machine learning can help determine whether a candidate will pass an exam without looking at historical scores.",
                "Machine learning can be used to automatically decline financial purchases based on previous purchase activity.",
                "Machine learning can predict the probability of rain in a region by examining known weather patterns."
            ],
            "a": [
                false,
                true,
                true
            ]
        },
        {
            "id": 17,
            "marks": 1,
            "type": "MCQ3",
            "q": "Select three ways that machine learning algorithms are used in data analysis.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection. (Choose 3.)</span> (1 Mark)",
            "options": [
                "Time Series Analysis",
                "Anomaly Detection",
                "Regulated Data Analysis",
                "Small Data Set Analysis",
                "Singular Historical Events",
                "Data Classification"
            ],
            "a": [
                0,
                1,
                5
            ]
        },
        {
            "id": 18,
            "marks": 2,
            "type": "MCQ2",
            "q": "Which two concepts are commonly associated with artificial intelligence (AI) in data analytics?<br><span style='font-size: 15px; font-style: italic;'>Each correct answer presents a complete solution. (Choose 2.)</span> (2 Marks)",
            "options": [
                "Cost-Benefit Analysis",
                "Stakeholder Mapping",
                "Automation",
                "Machine Learning"
            ],
            "a": [
                2,
                3
            ]
        },
        {
            "id": 19,
            "marks": 2,
            "type": "TF",
            "q": "For each statement about <b>data mining</b>, select True if the statement is correct or False if it is incorrect. <br><br><span style='font-size:12px;font-style:italic;'>Note: You will receive partial credit for each correct selection.</span> (2 Marks)",
            "options": [
                "Data mining is used to summarize raw data from large data sets",
                "Data mining is used to review underlying details in a given table"
            ],
            "a": [
                true,
                false
            ]
        },
        {
            "id": 20,
            "marks": 1,
            "type": "MCQ2",
            "q": "Each month, you need to automatically transform the data from two XML documents into a single flat file with columns and rows that Excel can open and interpret. The document names and structure remain constant. You know the relationships between the two XML documents.<br><br>Which two resources can you use?<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection. (Choose 2.)</span> (1 Mark)",
            "options": [
                "Python",
                "Microsoft Word",
                "Power Query for Excel (M)",
                "JSON"
            ],
            "a": [
                0,
                2
            ]
        },
        {
            "id": 21,
            "marks": 1,
            "type": "MCQ2",
            "q": "In the United States and Europe, which two data points are considered <b>non-sensitive PII</b> (personal identifiable information)? (choose 2) (1 Mark)",
            "options": [
                "Bank account number",
                "Medical records",
                "Date of birth",
                "Job title"
            ],
            "a": [
                2,
                3
            ]
        },
        {
            "id": 22,
            "marks": 1,
            "type": "MCQ",
            "q": "In which scenario will artificial intelligence (AI) provide the greatest benefit? (1 Mark)",
            "options": [
                "Determining the statistical mean, median, mode, and standard deviation of the grade for a class",
                "Interpreting fundraising sales data for a college team",
                "Predicting maintenance requirement for an international rental car's companies fleet vehicles",
                "Recording daily sales for three stores owned by one franchise owner"
            ],
            "a": 2
        }
    ],
    "data5": [
        {
            "id": 1,
            "type": "MCQ2",
            "q": "<strong>Data Security:</strong> Which two practices are standard methods for protecting sensitive data?<br><span style='font-size: 15px; font-style: italic;'>Each correct answer presents a complete solution. (Choose 2.)</span>",
            "options": [
                "Data Encryption",
                "Posting data to a public GitHub repo",
                "Role-Based Access Control (RBAC)",
                "Storing passwords in plain text"
            ],
            "a": [
                0,
                2
            ]
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "<strong>Algorithmic Impact:</strong> What is a potential negative consequence of using historical data that contains human prejudices to train a machine learning model?",
            "options": [
                "Increased Data Velocity",
                "Data Encryption",
                "Algorithmic Bias",
                "Data Normalization"
            ],
            "a": 2
        },
        {
            "id": 3,
            "type": "TF",
            "q": "<strong>Data Ethics:</strong> Evaluate the following statements on data ethics and security.<br><br>Select True or False for each statement.",
            "options": [
                "Anonymizing data means to attach a person's explicit name to their records.",
                "Data bias in training sets can lead to discriminatory AI models.",
                "Transparency involves hiding how user data is collected and processed."
            ],
            "a": [
                false,
                true,
                false
            ]
        },
        {
            "id": 4,
            "type": "MTF",
            "q": "<strong>Ethics Principles:</strong> Match the data governance concept with its correct definition.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "Privacy",
                "Security",
                "Compliance",
                "Bias Mitigation"
            ],
            "labels": [
                "Respecting user consent and data rights",
                "Protecting data from unauthorized access or breaches",
                "Adhering to legal standards like GDPR or CCPA",
                "Ensuring models represent diverse populations fairly"
            ],
            "a": {
                "Privacy": "Respecting user consent and data rights",
                "Security": "Protecting data from unauthorized access or breaches",
                "Compliance": "Adhering to legal standards like GDPR or CCPA",
                "Bias Mitigation": "Ensuring models represent diverse populations fairly"
            }
        },
        {
            "id": 5,
            "type": "DROPDOWN",
            "q": "<strong>Anonymization & Bias:</strong> You are preparing a database report. To protect individual identity, you [b1] the user names. To ensure the results are representative and fair, you actively work on [b2] mitigation.",
            "options": [
                [
                    "Mask/Anonymize",
                    "Encrypt",
                    "Delete"
                ],
                [
                    "Bias",
                    "Privacy",
                    "Security"
                ]
            ],
            "a": [
                "Mask/Anonymize",
                "Bias"
            ]
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "<strong>PII Handling:</strong> If a data analyst discovers a customer's clear phone number in a public dataset, what is the most responsible action?",
            "options": [
                "Delete the specific record before sharing",
                "Publish the dataset immediately",
                "Rename the file to 'Confidential'",
                "Mask the phone number (e.g., +91 XXX-XXX)"
            ],
            "a": 3
        },
        {
            "id": 7,
            "type": "MCQ",
            "q": "<strong>Data Applications:</strong> Which of the following is an example of an algorithm applying Predictive Analysis in the real world?",
            "options": [
                "A streaming service recommending movies based on your viewing history.",
                "A car dashboard displaying the current tire pressure.",
                "A thermostat that adjusts temperature based on the current time.",
                "A cash register printing a receipt."
            ],
            "a": 0
        },
        {
            "id": 8,
            "type": "DROPDOWN",
            "q": "<strong>Regulations:</strong> You are setting up user data policies for a European application.<br><br>You must ensure strict adherence to the [b1] framework, which protects consumer privacy and data rights in the EU. For California residents, you would reference [b2].",
            "options": [
                [
                    "GDPR",
                    "HIPAA",
                    "SOX"
                ],
                [
                    "CCPA",
                    "HIPAA",
                    "PCI-DSS"
                ]
            ],
            "a": [
                "GDPR",
                "CCPA"
            ]
        },
        {
            "id": 9,
            "type": "MCQ",
            "q": "<strong>Acronym Check:</strong> What does the European privacy regulation acronym GDPR stand for?",
            "options": [
                "General Data Processing Rule",
                "Global Data Privacy Routine",
                "Group Data Protection Resource",
                "General Data Protection Regulation"
            ],
            "a": 3
        },
        {
            "id": 10,
            "type": "TF",
            "q": "<strong>Ethics in Action:</strong> Review the scenarios concerning data rights.<br><br>Select True or False for each statement.",
            "options": [
                "A company is ethically bound to protect user data even if it has no legal obligation.",
                "Data Security and Data Privacy are exactly the same concept.",
                "Users generally have the right to request deletion of their personal data under GDPR."
            ],
            "a": [
                true,
                false,
                true
            ]
        }
    ],
    "da_mock1": [
        {
            "id": 1,
            "type": "MCQ2",
            "q": "You need to create a data view based on aggregations for further visual analysis. Your data includes sales information for the past five years for food products at your company’s stores. Each product belongs to one category. For example milk belongs to dairy category. <br><br>The data view must meet the following requirements:<br>• Include all products and their associated categories<br>• Include sales sub-total for each category and year<br>• Display grand total of sales for each category<br>• Create a summary of each category for every year<br><br>Which <b>two</b> aggregation methods should you use to create the data view? (Choose 2)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Pivoting",
                "Filtering",
                "Merging",
                "Grouping"
            ],
            "a": [
                0,
                3
            ]
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "Which visualization type is commonly used to display the distribution of a continuous variable, with variable values on the x-axis and corresponding frequencies on the Y-axis?",
            "options": [
                "Option D: Line Chart",
                "Option C: Histogram",
                "Option A: Column Chart",
                "Option B: Bar Chart"
            ],
            "optionImages": [
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZmFmYyIgcng9IjgiLz4KICAgIDxsaW5lIHgxPSI0MCIgeTE9IjE2MCIgeDI9IjI2MCIgeTI9IjE2MCIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0MCIgeTE9IjMwIiB4Mj0iNDAiIHkyPSIxNjAiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cmVjdCB4PSI2MCIgeT0iMTEwIiB3aWR0aD0iMjAiIGhlaWdodD0iNTAiIGZpbGw9IiM0NDcyYzQiLz4KICAgIDxyZWN0IHg9IjEwMCIgeT0iNjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiM0NDcyYzQiLz4KICAgIDxyZWN0IHg9IjE0MCIgeT0iOTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSI3MCIgZmlsbD0iIzQ0NzJjNCIvPgogICAgPHJlY3QgeD0iMTgwIiB5PSI1MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjExMCIgZmlsbD0iIzQ0NzJjNCIvPgogICAgPHJlY3QgeD0iMjIwIiB5PSI4MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjNDQ3MmM0Ii8+Cjwvc3ZnPg==",
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZmFmYyIgcng9IjgiLz4KICAgIDxsaW5lIHgxPSI1MCIgeTE9IjE3MCIgeDI9IjI3MCIgeTI9IjE3MCIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI1MCIgeTE9IjMwIiB4Mj0iNTAiIHkyPSIxNzAiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cmVjdCB4PSI1MCIgeT0iNTAiIHdpZHRoPSIxODAiIGhlaWdodD0iMTUiIGZpbGw9IiM0NDcyYzQiLz4KICAgIDxyZWN0IHg9IjUwIiB5PSI4MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxNSIgZmlsbD0iIzQ0NzJjNCIvPgogICAgPHJlY3QgeD0iNzAiIHk9IjExMCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNSIgZmlsbD0iIzQ0NzJjNCIvPgogICAgPHJlY3QgeD0iNzAiIHk9IjE0MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNSIgZmlsbD0iIzQ0NzJjNCIvPgo8L3N2Zz4=",
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZmFmYyIgcng9IjgiLz4KICAgIDxsaW5lIHgxPSI0MCIgeTE9IjE2MCIgeDI9IjI2MCIgeTI9IjE2MCIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0MCIgeTE9IjMwIiB4Mj0iNDAiIHkyPSIxNjAiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cmVjdCB4PSI2MCIgeT0iNzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI5MCIgZmlsbD0iIzQ0NzJjNCIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxyZWN0IHg9IjEwMCIgeT0iMTEwIiB3aWR0aD0iNDAiIGhlaWdodD0iNTAiIGZpbGw9IiM0NDcyYzQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cmVjdCB4PSIxNDAiIHk9IjkwIiB3aWR0aD0iNDAiIGhlaWdodD0iNzAiIGZpbGw9IiM0NDcyYzQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cmVjdCB4PSIxODAiIHk9IjEzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjNDQ3MmM0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMTUwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjNjQ3NDhiIj5Db250aW51b3VzIEJpbnM8L3RleHQ+Cjwvc3ZnPg==",
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZmFmYyIgcng9IjgiLz4KICAgIDxsaW5lIHgxPSI0MCIgeTE9IjE2MCIgeDI9IjI2MCIgeTI9IjE2MCIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxsaW5lIHgxPSI0MCIgeTE9IjMwIiB4Mj0iNDAiIHkyPSIxNjAiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cG9seWxpbmUgcG9pbnRzPSI2MCwxMzAgMTAwLDgwIDE0MCwxMTAgMTgwLDUwIDIyMCw3MCAyNDAsMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ0NzJjNCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjEzMCIgcj0iMyIgZmlsbD0iIzFlM2E1ZiIgLz4KICAgIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzIiBmaWxsPSIjMWUzYTVmIiAvPgogICAgPGNpcmNsZSBjeD0iMTQwIiBjeT0iMTEwIiByPSIzIiBmaWxsPSIjMWUzYTVmIiAvPgogICAgPGNpcmNsZSBjeD0iMTgwIiBjeT0iNTAiIHI9IjMiIGZpbGw9IiMxZTNhNWYiIC8+CiAgICA8Y2lyY2xlIGN4PSIyMjAiIGN5PSI3MCIgcj0iMyIgZmlsbD0iIzFlM2E1ZiIgLz4KICAgIDxjaXJjbGUgY3g9IjI0MCIgY3k9IjMwIiByPSIzIiBmaWxsPSIjMWUzYTVmIiAvPgo8L3N2Zz4="
            ],
            "a": 1
        },
        {
            "id": 3,
            "type": "MCQ",
            "q": "What is the direction of correlation between variable X and variable Y based on the scatter plot below?",
            "img": "correlation_scatter.png",
            "options": [
                "Zero",
                "Negative",
                "Positive"
            ],
            "a": 2
        },
        {
            "id": 4,
            "type": "MCQ",
            "q": "You are analyzing sales activity that occurs on national holidays.<br><br>What level of data granularity will enable you to perform the most precise analysis?",
            "options": [
                "Hours",
                "Years",
                "Weeks",
                "Months",
                "Days"
            ],
            "a": 0
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "You work for a recreational sports company. The table shows the company's recreational vehicle sales.<br><br>You need to show how each vehicle type contributes to the company's total sales.<br><br>Which visualization should you use? Select the correct visualization in the answer area.",
            "img": "recreational_sales_table.png",
            "options": [
                "Option B",
                "Option D",
                "Option C",
                "Option A"
            ],
            "optionImages": [
                "recreational_pie_chart.png",
                "recreational_combo_chart.png",
                "recreational_scatter_plot.png",
                "recreational_bar_chart.png"
            ],
            "a": 3
        },
        {
            "id": 6,
            "type": "MCQ",
            "q": "What concept allows analysts to drill down into data and examine different levels of information that may be crucial in diagnostic analytics?",
            "options": [
                "Interpretability",
                "Granularity",
                "Completeness",
                "Transparency"
            ],
            "a": 1
        },
        {
            "id": 7,
            "type": "MCQ",
            "q": "Person A has 5 coins and person B has 10 coins.<br><br>Which type of data does the number of coins represent?",
            "options": [
                "Ordinal Data",
                "Metadata",
                "Qualitative data",
                "Quantitative data"
            ],
            "a": 3
        },
        {
            "id": 8,
            "type": "MTF",
            "marks": 4,
            "q": "You are using data analytics to help answer business questions about a new product your company released.<br><br>Move each type of data analytics from the list on the left to the correct question on the right.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "Descriptive Analytics",
                "Diagnostic Analytics",
                "Predictive Analytics",
                "Prescriptive Analytics"
            ],
            "labels": [
                "Why did this happen?",
                "What action should we take next?",
                "What might happen in the future?",
                "What happened in the initial product release?"
            ],
            "a": {
                "Descriptive Analytics": "What happened in the initial product release?",
                "Diagnostic Analytics": "Why did this happen?",
                "Predictive Analytics": "What might happen in the future?",
                "Prescriptive Analytics": "What action should we take next?"
            }
        },
        {
            "id": 9,
            "type": "MCQ",
            "q": "An analyst claims the visualization implies that Variable X causes Variable Y. Is the analyst correct in this assertion?",
            "img": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2ZjZmNmYyIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSI1MCIgeTE9IjUwIiB4Mj0iNTUwIiB5Mj0iNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIxMDAiIHgyPSI1NTAiIHkyPSIxMDAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIxNTAiIHgyPSI1NTAiIHkyPSIxNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIyMDAiIHgyPSI1NTAiIHkyPSIyMDAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIyNTAiIHgyPSI1NTAiIHkyPSIyNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIzMDAiIHgyPSI1NTAiIHkyPSIzMDAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMTAwIiB5MT0iNTAiIHgyPSIxMDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMTUwIiB5MT0iNTAiIHgyPSIxNTAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMjAwIiB5MT0iNTAiIHgyPSIyMDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMjUwIiB5MT0iNTAiIHgyPSIyNTAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMzAwIiB5MT0iNTAiIHgyPSIzMDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMzUwIiB5MT0iNTAiIHgyPSIzNTAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNDAwIiB5MT0iNTAiIHgyPSI0MDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNDUwIiB5MT0iNTAiIHgyPSI0NTAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAwIiB5MT0iNTAiIHgyPSI1MDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIzNTAiIHgyPSI1NTAiIHkyPSIzNTAiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSI1MCIgeDI9IjUwIiB5Mj0iMzUwIiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzAwIiB5PSIzODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQ3NTU2OSI+VmFyaWFibGUgWDwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSIyMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQ3NTU2OSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwLCAxNSwgMjAwKSI+VmFyaWFibGUgWTwvdGV4dD4KICAgIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjI1MCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjMwMCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjE5MCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjI1MCIgY3k9IjIwMCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjE2MCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjM1MCIgY3k9IjI1NSIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjQwMCIgY3k9IjEzMCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjQ1MCIgY3k9Ijc1IiAgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KPC9zdmc+",
            "options": [
                "Yes",
                "No"
            ],
            "a": 1
        },
        {
            "id": 10,
            "type": "MCQ",
            "q": "What is a raw data?",
            "options": [
                "Visualized Data",
                "Summarized Data",
                "Unprocessed Data",
                "Purely numerical Data"
            ],
            "a": 2
        },
        {
            "id": 11,
            "type": "MCQ",
            "q": "Which Statement correctly assigns a string to the variable that is name score?",
            "options": [
                "Score=String[7]",
                "Score=\"&\"",
                "Score= 7\"",
                "Score=true"
            ],
            "a": 1
        },
        {
            "id": 12,
            "type": "MCQ",
            "q": "Which correlation range most likely describes the relationship between Variable X and Variable Y based on the plot provided?",
            "img": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2ZjZmNmYyIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSI1MCIgeTE9IjUwIiB4Mj0iNTUwIiB5Mj0iNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIxMDAiIHgyPSI1NTAiIHkyPSIxMDAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIxNTAiIHgyPSI1NTAiIHkyPSIxNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIyMDAiIHgyPSI1NTAiIHkyPSIyMDAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIyNTAiIHgyPSI1NTAiIHkyPSIyNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIzMDAiIHgyPSI1NTAiIHkyPSIzMDAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMTAwIiB5MT0iNTAiIHgyPSIxMDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMTUwIiB5MT0iNTAiIHgyPSIxMTUwIiB5Mj0iMzUwIiBzdHJva2U9IiNmMmY1ZjkiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPGxpbmUgeD0iMjAwIiB5MT0iNTAiIHgyPSIyMDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMjUwIiB5MT0iNTAiIHgyPSIyNTAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMzAwIiB5MT0iNTAiIHgyPSIzMDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMzUwIiB5MT0iNTAiIHgyPSIzNTAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNDAwIiB5MT0iNTAiIHgyPSI0MDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNDUwIiB5MT0iNTAiIHgyPSI0NTAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAwIiB5MT0iNTAiIHgyPSI1MDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIzNTAiIHgyPSI1NTAiIHkyPSIzNTAiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSI1MCIgeDI9IjUwIiB5Mj0iMzUwIiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzAwIiB5PSIzODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQ3NTU2OSI+VmFyaWFibGUgWDwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSIyMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQ3NTU2OSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwLCAxNSwgMjAwKSI+VmFyaWFibGUgWTwvdGV4dD4KICAgIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjI1MCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjMwMCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjE5MCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjE2MCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjM1MCIgY3k9IjI1NSIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjQwMCIgY3k9IjEzMCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjQ1MCIgY3k9Ijc1IiAgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KPC9zdmc+",
            "options": [
                "Some correlation (0.00 < r < 0.99)",
                "No correlation (r=0.00)",
                "Perfect correlation (r=1.00)"
            ],
            "a": 0
        },
        {
            "id": 13,
            "type": "MCQ",
            "q": "What is an example of data cleaning?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Arranging Excel data rows in an order that is easy for a user to read",
                "Adding quotation marks to the beginning and end of a tab-delimited file",
                "Ensuring that the data in a Word table uses a consistent font",
                "Removing non-printable characters from a comma-delimited file"
            ],
            "a": 3
        },
        {
            "id": 14,
            "type": "MATRIX",
            "q": "From the data in the table below, you create a pivot table to show the combined number of certified virtual and in-person teachers for each class at each school.<br><br>Move the appropriate labels from the list on the left to the correct locations in the Pivot tables on the right. You may use each label once or not at all.",
            "img": "pivot_table_question.png",
            "rows": [
                "Label 1",
                "Label 2",
                "Label 3",
                "Label 4"
            ],
            "cols": [
                "Data Analytics",
                "Networking",
                "In-Person",
                "Virtual",
                "School A",
                "School B"
            ],
            "a": [
                1,
                0,
                4,
                5
            ]
        },
        {
            "id": 15,
            "type": "TF",
            "q": "The visualization and the data table depict housing prices in a region. For each statement about the visualization, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "img": "housing_prices_color_final.png",
            "options": [
                "An annual increase of $25,000 occurs between 2016 and 2025",
                "The visualization uses scaling manipulation",
                "The visualization accurately depicts the housing prices shown"
            ],
            "a": [
                false,
                false,
                true
            ]
        },
        {
            "id": 16,
            "type": "MCQ",
            "q": "Which data type can store a phrase or sentence?",
            "options": [
                "String",
                "Character",
                "Boolean",
                "Integer"
            ],
            "a": 0
        },
        {
            "id": 17,
            "type": "MTF",
            "q": "Move each function from the list on the left to the correct description on the right.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "Returns the largest value",
                "Returns the smallest value",
                "Returns the number of Values",
                "Returns the total of the values"
            ],
            "labels": [
                "Max()",
                "Min()",
                "Count()",
                "Sum()"
            ],
            "a": {
                "Returns the largest value": "Max()",
                "Returns the smallest value": "Min()",
                "Returns the number of Values": "Count()",
                "Returns the total of the values": "Sum()"
            }
        },
        {
            "id": 18,
            "type": "MCQ2",
            "q": "Which two concepts are commonly associated with artificial intelligence (AI) in data analytics?<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection. (Choose 2.)</span>",
            "options": [
                "Cost-Benefit Analysis",
                "Stakeholder Mapping",
                "Automation",
                "Machine Learning"
            ],
            "a": [
                2,
                3
            ]
        },
        {
            "id": 19,
            "type": "MCQ",
            "q": "You conduct a study to identify how much people exercise daily. You recruit all the study participants at the gyms.<br><br>Which type of bias are you demonstrating?",
            "options": [
                "Sampling bias",
                "Confirmation Bias",
                "Anchoring bias",
                "Motivated Bias"
            ],
            "a": 1
        },
        {
            "id": 20,
            "type": "MCQ2",
            "q": "Each month you need to automatically transform the data from two XML documents into a single flat file with columns and rows that Excel can open and interpret. The document names and structure remain constant. You know the relationship between the two XML documents.<br><br>Which <b>two</b> resources can you use? (Choose 2)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Json",
                "Power Query for Excel (M)",
                "Microsoft Excel",
                "Python"
            ],
            "a": [
                1,
                3
            ]
        },
        {
            "id": 21,
            "type": "MCQ",
            "q": "You have a dataset that includes product review scores and demographic information about the reviewers. There are no subcategories associated with the demographic answers. The table shows a selection of the data.<br><br>Which Scenario is an example of disaggregating the dataset?",
            "img": "disaggregation_dataset_v3.png",
            "options": [
                "Display a list of ethnicities that are included in the other option",
                "Display the overall average and mode of all scores on a per-products basis",
                "Display the overall average and mode of all scores and a count of all reviews",
                "By average and mode of the scores for each product grouped by the ethnicity of the reviewers"
            ],
            "a": 0
        },
        {
            "id": 22,
            "type": "TF",
            "q": "For each statement about the machine learning select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Machine learning can predict the probability of Rain in a region by examining known weather patterns",
                "Machine Learning can be used to automatically decline financial purchases based on previous purchase activity",
                "Machine learning can help determine whether a candidate will pass an exam without looking at historical scores"
            ],
            "a": [
                true,
                true,
                false
            ]
        },
        {
            "id": 23,
            "type": "MCQ",
            "q": "You are reviewing a database of restaurant menu items. The table below shows a selection of the data.<br>You need to display only items on the dessert menu with a type of cake.<br><br>What should you do to nondestructively limit the data display?",
            "img": "restaurant_menu_dataset.png",
            "options": [
                "Add two slicers, one for menu and one for type. Set the menu slicer to desert and the type slicer to cake",
                "Delete all data that has a menu other than desert. Then delete all data that has a type other than cake",
                "Sort the data by menu and within each menu, Sort by type",
                "Group the data by menu and then group the data on the desert menu by type"
            ],
            "a": 0
        },
        {
            "id": 24,
            "type": "MCQ",
            "q": "You have a comma-delimited file with 100,000 rows and 200 columns of phone sales data. One column represents the Phone manufacturer.<br><br>You need to analyze all sales data for a specific manufacturer.<br><br>Which technique should you use?",
            "options": [
                "Deleting",
                "Filtering",
                "Truncating",
                "Transposing"
            ],
            "a": 1
        },
        {
            "id": 25,
            "type": "MCQ",
            "q": "You Believe Playing video game's increases the chance of man getting heart attack. In your research you notice equal evidences in favouring your hypothesis and opposed to it. You tried hours trying to identify the problems with the evidence opposed to your hypothesis, but readily accept the evidence in favor.<br><br>Which type of bias are you demonstrating?",
            "options": [
                "Anchoring Bias",
                "Motivated Reasoning",
                "Sampling Bias",
                "Confirmation Bias"
            ],
            "a": 3
        },
        {
            "id": 26,
            "type": "MCQ",
            "q": "You want to show a friend your monthly budget breakdown to prove that most of your expenditure is food costs. You create a table that shows the flow of money as it moves one budget category to the next.<br><br>Which visualization type should you use to display your analysis based on the table shown?",
            "img": "budget_flow_dataset_v2.png",
            "options": [
                "Sankey Chart",
                "Classification Chart",
                "Correlation Chart",
                "Time Series Chart"
            ],
            "a": 0
        },
        {
            "id": 27,
            "type": "MCQ",
            "q": "Your company has summarized a large data set for the region you live in. You need to compare results from urban and rural communities within your region.<br><br>What is the fastest way to obtain the information?",
            "options": [
                "Review data from neighbouring regions",
                "Aggregate the data",
                "Disaggregate the data",
                "Collect a new Data Sample"
            ],
            "a": 2
        },
        {
            "id": 28,
            "type": "TF",
            "q": "<strong>Data Disaggregation:</strong> For each statement about data disaggregation, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Data disaggregation combines data from different sources",
                "Data disaggregation provides a summary of the data",
                "Data Disaggregation can clarify trends and patterns among subgroups"
            ],
            "a": [
                false,
                false,
                true
            ]
        },
        {
            "id": 29,
            "type": "MCQ2",
            "q": "For which two reasons is it risky to make generalizations from limited sample data?<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection. (Choose 2.)</span>",
            "options": [
                "Limited data Samples are easier to collect",
                "A limited sample may not represent a larger population",
                "Findings from a smaller sample size may not be as precise",
                "Analyzing data from a smaller sample size is faster"
            ],
            "a": [
                1,
                2
            ]
        },
        {
            "id": 30,
            "type": "MCQ",
            "q": "What data structure describes the following data?<br><strong>[“Aabid”, “Jesenia”, “Mark”]</strong>",
            "options": [
                "Multi-dimensional",
                "Table",
                "Graph",
                "List"
            ],
            "a": 3
        },
        {
            "id": 31,
            "type": "MCQ",
            "q": "The Marketing team wants to know which market segment have the highest sales in the last year.<br><br>Which type of data analysis should they use?",
            "options": [
                "Predictive Analytics",
                "Perspective analytics",
                "Descriptive Analytics",
                "Diagnostic Analytics"
            ],
            "a": 2
        },
        {
            "id": 32,
            "type": "MCQ",
            "q": "In which scenario will artificial intelligence (AI) provide the greatest benefit?",
            "options": [
                "Predicting maintenance requirements for a international rental car company's fleet vehicles",
                "Recording daily sales for the three stores owned by one franchise owner",
                "Interpreting fundraising sales data for a college soccer team",
                "Determining the statistical mean, mode, and standard deviation of the grades for a class"
            ],
            "a": 0
        },
        {
            "id": 33,
            "type": "MCQ",
            "q": "You run a t-test with alpha value of 5% (a= 0.05) in order to test an alternative hypothesis (H1). You finish the analysis and discover the P-value is 0.017.<br><br>What can you conclude about the null hypothesis (H0)?",
            "options": [
                "You reject the null hypothesis (H0)",
                "You fail to reject the null Hypothesis (H0)",
                "You accept the null hypothesis (H0)",
                "You modify the null hypothesis (H0)"
            ],
            "a": 0
        },
        {
            "id": 34,
            "type": "MCQ",
            "q": "What is the goal of data privacy and protection laws such as GDPR, FERPA, and HIPAA?",
            "options": [
                "To ensure that companies openly share industry data",
                "To protect companies from liability related to private data",
                "To tax companies that use private data",
                "To hold violators accountable for mishandling data"
            ],
            "a": 3
        },
        {
            "id": 35,
            "type": "MCQ",
            "q": "You have a small dataset that contains personally identifiable information (PII). You need to provide the data to an outside source for additional processing.<br><br>What could you do to protect the PII but still allow you to eventually relate the additional analysis to your original data?",
            "options": [
                "Employ pseudonymization on the PII and use the pseudonym as the key between the new and original datasets",
                "Retain every text based PII in the original dataset but convert them to number-based features in the new dataset",
                "Remove every instance of PII in the original dataset and add them back after the new dataset is retrieved",
                "Randomly shuffle the original dataset so that each given piece of PII is no longer associated with a particular user"
            ],
            "a": 0
        },
        {
            "id": 36,
            "type": "MCQ",
            "q": "A college shows you the chart below to indicate that group A has performed significantly better than group B on a recent assignment. You don't know the sample size and the result of the statistical testing.<br><br>Which chart element creates the impression of a significant score difference?",
            "img": "scaling_manipulation_chart.png",
            "options": [
                "The Z-Axis Unit of Measurement",
                "The Y-Axis unit of measurement",
                "The X-axis unit of Measurement",
                "The Color differentiation"
            ],
            "a": 1
        },
        {
            "id": 37,
            "type": "MCQ",
            "q": "Which Data structure have multiple rows and columns?",
            "options": [
                "List",
                "Table",
                "One-dimensional Array",
                "Series"
            ],
            "a": 1
        },
        {
            "id": 38,
            "type": "MCQ2",
            "q": "A coworker is having trouble joining two database tables, Table A and Table B, that were imported from CSV files. They say the tables have no common values.<br><br>You troubleshoot the problem and find that the <b>RowKey</b> values in TableA and the <b>RowID</b> values in TableB look identical (e.g., three numbers, a dash, and two letters).<br><br>Which <b>two</b> actions should you complete next? (Choose 2)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Verify that the data in the database was imported as a numeric data type",
                "Trim empty spaces from both of the valid characters",
                "Visually compare the database values to the CSV values",
                "Trim empty spaces from only the right side of the valid characters"
            ],
            "a": [
                2,
                3
            ]
        },
        {
            "id": 39,
            "type": "MCQ",
            "q": "A popular social media site records and counts clicks, likes, and dislikes and other user interactions.<br><br>What type of data is collected?",
            "options": [
                "Imputed data",
                "Qualitative data",
                "Continuous data",
                "Big data"
            ],
            "a": 3
        }
    ],
    "da_mock2": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "You have produced a linear regression model which calculates house prices based on area taken up by the house, the number of bedrooms, and the number of bathrooms:<br><br><b>House price = (100 + 0.5 * square meters + 8 * bedrooms + 10 * bathrooms) * 1,000</b><br><br>What would the model predict for the price of a house with 800 square meters, 4 bedrooms and 3 bathrooms?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "538,000",
                "552,000",
                "562,000",
                "572,000"
            ],
            "a": 2
        },
        {
            "id": 2,
            "type": "DROPDOWN",
            "q": "You are analyzing statistics for online and in-store purchases with data collected over the past year. Data collected includes surveys from 300 instore customers and 300 online customers. Based on the data visualization below, identify which statements about customer purchases over the last year are correct and which statements are incorrect.<br><br>For each statement about online and in-store purchases, select True if the statement is correct or False if the statement is incorrect.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span><br><span style='font-size: 13px; color: #64748b;'>4 points</span>",
            "img": "purchase_stats_chart.png",
            "code": "In-store customers spent more money than online customers: [b1]<br><br>Online customers have a larger variance in how much they spend: [b2]<br><br>The difference between the largest amount spent and the smallest amount spent is higher for in-store customers: [b3]<br><br>The amount spent the most often is the same for online and in-store customers: [b4]",
            "options": [
                [
                    "True",
                    "False"
                ],
                [
                    "True",
                    "False"
                ],
                [
                    "True",
                    "False"
                ],
                [
                    "True",
                    "False"
                ]
            ],
            "a": [
                "False",
                "True",
                "False",
                "True"
            ]
        },
        {
            "id": 3,
            "type": "MCQ",
            "q": "Person A has 5 coins and person B has 10 coins.<br><br>Which type of data does the number of coins represent?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Ordinal data",
                "Qualitative data",
                "Metadata",
                "Quantitative data"
            ],
            "a": 3
        },
        {
            "id": 4,
            "type": "MCQ",
            "q": "Which data type can store a phrase or sentence?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "String",
                "Integer",
                "Character",
                "Boolean"
            ],
            "a": 0
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "You want to show a friend your monthly budget breakdown to prove that most of your expenditure is food costs. You create a table that shows the flow of money as it moves one budget category to the next.<br><br>Which visualization type should you use to display your analysis based on the table shown?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "img": "budget_sankey_table.png",
            "options": [
                "Sankey Diagram",
                "Classification tree",
                "Time Series Chart",
                "Correlation matrix"
            ],
            "a": 0
        },
        {
            "id": 6,
            "type": "TF",
            "q": "For each statement about data disaggregation ,Select True or False<br><span style='font-size: 15px; font-style: italic;'>Note: You will Receive partial credit for each correct selection</span><br><span style='font-size: 13px; color: #64748b;'>3 points</span>",
            "options": [
                "Data disaggregation provides a summary of data",
                "Data disaggregation combines data from multiple sources",
                "Data disaggregation can clarify trends and pattern among subgroups"
            ],
            "a": {
                "Data disaggregation provides a summary of data": "False",
                "Data disaggregation combines data from multiple sources": "False",
                "Data disaggregation can clarify trends and pattern among subgroups": "True"
            }
        },
        {
            "id": 7,
            "type": "MCQ",
            "q": "In which scenario will artificial Intelligence (AI) Provides the greatest benefit?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Recording daily sales for three stores owned by one franchise owner",
                "Determining the statistical mean, median, mode, and standard deviation of the grade for a class",
                "Predicting maintenance requirement for an international rental car's companies fleet vehicles",
                "Interpreting fundraising sales data for a college team"
            ],
            "a": 2
        },
        {
            "id": 8,
            "type": "MCQ3",
            "q": "Select three ways that machine learning algorithms are used in data analysis. (Choose 3)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span><br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Time series Analysis",
                "Anomaly Detection",
                "Regulated Data Analysis",
                "Small Data Set Analysis",
                "Singular Historical Events",
                "Data Classification"
            ],
            "a": [
                0,
                1,
                5
            ]
        },
        {
            "id": 9,
            "type": "MCQ2",
            "q": "You have a comma-delimited file with 100,000 rows and 200 columns of phone sales data. One column represents the phone manufacturer. You need to analyze all sales data for one manufacturer. Which two techniques should you use? (Choose 2.)<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Filtering",
                "Transposing",
                "Slicing",
                "Deleting",
                "Truncating"
            ],
            "a": [
                0,
                2
            ]
        },
        {
            "id": 10,
            "type": "MCQ",
            "q": "What is one goal of data privacy and protection laws such as GDPR, FERPA, and HIPAA?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "To hold violators accountable for mishandling data",
                "To tax companies that use private data",
                "To protect companies from liability related to private data",
                "To ensure that companies openly share industry data"
            ],
            "a": 0
        },
        {
            "id": 11,
            "type": "DROPDOWN",
            "q": "You are analyzing customer satisfaction scores between on-line purchases and in-store purchases. Satisfaction scores are entered on a scale from 1 (extremely unsatisfied) to 10 (extremely satisfied).<br><br>Select the correct metric from the drop-down list for each statement.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span><br><span style='font-size: 13px; color: #64748b;'>4 points</span>",
            "code": "The most frequent satisfaction score was 5 for online customer and 9 for in-store customers: [b1]<br><br>The average score for online customers was 6.4 and the average score for in-store customers was 7.0: [b2]<br><br>The score at the midpoint between the lowest and the highest scores was 6 for online customers and 7 for in-store customers: [b3]<br><br>The online scores vary from the average by 2.3 and the in-store variance is 1.9: [b4]",
            "options": [
                [
                    "Count",
                    "Mean",
                    "Median",
                    "Mode",
                    "Std Dev",
                    "Max",
                    "Min"
                ],
                [
                    "Count",
                    "Mean",
                    "Median",
                    "Mode",
                    "Std Dev",
                    "Max",
                    "Min"
                ],
                [
                    "Count",
                    "Mean",
                    "Median",
                    "Mode",
                    "Std Dev",
                    "Max",
                    "Min"
                ],
                [
                    "Count",
                    "Mean",
                    "Median",
                    "Mode",
                    "Std Dev",
                    "Max",
                    "Min"
                ]
            ],
            "a": [
                "Mode",
                "Mean",
                "Median",
                "Std Dev"
            ]
        },
        {
            "id": 12,
            "type": "MCQ",
            "q": "Which visualization type is commonly used to display the distribution of a continuous variable. with variable values on the x-axis and corresponding frequencies on the y-axis? Select the correct visualization type in the answer area.<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Option 3",
                "Option 2",
                "Option 4",
                "Option 1"
            ],
            "optionImages": [
                "dist_column_chart.png",
                "dist_line_chart.png",
                "dist_histogram.png",
                "dist_bar_chart.png"
            ],
            "a": 0
        },
        {
            "id": 13,
            "type": "MCQ",
            "q": "Which area of a PivotTable should you use to create a vertical list of unique values from a specific field?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Filters",
                "Rows",
                "Values",
                "Columns"
            ],
            "a": 1
        },
        {
            "id": 14,
            "type": "MCQ",
            "q": "Which data structure describes the following data<br><br><div class='code-snippet' style='margin:0;'>[\"Aabid\",\"jesenia\",\"Mark\"]</div><br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Table",
                "Multi-dimensional array",
                "List",
                "Graph"
            ],
            "a": 2
        },
        {
            "id": 15,
            "type": "MCQ",
            "q": "Your company has summarized a large set for the region you live in. You need to compare the result from Urban and Rural communities Within your region.<br><br>What is the fastest way to obtain this information?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Disaggregate the data",
                "Collect new data sample",
                "Aggregate the data",
                "Review data from neighboring regions"
            ],
            "a": 0
        },
        {
            "id": 16,
            "type": "MCQ",
            "q": "What is a raw data<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Visualized data",
                "Purely numeric data",
                "Summarized data",
                "Unprocessed data"
            ],
            "a": 3
        },
        {
            "id": 17,
            "type": "TF",
            "q": "The visualization and data table depict housing price in a region. For each statement about the visualization, select True or False.<br><span style='font-size: 13px; color: #64748b;'>1 point</span><br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection</span>",
            "img": "housing_prices_color_final.png",
            "options": [
                "The scaling of the graph is misleading",
                "An increase of $25000 occurs Each year",
                "The visualization accurately depict the housing prices shown in the table"
            ],
            "a": [
                false,
                false,
                true
            ]
        },
        {
            "id": 18,
            "type": "MCQ",
            "q": "How do you update a PivotTable after changing some values in its source data range?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "It updates automatically almost immediately",
                "You must click the Refresh button in the Data or PivotTable Analyze tab",
                "You must save and close the workbook",
                "You must delete and recreate the PivotTable"
            ],
            "a": 1
        },
        {
            "id": 19,
            "type": "MCQ",
            "q": "You are reviewing a database of restaurant menu items. The table below shows a selection of the data. You need to display only items on the Dessert menu With a Type of Cake. What should you do to nondestructively limit the data display?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "img": "restaurant_menu_dataset.png",
            "options": [
                "Group the data by Menu and then group data on the Dessert menu by Type",
                "Delete all data that has a Menu other than Dessert. Then delete all data that has a Type other than Cake.",
                "Sort the data by Menu and within each Menu, sort by Type.",
                "Add two slicers, one for Menu and one for Type. Set the Menu slicer to Dessert and the Type slicer to Cake."
            ],
            "a": 3
        },
        {
            "id": 20,
            "type": "MCQ2",
            "q": "You need to create a data view based on aggregations for further visual analysis. Your data includes sales information for the past five years for food products at your company's stores. Each product belongs to one category. For example, milk belongs to the Dairy category<br><br> The data view must meet the following requirements:<br> * Include all products and their associated categories.<br> * Include sales subtotals for each category and year. <br> * Display a grand total of sales for each category.<br> * Create a summary of each category for every year.<br><br>Which <strong>two</strong> aggregation method should you use to create the data view (choose 2)<br><span style='font-size: 13px; color: #64748b;'>1 point</span><br><br><span style='font-size: 15px; font-style: italic;'>Note : You will receive partial credit for each correct selection</span>",
            "options": [
                "Filtering",
                "Pivoting",
                "Merging",
                "Grouping"
            ],
            "a": [
                1,
                3
            ]
        },
        {
            "id": 21,
            "type": "MCQ",
            "q": "You need to find the total revenue for each sales region in a large dataset. Which summary function should you choose in the Value Field Settings of your PivotTable?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Average",
                "Max",
                "Count",
                "Sum"
            ],
            "a": 3
        },
        {
            "id": 22,
            "type": "MCQ",
            "q": "You are analyzing sales that occurs on a national holiday. What level of data granularity will enable you to perform the most precise analysis?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Years",
                "Days",
                "Months",
                "Weeks",
                "Hours"
            ],
            "a": 4
        },
        {
            "id": 23,
            "type": "MCQ2",
            "q": "A coworker is having trouble joining two database tables, TableA and TableB, that were imported from CSV files. They say the tables have no common values.<br><br>You need to troubleshoot the problem. You look at the data in the original CSV files and find that the RowKey values in the TableA file and the RowID values in the TableB file look identical. Both have three numbers followed by a dash (-) and two letters.<br><br>Which two actions should you complete next? (Choose 2.)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span><br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Visually compare the database values to the CSV values.",
                "Trim empty spaces from only the right side of the valid characters",
                "Verify that the data in the database was imported as a numeric data type",
                "Trim empty spaces from both Sides of the valid characters."
            ],
            "a": [
                0,
                1
            ]
        },
        {
            "id": 24,
            "type": "MCQ",
            "q": "A conduct of study identify how many people exercise daily. You recruit all the study participants at gyms. Which types of bias are you demonstrating?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Anchoring bias",
                "Motivated reasoning",
                "Confirmation bias",
                "Sampling bias"
            ],
            "a": 2
        },
        {
            "id": 25,
            "type": "MCQ",
            "q": "What is metadata?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "The text content of a message",
                "Numerical facts",
                "Statistics",
                "The context that give data meaning"
            ],
            "a": 3
        },
        {
            "id": 26,
            "type": "MCQ",
            "q": "You work for a recreational sports company. The table shows the company's recreational vehicle sales. You need to show how each vehicle type contributes to the company's total sales.<br><br> Which visualization should you use? Select the correct visualization in the answer area.<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "img": "recreational_sales_table.png",
            "options": [
                "Option B",
                "Option C",
                "Option A",
                "Option D"
            ],
            "optionImages": [
                "recreational_pie_chart.png",
                "recreational_combo_chart.png",
                "recreational_scatter_plot.png",
                "recreational_bar_chart.png"
            ],
            "a": 2
        },
        {
            "id": 27,
            "type": "MCQ",
            "q": "You have a dataset that includes product review scores and demographic information about the reviewers_ There are no subcategories associated with the demographic answers, The table shows a selection of the data, Which scenario is an example of disaggregating the dataset?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "img": "disaggregation_dataset_v4.png",
            "options": [
                "Display a list of ethnicities that are included in the Other option.",
                "Display average and mode of the scores for each product grouped by the ethnicity of the reviewers.",
                "Display the overall average and mode of all scores on a PW-product basis.",
                "Display the overall average and mode of all scores and a count of all reviews."
            ],
            "a": 0
        },
        {
            "id": 28,
            "type": "MCQ",
            "q": "A colleague shows you the chart below to indicate that Group A has performed significantly better than Group B on a recent assignment. You do not know the sample size or the results of statistical testing. Which chart element creates the impression Of a significant score difference?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "img": "q19_misleading_chart.png",
            "options": [
                "The x-axis units of measurement",
                "The z-axis units of measurement",
                "The y-axis units of measurement",
                "The color differentiation"
            ],
            "a": 2
        },
        {
            "type": "DND_PIVOT",
            "q": "You are performing descriptive analytics on quarterly sales data. Move the appropriate statistical metrics from the list on the left to the correct locations on the right. You may use each metric once, more than once, or not at all.<br><br><table style='width:100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; text-align: center;'><thead><tr style='background: #f1f5f9; color: #1e293b; font-weight: 800;'><th style='padding: 10px; border: 1px solid #e2e8f0;'>Region</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 1</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 2</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 3</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 4</th></tr></thead><tbody><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>North</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>25000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>50000</td></tr><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>South</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>45000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>East</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>32500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>41000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>52500</td></tr><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>West</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>34500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>42500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 1</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>129500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>137500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>163500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>212500</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 2</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>45000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>42500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 3</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>25000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>50000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 4</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 5</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>32375</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>34375</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40875</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>53125</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 6</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>34750</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>31250</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>53750</td></tr></tbody></table><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct response.</span><br><span style='font-size: 13px; color: #64748b;'>6 points</span>",
            "poolHeader": "Statistical metrics",
            "targetHeader": "Answer area",
            "options": [
                "Metric 1",
                "Metric 2",
                "Metric 3",
                "Metric 4",
                "Metric 5",
                "Metric 6"
            ],
            "labels": [
                "Average",
                "Max",
                "Median",
                "Mode",
                "Sum",
                "Min"
            ],
            "a": {
                "Metric 1": "Sum",
                "Metric 2": "Max",
                "Metric 3": "Min",
                "Metric 4": "Mode",
                "Metric 5": "Average",
                "Metric 6": "Median"
            },
            "id": 29
        },
        {
            "id": 30,
            "type": "MCQ",
            "q": "A popular social media site records and count clicks, likes, and dislikes, and other user interactions<br><br>What type of data is collected?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Qualitative Data",
                "Continuous data",
                "Big Data",
                "Imputed Data"
            ],
            "a": 2
        },
        {
            "id": 31,
            "type": "MCQ",
            "q": "You are analyzing sales that occurs on a national holiday.<br>What level of data granularity will enable you to perform the most precise analysis?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Days",
                "Months",
                "Hours",
                "Years",
                "Weeks"
            ],
            "a": 2
        },
        {
            "id": 32,
            "type": "MCQ",
            "q": "You have a small dataset that contains personally identifiable information (PII). You need to provide the data to an outside source for additional processing. What could you do to protect the Pll but still allow you to eventually relate the additional analysis to your original data?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Employ pseudonymization on the Pll and use the pseudonym as the key between the new and original datasets.",
                "Remove every instance of Pll in the original dataset and add them back after the new dataset is retrieved.",
                "Retain every text-based Pll in the original dataset but convert them to number-based features in the new dataset.",
                "Randomly shuffle the original dataset so that each given piece of Pll is no longer associated. with a particular user"
            ],
            "a": 0
        },
        {
            "id": 33,
            "type": "MCQ",
            "q": "The marketing team want to know which market segment had the highest sales last year. Which type of data analytics should they use?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Prescriptive analytics",
                "Predictive analytics",
                "Diagnostic analytics",
                "Descriptive analytics"
            ],
            "a": 3
        },
        {
            "id": 34,
            "type": "MTF",
            "marks": 4,
            "q": "You are using data analytics to help answer business questions about a new product your company released. Move each type of data analytics from the list on the left to the correct question on the right.<br><span style='font-size: 13px; color: #64748b;'>4 points</span><br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "Descriptive Analytics",
                "Diagnostic Analytics",
                "Predictive Analytics",
                "Prescriptive Analytics"
            ],
            "labels": [
                "Why did this happen?",
                "What action should we take next?",
                "What might happen in the future?",
                "What happened in the initial product release?"
            ],
            "a": {
                "Descriptive Analytics": "What happened in the initial product release?",
                "Diagnostic Analytics": "Why did this happen?",
                "Predictive Analytics": "What might happen in the future?",
                "Prescriptive Analytics": "What action should we take next?"
            }
        },
        {
            "id": 35,
            "type": "MCQ",
            "q": "What concept allow analytics to drill down into data and examine level of information that maybe crucial in diagnostic analytics?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Completeness",
                "Interpretability",
                "Granularity",
                "Transparency"
            ],
            "a": 2
        },
        {
            "id": 36,
            "type": "MCQ2",
            "q": "Each month, you need to automatically transform the data from two XML documents into a single flat file with columns and rows that Excel can open and interpret. The document names and structure remain constant. You know the relationships between the two XML documents.<br><br>Which two resources can you use? (Choose 2.)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each Correct selection.</span><br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Python",
                "Microsoft Word",
                "Power Query for Excel (M)",
                "JSON"
            ],
            "a": [
                0,
                2
            ]
        },
        {
            "id": 37,
            "type": "MCQ2",
            "q": "A coworker is having trouble joining two database tables, TableA and TableB, that were imported from CSV files. They say the tables have no common values.<br><br>You need to troubleshoot the problem. You look at the data in the original CSV files and find that the RowKey values in the TableA file and the RowID values in the TableB file look identical. Both have three numbers followed by a dash (-) and two letters.<br><br>Which two actions should you complete next? (Choose 2.)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span><br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Visually compare the database values to the CSV values.",
                "Trim empty spaces from only the right side of the valid characters",
                "Verify that the data in the database was imported as a numeric data type",
                "Trim empty spaces from both Sides of the valid characters."
            ],
            "a": [
                0,
                1
            ]
        },
        {
            "id": 38,
            "type": "MCQ",
            "q": "You run a t-test with an alpha value of 5% (α = 0.05) in order to test an alternative hypothesis (H₁). You finish the analysis and discover that the p-value is 0.017. What can you conclude about the null hypothesis (H₀)?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "You modify the null hypothesis (H₀)",
                "You accept the null hypothesis (H₀)",
                "You reject the null hypothesis (H₀)",
                "You Fail to reject the null hypothesis (H₀)"
            ],
            "a": 2
        },
        {
            "id": 39,
            "type": "MCQ",
            "q": "The data structure has multiple rows and multiple column<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Table",
                "One-dimensional array",
                "List",
                "Series"
            ],
            "a": 0
        },
        {
            "id": 40,
            "type": "MCQ2",
            "q": "For which two reason is risky to make generalization from limited sample data?<br><span style='font-size: 13px; color: #64748b;'>2 points</span>",
            "options": [
                "Findings from a smaller sample size may not be as precise",
                "Analyzing data from a smaller sample size is faster",
                "A limited sample may not represent a larger population",
                "Limited data samples are easier to collect."
            ],
            "a": [
                0,
                2
            ]
        }
    ],
    "da_mock3": [
        {
            "id": 1,
            "type": "TF",
            "q": "For each statement about data mining, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Data mining is used to find anomalies",
                "Data mining is used to summarize raw data from large data sets",
                "Data mining is used to review underlying details in a given table"
            ],
            "a": [
                true,
                true,
                false
            ],
            "marks": 2
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "You have been given a large data set that includes location , income , and age. why should you disaggregate the data ?",
            "options": [
                "To hide difference among subgroups",
                "To combine data sets and present a summary of your findings",
                "To form generalization about the entire data set",
                "To analyze income within different age groups or locations"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 3,
            "type": "MCQ",
            "q": "For which scenario should you use a line chart to represent the data",
            "options": [
                "The weekly average stock price during a one-year period",
                "The proportion of yes and no answer to a survey question",
                "The binned distribution for the height of different students",
                "The maximum, minimum, and average value for a set of data"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 4,
            "type": "TF",
            "q": "For each statement about data organization, select True or False<br><br><span style='font-size: 15px; font-style: italic;'>Note : You will receive partial credit for each correct selection</span>",
            "options": [
                "Slicer can be used to filter the data",
                "Sorts can be used to display a subset of data",
                "Filter can be used to display a subset of data"
            ],
            "a": [
                true,
                false,
                true
            ],
            "marks": 2
        },
        {
            "id": 5,
            "type": "MCQ2",
            "q": "Which two chart types should you use to rank values in ascending or descending order ? (choose 2)<br><br><span style='font-size: 15px; font-style: italic;'>Note : You will receive partial credit for each correct selection</span>",
            "options": [
                "Bar chart",
                "Column chart",
                "Line chart",
                "Bubble chart"
            ],
            "a": [
                0,
                1
            ],
            "marks": 2
        },
        {
            "id": 6,
            "type": "TF",
            "q": "You have a data set of 100,000 rows. The data values fall within a standard range. The data has been cleaned to remove outliers. Approximately 100 rows of the data set contain NULL values in a numeric data column. You need to determine a best practice for handling the NULL values.<br><br>For each statement about handling NULL, select <strong>Yes</strong> if it is a best practice or <strong>No</strong> if it is not.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Remove the row that contains Null values",
                "Remove each Null value with a random value",
                "Use a statistic such as average to account for the Null values"
            ],
            "a": [
                false,
                false,
                true
            ],
            "marks": 2
        },
        {
            "id": 7,
            "type": "MTF",
            "q": "Your marketing department attends a variety of events each year and distributes promotional items to event participants. The table below shows the quantity distributed of each promotional item.<br><br><table style='width:100%; border-collapse: collapse; margin: 15px 0; font-size: 13px; text-align: center;'><thead><tr style='background: #f1f5f9;'><th style='padding: 8px; border: 1px solid #cbd5e1;'>Promotional item</th><th style='padding: 8px; border: 1px solid #cbd5e1;'>Quantity Distributed</th></tr></thead><tbody><tr><td style='padding:6px; border:1px solid #cbd5e1;'>T-shirt</td><td style='padding:6px; border:1px solid #cbd5e1;'>600</td></tr><tr><td style='padding:6px; border:1px solid #cbd5e1;'>Shuffled Animal</td><td style='padding:6px; border:1px solid #cbd5e1;'>425</td></tr><tr><td style='padding:6px; border:1px solid #cbd5e1;'>Drinkware</td><td style='padding:6px; border:1px solid #cbd5e1;'>550</td></tr><tr><td style='padding:6px; border:1px solid #cbd5e1;'>Backpacks</td><td style='padding:6px; border:1px solid #cbd5e1;'>100</td></tr><tr><td style='padding:6px; border:1px solid #cbd5e1;'>Blankets</td><td style='padding:6px; border:1px solid #cbd5e1;'>55</td></tr><tr><td style='padding:6px; border:1px solid #cbd5e1;'>Magnets</td><td style='padding:6px; border:1px solid #cbd5e1;'>250</td></tr><tr><td style='padding:6px; border:1px solid #cbd5e1;'>Gift cards</td><td style='padding:6px; border:1px solid #cbd5e1;'>50</td></tr><tr><td style='padding:6px; border:1px solid #cbd5e1;'>Candy</td><td style='padding:6px; border:1px solid #cbd5e1;'>500</td></tr><tr><td style='padding:6px; border:1px solid #cbd5e1;'>Notebooks</td><td style='padding:6px; border:1px solid #cbd5e1;'>450</td></tr></tbody></table><br>You are performing analysis on the data. Complete the sentence about the data organization by selecting the correct option from each drop-down list.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Can arrange distributed items from highest to lowest",
                "Can limit the display of distributed items to greater than 500",
                "Can limit the display of promotional items to shuffled animals and T-shirt"
            ],
            "labels": [
                "Appending",
                "Filtering",
                "Sorting",
                "Truncating",
                "Transporting",
                "Slicing"
            ],
            "a": {
                "Can arrange distributed items from highest to lowest": "Sorting",
                "Can limit the display of distributed items to greater than 500": "Filtering",
                "Can limit the display of promotional items to shuffled animals and T-shirt": "Slicing"
            },
            "marks": 2
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "You are given a data set displaying the time of day and number of minutes customers waited in line for service. You need to remove bias from the results eliminating outliers.<br><br>Which visualization illustrates outliers in your dataset?<br>Select the correct Visualization in the answer area.",
            "options": [
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4"
            ],
            "optionImages": [
                "v3_q11_opt1.png",
                "v3_q11_opt2.png",
                "v3_q11_opt3.png",
                "v3_q11_opt4.png"
            ],
            "a": 3,
            "marks": 1
        },
        {
            "id": 9,
            "type": "MCQ",
            "q": "You create the column chart below, which shows sales for different years. Management asks for a way to see demographic information associated with the individual sales records for each year.<br><br>You decide to create tables for each year that show the demographic information for the sales in that year. When someone clicks, the associated table will open.<br><br>Which reporting technique does this represent?",
            "img": "sales_by_year_column.png",
            "options": [
                "Disaggregating",
                "Unpivoting",
                "Pivoting",
                "Distributing"
            ],
            "a": 0,
            "marks": 1
        },
        {
            "id": 10,
            "type": "MTF",
            "q": "Match the type of data analysis on the left to the analysis question it answers on the right. You may use each item once or not at all.<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct response.</span>",
            "options": [
                "What happened?",
                "Why did it happen?",
                "What should we do next?",
                "Is there enough evidence to draw conclusion?"
            ],
            "labels": [
                "Descriptive analysis",
                "Diagnostic analysis",
                "Predictive analysis",
                "Prescriptive analysis",
                "Hypothesis Testing"
            ],
            "a": {
                "What happened?": "Descriptive analysis",
                "Why did it happen?": "Diagnostic analysis",
                "What should we do next?": "Prescriptive analysis",
                "Is there enough evidence to draw conclusion?": "Hypothesis Testing"
            },
            "marks": 2
        },
        {
            "id": 11,
            "type": "MCQ",
            "q": "Which data type results from processing conditional statement?",
            "options": [
                "Boolean",
                "Integer",
                "character",
                "String"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 12,
            "type": "MCQ",
            "q": "What type of data is too complex to be sorted in traditional data base management system (DBMS)?",
            "options": [
                "Imputed data",
                "Metadata",
                "Qualitative data",
                "Big data"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 13,
            "type": "MCQ",
            "q": "Which data type is appropriate for a phone number using the format (###) ### - ###-####?",
            "options": [
                "Numeric",
                "String",
                "Boolean",
                "Binary"
            ],
            "a": 1,
            "marks": 2
        },
        {
            "id": 14,
            "type": "MCQ2",
            "q": "In the United state and Europe which two data points are considered non-sensitive PII(personal identifiable information)? (choose 2)<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Bank account number",
                "Medical records",
                "Date of birth",
                "Job title"
            ],
            "a": [
                2,
                3
            ],
            "marks": 2
        },
        {
            "id": 15,
            "type": "MCQ",
            "q": "What is an example of machine learning in predictive analysis?",
            "options": [
                "Your thermostat adjusts to a higher temperature because you programmed it based on the time of day",
                "Your streaming service suggests a category Of movies based on the last ten movies you watched.",
                "Your vehicle turns on a warning sensor because one of its components requires maintenance.",
                "Your computer automatically goes into sleep mode because the battery has less than ten pecent power."
            ],
            "a": 1,
            "marks": 2
        },
        {
            "id": 16,
            "type": "MCQ",
            "q": "How is an unstructured data set different from structured data set",
            "options": [
                "An unstructured data set can be quickly searched without manipulation.",
                "The data organization of an unstructured data set is explicitly defined",
                "An unstructured data set has a predefined data model.",
                "An unstructured data set can store large amounts of unrelated data."
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 17,
            "type": "MCQ3",
            "q": "You are tasked with completing a data analysis project for a large organization. During the project, you must handle personally identifiable information (PII)<br><br>Throughout the project which three principle should you follow? (Choose 3)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Limit your handling of the PII to only what is necessary for the current analysis.",
                "Remove all PII from your computer after the analysis is complete",
                "Retain only the PII that you might need for future analysis.",
                "Request all data from the database that contains the POI.",
                "Keep track of the PII that you have during the analysis."
            ],
            "a": [
                0,
                1,
                4
            ],
            "marks": 2
        },
        {
            "id": 18,
            "type": "MCQ",
            "q": "You will be analyzing sales and determining trends based on a very large dataset that includes the following columns:<br><ul><li>CustomerName</li><li>CustomerEmail</li><li>Birthdate</li><li>FirstPurchaseDate</li><li>MostRecentPurchaseDate</li><li>TotalQuantityPurchased</li><li>TotalsalesAmount</li></ul>You need to validate the data before you start analysis.<br>What should you do?",
            "options": [
                "Analyze firstPurchaseDates to determine purchasing trends",
                "Calculate statistics TotalQuantityPurchased",
                "Verify date ranges and value for all dates column",
                "Create aggregation of all new column"
            ],
            "a": 2,
            "marks": 2
        },
        {
            "id": 19,
            "type": "MCQ",
            "q": "Which concept most comprehensively describe the general meaning of data in the context of data analytics?",
            "options": [
                "Unprocessed data",
                "Interpreted evidence",
                "Meaningful statistics",
                "Analyzed details"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 20,
            "type": "MCQ",
            "q": "A data scientist at your company creates a machine learning model to help the hiring manager select candidates from thousands of job applicants. Which statement best describes how machine learning is used in this scenario?",
            "options": [
                "A machine learning model defines the qualifications necessary for a given job or role",
                "The machine learning model uses historical data and algorithm to predict future applicant performance",
                "The machine learning system coverts applicant information into a common format",
                "The hiring manager queries the machine learning database for qualified applicant"
            ],
            "a": 1,
            "marks": 2
        },
        {
            "id": 21,
            "type": "MCQ",
            "q": "You want to know whether there is significant difference between the average test scores of male and female students in the same class. You check that the data is approximately normally distributed for each group has similar variance.<br><br>How would you decide whether the difference in the test score between male and female students is significant?",
            "options": [
                "Perform a t-test using the means and variance for male and female students and if p-value is greater than 0.05 decide that the difference is significant.",
                "Perform a t-test using the medians and variance for male and female students and if p-value is less than 0.05 decide that the difference is significant.",
                "Perform a t-test using the medians and variance for male and female students and if p-value is greater than 0.05 decide that the difference is significant.",
                "Perform a t-test using the means and variance for male and female students and if p-value is less than 0.05 decide that the difference is significant."
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 22,
            "type": "MCQ",
            "q": "Which sentence most accurately describes the relationship between data and statistics?",
            "options": [
                "All statistics are data, but not all data are statistics",
                "All data are statistics but not all statistics are data",
                "Data and statistics are both purely quantitative in nature",
                "Data and statistics are both purely qualitative in nature"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 23,
            "type": "MCQ",
            "q": "You are responsible for e-commerce sales at your company. You need to present the quarterly data shown in the table to upper management using the most accurate unbiased visualization.<br><br>Which visualization should you choose?<br>Select the correct visualization in the answer area.",
            "img": "quarterly_sales_table.png",
            "options": [
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4"
            ],
            "optionImages": [
                "v3_q21_opt1.png",
                "v3_q21_opt2.png",
                "v3_q21_opt3.png",
                "v3_q21_opt4.png"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 24,
            "type": "MCQ",
            "q": "As part of an ETL process, which process represents transformation?",
            "options": [
                "Changing data from summary level to detailed level",
                "Converting data from one data type to another data type or structure",
                "Retrieving data from many sources into a single destination",
                "Importing a percentage of row from the source data"
            ],
            "a": 1,
            "marks": 2
        },
        {
            "id": 25,
            "type": "MCQ",
            "q": "You need to compare three (3) values of each data point in a series which data type should you use?",
            "options": [
                "Bubble chart",
                "Area chart",
                "Scatter chart",
                "Waterfall chart"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 26,
            "type": "MCQ",
            "q": "The visualization below displays sales data for two salespeople. A conclusion indicates that Salesperson 1 has a higher lead to sale rate than salesperson 2.<br><br>(A lead to sales rate is the number of actual sales divided by the number of attempted sales)<br><br>You need to determine the accuracy of this conclusion. What should you conclude?",
            "img": "sales_lead_comparison.png",
            "options": [
                "The conclusion is accurate",
                "The conclusion is inaccurate because the visualization is missing sales and lead data",
                "The conclusion is inaccurate because the visualization uses size manipulation",
                "The conclusion is inaccurate because the visualization uses scale manipulation"
            ],
            "a": 1,
            "marks": 2
        },
        {
            "id": 27,
            "type": "MCQ",
            "q": "You ran a t-test with an alpha value of 1% (a=0.01) which p-value would cause you to reject the null hypothesis?",
            "options": [
                "0.001",
                "0.011",
                "0.09",
                "0.10"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 28,
            "type": "MCQ",
            "q": "A group of students asked about their favorite flavor of ice cream the pie chart below illustrate the proportion of each response. What can you conclude from the visualization about below about ice cream preference for this group of students?",
            "img": "ice_cream_pie_chart.png",
            "options": [
                "The fewest students chose strawberry",
                "The most students chose vanilla",
                "The most students chose strawberry",
                "Fewest students chose chocolate"
            ],
            "a": 2,
            "marks": 2
        },
        {
            "id": 29,
            "type": "MCQ",
            "q": "You are preparing to export data from a database to a flat file to be used by another system. Each field in the file should be separated by a comma You notice that the data in several columns includes commas. You decide to enclose the values in each of these columns in double quotes (\"). What feature of delimited files defines enclosing column data in double quotes?",
            "options": [
                "Column delimiter",
                "Row delimiter",
                "Data formatter",
                "Text qualifier"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 30,
            "type": "MCQ3",
            "q": "A domestic flight company wants to forecast flight delays and cancellations to provide the best experience to their customers Which three approaches would a data scientist use for this task? (Choose 3) Note. You will receive partial credit for each correct selection",
            "options": [
                "Using structured data",
                "Building predictive analysis models using machine learning",
                "Using only current local weather",
                "Proposing when a flight might be delayed without using data mining",
                "Using unstructured date"
            ],
            "a": [
                0,
                1,
                4
            ],
            "marks": 2
        },
        {
            "id": 31,
            "type": "MTF",
            "q": "You are a data analytics auditor for a large public company. You need to categorize the four data descriptions to the category of data it represents. You will receive partial credit for each correct match.",
            "options": [
                "An archive called 'Spring Sales Campaign' that contains svg documents, retouched images and the company style guide as pdf file",
                "SQL database with calendar-year sales data",
                "Results of a company-wide survey measuring feelings about the company's direction and future outlook",
                "Information about the writer of each knowledge-base article and when it was last revised"
            ],
            "labels": [
                "Qualitative Data",
                "Unstructured Data",
                "Metadata",
                "Structured Data"
            ],
            "a": {
                "An archive called 'Spring Sales Campaign' that contains svg documents, retouched images and the company style guide as pdf file": "Unstructured Data",
                "SQL database with calendar-year sales data": "Structured Data",
                "Results of a company-wide survey measuring feelings about the company's direction and future outlook": "Qualitative Data",
                "Information about the writer of each knowledge-base article and when it was last revised": "Metadata"
            },
            "marks": 4
        },
        {
            "id": 32,
            "type": "MCQ",
            "q": "You are preparing a dataset for analysis and notice that several categorical values have inconsistent capitalization (e.g., \"Red\", \"red\", \"RED\"). Which data transformation should you apply to ensure consistent analysis?",
            "options": [
                "Remove all rows with inconsistent capitalization.",
                "Convert all values in the column to lowercase or uppercase.",
                "Use a filter to only include \"Red\".",
                "Add a new column with random values."
            ],
            "a": 1,
            "marks": 2
        },
        {
            "id": 33,
            "type": "MTF",
            "q": "You are a data analyst for a healthcare provider. You are designing a solution that must meet these requirements<br><br>* Medical records must not be readable by unauthorized staff.<br>* Patient names must be converted to cartoon character names.<br>* However, doctors must be able to associate the cartoon names to the actual patient when providing health care<br>* Statisticians must be able to access healthcare visits but only be able to refer to patients as their cartoon character nam<br><br>Choose the correct option from each drop down list<br>Note: You will receive partial credit for each correct answeres",
            "options": [
                "Medical records must not be readable by unauthorized staff.",
                "Patient names converted to cartoon character names (reversible for doctors)",
                "Statisticians only refer to patients as cartoon character names"
            ],
            "labels": [
                "Encryption",
                "Anonymization",
                "Pseudonymization"
            ],
            "a": {
                "Medical records must not be readable by unauthorized staff.": "Encryption",
                "Patient names converted to cartoon character names (reversible for doctors)": "Pseudonymization",
                "Statisticians only refer to patients as cartoon character names": "Pseudonymization"
            },
            "marks": 3
        },
        {
            "id": 34,
            "type": "MCQ",
            "q": "You are analyzing sales that occurs on a national holiday. What level of data granularity will enable you to perform the most precise analysis?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Years",
                "Months",
                "Weeks",
                "Days",
                "Hours"
            ],
            "a": 4,
            "marks": 2
        },
        {
            "id": 35,
            "type": "MCQ2",
            "q": "A coworker is having trouble joining two database tables, TableA and TableB, that were imported from CSV files. They say the tables have no common values.<br><br>You need to troubleshoot the problem. You look at the data in the original CSV files and find that the RowKey values in the TableA file and the RowID values in the TableB file look identical. Both have three numbers followed by a dash (-) and two letters.<br><br>Which two actions should you complete next? (Choose 2.)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span><br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Visually compare the database values to the CSV values.",
                "Trim empty spaces from only the right side of the valid characters",
                "Verify that the data in the database was imported as a numeric data type",
                "Trim empty spaces from both Sides of the valid characters."
            ],
            "a": [
                0,
                1
            ],
            "marks": 2
        },
        {
            "id": 36,
            "type": "MCQ",
            "q": "What is metadata?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Statistics",
                "The text content of a message",
                "Numerical facts",
                "The context that give data meaning"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 37,
            "type": "TF",
            "q": "The visualization and data table depict housing price in a region. For each statement about the visualization, select True or False.<br><span style='font-size: 13px; color: #64748b;'>1 point</span><br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection</span>",
            "img": "housing_prices_color_final.png",
            "options": [
                "The visualization accurately depict the housing prices shown in the table",
                "The scaling of the graph is misleading",
                "An increase of $25000 occurs Each year"
            ],
            "a": [
                true,
                false,
                false
            ],
            "marks": 2
        },
        {
            "id": 38,
            "type": "MCQ",
            "q": "Person A has 5 coins and person B has 10 coins.<br><br>Which type of data does the number of coins represent?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Qualitative data",
                "Quantitative data",
                "Ordinal data",
                "Metadata"
            ],
            "a": 1,
            "marks": 2
        },
        {
            "id": 39,
            "type": "MCQ",
            "q": "Which data structure describes the following data<br><br><div class='code-snippet' style='margin:0;'>[\"Aabid\",\"jesenia\",\"Mark\"]</div><br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Graph",
                "Table",
                "List",
                "Multi-dimensional array"
            ],
            "a": 2,
            "marks": 2
        },
        {
            "id": 40,
            "type": "MCQ",
            "q": "A popular social media site records and count clicks, likes, and dislikes, and other user interactions<br><br>What type of data is collected?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Continuous data",
                "Imputed Data",
                "Qualitative Data",
                "Big Data"
            ],
            "a": 3,
            "marks": 2
        }
    ],
    "data_mod4": [
        {
            "id": 1,
            "marks": 1,
            "type": "MCQ",
            "q": "You are responsible for e-commerce sales at your company. You need to present the quarterly data shown in the table to upper management using the most accurate unbiased visualization.<br><br>Which visualization should you choose?<br>Select the correct visualization in the answer area. (1 Mark)",
            "img": "quarterly_sales_table.png",
            "optionImages": [
                "v3_q21_opt1.png",
                "v3_q21_opt2.png",
                "v3_q21_opt3.png",
                "v3_q21_opt4.png"
            ],
            "options": [
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4"
            ],
            "a": 0
        }
    ]
};
