const fs = require('fs');
console.log(fs)

// fs.mkdir('Dogs', { recursive: true }, err => {
//     console.log('I am inside callback')
//     if (err) throw err;
// });

// fs.mkdirSync('Cats')

// console.log('I come AFTER mkdir file')

// const folderName = process.argv[2] || 'Project'
// try {
//     fs.mkdirSync(folderName);
//     fs.writeFileSync(`${folderName}/index.html`, 'here')
//     fs.writeFileSync(`${folderName}/app.js`, 'there')
//     fs.writeFileSync(`${folderName}/stl.css`, 'where')    
// } catch (e) {
//     console.log(e)
// }
