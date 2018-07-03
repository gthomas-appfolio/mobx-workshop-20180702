import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Button, ButtonToolbar, Col, Container, Input, FormLabelGroup, Row } from 'react-gears';

@observer
export default class App extends Component {
  static propTypes = {
    age: PropTypes.number,
    first: PropTypes.string,
    isValid: PropTypes.bool,
    last: PropTypes.string,
    onAge: PropTypes.func,
    onFirst: PropTypes.func,
    onLast: PropTypes.func,
    onSalary: PropTypes.func,
    reset: PropTypes.func,
    salary: PropTypes.number,
    salaryRequired: PropTypes.bool
  };

  render() {
    const {
      age,
      first,
      isValid,
      last,
      onAge,
      onFirst,
      onLast,
      onSalary,
      reset,
      salary,
      salaryRequired
    } = this.props;

    return (
      <div id="app" className="mt-4">
        <Container>
          <h1>Add User</h1>
          <hr className="mb-4" />

          <FormLabelGroup label="First Name">
            <Input value={first} onChange={e => onFirst(e.target.value)} />
          </FormLabelGroup>
          <FormLabelGroup label="Last Name">
            <Input value={last} onChange={e => onLast(e.target.value)} />
          </FormLabelGroup>
          <FormLabelGroup label="Age">
            <Input
              type="number"
              min={0}
              max={120}
              value={age}
              onChange={e => onAge(parseInt(e.target.value, 10))}
            />
          </FormLabelGroup>

          {salaryRequired && (
            <FormLabelGroup label="Salary">
              <Input
                type="number"
                min={0}
                max={120}
                value={salary}
                onChange={e => onSalary(parseInt(e.target.value, 10))}
              />
            </FormLabelGroup>
          )}

          <Row>
            <Col sm={{ offset: 3 }}>
              <ButtonToolbar>
                <Button color="primary" disabled={!isValid}>
                  Save
                </Button>
                <Button onClick={() => reset()}>Cancel</Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
