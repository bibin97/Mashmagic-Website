const https = require('https');
https.get('https://unsplash.com/s/photos/indian-student-portrait', {
  headers: {
    'User-Agent': 'Mozilla/5.0'
  }
}, (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g;
    const matches = data.match(regex) || [];
    const unique = [...new Set(matches)];
    console.log('Students:', unique.slice(0, 10));
  });
});
