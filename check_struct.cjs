const fs = require('fs');
let f = fs.readFileSync('public/quiz.html', 'utf8');
console.log('quiz-intro:', f.includes('id="quiz-intro"'));
console.log('quiz-container:', f.includes('id="quiz-container"'));
console.log('results-screen:', f.includes('id="results-screen"'));
