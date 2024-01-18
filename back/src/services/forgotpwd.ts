import Register from "../models/register";

// Récupèrer le mot de passe de l'utilisateur
async function getUserPassword(id: string) {
  const user = await Register.findById(id);
  if (user) {
    return user.password;
  } else {
    return null;
  }
}

// Retrouver l'id avec l'email
async function getUserByEmail(email: string) {
  const user = await Register.findOne({ email });
  if (user) {
    return user._id;
  } else {
    return null;
  }
}

export { getUserPassword, getUserByEmail };
