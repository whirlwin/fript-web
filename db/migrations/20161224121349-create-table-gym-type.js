exports.up = function(db, cb) {
    db.createTable("gym_type", {
        id: { type: "int", primaryKey: true, autoIncrement: true },
        name: { type: "string", notNull: true },
        country: { type: "string", notNull: true },
        status: { type: "string", notNull: true },
        created: { type: "date", notNull: true, defaultValue: "now()" },
        updated: { type: "date", notNull: true, defaultValue: "now()" }
    }, cb);
};

exports.down = function(db, cb) {
    db.dropTable("gym_type", cb)
};

exports._meta = {
    "version": 1
};
