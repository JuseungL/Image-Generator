const { Configuration, OpenAIApi } = require("openai");

// Configuration 클래스와 OpenAIApi 클래스를 openai 모듈에서 가져옵니다.
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Configuration 인스턴스를 생성하고 OpenAI API 키를 제공합니다.
const openai = new OpenAIApi(configuration);

// generateImage 함수를 비동기 함수로 정의합니다.
const generateImage = async (req, res) => {
  // 요청 본문에서 prompt와 size 값을 추출합니다.
  const { prompt, size } = req.body;

  // size 값을 기반으로 원하는 이미지 크기를 결정합니다.
  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

  try {
    // OpenAIApi 인스턴스의 createImage 메소드를 호출하여 이미지를 생성합니다.
    const response = await openai.createImage({
      prompt, // OpenAI에 전달할 프롬프트
      n: 1, // 생성할 이미지 개수
      size: imageSize, // 이미지 크기
    });

    // 응답 데이터에서 이미지 URL을 추출합니다.
    const imgURI = response.data.data[0].url;

    // 생성된 이미지 URL과 함께 성공 상태로 JSON 응답을 클라이언트에 전송합니다.
    res.status(200).json({
      success: true,
      data: imgURI,
    });
  } catch (e) {
    // API 호출 중에 발생한 오류를 처리합니다.
    if (e.response) {
      // 오류 응답이 있는 경우, 응답 상태와 데이터를 로깅합니다.
      console.log(e.response.status);
      console.log(e.response.data);
    } else {
      // 오류 응답이 없는 경우, 오류 메시지를 로깅합니다.
      console.log(e.message);
    }
  }
};

// generateImage 함수를 다른 모듈에서 사용할 수 있도록 내보냅니다.
module.exports = { generateImage };
