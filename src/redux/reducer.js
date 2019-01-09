import { combineReducers } from 'redux';
import notificationReducer, {
  MODULE_NAME as notificationModule,
} from '../modules/notification';
import usersReducer, { MODULE_NAME as usersModule } from '../modules/users';

export default combineReducers({
  [usersModule]: usersReducer,
  [notificationModule]: notificationReducer,
});
