'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res) {
    response.oke("Aplikasi res api berjalan")
}