const fs = require('fs');
let f = fs.readFileSync('D:/KVJ Analytics Internship/KVJ Analytics - Copy/Quiz DD/quiz_data.js', 'utf8');
let m = f.match(/"da_mock[a-zA-Z0-9_]*"/g);
console.log([...new Set(m)]);
