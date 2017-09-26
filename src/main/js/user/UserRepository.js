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
            winston.debug("Creating user");
        }

        const sql = `INSERT INTO users(fb_id, email, name, picture_url, type, onboarding_status)
                VALUES($(fb_id), $(email), $(name), $(picture_url), $(type), $(onboarding_status))
                ON CONFLICT (email) DO NOTHING`;
        const params = {
            fb_id: user.id,
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
