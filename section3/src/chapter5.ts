// 타입 추론
let a = 10; // number 타입으로 추론
let b = "hello"; //string 타입으로 추론
let c = {
  // id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론
  id: 1,
  name: "이지인",
  profile: {
    nickname: "jing",
  },
  url: "#",
};

function func(message = "hello") {
  return "hello";
}

let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

const num = 10; // 10 Number Literal 타입으로 추론
const str = "hello"; // "hello" String Literal 타입으로 추론

let arr = [1, "string"]; // (string | number)[] 타입으로 추론
