import { shallow, mount } from 'enzyme';
import React from 'react';
import CounterButtonMemo from './CounterButtonMemo';

it('expect to render CounterButtonMemo component', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButtonMemo color={mockColor} />)).toMatchSnapshot();
});

it('correctly initialize the counter value', () => {
  const mockColor = 'red';
  const wrapper = mount(<CounterButtonMemo color={mockColor} />);
  expect(wrapper.find('[id="counter"]').text()).toEqual("Count: 1");
});

it('correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = mount(<CounterButtonMemo color={mockColor} />);
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.find('[id="counter"]').text()).toEqual("Count: 2");
  // test a keypress event that it doesn't generate a new state
  wrapper.find('[id="counter"]').simulate('keypress');
  expect(wrapper.find('[id="counter"]').text()).toEqual("Count: 2");
  // test the correct value of all the props passed
  expect(wrapper.props().color).toEqual('red');
});
