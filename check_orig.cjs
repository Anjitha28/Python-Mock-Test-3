const fs = require('fs');
let f = fs.readFileSync('D:/KVJ Analytics Internship/KVJ Analytics - Copy/Quiz DD/quiz_data.js', 'utf8');

// The file might declare const quizData = {...} or const dataQuizData = {...}
// Let's just find the keys by parsing it.
// We can strip the "const quizData =" part.
let jsonStr = f.replace(/const\s+(quizData|dataQuizData)\s*=\s*/, '');
// there might be a trailing semicolon
jsonStr = jsonStr.replace(/;\s*$/, '');
try {
  let data = JSON.parse(jsonStr);
  console.log('Keys:', Object.keys(data));
  if (data.da_mock) console.log('da_mock length:', data.da_mock.length);
  if (data.da_mock3) console.log('da_mock3 length:', data.da_mock3.length);
  if (data.mock3) console.log('mock3 length:', data.mock3.length);
} catch (e) {
  console.log('Error parsing JSON:', e.message);
  // Just regex match lengths
  let matches = f.match(/"da_mock":\s*\[/g);
  console.log('regex da_mock:', matches ? matches.length : 0);
}
