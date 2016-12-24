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
    db.createTable('facebook_token', {
        token: { type: 'string', primaryKey: true },
        user_id: { type: 'string', notNull: true },
        created: { type: 'date', notNull: true, defaultValue: 'now()' },
        updated: { type: 'date', notNull: true, defaultValue: 'now()' }
    }, cb);
};

exports.down = function(db, cb) {
    db.dropTable('facebook_token', cb);
};

exports._meta = {
    "version": 1
};
