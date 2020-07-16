var mysql = require('mysql');

// membuat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'',
    database:'dbrestapi'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Mysqli terkoneksi');
});

module.exports = conn;