import jwt from 'jsonwebtoken';

export const createToken = (payload: object) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

export const protect = (req, res) => {
    const bearer = req.headers.authorization
})
