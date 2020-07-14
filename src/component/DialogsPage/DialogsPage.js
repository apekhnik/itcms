import DialogsContainer from "./DialogsContainer";
import { connect } from "react-redux";
import { sendNewMsgAction, inputNewMsgAction } from "../../redux/actionCreator";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessageBody: state.dialogPage.newMessageBody,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendNewMessage: () => {
      dispatch(sendNewMsgAction());
    },
    messageInputChange: (text) => {
      dispatch(inputNewMsgAction(text));
    },
  };
};
const DialogsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsContainer);
export default DialogsPage;
