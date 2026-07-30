const fs = require('fs');
let content = fs.readFileSync('D:/KVJ Analytics Internship/KVJ Analytics - Copy/Quiz DD/quiz_data.js', 'utf8');

content = content.replace('const quizData =', 'var quizData =');
eval(content);

const mock3Data = quizData['mock3'];
if (!mock3Data) {
    console.error('mock3 not found');
    process.exit(1);
}

const newContent = 'const quizData = {\n  "mock3": ' + JSON.stringify(mock3Data, null, 4) + '\n};\n';
fs.writeFileSync('public/data/quiz_data.js', newContent, 'utf8');
console.log('Successfully extracted mock3 to public/data/quiz_data.js');
