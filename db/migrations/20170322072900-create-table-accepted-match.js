exports.up = function(db, cb) {
    db.createTable('accepted_match', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        user_id: { type: 'string', notNull: true },
        match_user_id: { type: 'string', notNull: true },
        status: { type: 'string', notNull: true, defaultValue: 'active' },
        created: { type: 'date', notNull: true, defaultValue: 'now()' },
        updated: { type: 'date', notNull: true, defaultValue: 'now()' }
    }, cb);
};

exports.down = function(db, cb) {
    db.dropTable('accepted_match', cb);
};

exports._meta = {
  "version": 1
};
