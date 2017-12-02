exports.up = function(db, cb) {
    db.createTable('gym_center_preference', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        user_id: { type: 'string', unique: true, notNull: true },
        gym_center_ids: { type: 'int[]', notNull: true },
        status: { type: 'string', notNull: true },
        created: { type: 'date', notNull: true, defaultValue: 'now()' },
        updated: { type: 'date', notNull: true, defaultValue: 'now()' }
    }, cb);
};

exports.down = function(db, cb) {
    db.dropTable('gym_center_preference', cb);
};

exports._meta = {
  "version": 1
};
