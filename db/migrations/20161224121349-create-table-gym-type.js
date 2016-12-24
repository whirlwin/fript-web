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
    db.createTable('gym_type', {
        id: { type: 'string', primaryKey: true },
        name: { type: 'string', notNull: true },
        created: { type: 'string', notNull: true, defaultValue: 'now()' },
        updated: { type: 'string', notNull: true, defaultValue: 'now()' }
    }, cb);
};

exports.down = function(db, cb) {
    db.dropTable('gym_type', cb)
};

exports._meta = {
    "version": 1
};
