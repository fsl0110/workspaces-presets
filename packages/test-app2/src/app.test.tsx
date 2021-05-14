import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './app';

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

const findByTestAttr = (wrapper: ShallowWrapper, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
};

const wrapper: ShallowWrapper = setup();

describe('Test AppComponent', () => {
  test('renders without error', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
  });

  test('renders button', () => {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });

  test('renders counter display', () => {
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
  });

  test('counter starts at 0', () => {
    const count = findByTestAttr(wrapper, 'count');
    expect(count.text()).toBe('0');
  });

  test('clicking on button increments counter display', () => {
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');

    const count = findByTestAttr(wrapper, 'count');
    expect(count.text()).toBe('1');
  });

  test('clicking on button decrements counter display', () => {
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');

    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });

  test('negative counter error message appears', () => {
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click');

    const error = findByTestAttr(wrapper, 'error');
    expect(error.length).toBe(1);
  });

  test('negative counter error message disappears', () => {
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');

    const error = findByTestAttr(wrapper, 'error');
    expect(error.length).toBe(0);
  });
});
