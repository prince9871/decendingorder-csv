const fs = require('fs');

const data = fs.readFileSync('frequency.csv', 'utf-8')
  .split('\n')
  .map(line => line.split(','))
  .map(columns => ({
    column_1: columns[0],
    column_2: columns[1],
    column_3: columns[2],
  }));

const sortedData = data.sort((a, b) => b.column_1.localeCompare(a.column_1));

fs.writeFile('decending_data.csv', sortedData.map(item => Object.values(item).join(',')).join('\n'), (err) => {
  if (err) throw err;
  console.log('decending order data has been written to decending_data.csv');
});
