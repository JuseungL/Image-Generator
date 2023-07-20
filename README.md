# Node-ImageGenerator

오픈 AI를 활용한 이미지 생성 서비스를 제작  
사용자는 프롬프트와 이미지 크기를 입력하여 AI가 이미지를 생성하도록 요청하고  
서버는 OpenAI API를 사용하여 이미지를 생성하고, 생성된 이미지의 URL을 클라이언트에게 응답으로 반환하는 프로그램  

controllers/openaiController.js: OpenAI 관련 로직을 처리하는 컨트롤러 파일이 위치    
                                  -> routes 파일에서 보낸 request의 데이터를 확인하여 알맞은 response보냄  
routes/: OpenAI API와 관련된 라우팅을 처리하는 라우터 파일이 위치(url관리) -> 컨트롤러에 request(post, get)을 전달  
public/: 정적 파일(이미지 등)이 위치하는 폴더(asset-img,css,js등 모아둔 곳)  
views/: 뷰 템플릿 파일(ejs)이 위치하는 폴더 (클라이언트에 응답 보낼때 html코드로 변환해서 반환)  
index.js: Express 애플리케이션의 진입점(서버를 켰을 때 가장 먼저 작동되는 파일)으로 필요한 모듈 임포트 및 app.use를 통해 폴더 연결  
.env: 환경 변수가 정의된 파일. 포트 번호와 API KEY(일부러 빼놓음) 정보

- Node.js
- Express.js
- OpenAI API
- EJS (템플릿 엔진)

Source: Microsoft와 함께하는 대학생 AI & Cloud 러닝 캠프 by MLSA
