export default (req, res) => {
  res.status(200)
  res.json({ name: req.cookies.a_name });
};
