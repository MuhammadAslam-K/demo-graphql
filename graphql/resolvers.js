import userSchema from "../model.js";

export default {
    Query: {
        async getUser(_, { ID }) {
            return await userSchema.findOne({ _id: ID })
        },

        async getAllUsers(_, { amount }) {
            console.log("amount", amount)
            return await userSchema.find().limit(amount)
        }
    },
    Mutation: {
        async createUser(_, { userinput }) {
            try {
                const user = new userSchema(userinput)
                return await user.save()
            } catch (error) {
                console.log("error in createUser", error)
            }
        },

        async updateUser(_, { ID, userinput }) {
            return await userSchema.findByIdAndUpdate(
                ID,
                { name, age, gender },
                { new: true }
            )
        }

    }
}