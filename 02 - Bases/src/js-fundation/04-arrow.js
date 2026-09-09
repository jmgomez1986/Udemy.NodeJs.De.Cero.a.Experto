const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);

  return !user
    ? callback(`User not found with id ${id}`)
    : callback(null, user);
};

module.exports = {
  getUserById,
};
