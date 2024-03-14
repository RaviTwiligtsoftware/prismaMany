import { Context } from '../../Utils/Database/context'; // Import your context type
import { ErrorCodes } from "../../Utils/Errors/baseErrors";
import  { BaseError }  from "../../Types/errorTypes";



const Query = {

  user: async (_: any, { id }: { id: number }, { userInfo,prisma }: Context) => {
    if (!userInfo) return null;
    let user;
    try {
        user = prisma?.user.findUnique({
            where: {
                id: userInfo.userId
            }
    });
    } catch (error) {
        throw new BaseError ("Failed to retrieve user from db", ErrorCodes.DB_ERROR);

    }
    return user;
},

  // Resolver function to fetch all users
  users: async (_: any, __: any, { prisma }: Context) => {
    return prisma.user.findMany();
  },

  // Resolver function to fetch a single post by ID
  post: async (_: any, { id }: { id: number }, { prisma }: Context) => {
    return prisma.post.findUnique({ where: { id } });
  },

  // Resolver function to fetch all posts
  posts: async (_: any, __: any, { prisma }: Context) => {
    return prisma.post.findMany();
  },

  // Resolver function to fetch a single tag by ID
  tag: async (_: any, { id }: { id: number }, { prisma }: Context) => {
    return prisma.tag.findUnique({ where: { id } });
  },

  // Resolver function to fetch all tags
  tags: async (_: any, __: any, { prisma }: Context) => {
    return prisma.tag.findMany();
  },
};

export default Query;
