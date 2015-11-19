import Immutable, { List, Map } from 'immutable';
import { ADD_BLOCK } from '../actions/blocks';
import { uniqueId } from 'lodash';

const initialBlockState = Immutable.fromJS({
  id: uniqueId('block-'),
  name: 'Outer',
  children: [
    {
      id: uniqueId('block-'),
      name: 'Header',
      children: [
        {
          id: uniqueId('block-'),
          name: 'Nav'
        }
      ]
    },
    {
      id: uniqueId('block-'),
      name: 'Inner'
    }
  ]
});

function blocks(state = initialBlockState, action) {
  switch(action.type) {
    case ADD_BLOCK:
      return state.updateIn(action.keyPath.toJS(), (block) => {
        if(!block.get('children')) {
          block = block.set('children', List());
        }
        return block.set('children', block.get('children').push(Map({
          name: action.name,
          id: uniqueId('block-')
        })));
      });
    break;
  }

  return state;
}

export default blocks;
