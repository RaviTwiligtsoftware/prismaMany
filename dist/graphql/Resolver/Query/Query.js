import { ErrorCodes } from "../../Utils/Errors/baseErrors";
import { BaseError } from "../../Types/errorTypes";
const Query = {
    user: async (_, { id }, { userInfo, prisma }) => {
        if (!userInfo)
            return null;
        let user;
        try {
            user = prisma?.user.findUnique({
                where: {
                    id: userInfo.userId
                }
            });
        }
        catch (error) {
            throw new BaseError("Failed to retrieve user from db", ErrorCodes.DB_ERROR);
        }
        return user;
    },
    // Resolver function to fetch all users
    users: async (_, __, { prisma }) => {
        return prisma.user.findMany();
    },
    // Resolver function to fetch a single post by ID
    post: async (_, { id }, { prisma }) => {
        return prisma.post.findUnique({ where: { id } });
    },
    // Resolver function to fetch all posts
    posts: async (_, __, { prisma }) => {
        return prisma.post.findMany();
    },
    // Resolver function to fetch a single tag by ID
    tag: async (_, { id }, { prisma }) => {
        return prisma.tag.findUnique({ where: { id } });
    },
    // Resolver function to fetch all tags
    tags: async (_, __, { prisma }) => {
        return prisma.tag.findMany();
    },
};
export default Query;
