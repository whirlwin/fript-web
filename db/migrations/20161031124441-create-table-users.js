exports.up = function(db, cb) {
    db.createTable("users", {
        id: { type: "string", primaryKey: true, autoIncrement: true },
        fb_id: { type: "string", notNull: true },
        email: { type: "string", notNull: true, unique: true },
        name: { type: "string", notNull: true },
        picture_url: { type: "string", notNull: true },
        type: { type: "string", notNull: true },
        onboarding_status: { type: "string", notNull: true },
        preferences: { type: "text[]", notNull: true },
        created: { type: "date", notNull: true, defaultValue: "now()" },
        updated: { type: "date", notNull: true, defaultValue: "now()" }
    }, cb);
};

exports.down = function(db, cb) {
    db.dropTable("users", cb);
};
