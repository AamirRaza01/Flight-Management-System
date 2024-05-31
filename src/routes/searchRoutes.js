import { Router } from "express";
import { Search} from "../controllers/searchflight.js";

const router = Router();

router.route("/flight/search").post(Search);


export default router