import { Employee } from './connectors';

const resolvers = {
  Query: {
    employee(root, args){
      return Employee.getById(args.id);
    },
  },
  Employee: {
    meetings(employee){
      return [
        { id: 1, title: 'A metting', text: 'Some text'},
        { id: 2, title: 'Another meeting', text: 'Some other text'}
      ];
    },
  },
  Meeting: {
    employee(metting){
      return { id: 1, name: 'Hello', status: 'World', age: 12 };
    },
  },
};

export default resolvers;