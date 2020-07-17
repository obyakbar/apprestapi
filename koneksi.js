var mysql = require('mysql');

// membuat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'restapi'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Mysqli terkoneksi');
});

module.exports = conn;