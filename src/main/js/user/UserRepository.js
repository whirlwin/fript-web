const DbProvider = require('../DBProvider');

const OnboardingStatus = {
    NOT_STARTED: 'not_started',
    STARTED: 'started',
    COMPLETED: 'completed'
};

class UserReposiory {

    constructor() {
        this.db = DbProvider.getDb();
    }

    createUser(user) {
        const sql = `INSERT INTO users(id, email, name, picture_url)
                VALUES($(id), $(email), $(name), $(picture_url))
                ON CONFLICT (id) DO NOTHING`;
        const params = {
            id: user.id,
            email: user.email,
            name: user.name,
            picture_url: user.picture_url,
            is_pt: false,
            onboarding_status: OnboardingStatus.NOT_STARTED
        };
        return this.db.query(sql, params)
            .then(result => user);
    }
}

module.exports = UserReposiory;
