import express from "express";
import { addLecture, createCourse, createPost, deleteCourse, deleteLecture, getAllCourses, getAllPost, getCourseLectures, getPostById } from "../controllers/courseController.js";
import { authorizeAdmin, authorizeSubscribers, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// get all courses without lectures
router.route("/courses").get(getAllCourses);
// create new course - only admin
router.route("/createcourse").post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);
router.route("/createpost").post(singleUpload, createPost);
router.route("/posts").get(getAllPost);
router.route("/post/:id").get(getPostById);


// add lecture, delete course, get course details
router.route("/course/:id")
.get(isAuthenticated,authorizeSubscribers, getCourseLectures)
.post(isAuthenticated, authorizeAdmin, singleUpload, addLecture)
.delete(isAuthenticated, authorizeAdmin,deleteCourse);

//delete lecture
router.route("/lecture").delete(isAuthenticated, authorizeAdmin,deleteLecture);
export default router; 
