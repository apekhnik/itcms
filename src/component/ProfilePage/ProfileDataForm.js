import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormInput, Textarea } from "../../forms/form-controls/Textarea";
const ProfileDataForm = () => {
  return (
    <form>
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
    </form>
  );
};
export const ProfileDataChangePage = () => {
  return (
    <div>
      <h3>test test</h3>
      <ProfileDataReduxForm />
    </div>
  );
};
const ProfileDataReduxForm = reduxForm({ form: "profileData" })(
  ProfileDataForm
);
export default ProfileDataChangePage;
