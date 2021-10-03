const validateSignup = (userName, email, firstName, password) => {
  const validation = {
    userName: /^[a-z]{1}[a-zA-Z0-9]{4,29}$/.test(userName) && userName,
    email: /(?=^.{0,320}$)(^[a-zA-Z0-9]{1,64}@[a-zA-Z0-9]{1,255}(\.{1}[a-zA-Z]+)*$)/.test(email) && email.split('@')[1].length <= 255,
    firstName: /[a-zA-Z]{1,30}/.test(firstName) && firstName,
    password: /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]))|((?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]))|((?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])))(?=.{8,})/.test(password),
  };
  // eslint-disable-next-line prefer-const
  for (let field in validation) { if (!validation[field]) return 'validation error'; }
};

module.exports = validateSignup;
