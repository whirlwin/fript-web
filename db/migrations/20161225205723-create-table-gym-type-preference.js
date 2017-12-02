exports.up = function(db, cb) {
    db.createTable('gym_type_preference', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        gym_type_ids: { type: 'int[]', notNull: true },
        user_id: { type: 'int', unique: true, notNull: true },
        status: { type: 'string', notNull: true, },
        created: { type: 'date', defaultValue: 'now()' },
        updated: { type: 'date', defaultValue: 'now()' }
    }, cb);
};

exports.down = function(db, cb) {
    db.dropTable('gym_type_preference', cb);
};

exports._meta = {
    "version": 1
};
