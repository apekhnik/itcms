type action = {
  type: string,
  payload?: any
}
type SideBarInitialStateType = {

}
const sidebarReducer = (state:SideBarInitialStateType, action: action) => {
  return state;
};
export default sidebarReducer;
