module.exports = {
    all: async () => {

        const data = await global.db
            .collection('users')
            .find()
            .toArray();

        return data;
    },
    insert: async (_user) => {

        return await global.db
            .collection('users')
            .insertOne(_user);
    },
};
