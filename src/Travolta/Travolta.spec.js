import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Travolta from './Travolta';

describe('Travolta component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Travolta />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call navigation on press', () => {
    const navigationMock = {
      goBack: jest.fn(),
    };

    const wrapper = shallow(<Travolta navigation={navigationMock} />);
    const button = shallow(wrapper.props().button);

    button.simulate('press');

    expect(navigationMock.goBack).toHaveBeenCalled();
  });
});
