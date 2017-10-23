class UserValidator {

    validateHasFacebookToken(facebookToken) {
        if (facebookToken !== undefined && facebookToken !== null) {
            return Promise.resolve(facebookToken);
        } else {
            return Promise.reject(`Invalid Facebook token: ${facebookToken}`);
        }
    }
}

module.exports = UserValidator;
