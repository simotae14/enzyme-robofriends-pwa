import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly initialize the counter value', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  // retrieve the value of the state
  const instance = wrapper.instance();
  expect(instance.state.count).toBe(1);
});

it('correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 3 });
  // test a keypress event that it doesn't generate a new state
  wrapper.find('[id="counter"]').simulate('keypress');
  expect(wrapper.state()).toEqual({ count: 3 });
  // test the correct value of all the props passed
  expect(wrapper.props().color).toEqual('red');
});
