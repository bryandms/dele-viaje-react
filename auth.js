import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const auth = {
  getToken: ({ id }, SECRET) => {
    const token = jwt.sign({ user: id }, SECRET, { expiresIn: "5d" });
    const refreshToken = jwt.sign({ user: id }, SECRET, { expiresIn: "10m" });

    return [token, refreshToken];
  },

  login: async (email, password, User, SECRET) => {
    const user = await User.findOne({ email });
    if (!user) {
      return {
        success: false,
        errors: [
          {
            path: "email",
            message: "El correo no corresponde a ninguno de nuestros usuarios."
          }
        ]
      };
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return {
        success: false,
        errors: [{ path: "password", message: "Contraseña inválida" }]
      };
    }

    const [token, refreshToken] = auth.getToken(user, SECRET);

    return {
      success: true,
      token,
      errors: []
    };
  }
};

export default auth;
