const DbProvider = require('../DBProvider');

class FeedbackRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    createFeedback(userId, content) {
        const sql = "INSERT INTO feedback(user_id, content) VALUES($(user_id), $(content))";
        const params = {
            user_id: userId,
            content: content
        };
        return this.db.query(sql, params);
    }
}

module.exports = FeedbackRepository;
