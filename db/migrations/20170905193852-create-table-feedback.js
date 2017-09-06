exports.up = function(db, cb) {
    db.createTable("feedback", {
        id: { type: "int", primaryKey: true, autoIncrement: true },
        user_id: { type: "string" },
        content: { type: "string", notNull: true },
        created: { type: "date", defaultValue: "now()" },
        updated: { type: "date", defaultValue: "now()" }
    }, cb);
};

exports.down = function(db, cb) {
    db.dropTable("feedback", cb);
};

exports._meta = {
  "version": 1
};
