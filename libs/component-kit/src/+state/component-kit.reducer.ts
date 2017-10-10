import {ComponentKit} from './component-kit.interfaces';
import {ComponentKitAction} from './component-kit.actions';

export function componentKitReducer(state: ComponentKit, action: ComponentKitAction): ComponentKit {
  switch (action.type) {
    case 'DATA_LOADED': {
      return {...state, ...action.payload};
    }
    default: {
      return state;
    }
  }
}
