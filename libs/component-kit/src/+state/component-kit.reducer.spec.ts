import { componentKitReducer } from './component-kit.reducer';
import { componentKitInitialState } from './component-kit.init';
import { ComponentKit } from './component-kit.interfaces';
import { DataLoaded } from './component-kit.actions';

describe('componentKitReducer', () => {
  it('should work', () => {
    const state: ComponentKit = {};
    const action: DataLoaded = {type: 'DATA_LOADED', payload: {}};
    const actual = componentKitReducer(state, action);
    expect(actual).toEqual({});
  });
});
