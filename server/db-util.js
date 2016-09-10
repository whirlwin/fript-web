let pool;

class DbUtil {

    static initializePool(newPool) {
        pool = newPool;
    }

    static getPool() {
        return pool;
    }
}

module.exports = DbUtil;
