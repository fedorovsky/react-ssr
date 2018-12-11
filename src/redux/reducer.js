import { combineReducers } from 'redux';
import notificationsReducer, {
  moduleName as notificationsModule,
} from '../ducks/notification';

export default combineReducers({
  [notificationsModule]: notificationsReducer,
});
