import React, { Component } from 'react';
import { observer } from 'mobx-react';
import App from './App';
import UserStore from '../stores/UserStore';

const store = new UserStore();

@observer
export default class Index extends Component {
  render() {
    return (
      <App
        first={store.first}
        last={store.last}
        age={store.age}
        salary={store.salary}
        onFirst={first => store.onFirst(first)}
        onLast={last => store.onLast(last)}
        onAge={age => store.onAge(age)}
        onSalary={salary => store.onSalary(salary)}
        isValid={store.isValid}
        salaryRequired={store.salaryRequired}
        reset={() => store.reset()}
      />
    );
  }
}
