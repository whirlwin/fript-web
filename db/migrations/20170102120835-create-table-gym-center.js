exports.up = function(db, cb) {
    db.createTable("gym_center", {
        id: { type: "int", primaryKey: true, autoIncrement: true },
        gym_type_id: { type: "int", notNull: true },
        lat: { type: "decimal", notNull: true },
        lng: { type: "decimal", notNull: true },
        created: { type: "date", notNull: true, defaultValue: "now()" },
        updated: { type: "date", notNull: true, defaultValue: "now()" }
    }, cb);
};

exports.down = function(db, cb) {
    db.dropTable("gym_center", cb);
};

exports._meta = {
    "version": 1
};
