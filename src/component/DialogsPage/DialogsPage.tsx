import DialogsContainer from "./DialogsContainer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/AuthRedirect";
import { compose } from "redux";
import {
  sendNewMessage,
  messageInputChange,
  DialogItemType,
} from "../../redux/reducers/dialogsPageReducer";
import { AppstateType } from "../../redux/store";
const mapStateToProps = (state: AppstateType): MapStateType => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessageBody: state.dialogPage.newMessageBody,
  };
};
type MapStateType = {
  dialogs: DialogItemType[]
  messages: string[]
  newMessageBody: string
}
type MapDispatchType = {
  sendNewMessage: (text: string) => void
}
export default compose(
  connect<MapStateType, MapDispatchType, {}, AppstateType>(mapStateToProps, { sendNewMessage }),
  withAuthRedirect
)(DialogsContainer);
