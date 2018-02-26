import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Cage from './Cage';

describe('Cage component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Cage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call navigation on press', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };

    const wrapper = shallow(<Cage navigation={navigationMock} />);
    const button = shallow(wrapper.props().button);

    button.simulate('press');

    expect(navigationMock.navigate).toHaveBeenCalledWith('Travolta');
  });
});
