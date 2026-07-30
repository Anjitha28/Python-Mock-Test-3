const fs = require('fs');

let f1 = fs.readFileSync('public/index.html', 'utf8');
f1 = f1.replace(/https:\/\/script\.google\.com\/macros\/[^\s"']+/g, '/api');
f1 = f1.replace(/module_quiz\.html/g, 'quiz.html');
fs.writeFileSync('public/index.html', f1);

let f2 = fs.readFileSync('public/quiz.html', 'utf8');
f2 = f2.replace(/https:\/\/script\.google\.com\/macros\/[^\s"']+/g, '/api');
f2 = f2.replace(/let\s+modId\s*=\s*'[^']+';/, "let modId = 'mock3';");
f2 = f2.replace(/let\s+prettyName\s*=\s*'[^']+';/, "let prettyName = 'Python Mastery Mock Test 3';");
fs.writeFileSync('public/quiz.html', f2);
console.log('URLs replaced');
