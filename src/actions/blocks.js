export const ADD_BLOCK = 'ADD_BLOCK';

export function addBlock(name, parent, keyPath) {
  return { type: ADD_BLOCK, name, parent, keyPath };
}
