export const authUser = (req, res, next) => {
  const { role } = req.body;
  if (role === "admin") {
    next();
  } else {
    res.send({ message: "You are not allowed to access this page." });
  }
};
