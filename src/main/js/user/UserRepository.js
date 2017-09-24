const DbProvider = require("../DBProvider");
const featureToggles = require("../settings/FeatureToggles");
const winston = require("winston");
const OnboardingStatusEnum = require("../onboarding/OnboardingStatusEnum");

const UserType = {
    UNSPECIFIED: "unspecified",
    PT: "pt",
    NON_PT: "non_pt"
};

class UserReposiory {

    constructor() {
        this.db = DbProvider.getDb();
    }

    createUser(user) {
        if (featureToggles.debugLogging.enabled) {
            winston.info("Creating user");
        }

        const sql = `INSERT INTO users(id, email, name, picture_url, type, onboarding_status)
                VALUES($(id), $(email), $(name), $(picture_url), $(type), $(onboarding_status))
                ON CONFLICT (id) DO NOTHING`;
        const params = {
            id: user.id,
            email: user.email,
            name: user.name,
            picture_url: user.picture_url,
            type: UserType.UNSPECIFIED,
            onboarding_status: OnboardingStatusEnum.NOT_STARTED
        };
        return DbProvider.getDb().query(sql, params)
            .then(result => user);
    }
}

module.exports = UserReposiory;
