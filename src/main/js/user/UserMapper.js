class UserMapper {

    mapToUser(facebookUser) {
        return {
            fbId: facebookUser.id,
            email: facebookUser.email,
            name: facebookUser.name,
            pictureUrl: facebookUser.picture.data.url
        };
    }
}

module.exports = UserMapper;
