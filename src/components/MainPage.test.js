import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

describe('test the MainPage component', () => {
  it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders MainPage without crashing when the isPending value is true', () => {
    const mockPropsIsPending = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true,
    };
    const wrapperIsPending = shallow(<MainPage {...mockPropsIsPending} />)
    expect(wrapperIsPending).toMatchSnapshot();
  });
  it('filters robots correctly', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
  });
  it('filters robots correctly with props modified', () => {
    const mockPropsModified = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'John',
          email: 'john@gmail.com',
        }
      ],
      searchField: 'j',
      isPending: false,
    };
    const wrapper2 = shallow(<MainPage {...mockPropsModified} />)
    expect(wrapper2.instance().filterRobots()).toEqual([
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      }
    ]);
  });
  it('filters robots correctly with props modified and a wrong search field', () => {
    const mockPropsModifiedAgain = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: 'John',
          email: 'john@gmail.com',
        }
      ],
      searchField: 'a',
      isPending: false,
    };
    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockPropsModifiedAgain} />)
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
  });
});
