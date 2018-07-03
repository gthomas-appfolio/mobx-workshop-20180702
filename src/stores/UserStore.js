import { action, computed, observable } from 'mobx';

export default class UserStore {
  @observable first = '';
  @observable last = '';
  @observable age = 0;
  @observable salary = 0;

  /*
   * @action is used below to flag externally-triggered mutation of observables.
   * While not required, this ensures that any @observer component that references the
   * mutated observables is only re-rendered once after the @action is complete.
   * (See `reset` below for example.)
   */

  @action // @action is used when mutating any observable
  onFirst(value) {
    this.first = value;
  }

  @action
  onLast(value) {
    this.last = value;
  }

  @action
  onAge(value) {
    this.age = value;
  }

  @action
  onSalary(value) {
    this.salary = value;
  }

  @action
  reset() {
    // Without @action above, this could result in 4 re-renders!
    this.first = '';
    this.last = '';
    this.age = 0;
    this.salary = 0;
  }

  /*
   * @computed is used below to flag derived values from other observables.
   * This ensures that any @observer component that references this value
   * is re-rendered when it changes.
   */

  @computed
  get isValid() {
    return (
      (this.first.length > 0) &&
      (this.last.length > 0) &&
      ((this.age >= 13 && this.age < 18) || (this.age >= 18 && this.salary > 0))
    );
  }

  @computed
  get salaryRequired() {
    return this.age >= 18;
  }
}
