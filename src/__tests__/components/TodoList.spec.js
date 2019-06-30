import React from 'react';
import { mount } from 'enzyme';
import TodoList from '../../TodoList';

it('Should render the list and button', () => {
  const wrapper = mount(<TodoList />);

  expect(wrapper.find('ul').exists()).toBe(true);
  expect(wrapper.find("input[name='todo']").exists()).toBe(true);
  expect(wrapper.find('button').exists()).toBe(true);
});

it('Should render the list and button', () => {
  const wrapper = mount(<TodoList />);

  wrapper.find("input[name='todo']").simulate('change', {
    target: { value: 'Novo todo' }
  });

  wrapper.find('button').simulate('click');

  expect(wrapper.find('ul').contains(<li>Novo todo</li>));
});

it('Should add new todo to local storage', () => {
  const wrapper = mount(<TodoList />);
  const mockLocalItem = jest.fn();

  global.localStorage.__proto__.setItem = mockLocalItem;

  wrapper.setState({ newTodo: 'Novo todo' });
  wrapper.instance().handleAddTodo();

  expect(mockLocalItem).toHaveBeenLastCalledWith(
    'todos',
    JSON.stringify(['Novo todo'])
  );
});
