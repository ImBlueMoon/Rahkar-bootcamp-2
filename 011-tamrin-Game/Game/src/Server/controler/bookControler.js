let users = [
  {
    id: 1,
    name: "Alireza",
    books: [],
  },
  {
    id: 2,
    name: "Kamal",
    books: [],
  },
  {
    id: 3,
    name: "Mohammad",
    books: [],
  },
  {
    id: 4,
    name: "Farshad",
    books: [],
  }
];


exports.GetBooks = (req , res , next) => {
  const { id } = req.params;

  let findedUser = users.find((user) => user.id == id);
  // if (!findedUser) ErrorHandler("User not found", res, next);

  res.json({
    id: findedUser.id,
    name: findedUser.name,
    books: findedUser.books
  });
}
