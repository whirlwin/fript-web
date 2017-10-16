exports.up = function(db, cb) {
    db.createTable('facebook_token', {
        token: { type: 'string', primaryKey: true },
        user_id: { type: 'int', notNull: true },
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
