import DialogsContainer from "./DialogsContainer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/AuthRedirect";
import { compose } from "redux";
import {
  sendNewMessage,
  messageInputChange,
} from "../../redux/reducers/dialogsPageReducer";
const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessageBody: state.dialogPage.newMessageBody,
  };
};
export default compose(
  connect(mapStateToProps, { sendNewMessage, messageInputChange }),
  withAuthRedirect
)(DialogsContainer);
