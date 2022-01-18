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
  updateTypeTicket
} from "../controllers"
import {
  validateLogin,
  validateSignup,
  validateSignupStaff,
  signedIn

} from "../middlewares"

const router = express.Router()

router.post("/login", validateLogin, checkLogin)
router.post("/login-staff", validateLogin, checkLoginStaff)
router.post("/logout", logout)
router.post("/signup", validateSignup, createUser)
router.post("/signup-staff", validateSignupStaff, createStaff)

router.post("/ticket", CreateTicket)
router.get("/ticket/:id",infoTicket);
router.patch("/ticket/:id", updateTicket)
router.delete("/ticket/:id", deleteTicket)
router.put("/typeTicket/:id",createTypeTicket);
router.put("/ticket/:id/:typeId",updateTypeTicket)

router.post("/facilities", createFacilities)
router.patch("/facilities/:id", updateFacilities)
router.delete("/facilities/:id", deleteFacilities)
router.post("/Event", createEvent)


router.get("/event/:id", getOneEvent)
router.patch("/Event/:id", updateEvent)
router.delete("/Event/:id", deleteEvent)
router.get("/latestEvents",latestEvents)
router.get("/allEvent",getAllEvent)

router.post("/user-buy-ticket", UserBuyTicket)
router.post("/ticket-vip",signedIn,createVipTicket)

export default router
