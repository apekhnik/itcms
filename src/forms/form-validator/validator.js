export const required = (value) =>
  value ? undefined : "This field cant be empty";
const maxCreator = (max) => (value) =>
  value && value.length > max
    ? "Вы превысили допустимое количество знаков"
    : undefined;
export const maxLength = maxCreator(10);
