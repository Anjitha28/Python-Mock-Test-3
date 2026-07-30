const fs = require('fs');
let f = fs.readFileSync('public/quiz.html', 'utf8');
let matches = f.match(/<div[^>]*id=\"([^\"]+)\"[^>]*>/g);
if(matches) console.log(matches);
