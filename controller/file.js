export const getFile = (req, res) => {
  const file = req.files;
  console.log(file, ":File");
  res.send(file);
};
