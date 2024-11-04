// 객체 타입간의 호환성

type book = {
  name: string;
  price: number;
};

type programingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: book;
let programinBookVar: programingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 30000,
  skill: "reactjs",
};

book = programinBookVar;
// programinBookVar = book;

let book2: book = programinBookVar;
function func(book: book) {}
func(programinBookVar);
