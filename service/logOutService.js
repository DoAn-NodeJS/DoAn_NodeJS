export const logOutService = (req, res) => {
  delete req.session.customer;
  res.redirect("./home");
};
