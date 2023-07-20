// express 모듈을 가져옵니다.
const express = require("express");

// express.Router()를 사용하여 라우터 객체를 생성합니다.
const router = express.Router();

// openaiController.js 파일에서 generateImage 함수를 가져옵니다.
const { generateImage } = require("../controllers/openaiController");

// POST 메소드를 사용하여 "/generateimage" 경로로 요청이 들어온 경우 generateImage 함수를 실행합니다.
router.post("/generateimage", generateImage);

// 라우터 객체를 내보내어 다른 모듈에서 사용할 수 있도록 합니다.
module.exports = router;
