/* eslint-env mocha */

import assert from 'assert';
import UserStore from '../../src/stores/UserStore';

describe('UserStore', () => {
  it('should be invalid when no values', () => {
    const store = new UserStore();
    assert.equal(store.isValid, false);
  });

  it('should be valid when all values are correct', () => {
    const store = new UserStore();
    store.first = 'Gary';
    store.last = 'Thomas';
    store.age = 18;
    store.salary = 12345;
    assert.equal(store.isValid, true);
  });

  it('should not allow younger than 13', () => {
    const store = new UserStore();
    store.first = 'Gary';
    store.last = 'Thomas';
    store.age = 12;
    assert.equal(store.isValid, false);

    store.age = 13;
    assert.equal(store.isValid, true);
  });

  it('should only require salary when 18 or older', () => {
    const store = new UserStore();
    store.first = 'Gary';
    store.last = 'Thomas';
    store.age = 13;
    assert.equal(store.isValid, true);
    assert.equal(store.salaryRequired, false);

    store.age = 18;
    assert.equal(store.isValid, false);
    assert.equal(store.salaryRequired, true);

    store.salary = 123456;
    assert.equal(store.isValid, true);
  });
});
