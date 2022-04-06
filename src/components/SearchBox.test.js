import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it('expect to render SearchBox component', () => {
  const searchfieldMock = 'a';
  const searchChangeMock = jest.fn();
  expect(shallow(<SearchBox searchField={searchfieldMock} searchChange={searchChangeMock} />)).toMatchSnapshot();
});
