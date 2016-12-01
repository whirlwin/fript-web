class UserMapper {

    mapFacebookUserToUser(facebookUser) {
        return {
            id: facebookUser.id,
            email: facebookUser.email,
            name: facebookUser.name,
            picture_url: facebookUser.picture.data.url
        };
    }
}

module.exports = UserMapper;