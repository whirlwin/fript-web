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
    db.createTable("early_access", {
        id: { type: "int", primaryKey: true, autoIncrement: true },
        email: { type: "string", notNull: true },
        created: { type: "date", defaultValue: "now()" },
        updated: { type: "date", defaultValue: "now()" }
    }, cb);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
