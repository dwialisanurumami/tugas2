//import express
import express from "express";

//init express controllers
import {Home, About, Contact} from "../controllers/page.js";

// init express router
const router = express.Router();

//home router
router.get('/', Home);

// about router
router.get('/about', About);

// contact router
router.get('/contact', Contact);

//export defalut router
export default router;