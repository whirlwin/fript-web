class MatchingController {

    getMatches(req, res) {
        // TODO: use assembler
        // TODO: fetch matches
        res.json([
            { name: 'John Doe', age: 20 },
            { name: 'Jane Doe', age: 21 },
            { name: 'Joe Doe', age: 22 },
            { name: 'Zan Doe', age: 23 },
            { name: 'Jenny Doe', age: 24 },
        ]);
    }

    selectMatch(req, res) {

    }
}

module.exports = MatchingController;