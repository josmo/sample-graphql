import fetch from 'node-fetch';
import config from 'config';

const Employee = {
  getById(id) {
    return fetch(config.get('endpoints.employees') + id)
      .then(res => res.json())
  },
};

export { Employee };