export default (roles, role) => {
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === role) return true;
  }

  return false;
};
