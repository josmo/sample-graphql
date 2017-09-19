import { Employee } from './connectors';

const resolvers = {
  Query: {
    employee(root, args){
      return Employee.getById(args.id);
    },
  },
  Employee: {
    meetings(employee){
      return Employee.getMeetingForEmployee(employee.id);
    },
  },
  Meeting: {
    employee(meeting){
      return Employee.getById(meeting.employeeId);
    },
  },
};

export default resolvers;