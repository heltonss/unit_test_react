import todosReducer, {
  Creators as TodosActions
} from '../../store/ducks/todos';

describe('Todos Reducer', () => {
  it('Shoul be able to add todos', () => {
    const state = todosReducer({ data: [] }, TodosActions.addTodo('yes todo'));

    expect(state.data[0]).toBe('yes todo');
  });

  it('Shoul be able to remove todos', () => {
    const state = todosReducer(
      { data: ['Fazer café'] },
      TodosActions.completeTodo('Fazer café')
    );

    expect(state.data.length).toBe(0);
  });
});
