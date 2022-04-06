import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

it('expect to render ErrorBoundary component', () => {
  expect(shallow(<ErrorBoundary><div>ciao</div></ErrorBoundary>)).toMatchSnapshot();
});

it('correctly use the componentDidCatch', () => {
  const wrapper = shallow(<ErrorBoundary><div>ciao</div></ErrorBoundary>);
  const instance = wrapper.instance();
  instance.componentDidCatch('oh nooos an error', 'it is an error');
  expect(instance.state.hasError).toBe(true);
  // render with error
  expect(wrapper).toMatchSnapshot();
})
/*
it('correctly initialize the counter value', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  // retrieve the value of the state
  const instance = wrapper.instance();
  expect(instance.state.count).toBe(1);
  // test the shouldComponentUpdate without state change
  const shouldUpdate = instance.shouldComponentUpdate({}, { count: 1 });
  expect(shouldUpdate).toBe(false);
});

it('correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  // test the shouldComponentUpdate without state change
  const instance = wrapper.instance();
  const shouldUpdate2 = instance.shouldComponentUpdate({}, { count: 1});
  expect(shouldUpdate2).toBe(true);
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 3 });
  // test a keypress event that it doesn't generate a new state
  wrapper.find('[id="counter"]').simulate('keypress');
  expect(wrapper.state()).toEqual({ count: 3 });
  // test the correct value of all the props passed
  expect(wrapper.props().color).toEqual('red');
  // forcing the state value
  wrapper.setState({ count: 5 });
  expect(wrapper.state()).toEqual({ count: 5 });
});
*/
