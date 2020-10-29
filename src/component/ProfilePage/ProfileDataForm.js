import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormInput, Textarea } from "../../forms/form-controls/Textarea";
export const ProfileDataChangePage = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h3>test test</h3>
      <ProfileDataReduxForm onSubmit={onSubmit}/>
    </div>
  );
};
const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder={"Looking for a job"}
        component={FormInput}
        name={"lookingForJob"}
        // validate={[required]}
        className=""
      />
      <Field
        placeholder={"About me"}
        component={Textarea}
        name={"aboutMe"}
        // validate={[required]}
        className=""
      />
      <button>
        ++
      </button>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "profileData" })(
  ProfileDataForm
);
export default ProfileDataChangePage;
