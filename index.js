const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// Body 파서를 활성화합니다
app.use(express.json()); // JSON 형태로 파싱한다.
app.use(express.urlencoded({ extended: false }));

// 정적 파일을 제공하는 폴더를 설정합니다
app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public/"));
app.use("/openai", require("./routes/openaiRoutes"));

// 루트 경로에 접근할 때 index.ejs 파일을 렌더링합니다
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// 서버를 지정한 포트로 실행합니다
app.listen(port, () => console.log(`서버가 포트 ${port}에서 시작되었습니다.`));
