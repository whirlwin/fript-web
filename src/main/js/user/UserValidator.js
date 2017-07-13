const Try = require('try-js');

class UserValidator {

    validateHasFacebookToken(facebookToken) {
        if (facebookToken !== undefined && facebookToken !== null) {
            return Promise.resolve(facebookToken);
        } else {
            return Promise.reject(`Invalid Facebook token: ${facebookToken}`);
        }
    }

    tryValidateUpdateUser(user) {
        return Try.of(() => user)
            .flatMap(user => this._tryValidateIsPt(user));
    }

    tryValidateHasFacebookToken(facebookToken) {
        if (facebookToken !== null && facebookToken !== undefined) {
            return Try.success(facebookToken);
        } else {
            return Try.failure(`Invalid Facebook token: ${facebookToken}`)
        }
    }

    _tryValidateIsPt(user) {
        if (user.isPt === true || user.isPt === false) {
            return Try.success(user);
        } else {
            return Try.failure(`Invalid value value for isPt: ${user.isPt}`);
        }
    }
}

module.exports = UserValidator;
