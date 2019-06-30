import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import { Creators as TodosActions } from '../../store/ducks/todos';

import TodoList from '../../TodoList';

const mockStore = createStore();

const INITIAL_STATE = {
  todos: {
    data: ['Fazer café', 'Estudar React']
  }
};

const store = mockStore(INITIAL_STATE);

it('Should render the list', () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  console.log(wrapper.html());

  expect(wrapper.find('li').length).toBe(2);
});

it('Should be able to add new todos', () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  wrapper.find('TodoList').setState({ newTodo: 'novo todo' });
  wrapper.find('button').simulate('click');

  expect(store.getActions()).toContainEqual(TodosActions.addTodo('novo todo'));
});
// it('Should render the list and button', () => {
//   const wrapper = mount(
//     <Provider store={store}>
//       <TodoList />
//     </Provider>
//   );

//   expect(wrapper.find('ul').exists()).toBe(true);
//   expect(wrapper.find("input[name='todo']").exists()).toBe(true);
//   expect(wrapper.find('button').exists()).toBe(true);
// });

// it('Should render the list and button', () => {
//   const wrapper = mount(<TodoList />);

//   wrapper.find("input[name='todo']").simulate('change', {
//     target: { value: 'Novo todo' }
//   });

//   wrapper.find('button').simulate('click');

//   expect(wrapper.find('ul').contains(<li>Novo todo</li>));
// });

// it('Should add new todo to local storage', () => {
//   const mockLocalItem = jest.fn();

//   global.localStorage.__proto__.getItem = jest.fn().mockReturnValue('[]');
//   global.localStorage.__proto__.setItem = mockLocalItem;

//   const wrapper = mount(<TodoList />);

//   wrapper.setState({ newTodo: 'Novo todo' });
//   wrapper.instance().handleAddTodo();

//   expect(mockLocalItem).toHaveBeenLastCalledWith(
//     'todos',
//     JSON.stringify(['Novo todo'])
//   );
// });

// it('Should load todos in componentDidMount', () => {
//   const getLocalItem = jest
//     .fn()
//     .mockReturnValue(JSON.stringify(['fazer café']));
//   global.localStorage.__proto__.getItem = getLocalItem;

//   const wrapper = mount(<TodoList />);

//   expect(wrapper.state('todos')).toEqual(['fazer café']);
// });
