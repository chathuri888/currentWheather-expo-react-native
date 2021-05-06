/*
 * combines all th existing reducers
 */
import * as loadingReducer from "./loadingReducer";
import * as loginReducer from "./loginReducer";
import * as commonReducer from "./commonReducer";
export default Object.assign(loginReducer, commonReducer, loadingReducer);
