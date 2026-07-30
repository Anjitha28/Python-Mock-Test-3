var dataQuizData = {
    "data1": [
        {
            "id": 1,
            "marks": 2,
            "type": "MCQ",
            "q": "A popular social media site records and count clicks, likes, and dislikes, and other user interactions. What type of data is collected? (2 Marks)",
            "options": [
                "Big Data",
                "Imputed Data",
                "Qualitative Data",
                "Continuous data"
            ],
            "a": 0
        },
        {
            "id": 2,
            "marks": 2,
            "type": "MCQ",
            "q": "What is raw data? (2 Marks)",
            "options": [
                "Visualized Data",
                "Unprocessed Data",
                "Summarized Data",
                "Purely numerical Data"
            ],
            "a": 1
        },
        {
            "id": 3,
            "marks": 6,
            "type": "DND_PIVOT",
            "q": "You are performing descriptive analytics on quarterly sales data. Move the appropriate statistical metrics from the list on the left to the correct locations on the right. You may use each metric once, more than once, or not at all.<br><br><table style='width:100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; text-align: center;'><thead><tr style='background: #f1f5f9; color: #1e293b; font-weight: 800;'><th style='padding: 10px; border: 1px solid #e2e8f0;'>Region</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 1</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 2</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 3</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 4</th></tr></thead><tbody><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>North</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>25000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>50000</td></tr><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>South</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>45000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>East</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>32500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>41000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>52500</td></tr><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>West</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>34500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>42500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 1</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>129500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>137500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>163500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>212500</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 2</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>45000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>42500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 3</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>25000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>50000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 4</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 5</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>32375</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>34375</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40875</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>53125</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 6</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>34750</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>31250</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>53750</td></tr></tbody></table><br><span style='font-size:15px; font-style:italic;'>Note: You will receive partial credit for each correct response.</span><br><span style='font-size: 13px; color: #64748b;'>6 points</span>",
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
            "id": 4,
            "marks": 2,
            "type": "MCQ",
            "q": "Person A has 5 coins and person B has 10 coins.<br><br>Which type of data does the number of coins represents? (2 Marks)",
            "options": [
                "Metadata",
                "Quantitative data",
                "Ordinal Data",
                "Qualitative data"
            ],
            "a": 1
        },
        {
            "id": 5,
            "marks": 1,
            "type": "MCQ",
            "q": "What is metadata? (1 Mark)",
            "options": [
                "The text content of a message",
                "Numerical facts",
                "Statistics",
                "The context that give data meaning"
            ],
            "a": 3
        },
        {
            "id": 6,
            "marks": 4,
            "type": "MTF",
            "q": "Move each function from the list on the left to the correct description on the right.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct response.</span> (4 Marks)",
            "options": [
                "Returns the largest value",
                "Returns the smallest value",
                "Returns the number of Values",
                "Returns the total of the values"
            ],
            "labels": [
                "Count()",
                "Max()",
                "Min()",
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
            "id": 7,
            "marks": 1,
            "type": "MCQ",
            "q": "Which data type can store a phrase or sentence? (1 Mark)",
            "options": [
                "String",
                "Boolean",
                "Integer",
                "Character"
            ],
            "a": 0
        },
        {
            "id": 8,
            "marks": 1,
            "type": "MCQ",
            "q": "Which Data structure have multiple rows and columns? (1 Mark)",
            "options": [
                "List",
                "One-dimensional Array",
                "Table",
                "Series"
            ],
            "a": 2
        },
        {
            "id": 9,
            "marks": 2,
            "type": "MCQ",
            "q": "Which data structure describes the following data?<br><br><code>[\"Aabid\", \"jesenia\", \"Mark\"]</code> (2 Marks)",
            "options": [
                "Table",
                "List",
                "Multi-dimensional array",
                "Graph"
            ],
            "a": 1
        },
        {
            "id": 10,
            "marks": 4,
            "type": "DROPDOWN",
            "q": "You are analyzing customer satisfaction scores between online purchases and in-store purchases. Satisfaction scores are entered on a scale from 1 (extremely unsatisfied) to 10 (extremely satisfied).<br><br>Select the correct metric from the drop-down list for each statement.<br><br>The most frequent satisfaction score was 5 for online customers and 9 for in-store customers: [b1]<br><br>The average score for online customers was 6.4 and the average score for in-store customers was 7.0: [b2]<br><br>The score at the midpoint between the lowest and the highest scores was 6 for online customers and 7 for in-store customers: [b3]<br><br>The online scores vary from the average by 2.3 and the in-store variance is 1.9: [b4]<br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span> (4 Marks)",
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
        }
    ],
    "data2": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "What concept allows analysts to drill down into data and examine different levels of information that may be crucial in diagnostic analytics?",
            "options": [
                "Granularity",
                "Transparency",
                "Interpretability",
                "Completeness"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "What does the 'L' stand for in the data management process known as ETL?",
            "options": [
                "List",
                "Link",
                "Label",
                "Load"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 3,
            "type": "SHORT",
            "q": "A file named <strong>courses data</strong> contains the following content:<br><br><pre>Title|Number|Hours\nAlgebra|MT101|3\nHistory|HS201|3\nPhysics|PS302|4\nMusic|MS101|2\nArt|AR201|2</pre><br>You need to use Python to read the data from the file so that you can import it into a database file. Write the Python code to read the data from the file into a variable. (Assume the file is named <code>courses.csv</code>).",
            "regex": "^[a-z0-9_]+=[a-z0-9_]+\\.read_csv\\(['\"]?courses\\.csv['\"]?(.*?)\\)$",
            "a": "data = pd.read_csv('courses.csv', sep='|')",
            "marks": 2
        },
        {
            "id": 4,
            "type": "MCQ",
            "q": "Your company has summarized a large set for the region you live in. You need to compare the result from Urban and Rural communities within your region.<br><br>What is the fastest way to obtain this information?",
            "options": [
                "Review data from neighboring regions",
                "Aggregate the data",
                "Collect new data sample",
                "Disaggregate the data"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "Which of the following is a common task in data cleaning?",
            "options": [
                "Publishing the data to a public website",
                "Collecting new data through interviews",
                "Creating a pie chart of the data",
                "Removing duplicate rows from a dataset"
            ],
            "a": 3,
            "marks": 1
        },
        {
            "id": 6,
            "type": "MCQ2",
            "q": "You need to create a data view based on aggregations for further visual analysis. Your data includes sales information for the past five years for food products at your company's stores. Each product belongs to one category. For example, milk belongs to the Dairy category.<br><br>The data view must meet the following requirements:<br><ul><li>Include all products and their associated categories.</li><li>Include sales subtotals for each category and year.</li><li>Display a grand total of sales for each category.</li><li>Create a summary of each category for every year.</li></ul><br>Which two aggregation methods should you use to create the data view? (Choose 2)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection</span>",
            "options": [
                "Filtering",
                "Pivoting",
                "Merging",
                "Grouping"
            ],
            "a": [
                1,
                3
            ],
            "marks": 2
        },
        {
            "id": 7,
            "type": "MCQ",
            "q": "You have a dataset that includes product review scores and demographic information about the reviewers. There are no subcategories associated with the demographic answers. The table below shows a selection of the data.<br><br><table style='width:100%; border-collapse: collapse; margin: 15px 0; font-size: 13px; text-align: center;'><thead><tr style='background: #f1f5f9;'><th style='padding: 8px; border: 1px solid #cbd5e1;'>Product</th><th style='padding: 8px; border: 1px solid #cbd5e1;'>Review Score</th><th style='padding: 8px; border: 1px solid #cbd5e1;'>Review id</th><th style='padding: 8px; border: 1px solid #cbd5e1;'>Industry</th><th style='padding: 8px; border: 1px solid #cbd5e1;'>Ethnicity</th></tr></thead><tbody><tr><td>AX-150</td><td>74</td><td>123</td><td>Education</td><td>Asian</td></tr><tr><td>BK-330</td><td>82</td><td>124</td><td>Finance</td><td>Latino or Hispanic</td></tr><tr><td>BK-315</td><td>79</td><td>125</td><td>Health Care</td><td>Native Hawaiian...</td></tr><tr><td>CX-290</td><td>86</td><td>126</td><td>Other</td><td>African-American</td></tr><tr><td>BD-250</td><td>61</td><td>127</td><td>Finance</td><td>Other</td></tr><tr><td>CD-140</td><td>35</td><td>128</td><td>Food Services</td><td>Caucasian</td></tr><tr><td>AX-310</td><td>84</td><td>129</td><td>Education</td><td>Caucasian</td></tr></tbody></table><br>Which scenario is an example of <strong>disaggregating</strong> the dataset?",
            "options": [
                "Display the overall average and mode of all scores on a per-product basis",
                "Display the overall average and mode of all scores and a count of all reviews",
                "By average and mode of the scores for each product grouped by the ethnicity of the reviewers",
                "Display a list of ethnicities that are included in the other option"
            ],
            "a": 2,
            "marks": 2
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "Which area of a PivotTable should you use to create a vertical list of unique values from a specific field?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Filters",
                "Values",
                "Rows",
                "Columns"
            ],
            "a": 2,
            "marks": 1
        },
        {
            "id": 9,
            "type": "MCQ",
            "q": "The marketing team wants to know which market segment had the highest sales last year. Which type of data analytics should they use?",
            "options": [
                "Prescriptive analytics",
                "Predictive analytics",
                "Diagnostic analytics",
                "Descriptive analytics"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 10,
            "type": "MCQ2",
            "q": "Each month you need to automatically transform the data from two XML documents into a single flat file with columns and rows that excel can open and interpret. The document names and structure remain constant. You know the relationship between the two XML documents.<br><br>Which two resources can you use? (Choose 2)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection</span>",
            "options": [
                "Json",
                "Power Query for Excel (M)",
                "Microsoft Excel",
                "Python"
            ],
            "a": [
                1,
                3
            ],
            "marks": 2
        },
        {
            "id": 11,
            "type": "MCQ",
            "q": "What is an example of data cleaning?",
            "options": [
                "Arranging Excel data rows in an order that is easy for a user to read",
                "Adding quotation marks to the beginning and end of a tab-delimited file",
                "Ensuring that the data in a Word table uses a consistent font",
                "Removing non-printable characters from a comma-delimited file"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 12,
            "type": "MCQ",
            "q": "You need to find the total revenue for each sales region in a large dataset. Which summary function should you choose in the Value Field Settings of your PivotTable?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Sum",
                "Average",
                "Max",
                "Count"
            ],
            "a": 0,
            "marks": 1
        },
        {
            "id": 13,
            "type": "MTF",
            "q": "Your marketing department attends a variety of events each year and distributes promotional items to event participants. The table below shows the quantity distributed of each promotional item.<br><br><table style='width:100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; text-align: center;'><thead><tr style='background: #f1f5f9;'><th style='padding: 10px; border: 1px solid #cbd5e1;'>Promotional item</th><th style='padding: 10px; border: 1px solid #cbd5e1;'>Quantity Distributed</th></tr></thead><tbody><tr><td style='padding: 8px; border: 1px solid #cbd5e1;'>T-shirt</td><td style='padding: 8px; border: 1px solid #cbd5e1;'>600</td></tr><tr><td style='padding: 8px; border: 1px solid #cbd5e1;'>Shuffled Animal</td><td style='padding: 8px; border: 1px solid #cbd5e1;'>425</td></tr><tr><td style='padding: 8px; border: 1px solid #cbd5e1;'>Drinkware</td><td style='padding: 8px; border: 1px solid #cbd5e1;'>550</td></tr><tr><td style='padding: 8px; border: 1px solid #cbd5e1;'>Backpacks</td><td style='padding: 8px; border: 1px solid #cbd5e1;'>100</td></tr><tr><td style='padding: 8px; border: 1px solid #cbd5e1;'>Blankets</td><td style='padding: 8px; border: 1px solid #cbd5e1;'>55</td></tr><tr><td style='padding: 8px; border: 1px solid #cbd5e1;'>Magnets</td><td style='padding: 8px; border: 1px solid #cbd5e1;'>250</td></tr><tr><td style='padding: 8px; border: 1px solid #cbd5e1;'>Gift cards</td><td style='padding: 8px; border: 1px solid #cbd5e1;'>50</td></tr><tr><td style='padding: 8px; border: 1px solid #cbd5e1;'>Candy</td><td style='padding: 8px; border: 1px solid #cbd5e1;'>500</td></tr><tr><td style='padding: 8px; border: 1px solid #cbd5e1;'>Notebooks</td><td style='padding: 8px; border: 1px solid #cbd5e1;'>450</td></tr></tbody></table>You are performing analysis on the data. Complete the sentence about the data organization by selecting the correct option from the list.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
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
                "Transposing",
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
            "id": 14,
            "type": "MCQ",
            "q": "As part of an ETL process, which process represents transformation?",
            "options": [
                "Converting data from one data type to another data type or structure",
                "Retrieving data from many sources into a single destination",
                "Importing a percentage of row from the source data",
                "Changing data from summary level to detailed level"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 15,
            "type": "TF",
            "q": "For each statement about data disaggregation, select whether it is True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection</span>",
            "options": [
                "Data disaggregation provides a summary of the data",
                "Data disaggregation combines data from different sources",
                "Data disaggregation can clarify trends and patterns among subgroups"
            ],
            "a": [
                false,
                false,
                true
            ],
            "marks": 2
        },
        {
            "id": 16,
            "type": "MCQ",
            "q": "Which file format is specifically designed to store data in a plain text format where values are separated by commas?",
            "options": [
                "HTML",
                "JSON",
                "CSV",
                "XML"
            ],
            "a": 2,
            "marks": 2
        },
        {
            "id": 17,
            "type": "MCQ2",
            "q": "A coworker is having trouble joining two database tables, Table A and Table B, that were imported from CSV files. They say the tables have no common values.<br><br>You look at the data in the original CSV file and find that the RowKey values in the TableA file and the RowID values in the TableB file look identical. Both have three numbers followed by a dash(-) and two letters.<br><br>Which two actions should you complete next? (Choose 2)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection</span>",
            "options": [
                "Verify that the data in the database was imported as a numeric data type",
                "Trim empty spaces from both of the valid characters",
                "Visually compare the database values to the CSV values",
                "Trim empty spaces from only the right side of the valid characters"
            ],
            "a": [
                1,
                2
            ],
            "marks": 2
        },
        {
            "id": 18,
            "type": "MCQ",
            "q": "Which technique is used to rearrange data rows based on a specific column, such as Alphabetical order or Date?",
            "options": [
                "Sorting",
                "Aggregation",
                "Pivoting",
                "Filtering"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 19,
            "type": "MCQ",
            "q": "You have a comma-delimited file with 100,000 rows and 200 columns of phone sales data. One column represents the Phone manufacturer.<br><br>You need to analyze all sales data for a specific manufacturer. Which technique should you use?",
            "options": [
                "Truncating",
                "Transposing",
                "Filtering",
                "Deleting"
            ],
            "a": 2,
            "marks": 2
        },
        {
            "id": 20,
            "type": "MCQ",
            "q": "Which aggregation function should be used to find the most frequently occurring value in a dataset?",
            "options": [
                "COUNT",
                "MODE",
                "SUM",
                "AVG"
            ],
            "a": 1,
            "marks": 2
        },
        {
            "id": 21,
            "type": "MCQ",
            "q": "How do you update a PivotTable after changing some values in its source data range?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "You must click the Refresh button in the Data or PivotTable Analyze tab",
                "You must save and close the workbook",
                "You must delete and recreate the PivotTable",
                "It updates automatically almost immediately"
            ],
            "a": 0,
            "marks": 1
        },
        {
            "id": 22,
            "type": "MCQ",
            "q": "You are reviewing a database of restaurant menu items. The table below shows a selection of the data.<br><br><table style='width:100%; border-collapse: collapse; margin: 15px 0; font-size: 13px; text-align: center;'><thead><tr style='background: #f1f5f9;'><th style='padding: 8px; border: 1px solid #cbd5e1;'>Item</th><th style='padding: 8px; border: 1px solid #cbd5e1;'>Type</th><th style='padding: 8px; border: 1px solid #cbd5e1;'>Menu</th><th style='padding: 8px; border: 1px solid #cbd5e1;'>Gluten-free</th><th style='padding: 8px; border: 1px solid #cbd5e1;'>Vegan</th></tr></thead><tbody><tr><td>Croque Monsieur</td><td>Sandwich</td><td>Lunch</td><td>Optional</td><td>No</td></tr><tr><td>Lemon Meringue Pie</td><td>Pie</td><td>Dessert</td><td>No</td><td>No</td></tr><tr><td>Matcha Slice</td><td>Cake</td><td>Dessert</td><td>No</td><td>No</td></tr><tr><td>Shrimp and crab Louie</td><td>Salad</td><td>Lunch; Dinner</td><td>Yes</td><td>No</td></tr><tr><td>Vegan Chocolate...</td><td>Cake</td><td>Dessert</td><td>Yes</td><td>Yes</td></tr></tbody></table><br>You need to display only items on the <strong>dessert</strong> menu with a type of <strong>cake</strong>. What should you do to nondestructively limit the data display?",
            "options": [
                "Delete all data that has a menu other than dessert, then delete all data that has a type other than cake",
                "Add two slicers, one for menu and one for type. Set the menu slicer to dessert and the type slicer to cake",
                "Group the data by menu and then group the data on the dessert menu by type",
                "Sort the data by menu and within each menu, sort by type"
            ],
            "a": 1,
            "marks": 2
        }
    ],
    "data3": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "A bank uses data analytics to flag transactions that significantly deviate from a customer's typical spending behavior. Which technique is most likely being used?",
            "options": [
                "Data Granularity",
                "Drill-Down Analysis",
                "Anomaly Detection",
                "Hypothesis Testing"
            ],
            "a": 2,
            "marks": 2
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "You ran a t-test with an alpha value of 1% (&alpha;=0.01). Which p-value would cause you to reject the null hypothesis?",
            "options": [
                "0.09",
                "0.10",
                "0.011",
                "0.001"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 3,
            "type": "MCQ2",
            "q": "Each month, you need to automatically transform the data from two XML documents into a single flat file with columns and rows that Excel can open and interpret. The document names and structure remain constant. You know the relationships between the two XML documents.<br><br>Which two resources can you use? (Choose 2)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Python",
                "Microsoft Word",
                "Power Query for Excel (M)",
                "JSON"
            ],
            "a": [
                0,
                2
            ],
            "marks": 2
        },
        {
            "id": 4,
            "type": "MCQ",
            "q": "You want to know whether there is a significant difference between the average test scores of male and female students in the same class. You check that the data is approximately normally distributed for each group and has similar variance.<br><br>How would you decide whether the difference in the test scores between male and female students is significant?",
            "options": [
                "Perform a t-test using the medians and variance for male and female students and if p-value is greater than 0.05 decide that the difference is significant.",
                "Perform a t-test using the means and variance for male and female students and if p-value is greater than 0.05 decide that the difference is significant.",
                "Perform a t-test using the medians and variance for male and female students and if p-value is less than 0.05 decide that the difference is significant.",
                "Perform a t-test using the means and variance for male and female students and if p-value is less than 0.05 decide that the difference is significant."
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "A data analyst is working with a dataset where the relationship between two variables is monotonic but not strictly linear, and there are several extreme outliers. Which correlation coefficient would provide a more robust measurement of the relationship?<br><span style='font-size: 13px; color: #64748b;'>2 points</span>",
            "options": [
                "Mean Correlation Coefficient",
                "Pearson Correlation Coefficient",
                "Modal Correlation Coefficient",
                "Spearman Correlation Coefficient"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 6,
            "type": "MCQ2",
            "q": "Which two concepts are commonly associated with artificial intelligence (AI) in data analytics? (Choose 2)",
            "options": [
                "Cost-Benefit Analysis",
                "Stakeholder Mapping",
                "Automation",
                "Machine Learning"
            ],
            "a": [
                2,
                3
            ],
            "marks": 2
        },
        {
            "id": 7,
            "type": "MCQ",
            "q": "A data scientist at your company creates a machine learning model to help the hiring manager select candidates from thousands of job applicants. Which statement best describes how machine learning is used in this scenario?",
            "options": [
                "The hiring manager queries the machine learning database for qualified applicants",
                "The machine learning system converts applicant information into a common format",
                "A machine learning model defines the qualifications necessary for a given job or role",
                "The machine learning model uses historical data and algorithms to predict future applicant performance"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "Which type of pattern recognition is crucial for understanding the specific order of events, such as a customer buying a laptop and then purchasing a mouse a week later?",
            "options": [
                "Sequential Patterns",
                "Temporal Patterns",
                "Descriptive Patterns",
                "Frequent Patterns"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 9,
            "type": "MCQ",
            "q": "What is an example of machine learning in predictive analysis?",
            "options": [
                "Your vehicle turns on a warning sensor because one of its components requires maintenance.",
                "Your computer automatically goes into sleep mode because the battery has less than ten percent power.",
                "Your thermostat adjusts to a higher temperature because you programmed it based on the time of day.",
                "Your streaming service suggests a category of movies based on the last ten movies you watched."
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 10,
            "type": "TF",
            "q": "For each statement about data granularity, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Aggregating monthly sales into yearly totals increases data granularity.",
                "Drilling down into data involves moving from a lower granularity (less detailed) to a higher granularity (more detailed).",
                "Higher granularity means the data is more detailed."
            ],
            "a": [
                false,
                true,
                true
            ],
            "marks": 2
        },
        {
            "id": 11,
            "type": "TF",
            "q": "For each statement about machine learning, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Machine learning can be used to automatically decline financial purchases based on previous purchase activity.",
                "Machine learning can predict the probability of rain in a region by examining known weather patterns.",
                "Machine learning can help determine whether a candidate will pass an exam without looking at historical scores."
            ],
            "a": [
                true,
                true,
                false
            ],
            "marks": 2
        },
        {
            "id": 12,
            "type": "MCQ",
            "q": "In which scenario will artificial intelligence (AI) provide the greatest benefit?",
            "options": [
                "Interpreting fundraising sales data for a college team",
                "Determining the statistical mean, median, mode, and standard deviation of the grades for a class",
                "Recording daily sales for three stores owned by one franchise owner",
                "Predicting maintenance requirements for an international rental car company's fleet vehicles"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 13,
            "type": "MCQ",
            "q": "You believe playing video games increases the chance of a man getting a heart attack. In your research you notice equal evidence favouring your hypothesis and opposed to it. You tried hours trying to identify the problems with the evidence opposed to your hypothesis, but readily accept the evidence in favor.<br><br>Which type of bias are you demonstrating?",
            "options": [
                "Motivated Reasoning",
                "Anchoring Bias",
                "Confirmation Bias",
                "Sampling Bias"
            ],
            "a": 2,
            "marks": 2
        },
        {
            "id": 14,
            "type": "MCQ2",
            "q": "For which two reasons is it risky to make generalizations from limited sample data? (Choose 2)",
            "options": [
                "Limited data samples are easier to collect",
                "A limited sample may not represent a larger population",
                "Findings from a smaller sample size may not be as precise",
                "Analyzing data from a smaller sample size is faster"
            ],
            "a": [
                1,
                2
            ],
            "marks": 2
        },
        {
            "id": 15,
            "type": "MCQ",
            "q": "What concept allows analysts to drill down into data and examine different levels of information that may be crucial in diagnostic analytics?",
            "options": [
                "Completeness",
                "Transparency",
                "Interpretability",
                "Granularity"
            ],
            "a": 3,
            "marks": 2
        },
        {
            "id": 16,
            "type": "TF",
            "q": "For each statement about data mining, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Data mining is used to review underlying details in a given table.",
                "Data mining is used to find anomalies.",
                "Data mining is used to summarize raw data from large data sets."
            ],
            "a": [
                false,
                true,
                true
            ],
            "marks": 2
        },
        {
            "id": 17,
            "type": "MCQ",
            "q": "You will be analyzing sales and determining trends based on a very large dataset that includes the following columns:<ul style='margin-top: 10px; margin-bottom: 15px; padding-left: 20px; line-height: 1.6;'><li>CustomerName</li><li>CustomerEmail</li><li>Birthdate</li><li>FirstPurchaseDate</li><li>MostRecentPurchaseDate</li><li>TotalQuantityPurchased</li><li>TotalsalesAmount</li></ul>You need to validate the data before you start analysis.<br><br>What should you do?",
            "options": [
                "Verify date ranges and value for all dates column",
                "Calculate statistics TotalQuantityPurchased",
                "Create aggregation of all new column",
                "Analyze firstPurchaseDates to determine purchasing trends"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 18,
            "type": "MTF",
            "q": "You are using data analytics to help answer business questions about a new product your company released.<br><br>Move each type of data analytics from the list on the left to the correct question on the right.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span>",
            "options": [
                "Why did it happen?",
                "What action should be taken?",
                "What might happen?",
                "What happened in the past?"
            ],
            "labels": [
                "Descriptive Analysis",
                "Diagnostic Analysis",
                "Predictive Analysis",
                "Prescriptive Analysis"
            ],
            "a": {
                "Why did it happen?": "Diagnostic Analysis",
                "What action should be taken?": "Prescriptive Analysis",
                "What might happen?": "Predictive Analysis",
                "What happened in the past?": "Descriptive Analysis"
            },
            "marks": 2
        },
        {
            "id": 19,
            "type": "MCQ",
            "q": "You are analyzing sales activity that occurs on national holidays.<br><br>What level of data granularity will enable you to perform the most precise analysis?",
            "options": [
                "Hours",
                "Weeks",
                "Years",
                "Months",
                "Days"
            ],
            "a": 0,
            "marks": 2
        },
        {
            "id": 20,
            "type": "MCQ",
            "q": "You are reviewing a dataset and notice that the first number you see (a high price) makes all subsequent prices seem relatively low, even if they are still above market value. Which cognitive bias is influencing your judgment?",
            "options": [
                "Motivated Reasoning",
                "Confirmation Bias",
                "Sampling Bias",
                "Anchoring Bias"
            ],
            "a": 3,
            "marks": 2
        }
    ],
    "data4": [
        {
            "id": 1,
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
                "Option 1",
                "Option 3",
                "Option 4",
                "Option 2"
            ],
            "a": 1
        },
        {
            "id": 2,
            "marks": 1,
            "type": "MCQ",
            "q": "You want to show a friend your monthly budget breakdown to prove that most of your expenditure is food costs. You create a table that shows the flow of money as it moves one budget category to the next.<br><br>Which visualization type should you use to display your analysis based on the table shown? (1 Mark)",
            "img": "budget_flow_v2.png",
            "options": [
                "Classification tree",
                "Time Series Chart",
                "Sankey Diagram",
                "Correlation matrix"
            ],
            "a": 2
        },
        {
            "id": 3,
            "marks": 1,
            "type": "MCQ",
            "q": "The visualization below displays sales data for two salespeople. A conclusion indicates that Salesperson 1 has a higher lead to sale rate than salesperson 2.<br><br>(A lead to sales rate is the number of actual sales divided by the number of attempted sales)<br><br>You need to determine the accuracy of this conclusion. What should you conclude? (1 Mark)",
            "img": "sales_lead_comparison.png",
            "options": [
                "The conclusion is accurate",
                "The conclusion is inaccurate because the visualization uses size manipulation",
                "The conclusion is inaccurate because the visualization is missing sales and lead data",
                "The conclusion is inaccurate because the visualization uses scale manipulation"
            ],
            "a": 2
        },
        {
            "id": 4,
            "marks": 1,
            "type": "MCQ",
            "q": "You want to show a friend your monthly budget breakdown to prove that most of your expenditure is food costs. You create a table that shows the flow of money as it moves from one budget category to the next.<br><br>Which visualization type should you use to display your analysis based on the table shown? (1 Mark)",
            "img": "budget_flow_table.png",
            "options": [
                "Correlation Chart",
                "Time Series Chart",
                "Sankey Chart",
                "Classification Chart"
            ],
            "a": 2
        },
        {
            "id": 5,
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
                "Option 3",
                "Option 1",
                "Option 2",
                "Option 4"
            ],
            "a": 2
        },
        {
            "id": 6,
            "marks": 1,
            "type": "MCQ",
            "q": "You create the column chart below, which shows sales for different years. Management asks for a way to see demographic information associated with the individual sales records for each year.<br><br>You decide to create tables for each year that show the demographic information for the sales in that year. When someone clicks, the associated table will open.<br><br>Which reporting technique does this represent? (1 Mark)",
            "img": "sales_by_year_column.png",
            "options": [
                "Distributing",
                "Disaggregating",
                "Unpivoting",
                "Pivoting"
            ],
            "a": 1
        },
        {
            "id": 7,
            "marks": 3,
            "type": "TF",
            "q": "The visualization and data table depict housing price in a region. Review the visual patterns and the data set carefully.<br><br>For each statement about the visualization, select True or False.<br><span style='font-size:12px;font-style:italic;'>Note: You will receive partial credit for each correct selection</span> (3 Marks)",
            "img": "housing_prices_v2_professional.png",
            "options": [
                "The visualization accurately depict the housing prices shown in the table",
                "The scaling of the graph is misleading",
                "An increase of $25000 occurs Each year"
            ],
            "a": [
                true,
                false,
                false
            ]
        },
        {
            "id": 8,
            "marks": 6,
            "type": "TF",
            "q": "You are analyzing statistics for online and in-store purchases with data collected over the past year. Data collected includes surveys from 300 instore customers and 300 online customers.<br><br>Based on the data visualization below, identify which statements about customer purchases over the last year are correct and which statements are incorrect. Select True if the statement is correct or False if the statement is incorrect.<br><br><span style='font-size:12px;font-style:italic;'>Note: You will receive partial credit for each correct selection.</span> (6 Marks)",
            "img": "purchase_stats_comparison.png",
            "options": [
                "Online customers have a larger variance in how much they spend.",
                "The amount spent the most often is the same for online and in-store customers.",
                "The difference between the largest amount spent and the smallest amount spent is higher for in-store customers.",
                "In-store customers spent more money than online customers."
            ],
            "a": [
                true,
                true,
                false,
                false
            ]
        },
        {
            "id": 9,
            "marks": 1,
            "type": "MCQ",
            "q": "A colleague shows you the chart below to indicate that Group A has performed significantly better than Group B on a recent assignment. You do not know the sample size or the results of statistical testing. Which chart element creates the impression of a significant score difference? (1 Mark)",
            "img": "group_comparison_bias.png",
            "options": [
                "The z-axis units of measurement",
                "The color differentiation",
                "The x-axis units of measurement",
                "The y-axis units of measurement"
            ],
            "a": 3
        },
        {
            "id": 10,
            "marks": 1,
            "type": "DROPDOWN",
            "q": "Which correlation range most likely describes the relationship between Variable X and Variable Y based on the visualization below? Select the correct answer from the dropdown. (1 Mark)",
            "img": "scatter_correlation_v2.png",
            "code": "Relationship Analysis '†’ [b1]",
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
        },
        {
            "id": 11,
            "marks": 1,
            "type": "MCQ",
            "q": "For which scenario should you use a line chart to represent the data? (1 Mark)",
            "options": [
                "The weekly average stock price during a one-year period",
                "The maximum, minimum, and average value for a set of data",
                "The binned distribution for the height of different students",
                "The proportion of yes and no answer to a survey question"
            ],
            "a": 0
        },
        {
            "id": 12,
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
                "Option 3",
                "Option 4",
                "Option 1",
                "Option 2"
            ],
            "a": 1
        },
        {
            "id": 13,
            "marks": 1,
            "type": "MCQ",
            "q": "A group of students was asked about their favorite flavor of ice cream. The pie chart below illustrates the proportion of each response.<br><br>What can you conclude from the visualization below about ice cream preference for this group of students? (1 Mark)",
            "img": "ice_cream_pie_chart.png",
            "options": [
                "The most students chose vanilla",
                "Fewest students chose chocolate",
                "The most students chose chocolate",
                "The fewest students chose strawberry"
            ],
            "a": 2
        },
        {
            "id": 14,
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
                "Option 2",
                "Option 3",
                "Option 4"
            ],
            "a": 0
        },
        {
            "id": 16,
            "marks": 1,
            "type": "MCQ",
            "q": "An analyst claims the visualization below implies that Variable X <b>causes</b> Variable Y. Is the analyst correct in this assertion? (1 Mark)",
            "img": "scatter_correlation_v2.png",
            "options": [
                "No",
                "Yes"
            ],
            "a": 0
        },
        {
            "id": 17,
            "marks": 1,
            "type": "MCQ",
            "q": "Which visualization type is commonly used to display the distribution of a continuous variable, with variable values on the x axis and corresponding frequencies on the Y axis?<br>Select the correct visualization type in the answer area. (1 Mark)",
            "options": [
                "Option C",
                "Option B",
                "Option A",
                "Option D"
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
            "id": 19,
            "marks": 1,
            "type": "MCQ",
            "q": "A college shows you the chart below to indicate that group A has performed significantly better than group B on a recent assignment. You don't know the sample size and the result of the statistical testing.<br><br>Which chart element creates the impression of a significant score difference? (1 Mark)",
            "img": "group_comparison_3d_bias.png",
            "options": [
                "The X-axis unit of Measurement",
                "The Y-Axis unit of measurement",
                "The Z-Axis Unit of Measurement",
                "The Color differentiation"
            ],
            "a": 1
        },
        {
            "id": 20,
            "marks": 1,
            "type": "MCQ",
            "q": "You need to compare three (3) values of each data point in a series which data type should you use? (1 Mark)",
            "options": [
                "Bubble chart",
                "Scatter chart",
                "Waterfall chart",
                "Area chart"
            ],
            "a": 0
        },
        {
            "id": 21,
            "marks": 1,
            "type": "MCQ",
            "q": "What is the direction of correlation between variable X and variable Y? (1 Mark)",
            "img": "correlation_direction.png",
            "options": [
                "Positive",
                "Zero",
                "Negative"
            ],
            "a": 0
        }
    ],
    "data5": [
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
            "marks": 1,
            "type": "MCQ",
            "q": "You ran a t-test with an alpha value of 1% (a=0.01).<br><br>Which p-value would cause you to <b>reject</b> the null hypothesis? (1 Mark)",
            "options": [
                "0.011",
                "0.001",
                "0.09",
                "0.10"
            ],
            "a": 1
        },
        {
            "id": 3,
            "marks": 1,
            "type": "MCQ",
            "q": "What is the goal of data privacy and protection laws such as GDPR, FERPA, and HIPAA? (1 Mark)",
            "options": [
                "To protect companies from liability related to private data",
                "To hold violators accountable for mishandling data",
                "To ensure that companies openly share industry data",
                "To tax companies that use private data"
            ],
            "a": 1
        },
        {
            "id": 4,
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
            "id": 5,
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
            "id": 6,
            "marks": 1,
            "type": "MCQ",
            "q": "What is an example of machine learning in predictive analysis? (1 Mark)",
            "options": [
                "Your computer automatically goes into sleep mode because the battery has less than ten percent power.",
                "Your thermostat adjusts to a higher temperature because you programmed it based on the time of day",
                "Your vehicle turns on a warning sensor because one of its components requires maintenance.",
                "Your streaming service suggests a category of movies based on the last ten movies you watched."
            ],
            "a": 3
        },
        {
            "id": 7,
            "marks": 3,
            "type": "TF",
            "q": "For each statement about <b>data mining</b>, select True if the statement is correct or False if it is incorrect. <br><br><span style='font-size:12px;font-style:italic;'>Note: You will receive partial credit for each correct selection.</span> (3 Marks)",
            "options": [
                "Data mining is used to find anomalies",
                "Data mining is used to review underlying details in a given table",
                "Data mining is used to summarize raw data from large data sets"
            ],
            "a": [
                true,
                false,
                true
            ]
        },
        {
            "id": 8,
            "marks": 1,
            "type": "MCQ",
            "q": "You are analyzing sales activity that occurs on national holidays.<br><br>What level of data granularity will enable you to perform the most precise analysis? (1 Mark)",
            "options": [
                "Years",
                "Months",
                "Days",
                "Weeks",
                "Hours"
            ],
            "a": 4
        },
        {
            "id": 9,
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
            "id": 10,
            "marks": 1,
            "type": "MCQ",
            "q": "A popular social media site records and counts clicks, likes, dislikes, and other user interactions.<br><br>What type of data is collected? (1 Mark)",
            "options": [
                "Big Data",
                "Continuous Data",
                "Qualitative Data",
                "Imputed Data"
            ],
            "a": 0
        },
        {
            "id": 11,
            "marks": 1,
            "type": "MCQ",
            "q": "You are analyzing sales and determining trends based on a very large dataset that includes the following columns:<br><ul><li>CustomerName</li><li>CustomerEmail</li><li>Birthdate</li><li>FirstPurchaseDate</li><li>MostRecentPurchaseDate</li><li>TotalQuantityPurchased</li><li>TotalSalesAmount</li></ul>You need to validate the data before you start analysis. What should you do? (1 Mark)",
            "options": [
                "Analyze FirstPurchaseDates to determine purchasing trends",
                "Create aggregations for all new columns",
                "Calculate statistics for TotalQuantityPurchased",
                "Verify date ranges and values for all date columns"
            ],
            "a": 3
        },
        {
            "id": 12,
            "marks": 1,
            "type": "MCQ",
            "q": "You want to know whether there is a significant difference between the average test scores of male and female students in the same class. You check that the data is approximately normally distributed and that each group has similar variance.<br><br>How would you decide whether the difference in the test score between male and female students is significant? (1 Mark)",
            "options": [
                "Perform a t-test using the means and variance for male and female students and if p-value is greater than 0.05 decide that the difference is significant.",
                "Perform a t-test using the means and variance for male and female students and if p-value is less than 0.05 decide that the difference is significant.",
                "Perform a t-test using the medians and variance for male and female students and if p-value is less than 0.05 decide that the difference is significant.",
                "Perform a t-test using the medians and variance for male and female students and if p-value is greater than 0.05 decide that the difference is significant."
            ],
            "a": 1
        },
        {
            "id": 13,
            "marks": 1,
            "type": "MCQ",
            "q": "You conduct a study to identify how much time people exercise daily. You recruit all the study participants at the gym.<br><br>Which type of bias are you demonstrating? (1 Mark)",
            "options": [
                "Anchoring bias",
                "Sampling bias",
                "Confirmation bias",
                "Motivated reasoning"
            ],
            "a": 1
        },
        {
            "id": 14,
            "marks": 1,
            "type": "MCQ",
            "q": "You run a t-test with an alpha value of 5% (a = 0.05) in order to test an alternative hypothesis (H1). You finish the analysis and discover the p-value is 0.017.<br><br>What can you conclude about the null hypothesis (H0)? (1 Mark)",
            "options": [
                "You accept the null hypothesis (H0)",
                "You modify the null hypothesis (H0)",
                "You fail to reject the null hypothesis (H0)",
                "You reject the null hypothesis (H0)"
            ],
            "a": 3
        },
        {
            "id": 15,
            "marks": 1,
            "type": "MCQ",
            "q": "You have a small dataset that contains personally identifiable information (PII). You need to provide the data to an outside source for additional processing.<br><br>What could you do to protect the PII but still allow you to eventually relate the additional analysis to your original data? (1 Mark)",
            "options": [
                "Remove every instance of PII in the original dataset and add them back after the new dataset is retrieved.",
                "Randomly shuffle the original dataset so that each given piece of PII is no longer associated with a particular user.",
                "Employ pseudonymization on the PII and use the pseudonym as the key between the new and original datasets.",
                "Retain every text-based PII in the original dataset but convert them to number-based features in the new dataset."
            ],
            "a": 2
        },
        {
            "id": 16,
            "marks": 1,
            "type": "MCQ",
            "q": "You believe playing video games increases the chance of a person getting a heart attack. In your research, you notice equal evidence favoring your hypothesis and opposed to it. You spend hours trying to identify problems with the evidence opposed to your hypothesis, but readily accept the evidence in favor.<br><br>Which type of bias are you demonstrating? (1 Mark)",
            "options": [
                "Anchoring bias",
                "Motivated Reasoning",
                "Affinity bias",
                "Sampling bias"
            ],
            "a": 1
        },
        {
            "id": 17,
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
            "id": 18,
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
            "id": 19,
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
            "id": 20,
            "marks": 1,
            "type": "MCQ",
            "q": "In which scenario will artificial intelligence (AI) provide the greatest benefit? (1 Mark)",
            "options": [
                "Predicting maintenance requirement for an international rental car's companies fleet vehicles",
                "Determining the statistical mean, median, mode, and standard deviation of the grade for a class",
                "Recording daily sales for three stores owned by one franchise owner",
                "Interpreting fundraising sales data for a college team"
            ],
            "a": 0
        },
        {
            "id": 21,
            "marks": 1,
            "type": "MCQ",
            "q": "A data scientist at your company creates a machine learning model to help the hiring manager select candidates from thousands of job applicants.<br><br>Which statement best describes how <b>machine learning</b> is used in this scenario? (1 Mark)",
            "options": [
                "A machine learning model defines the qualifications necessary for a given job or role",
                "The hiring manager queries the machine learning database for qualified applicants",
                "The machine learning system converts applicant information into a common format",
                "The machine learning model uses historical data and algorithms to predict future applicant performance"
            ],
            "a": 3
        },
        {
            "id": 22,
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
        }
    ],
    "da_mock1": [
        {
            "id": 1,
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
            "id": 2,
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
            "id": 3,
            "type": "MCQ",
            "q": "You have a comma-delimited file with 100,000 rows and 200 columns of phone sales data. One column represents the Phone manufacturer.<br><br>You need to analyze all sales data for a specific manufacturer.<br><br>Which technique should you use?",
            "options": [
                "Transposing",
                "Filtering",
                "Deleting",
                "Truncating"
            ],
            "a": 1
        },
        {
            "id": 4,
            "type": "MCQ2",
            "q": "A coworker is having trouble joining two database tables, Table A and Table B, that were imported from CSV files. They say the tables have no common values.<br><br>You troubleshoot the problem and find that the <b>RowKey</b> values in TableA and the <b>RowID</b> values in TableB look identical (e.g., three numbers, a dash, and two letters).<br><br>Which <b>two</b> actions should you complete next? (Choose 2)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Verify that the data in the database was imported as a numeric data type",
                "Trim empty spaces from both of the valid characters",
                "Visually compare the database values to the CSV values",
                "Trim empty spaces from only the right side of the valid characters"
            ],
            "a": [
                1,
                2
            ]
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "Which visualization type is commonly used to display the distribution of a continuous variable, with variable values on the x-axis and corresponding frequencies on the Y-axis?",
            "options": [
                "Option D: Line Chart",
                "Option C: Histogram",
                "Option B: Bar Chart",
                "Option A: Column Chart"
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
            "id": 6,
            "type": "MCQ",
            "q": "What is an example of data cleaning?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Adding quotation marks to the beginning and end of a tab-delimited file",
                "Arranging Excel data rows in an order that is easy for a user to read",
                "Removing non-printable characters from a comma-delimited file",
                "Ensuring that the data in a Word table uses a consistent font"
            ],
            "a": 2
        },
        {
            "id": 7,
            "type": "MCQ",
            "q": "Your company has summarized a large data set for the region you live in. You need to compare results from urban and rural communities within your region.<br><br>What is the fastest way to obtain the information?",
            "options": [
                "Aggregate the data",
                "Review data from neighbouring regions",
                "Disaggregate the data",
                "Collect a new Data Sample"
            ],
            "a": 2
        },
        {
            "id": 8,
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
            "id": 9,
            "type": "MCQ",
            "q": "You run a t-test with alpha value of 5% (a= 0.05) in order to test an alternative hypothesis (H1). You finish the analysis and discover the P-value is 0.017.<br><br>What can you conclude about the null hypothesis (H0)?",
            "options": [
                "You modify the null hypothesis (H0)",
                "You fail to reject the null Hypothesis (H0)",
                "You reject the null hypothesis (H0)",
                "You accept the null hypothesis (H0)"
            ],
            "a": 2
        },
        {
            "id": 10,
            "type": "MCQ",
            "q": "You have a dataset that includes product review scores and demographic information about the reviewers. There are no subcategories associated with the demographic answers. The table shows a selection of the data.<br><br>Which Scenario is an example of disaggregating the dataset?",
            "img": "disaggregation_dataset_v3.png",
            "options": [
                "Display the overall average and mode of all scores and a count of all reviews",
                "Display the overall average and mode of all scores on a per-products basis",
                "By average and mode of the scores for each product grouped by the ethnicity of the reviewers",
                "Display a list of ethnicities that are included in the other option"
            ],
            "a": 3
        },
        {
            "id": 11,
            "type": "MCQ",
            "q": "The Marketing team wants to know which market segment have the highest sales in the last year.<br><br>Which type of data analysis should they use?",
            "options": [
                "Predictive Analytics",
                "Diagnostic Analytics",
                "Perspective analytics",
                "Descriptive Analytics"
            ],
            "a": 3
        },
        {
            "id": 12,
            "type": "MCQ",
            "q": "You are reviewing a database of restaurant menu items. The table below shows a selection of the data.<br>You need to display only items on the dessert menu with a type of cake.<br><br>What should you do to nondestructively limit the data display?",
            "img": "restaurant_menu_dataset.png",
            "options": [
                "Delete all data that has a menu other than desert. Then delete all data that has a type other than cake",
                "Add two slicers, one for menu and one for type. Set the menu slicer to desert and the type slicer to cake",
                "Group the data by menu and then group the data on the desert menu by type",
                "Sort the data by menu and within each menu, Sort by type"
            ],
            "a": 1
        },
        {
            "id": 13,
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
            "id": 14,
            "type": "MCQ",
            "q": "What concept allows analysts to drill down into data and examine different levels of information that may be crucial in diagnostic analytics?",
            "options": [
                "Granularity",
                "Interpretability",
                "Completeness",
                "Transparency"
            ],
            "a": 0
        },
        {
            "id": 15,
            "type": "DND_PIVOT",
            "q": "<strong>Statistical Metrics:</strong> You are performing descriptive analysis on quarterly sales data. <br><br>Drag the correct statistical metric from the panel on the left and drop it into the highlighted row cells in the table below.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct match.</span><br><br><div style='overflow-x:auto;'><table style='border-collapse:collapse; font-size:13px; width:100%; text-align:center;'><thead><tr style='background:#1e3a5f; color:white;'><th style='padding:8px 12px; border:1px solid #ccc;'>Region</th><th style='padding:8px 12px; border:1px solid #ccc;'>Quarter 1</th><th style='padding:8px 12px; border:1px solid #ccc;'>Quarter 2</th><th style='padding:8px 12px; border:1px solid #ccc;'>Quarter 3</th><th style='padding:8px 12px; border:1px solid #ccc;'>Quarter 4</th></tr></thead><tbody><tr><td style='padding:7px 12px; border:1px solid #ccc;'>North</td><td style='padding:7px 12px; border:1px solid #ccc;'>25,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>30,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>40,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>50,000</td></tr><tr style='background:#f8fafc;'><td style='padding:7px 12px; border:1px solid #ccc;'>South</td><td style='padding:7px 12px; border:1px solid #ccc;'>35,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>45,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>40,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>55,000</td></tr><tr><td style='padding:7px 12px; border:1px solid #ccc;'>East</td><td style='padding:7px 12px; border:1px solid #ccc;'>35,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>32,500</td><td style='padding:7px 12px; border:1px solid #ccc;'>41,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>52,500</td></tr><tr style='background:#f8fafc;'><td style='padding:7px 12px; border:1px solid #ccc;'>West</td><td style='padding:7px 12px; border:1px solid #ccc;'>34,500</td><td style='padding:7px 12px; border:1px solid #ccc;'>30,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>42,500</td><td style='padding:7px 12px; border:1px solid #ccc;'>55,000</td></tr><tr style='background:#dbeafe; font-weight:600;'><td style='padding:7px 12px; border:2px solid #3b82f6; color:#1e3a8a;'>Label 1</td><td style='padding:7px 12px; border:1px solid #ccc;'>129,500</td><td style='padding:7px 12px; border:1px solid #ccc;'>137,500</td><td style='padding:7px 12px; border:1px solid #ccc;'>163,500</td><td style='padding:7px 12px; border:1px solid #ccc;'>212,500</td></tr><tr style='background:#dbeafe; font-weight:600;'><td style='padding:7px 12px; border:2px solid #3b82f6; color:#1e3a8a;'>Label 2</td><td style='padding:7px 12px; border:1px solid #ccc;'>35,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>45,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>42,500</td><td style='padding:7px 12px; border:1px solid #ccc;'>55,000</td></tr><tr style='background:#dbeafe; font-weight:600;'><td style='padding:7px 12px; border:2px solid #3b82f6; color:#1e3a8a;'>Label 3</td><td style='padding:7px 12px; border:1px solid #ccc;'>25,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>30,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>40,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>50,000</td></tr><tr style='background:#dbeafe; font-weight:600;'><td style='padding:7px 12px; border:2px solid #3b82f6; color:#1e3a8a;'>Label 4</td><td style='padding:7px 12px; border:1px solid #ccc;'>35,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>30,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>40,000</td><td style='padding:7px 12px; border:1px solid #ccc;'>55,000</td></tr></tbody></table></div>",
            "options": [
                "Label 1",
                "Label 2",
                "Label 3",
                "Label 4"
            ],
            "labels": [
                "Sum",
                "Max",
                "Min",
                "Mode",
                "Average",
                "Median"
            ],
            "a": {
                "Label 1": "Sum",
                "Label 2": "Max",
                "Label 3": "Min",
                "Label 4": "Mode"
            }
        },
        {
            "id": 16,
            "type": "MCQ",
            "q": "A college shows you the chart below to indicate that group A has performed significantly better than group B on a recent assignment. You don't know the sample size and the result of the statistical testing.<br><br>Which chart element creates the impression of a significant score difference?",
            "img": "scaling_manipulation_chart.png",
            "options": [
                "The X-axis unit of Measurement",
                "The Y-Axis unit of measurement",
                "The Z-Axis Unit of Measurement",
                "The Color differentiation"
            ],
            "a": 1
        },
        {
            "id": 17,
            "type": "MCQ",
            "q": "A popular social media site records and counts clicks, likes, and dislikes and other user interactions.<br><br>What type of data is collected?",
            "options": [
                "Qualitative data",
                "Continuous data",
                "Imputed data",
                "Big data"
            ],
            "a": 3
        },
        {
            "id": 18,
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
            "id": 19,
            "type": "MCQ",
            "q": "An analyst claims the visualization implies that Variable X causes Variable Y. Is the analyst correct in this assertion?",
            "img": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2ZjZmNmYyIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIHgxPSI1MCIgeTE9IjUwIiB4Mj0iNTUwIiB5Mj0iNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIxMDAiIHgyPSI1NTAiIHkyPSIxMDAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIxNTAiIHgyPSI1NTAiIHkyPSIxNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIyMDAiIHgyPSI1NTAiIHkyPSIyMDAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIyNTAiIHgyPSI1NTAiIHkyPSIyNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIzMDAiIHgyPSI1NTAiIHkyPSIzMDAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMTAwIiB5MT0iNTAiIHgyPSIxMDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMTUwIiB5MT0iNTAiIHgyPSIxNTAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMjAwIiB5MT0iNTAiIHgyPSIyMDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMjUwIiB5MT0iNTAiIHgyPSIyNTAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMzAwIiB5MT0iNTAiIHgyPSIzMDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iMzUwIiB5MT0iNTAiIHgyPSIzNTAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNDAwIiB5MT0iNTAiIHgyPSI0MDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNDUwIiB5MT0iNTAiIHgyPSI0NTAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAwIiB5MT0iNTAiIHgyPSI1MDAiIHkyPSIzNTAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIzNTAiIHgyPSI1NTAiIHkyPSIzNTAiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSI1MCIgeDI9IjUwIiB5Mj0iMzUwIiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMzAwIiB5PSIzODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQ3NTU2OSI+VmFyaWFibGUgWDwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1IiB5PSIyMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzQ3NTU2OSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwLCAxNSwgMjAwKSI+VmFyaWFibGUgWTwvdGV4dD4KICAgIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjI1MCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjMwMCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjE5MCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjI1MCIgY3k9IjIwMCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjE2MCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjM1MCIgY3k9IjI1NSIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjQwMCIgY3k9IjEzMCIgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KICAgIDxjaXJjbGUgY3g9IjQ1MCIgY3k9Ijc1IiAgcj0iNSIgZmlsbD0iIzQ0NzJjNCIgLz4KPC9zdmc+",
            "options": [
                "No",
                "Yes"
            ],
            "a": 0
        },
        {
            "id": 20,
            "type": "TF",
            "q": "For each statement about the machine learning select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "options": [
                "Machine Learning can be used to automatically decline financial purchases based on previous purchase activity",
                "Machine learning can help determine whether a candidate will pass an exam without looking at historical scores",
                "Machine learning can predict the probability of Rain in a region by examining known weather patterns"
            ],
            "a": [
                true,
                false,
                true
            ]
        },
        {
            "id": 21,
            "type": "MCQ",
            "q": "What is the direction of correlation between variable X and variable Y based on the scatter plot below?",
            "img": "correlation_scatter.png",
            "options": [
                "Negative",
                "Positive",
                "Zero"
            ],
            "a": 1
        },
        {
            "id": 22,
            "type": "MCQ",
            "q": "Which Data structure have multiple rows and columns?",
            "options": [
                "List",
                "One-dimensional Array",
                "Series",
                "Table"
            ],
            "a": 3
        },
        {
            "id": 23,
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
            "id": 24,
            "type": "TF",
            "q": "The visualization and the data table depict housing prices in a region. For each statement about the visualization, select True or False.<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
            "img": "housing_prices_color_final.png",
            "options": [
                "The visualization accurately depicts the housing prices shown",
                "The visualization uses scaling manipulation",
                "An annual increase of $25,000 occurs between 2016 and 2025"
            ],
            "a": [
                true,
                false,
                false
            ]
        },
        {
            "id": 25,
            "type": "MCQ",
            "q": "You have a small dataset that contains personally identifiable information (PII). You need to provide the data to an outside source for additional processing.<br><br>What could you do to protect the PII but still allow you to eventually relate the additional analysis to your original data?",
            "options": [
                "Employ pseudonymization on the PII and use the pseudonym as the key between the new and original datasets",
                "Randomly shuffle the original dataset so that each given piece of PII is no longer associated with a particular user",
                "Retain every text based PII in the original dataset but convert them to number-based features in the new dataset",
                "Remove every instance of PII in the original dataset and add them back after the new dataset is retrieved"
            ],
            "a": 0
        },
        {
            "id": 26,
            "type": "MCQ",
            "q": "What is a raw data?",
            "options": [
                "Unprocessed Data",
                "Summarized Data",
                "Purely numerical Data",
                "Visualized Data"
            ],
            "a": 0
        },
        {
            "id": 27,
            "type": "MCQ",
            "q": "You conduct a study to identify how much people exercise daily. You recruit all the study participants at the gyms.<br><br>Which type of bias are you demonstrating?",
            "options": [
                "Motivated Bias",
                "Sampling bias",
                "Confirmation Bias",
                "Anchoring bias"
            ],
            "a": 1
        },
        {
            "id": 28,
            "type": "MCQ",
            "q": "In which scenario will artificial intelligence (AI) provide the greatest benefit?",
            "options": [
                "Predicting maintenance requirements for a international rental car company's fleet vehicles",
                "Interpreting fundraising sales data for a college soccer team",
                "Recording daily sales for the three stores owned by one franchise owner",
                "Determining the statistical mean, mode, and standard deviation of the grades for a class"
            ],
            "a": 0
        },
        {
            "id": 29,
            "type": "MCQ",
            "q": "You want to show a friend your monthly budget breakdown to prove that most of your expenditure is food costs. You create a table that shows the flow of money as it moves one budget category to the next.<br><br>Which visualization type should you use to display your analysis based on the table shown?",
            "img": "budget_flow_dataset_v2.png",
            "options": [
                "Classification Chart",
                "Sankey Chart",
                "Time Series Chart",
                "Correlation Chart"
            ],
            "a": 1
        },
        {
            "id": 30,
            "type": "MCQ",
            "q": "You Believe Playing video game's increases the chance of man getting heart attack. In your research you notice equal evidences in favouring your hypothesis and opposed to it. You tried hours trying to identify the problems with the evidence opposed to your hypothesis, but readily accept the evidence in favor.<br><br>Which type of bias are you demonstrating?",
            "options": [
                "Sampling Bias",
                "Anchoring Bias",
                "Motivated Reasoning",
                "Confirmation Bias"
            ],
            "a": 3
        },
        {
            "id": 31,
            "type": "MCQ",
            "q": "Which data type can store a phrase or sentence?",
            "options": [
                "Boolean",
                "Integer",
                "Character",
                "String"
            ],
            "a": 3
        },
        {
            "id": 32,
            "type": "MCQ2",
            "q": "You need to create a data view based on aggregations for further visual analysis. Your data includes sales information for the past five years for food products at your company's stores. Each product belongs to one category (for example, milk belongs to the Dairy category). <br><br>The data view must satisfy the following requirements:<br>• Include all products categorized by their respective groups.<br>• Provide sales sub-totals for each category, broken down by year.<br>• Display the overall grand total of sales for each category.<br>• Create a yearly summary for every category.<br><br>Which <b>two</b> aggregation methods should you use to create this data view? (Choose 2)<br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection.</span>",
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
            "id": 33,
            "type": "MCQ",
            "q": "What is the goal of data privacy and protection laws such as GDPR, FERPA, and HIPAA?",
            "options": [
                "To tax companies that use private data",
                "To protect companies from liability related to private data",
                "To hold violators accountable for mishandling data",
                "To ensure that companies openly share industry data"
            ],
            "a": 2
        },
        {
            "id": 34,
            "type": "MCQ",
            "q": "Which area of a PivotTable should you use to create a vertical list of unique values from a specific field?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Columns",
                "Rows",
                "Filters",
                "Values"
            ],
            "a": 1,
            "marks": 1
        },
        {
            "id": 35,
            "type": "MCQ",
            "q": "Which Statement correctly assigns a string to the variable that is name score?",
            "options": [
                "Score=true",
                "Score=\"&\"",
                "Score= 7\"",
                "Score=String[7]"
            ],
            "a": 1
        },
        {
            "id": 36,
            "type": "MCQ",
            "q": "What data structure describes the following data?<br><strong>['Aabid', 'Jesenia', 'Mark']</strong>",
            "options": [
                "Table",
                "Graph",
                "List",
                "Multi-dimensional"
            ],
            "a": 2
        },
        {
            "id": 37,
            "type": "MCQ",
            "q": "Person A has 5 coins and person B has 10 coins.<br><br>Which type of data does the number of coins represent?",
            "options": [
                "Ordinal Data",
                "Quantitative data",
                "Qualitative data",
                "Metadata"
            ],
            "a": 1
        },
        {
            "id": 38,
            "type": "MCQ",
            "q": "You work for a recreational sports company. The table shows the company's recreational vehicle sales.<br><br>You need to show how each vehicle type contributes to the company's total sales.<br><br>Which visualization should you use? Select the correct visualization in the answer area.",
            "img": "recreational_sales_table.png",
            "options": [
                "Option D",
                "Option B",
                "Option A",
                "Option C"
            ],
            "optionImages": [
                "recreational_pie_chart.png",
                "recreational_combo_chart.png",
                "recreational_scatter_plot.png",
                "recreational_bar_chart.png"
            ],
            "a": 0
        },
        {
            "id": 39,
            "type": "MCQ",
            "q": "You are analyzing sales activity that occurs on national holidays.<br><br>What level of data granularity will enable you to perform the most precise analysis?",
            "options": [
                "Hours",
                "Months",
                "Years",
                "Days",
                "Weeks"
            ],
            "a": 0
        },
        {
            "id": 40,
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
        }
    ],
    "da_mock2": [
        {
            "id": 1,
            "type": "MCQ",
            "q": "Person A has 5 coins and person B has 10 coins.<br><br>Which type of data does the number of coins represent?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Qualitative data",
                "Ordinal data",
                "Metadata",
                "Quantitative data"
            ],
            "a": 3
        },
        {
            "id": 2,
            "type": "MCQ",
            "q": "A popular social media site records and count clicks, likes, and dislikes, and other user interactions<br><br>What type of data is collected?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Imputed Data",
                "Continuous data",
                "Big Data",
                "Qualitative Data"
            ],
            "a": 2
        },
        {
            "id": 3,
            "type": "DND_PIVOT",
            "q": "<table style='width:100%; border-collapse: collapse; margin: 15px 0; font-size: 13px; text-align: center;'><thead><tr style='background: #000; color: #fff;'><th style='padding: 8px; border: 1px solid #ddd;'>School</th><th style='padding: 8px; border: 1px solid #ddd;'>Class</th><th style='padding: 8px; border: 1px solid #ddd;'>Format</th><th style='padding: 8px; border: 1px solid #ddd;'>Certified teacher</th></tr></thead><tbody><tr><td>School A</td><td>Networking</td><td>In Person</td><td>6</td></tr><tr><td>School A</td><td>Networking</td><td>Virtual</td><td>5</td></tr><tr><td>School A</td><td>Data Analytics</td><td>In Person</td><td>2</td></tr><tr><td>School A</td><td>Data Analytics</td><td>Virtual</td><td>3</td></tr><tr><td>School B</td><td>Networking</td><td>In Person</td><td>9</td></tr><tr><td>School B</td><td>Networking</td><td>Virtual</td><td>7</td></tr><tr><td>School B</td><td>Data Analytics</td><td>In Person</td><td>2</td></tr><tr><td>School B</td><td>Data Analytics</td><td>Virtual</td><td>4</td></tr></tbody></table><br>Move the appropriate labels to the correct locations in the Pivot table structure below.<br><br><table style='border-collapse: collapse; margin: 10px 0; text-align: center;'><tr><td style='border: 1px solid #000; padding: 10px; background: #eee;'></td><td style='border: 1px solid #000; padding: 10px; font-weight: bold;'>Label 1</td><td style='border: 1px solid #000; padding: 10px; font-weight: bold;'>Label 2</td></tr><tr><td style='border: 1px solid #000; padding: 10px; font-weight: bold;'>Label 3</td><td style='border: 1px solid #000; padding: 10px;'>11</td><td style='border: 1px solid #000; padding: 10px;'>5</td></tr><tr><td style='border: 1px solid #000; padding: 10px; font-weight: bold;'>Label 4</td><td style='border: 1px solid #000; padding: 10px;'>16</td><td style='border: 1px solid #000; padding: 10px;'>6</td></tr></table>",
            "options": [
                "Label 1",
                "Label 2",
                "Label 3",
                "Label 4"
            ],
            "labels": [
                "Data Analytics",
                "Networking",
                "In-Person",
                "Virtual",
                "School A",
                "School B"
            ],
            "a": {
                "Label 1": "Networking",
                "Label 2": "Data Analytics",
                "Label 3": "School A",
                "Label 4": "School B"
            },
            "marks": 4
        },
        {
            "id": 4,
            "type": "MCQ",
            "q": "You work for a recreational sports company. The table shows the company's recreational vehicle sales. You need to show how each vehicle type contributes to the company's total sales.<br><br> Which visualization should you use? Select the correct visualization in the answer area.<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "img": "recreational_sales_table.png",
            "options": [
                "Option C",
                "Option A",
                "Option D",
                "Option B"
            ],
            "optionImages": [
                "recreational_pie_chart.png",
                "recreational_combo_chart.png",
                "recreational_scatter_plot.png",
                "recreational_bar_chart.png"
            ],
            "a": 0
        },
        {
            "id": 5,
            "type": "MCQ",
            "q": "You have a dataset that includes product review scores and demographic information about the reviewers_ There are no subcategories associated with the demographic answers, The table shows a selection of the data, Which scenario is an example of disaggregating the dataset?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "img": "disaggregation_dataset_v4.png",
            "options": [
                "Display the overall average and mode of all scores and a count of all reviews.",
                "Display average and mode of the scores for each product grouped by the ethnicity of the reviewers.",
                "Display the overall average and mode of all scores on a PW-product basis.",
                "Display a list of ethnicities that are included in the Other option."
            ],
            "a": 3
        },
        {
            "id": 6,
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
            "id": 7,
            "type": "MCQ",
            "q": "What is a raw data<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Unprocessed data",
                "Purely numeric data",
                "Summarized data",
                "Visualized data"
            ],
            "a": 0
        },
        {
            "id": 8,
            "type": "MCQ",
            "q": "In which scenario will artificial Intelligence (AI) Provides the greatest benefit?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Determining the statistical mean, median, mode, and standard deviation of the grade for a class",
                "Predicting maintenance requirement for an international rental car's companies fleet vehicles",
                "Recording daily sales for three stores owned by one franchise owner",
                "Interpreting fundraising sales data for a college team"
            ],
            "a": 1
        },
        {
            "id": 9,
            "type": "MCQ",
            "q": "What is an example of data cleaning?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Arranging Excel data rows in an order that is easy for a user to read",
                "Removing non-printable characters from a comma-delimited file",
                "Adding quotation marks to the beginning and end of a tab-delimited file",
                "Ensuring that the data in a Word table uses a consistent font"
            ],
            "a": 1
        },
        {
            "id": 10,
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
            "id": 11,
            "type": "TF",
            "q": "The visualization and data table depict housing price in a region. For each statement about the visualization, select True or False.<br><span style='font-size: 13px; color: #64748b;'>1 point</span><br><br><span style='font-size: 15px; font-style: italic;'>Note: You will receive partial credit for each correct selection</span>",
            "img": "housing_prices_color_final.png",
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
            "id": 12,
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
            "id": 13,
            "type": "MCQ",
            "q": "What is metadata?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "The text content of a message",
                "Statistics",
                "Numerical facts",
                "The context that give data meaning"
            ],
            "a": 3
        },
        {
            "id": 14,
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
            "id": 15,
            "type": "MCQ",
            "q": "You need to find the total revenue for each sales region in a large dataset. Which summary function should you choose in the Value Field Settings of your PivotTable?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Sum",
                "Average",
                "Count",
                "Max"
            ],
            "a": 0,
            "marks": 1
        },
        {
            "id": 16,
            "type": "MCQ",
            "q": "A conduct of study identify how many people exercise daily. You recruit all the study participants at gyms. Which types of bias are you demonstrating?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Confirmation bias",
                "Anchoring bias",
                "Sampling bias",
                "Motivated reasoning"
            ],
            "a": 2
        },
        {
            "id": 17,
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
            "id": 18,
            "type": "MCQ",
            "q": "What is one goal of data privacy and protection laws such as GDPR, FERPA, and HIPAA?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "To protect companies from liability related to private data",
                "To ensure that companies openly share industry data",
                "To tax companies that use private data",
                "To hold violators accountable for mishandling data"
            ],
            "a": 3
        },
        {
            "id": 19,
            "type": "MCQ",
            "q": "Which data type can store a phrase or sentence?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Boolean",
                "Integer",
                "Character",
                "String"
            ],
            "a": 3
        },
        {
            "id": 20,
            "marks": 6,
            "type": "DND_PIVOT",
            "q": "You are performing descriptive analytics on quarterly sales data. Move the appropriate statistical metrics from the list on the left to the correct locations on the right. You may use each metric once, more than once, or not at all.<br><br><table style='width:100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px; text-align: center;'><thead><tr style='background: #f1f5f9; color: #1e293b; font-weight: 800;'><th style='padding: 10px; border: 1px solid #e2e8f0;'>Region</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 1</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 2</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 3</th><th style='padding: 10px; border: 1px solid #e2e8f0;'>Quarter 4</th></tr></thead><tbody><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>North</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>25000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>50000</td></tr><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>South</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>45000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>East</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>32500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>41000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>52500</td></tr><tr><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 600;'>West</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>34500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>42500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 1</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>129500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>137500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>163500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>212500</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 2</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>45000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>42500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 3</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>25000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>50000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 4</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>35000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>30000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40000</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>55000</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 5</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>32375</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>34375</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40875</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>53125</td></tr><tr style='background: #f8fafc; font-style: italic;'><td style='padding: 8px; border: 1px solid #e2e8f0; font-weight: 700;'>Metric 6</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>34750</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>31250</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>40500</td><td style='padding: 8px; border: 1px solid #e2e8f0;'>53750</td></tr></tbody></table><br><span style='font-size:15px; font-style:italic;'>Note: You will receive partial credit for each correct response.</span><br><span style='font-size: 13px; color: #64748b;'>6 points</span>",
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
            "id": 21,
            "type": "MCQ",
            "q": "The marketing team want to know which market segment had the highest sales last year. Which type of data analytics should they use?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Predictive analytics",
                "Prescriptive analytics",
                "Diagnostic analytics",
                "Descriptive analytics"
            ],
            "a": 3
        },
        {
            "id": 22,
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
            "id": 23,
            "type": "MCQ",
            "q": "A colleague shows you the chart below to indicate that Group A has performed significantly better than Group B on a recent assignment. You do not know the sample size or the results of statistical testing. Which chart element creates the impression Of a significant score difference?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "img": "q19_misleading_chart.png",
            "options": [
                "The z-axis units of measurement",
                "The y-axis units of measurement",
                "The x-axis units of measurement",
                "The color differentiation"
            ],
            "a": 1
        },
        {
            "id": 24,
            "type": "MCQ",
            "q": "Which data structure describes the following data<br><br><div class='code-snippet' style='margin:0;'>[\"Aabid\",\"jesenia\",\"Mark\"]</div><br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Table",
                "Multi-dimensional array",
                "Graph",
                "List"
            ],
            "a": 3
        },
        {
            "id": 25,
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
                3
            ]
        },
        {
            "id": 26,
            "type": "MCQ",
            "q": "You have produced a linear regression model which calculates house prices based on area taken up by the house, the number of bedrooms, and the number of bathrooms:<br><br><b>House price = (100 + 0.5 * square meters + 8 * bedrooms + 10 * bathrooms) * 1,000</b><br><br>What would the model predict for the price of a house with 800 square meters, 4 bedrooms and 3 bathrooms?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "572,000",
                "562,000",
                "552,000",
                "538,000"
            ],
            "a": 1
        },
        {
            "id": 27,
            "type": "MCQ",
            "q": "You want to show a friend your monthly budget breakdown to prove that most of your expenditure is food costs. You create a table that shows the flow of money as it moves one budget category to the next.<br><br>Which visualization type should you use to display your analysis based on the table shown?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "img": "budget_sankey_table.png",
            "options": [
                "Time Series Chart",
                "Classification tree",
                "Correlation matrix",
                "Sankey Diagram"
            ],
            "a": 3
        },
        {
            "id": 28,
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
            "id": 29,
            "type": "MCQ",
            "q": "Which visualization type is commonly used to display the distribution of a continuous variable. with variable values on the x-axis and corresponding frequencies on the y-axis? Select the correct visualization type in the answer area.<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Option 1",
                "Option 3",
                "Option 2",
                "Option 4"
            ],
            "optionImages": [
                "dist_column_chart.png",
                "dist_line_chart.png",
                "dist_histogram.png",
                "dist_bar_chart.png"
            ],
            "a": 1
        },
        {
            "id": 30,
            "type": "MCQ",
            "q": "You are reviewing a database of restaurant menu items. The table below shows a selection of the data. You need to display only items on the Dessert menu With a Type of Cake. What should you do to nondestructively limit the data display?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "img": "restaurant_menu_dataset.png",
            "options": [
                "Delete all data that has a Menu other than Dessert. Then delete all data that has a Type other than Cake.",
                "Group the data by Menu and then group data on the Dessert menu by Type",
                "Add two slicers, one for Menu and one for Type. Set the Menu slicer to Dessert and the Type slicer to Cake.",
                "Sort the data by Menu and within each Menu, sort by Type."
            ],
            "a": 2
        },
        {
            "id": 31,
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
            "id": 32,
            "type": "MCQ",
            "q": "You believe playing video games increases a person's chance of having a heart attack. In your research. you notice equal evidence in favor of this hypothesis and opposed to it. You spend hours trying to identify the problems with the evidence opposed to your hypothesis, but readily accept the evidence in favor.<br><br>Which type of bias are you demonstrating?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Sampling bias",
                "Anchoring bias",
                "Motivated Reasoning",
                "Confirmation Bias"
            ],
            "a": 3
        },
        {
            "id": 33,
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
            "id": 34,
            "type": "MCQ",
            "q": "What concept allow analytics to drill down into data and examine level of information that maybe crucial in diagnostic analytics?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Completeness",
                "Granularity",
                "Interpretability",
                "Transparency"
            ],
            "a": 1
        },
        {
            "id": 35,
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
        },
        {
            "id": 36,
            "type": "MCQ",
            "q": "Your company has summarized a large set for the region you live in. You need to compare the result from Urban and Rural communities Within your region.<br><br>What is the fastest way to obtain this information?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Collect new data sample",
                "Review data from neighboring regions",
                "Aggregate the data",
                "Disaggregate the data"
            ],
            "a": 3
        },
        {
            "id": 37,
            "type": "MCQ",
            "q": "You are analyzing sales that occurs on a national holiday.<br>What level of data granularity will enable you to perform the most precise analysis?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Years",
                "Days",
                "Hours",
                "Months",
                "Weeks"
            ],
            "a": 2
        },
        {
            "id": 38,
            "type": "MCQ",
            "q": "How do you update a PivotTable after changing some values in its source data range?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "You must delete and recreate the PivotTable",
                "It updates automatically almost immediately",
                "You must save and close the workbook",
                "You must click the Refresh button in the Data or PivotTable Analyze tab"
            ],
            "a": 3,
            "marks": 1
        },
        {
            "id": 39,
            "type": "MCQ",
            "q": "You have a small dataset that contains personally identifiable information (PII). You need to provide the data to an outside source for additional processing. What could you do to protect the Pll but still allow you to eventually relate the additional analysis to your original data?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "Retain every text-based Pll in the original dataset but convert them to number-based features in the new dataset.",
                "Randomly shuffle the original dataset so that each given piece of Pll is no longer associated. with a particular user",
                "Remove every instance of Pll in the original dataset and add them back after the new dataset is retrieved.",
                "Employ pseudonymization on the Pll and use the pseudonym as the key between the new and original datasets."
            ],
            "a": 3
        },
        {
            "id": 40,
            "type": "MCQ",
            "q": "You run a t-test with an alpha value of 5% (Î± = 0.05) in order to test an alternative hypothesis (H'‚). You finish the analysis and discover that the p-value is 0.017. What can you conclude about the null hypothesis (H'‚€)?<br><span style='font-size: 13px; color: #64748b;'>1 point</span>",
            "options": [
                "You reject the null hypothesis (H'‚€)",
                "You Fail to reject the null hypothesis (H'‚€)",
                "You modify the null hypothesis (H'‚€)",
                "You accept the null hypothesis (H'‚€)"
            ],
            "a": 0
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
                "Is there enough evidence to draw conclusin?"
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
                "Is there enough evidence to draw conclusin?": "Hypothesis Testing"
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
                3
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
    ]
};