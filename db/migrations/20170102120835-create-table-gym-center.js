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
    db.createTable('gym_center', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        gym_type_id: { type: 'string', notNull: true },
        lat: { type: 'decimal', notNull: true },
        lng: { type: 'decimal', notNull: true },
        created: { type: 'date', notNull: true, defaultValue: 'now()' },
        updated: { type: 'date', notNull: true, defaultValue: 'now()' }
    }, cb);
};

exports.down = function(db, cb) {
    db.dropTable('gym_center', cb);
};

exports._meta = {
    "version": 1
};