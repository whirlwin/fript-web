class AppValidator {

    validate() {
        this.validateEnvVariables();
    }

    validateEnvVariables() {
        if (!process.env.ENV) {
            throw new Error('Environment variable ENV not set');
        }
        if (!process.env.DB_PASSWORD) {
            throw new Error('Environment variable DB_PASSWORD not set');
        }
    }
}

module.exports = AppValidator;