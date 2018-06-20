import decode from "jwt-decode";

export default () => {
  const token = localStorage.getItem("token");
  let isValid = true;

  try {
    isValid = decode(token);
  } catch (error) {
    return false;
  }

  return isValid;
};
