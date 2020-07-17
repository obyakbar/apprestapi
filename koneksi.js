var mysql = require('mysql');

// membuat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'',
    database:'dbrestapi'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Mysqli terkoneksi');
});

module.exports = conn;