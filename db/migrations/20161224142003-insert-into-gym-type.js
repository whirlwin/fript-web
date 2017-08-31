const SqlLoader = require('../tools/SqlLoader');

exports.up = function(db) {
    return SqlLoader.loadSql('20161224142003-insert-into-gym-type-up.sql')
        .then(sql => db.runSql(sql));
};

exports.down = function(db) {
};

exports._meta = {
  "version": 1
};
