import { handleAsync } from "../utils";
import { LoginService } from "../services";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../configs";

export const checkLogin = handleAsync(async (req, res) => {
  const data = await LoginService.checklogin(req.body);

  const { password, ...other } = data._doc;

  console.log(other, "data");

  const accessToken = jwt.sign(
      {
          userId:other._id
      }, JWT_SECRET);

  res
    .status(200)
    .json({
      message: "Login success",
      accessToken: accessToken,
      result: other,
    });
});
