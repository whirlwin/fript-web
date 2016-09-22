'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function(db, cb) {
    db.createTable('login', {
        id: { type: 'int', primaryKey: true },
        facebook_id: { type: 'int', unique: true },
        created: { type: 'date', notNull: true },
        updated: { type: 'date', notNull: true }
    }, cb);
};

exports.down = function(db, cb) {
    db.dropTable('login', cb);
};
