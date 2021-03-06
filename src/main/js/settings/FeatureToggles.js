module.exports = {
    apiKeyAuthentication: { enabled: false },
    createLoginEntry: { enabled: true },
    debugLogging: { enabled: true },
    mockFacebookApi: { enabled: false },
    mockDb: { enabled: false },
    mockLoggedInUser: { enabled: false },
    earlyAccessSignUp: { enabled: !!process.env.EARLY_ACCESS_SIGNUP || false },
};
