const fs = require('fs');
const path = require('path');

class SqlLoader {

    static loadSql(filename) {
        const filePath = path.join(__dirname, '../sqls', filename);
        return new Promise(function (resolve, reject) {
            fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

}

module.exports = SqlLoader;
