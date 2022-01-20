import { handleAsync } from "../utils"
import { UserService } from "../services"
import { JWT_SECRET } from "../configs"
import jwt from "jsonwebtoken"

<<<<<<< HEAD

export const getUSer = handleAsync(async(req, res) => {
    const users = await UserService.getAll();
    res.json({
        data: users
    });
});

// export const createUser = handleAsync(async(req, res) => {
//     const user = await UserService.create(req.body);
//     const accessToken = jwt.sign(
//         user._id,
//         JWT_SECRET
//       );
//     res.json({
//         data: user,
//         accessToken:accessToken
//     });
// })
export const createUser = handleAsync(async(req, res) => {
    const user = await UserService.create(req.body);
    console.log(user);
    const accessToken = jwt.sign(
        {
            userId:user._id
        },
        JWT_SECRET
      );
    res.json({
        succes:true,
        data: user,
        accessToken:accessToken
    });
=======
export const getUSer = handleAsync(async (req, res) => {
  const users = await UserService.getAll()
  res.json({
    data: users,
  })
})

export const createUser = handleAsync(async (req, res) => {
  const user = await UserService.create(req.body)
  console.log(user)
  const accessToken = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET
  )
  res.json({
    data: user,
    accessToken: accessToken,
  })
>>>>>>> 7748dfa38e1ea7d4f29d65b384f4c21dae4594f3
})
