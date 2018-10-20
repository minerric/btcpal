module.exports = {
    all: async () => {

        const data = await global.db
            .collection('users')
            .find()
            .toArray();

        return data;
    },
    insert: async ({email = '', message = ''}) => {

        return await global.db
            .collection('users')
            .insertOne({
                email,
                message,
            });
    },
    findBy: async ({email}) => {

        return await global.db
            .collection('users')
            .find({email})
            .toArray()
    }
};
