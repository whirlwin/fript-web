const Try = require('try-js');

class UserValidator {

    validateUpdateUser(user) {
        return Try.of(() => user)
            .flatMap(user => this._validateIsPt(user));
    }

    _validateIsPt(user) {
        if (user.isPt === true || user.isPt === false) {
            return Try.success(user);
        } else {
            return Try.failure(`Invalid value value for isPt: ${user.isPt}`);
        }
    }
}

module.exports = UserValidator;