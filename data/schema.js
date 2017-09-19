import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import resolvers from './resolvers';
// import mocks from './mocks';

const typeDefs = `
type Employee {
  id: Int
  name: String
  age: Int
  status: String
  meetings: [Meeting]
}
type Meeting {
  id: Int
  title: String
  text: String
  employee: Employee
}
type Query {
  employee(id: Int): Employee
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
