import DialogsContainer from "./DialogsContainer";
import { connect } from "react-redux";
import { sendNewMsgAction, inputNewMsgAction } from "../../redux/actionCreator";
import { withAuthRedirect } from "../../HOC/AuthRedirect";
import { compose } from "redux";
const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessageBody: state.dialogPage.newMessageBody,
    isAuth: state.auth.isAuth,
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

// const AuthRedirectComponent = withAuthRedirect(DialogsContainer);
// const DialogsPage = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsContainer);
