const SqlLoader = require('../tools/SqlLoader');

exports.up = function(db) {
    return SqlLoader.loadSql('20170103093458-insert-into-gym-center-up.sql')
        .then(sql => db.runSql(sql));
};

exports.down = function(db) {
};

exports._meta = {
  "version": 1
};
