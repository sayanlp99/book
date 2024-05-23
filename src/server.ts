import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import resolvers from './resolvers/bookResolver';
import { sequelize } from './database/database';

const server_port = 8080;

const typeDefs = readFileSync('./src/schemas/schema.graphql', 'utf8');

sequelize.sync();

async function startServer(){

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: server_port },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

export { startServer };
