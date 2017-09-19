import fetch from 'node-fetch';
import config from 'config';
import grpc from 'grpc';
import grpc_promise from 'grpc-promise';
let PROTO_PATH = __dirname + '/../proto/employee.proto';
let employeeService = grpc.load(PROTO_PATH).proto;
let client = new employeeService.EmployeeService('localhost:50051',
  grpc.credentials.createInsecure());
grpc_promise.promisifyAll(client);

const Employee = {
  getById(id) {
    return fetch(config.get('endpoints.employees') + id)
      .then(res => res.json())
  },
  getMeetingForEmployee(employeeId){
   return client.getEmployeeMeetings()
      .sendMessage({Id: employeeId})
      .then(res => {
        console.log('Client: Stream Message Received = ', res); // Client: Stream Message Received = [{id: 1},{id: 1}]
        return res.map( item => {
          return {text: item.Text, title: item.Title, employeeId: item.EmployeeId, id: item.Id}
        });
      })
     .catch(err => console.error(err))
  }
};

export { Employee };