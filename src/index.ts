// import { ApolloServer } from '@apollo/server';
// import { typeDefs  } from '../src/graphql/Schema/';
// import { resolvers } from './graphql/resolvers/resolvers';
// import express, { json } from 'express';
// import cors from "cors";
// import { createServer } from 'http';
// import { expressMiddleware } from "@apollo/server/express4";
// import { IContext, prisma } from './utils/database/prisma/prismaContext';
// import { getUserFromToken } from './utils/functions/getUserFromToken';
// import * as dotenv from 'dotenv';
// import { error } from 'console';
// import { GraphQLFormattedError } from 'graphql';
// import { BaseError } from './utils/error/base.error';

// dotenv.config();

// async function main() {
   
//    const app = express();
//    const httpServer = createServer(app);

//    const server = new ApolloServer<IContext>({
//     typeDefs,
//     resolvers,
//     formatError: (error: any) => {
//         return {
//            message: error.extensions.message ? error.extensions.message : error.message,
//            code: error.extensions.code ?  error.extensions.code : "INTERNAL_SERVER_ERROR",
//            path: error.path
//         }
//     }
//     });

//     await server.start();

//     app.use("/", cors<cors.CorsRequest>(), express.json(), expressMiddleware(server, {
//         context: async ({req}: any): Promise<IContext> => {
//             const userInfo =  await getUserFromToken(req.headers.bearer)
//             return { 
//                 prisma: prisma,
//                 userInfo
//             }
//         }
//     }));

//     const PORT = Number(process.env.PORT) || 8080;
//     await httpServer.listen(PORT, "0.0.0.0", () => {
//         console.info(`Server is now running at ${PORT}`);
//     });
// }
// main();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001;

// Middleware to parse JSON requests
app.use(express.json());

// Route to handle GET requests to the root URL
app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
