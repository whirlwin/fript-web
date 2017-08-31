exports.up = function(db, cb) {
    db.createTable('user_type_preference', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        user_id: { type: 'string', notNull: true },
        user_type: { type: 'string', notNull: true },
        created: { type: 'date', defaultValue: 'now()' },
        updated: { type: 'date', defaultValue: 'now()' }
    }, cb);
};

exports.down = function(db, cb) {
    db.dropTable('user_type_preference', cb);
};

exports._meta = {
  "version": 1
};
