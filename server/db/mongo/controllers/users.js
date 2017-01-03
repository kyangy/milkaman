import User from '../models/user';
import passport from 'passport';

export function signUp(req, res, next) {

  const user = new User({
    email: req.body.email,
  });

  User.findOne({ email: req.body.email }, (findErr, existingUser) => {

    if (existingUser) {
      return res.status(409).json({ message: 'This email is already signed up!' });
    }

    return user.save((saveErr) => {
      if (saveErr) return next(saveErr);
      return res.status(200).json({
        message: 'You have been successfully signed up!'
      });
    });
  });
}

export default {
  signUp
};
