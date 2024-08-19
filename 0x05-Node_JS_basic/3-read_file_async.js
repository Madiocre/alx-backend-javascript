const fs = require('node:fs').promises;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    // const header = lines[0].split(',');
    // const fieldIndex = {
    //   firstname: header.indexOf('firstname'),
    //   field: header.indexOf('field')
    // };

    const studentsByField = {};
    let totalStudents = 0;

    for (let i = 1; i < lines.length; i++) {
      const fields = lines[i].split(',');

      if (fields.length <= 3) {
        continue;
      }

      const field = fields[3].trim();
      const firstname = fields[0].trim();

      if (!studentsByField[field]) {
        studentsByField[field] = {
          count: 0,
          list: [],
        };
      }

      studentsByField[field].count++;
      studentsByField[field].list.push(firstname);
      totalStudents++;
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, data] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${data.count}. List: ${data.list.join(', ')}`);
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
};

module.exports = countStudents;
