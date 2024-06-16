const pool = require('../../db');
const queries = require('./queries')

const getStudents = (req, res) => {
    pool.query("", (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while fetching students' });
        } else {
            res.status(200).json(results.rows); // Note: it's 'rows', not 'row'
        }
    });
};

module.exports = {
    getStudents,
};
