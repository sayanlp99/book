import { Book } from '../models/book';

const resolvers = {
  Query: {
    books: async () => {
      return await Book.findAll();
    },
  },
  Mutation: {
    addBook: async (_: any, args: { title: string, author: string }) => {
      const { title, author } = args;
      return await Book.create({ title, author });
    },
  },
};

export default resolvers;
