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

    getUserByFbId(fbId) {
        const sql = `SELECT * FROM users
            WHERE fb_id = $(fb_id)`;
        const params = {
            fb_id: fbId
        };
        return DbProvider.getDb().one(sql, params);
    }

    createUser(user) {
        if (featureToggles.debugLogging.enabled) {
            winston.debug("Creating user");
        }
        if (featureToggles.mockDb.enabled) {
            return {
                id: 123
            };
        }

        const sql = `INSERT INTO users(fb_id, email, name, picture_url, type, onboarding_status, preferences)
                VALUES($(fb_id), $(email), $(name), $(picture_url), $(type), $(onboarding_status), $(preferences))
                ON CONFLICT (email) DO NOTHING`;
        const params = {
            fb_id: user.fbId,
            email: user.email,
            name: user.name,
            picture_url: user.pictureUrl,
            type: UserType.UNSPECIFIED,
            onboarding_status: OnboardingStatusEnum.NOT_STARTED,
            preferences: "{}"
        };
        return DbProvider.getDb().query(sql, params)
            .then(result => user);
    }

    addPreferences(preferences, userId) {
        const sql = `UPDATE users
                SET preferences = $(preferences)
                WHERE id = $(user_id)`;
        const params = {
            preferences: `{${Object.keys(preferences).join(",")}}`,
            user_id: userId
        };
        return DbProvider.getDb().query(sql, params);
    }
}

module.exports = UserReposiory;
