import { combineReducers } from 'redux';
import notificationReducer, {
  moduleName as notificationModule,
} from '../ducks/notification';

export default combineReducers({
  [notificationModule]: notificationReducer,
});
