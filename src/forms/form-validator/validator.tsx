export type FieldValidatorType = (value:string) => string | undefined
export const required:FieldValidatorType = (value) =>
  value ? undefined : "This field cant be empty";
const maxCreator = (max:number):FieldValidatorType => (value) =>
  value && value.length > max
    ? "Вы превысили допустимое количество знаков"
    : undefined;
export const maxLength = maxCreator(10);
