import { combineReducers } from 'redux';
import notificationReducer, {
  moduleName as notificationModule,
} from '../modules/notification';
import usersReducer, { moduleName as usersModule } from '../modules/users';

export default combineReducers({
  [usersModule]: usersReducer,
  [notificationModule]: notificationReducer,
});
