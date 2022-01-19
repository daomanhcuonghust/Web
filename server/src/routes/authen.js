import express from "express"
import {
  checkLogin,
  logout,
  createUser,
  checkLoginStaff,
  createStaff,
  CreateTicket,
  UserBuyTicket,
  updateTicket,
  deleteTicket,
  createFacilities,
  updateFacilities,
  deleteFacilities,
  createEvent,
  updateEvent,
  deleteEvent,
  createVipTicket,
  latestEvents,
  getOneEvent,
  getAllEvent,
  createTypeTicket,
  infoTicket,
  updateTypeTicket,

  userTicket,
  deleteTypeTickte,
  UserRegisterEvent,
  participantsEvent,
  checkInTicket,
  checkoutTicket,


  getStaff,
  updateStaff,
  deleteStaff,
  getUSer,
  updateUser,
  deleteUser,
  getIncome,

} from "../controllers"
import {
  validateLogin,
  validateSignup,
  validateSignupStaff,
  signedIn,
  validateViewIncome,
} from "../middlewares"

const router = express.Router()

router.post("/login", validateLogin, checkLogin)
router.post("/login-staff", validateLogin, checkLoginStaff)
router.post("/logout", logout)
router.post("/signup", validateSignup, createUser)
router.post("/signup-staff", validateSignupStaff, createStaff)

router.post("/ticket", CreateTicket)
router.get("/ticket/:id", infoTicket)
router.patch("/ticket/:id", updateTicket)
router.delete("/ticket/:id", deleteTicket)

router.put("/typeTicket/:id",createTypeTicket);
router.delete("/typeTicket/:id/:typeId",deleteTypeTickte);
router.put("/ticket/:id/:typeId",updateTypeTicket)
router.get("/ticket/user/:userId",userTicket)

router.put("/typeTicket/:id", createTypeTicket)
router.put("/ticket/:id/:typeId", updateTypeTicket)
router.post("/ticketIncome", validateViewIncome, getIncome)


router.post("/facilities", createFacilities)
router.patch("/facilities/:id", updateFacilities)
router.post("/userEvent",UserRegisterEvent);
router.delete("/facilities/:id", deleteFacilities)
router.post("/Event", createEvent)

router.get("/event/user/:id",participantsEvent)


router.get("/staffs", getStaff)
router.post("/staffs", createStaff)
router.patch("/staff/:id", updateStaff)
router.delete("/staff/:id", deleteStaff)

router.get("/users", getUSer)
router.post("/users", createUser)
router.patch("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)


router.get("/event/:id", getOneEvent)
router.patch("/Event/:id", updateEvent)
router.delete("/Event/:id", deleteEvent)
router.get("/latestEvents", latestEvents)
router.get("/allEvent", getAllEvent)

router.post("/user-buy-ticket", UserBuyTicket)
router.post("/ticket-vip", signedIn, createVipTicket)

router.put("/staff/checkin",signedIn,checkInTicket);
router.put("/staff/checkout",signedIn,checkoutTicket);
export default router
