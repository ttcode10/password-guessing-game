const Password = require('../models/Password');

const suffleNumbers = (list) => {
  return list.sort(() => Math.random() - 0.5);
};

const generateNewPasswordAndHint = () => {
  let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const suffledList = suffleNumbers(list);
  const passwordWith8Digits = suffledList.slice(0, 8);
  const stringifiedPassword = passwordWith8Digits.join('');
  const hint = suffleNumbers(passwordWith8Digits).join('');
  return { stringifiedPassword, hint };
};

const getHighlightNumber = (password, answer) => {
  const passwordStringToArray = password.split('');
  const answerStringToArray = answer.split('');
  const highlight = [];

  passwordStringToArray.map((passwordNumber) => {
    for (const answerNumber of answerStringToArray) {
      if (answerNumber === passwordNumber) {
        highlight.push(answerNumber);
      }
    }
  });

  return { highlight };
};

const getPassword = async (req, res) => {
  const { stringifiedPassword: password, hint } = generateNewPasswordAndHint();

  const newItem = new Password({ password, hint });
  await newItem.save();

  const hintToDisplay = await Password.findOne({ hint: hint })
    .select('-password')
    .exec();

  if (!hintToDisplay) {
    return res
      .status(404)
      .json({ errors: 'Corresponding password not found.' });
  }
  return res.status(200).json({ hint });
};

const verifyPassword = async (req, res) => {
  const { hint, answer } = req.body;

  const existingPassword = await Password.findOne({ hint: hint }).exec();
  const { password } = existingPassword;
  const { highlight } = getHighlightNumber(password, answer);

  if (!existingPassword) {
    return res
      .status(404)
      .json({ errors: 'Corresponding password not found.' });
  }
  answer === password
    ? res.status(200).json({ correct: true, hint, answer })
    : res.status(200).json({ correct: false, highlight, hint, answer });
};

module.exports = {
  getPassword,
  verifyPassword,
};
