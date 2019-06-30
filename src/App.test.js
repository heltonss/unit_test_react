import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing hello world', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('h1').exists()).toBe(true);
  expect(wrapper.contains(<h1>Hello World</h1>)).toBe(true);
});
