// 합집합 타입 - Union 타입

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union2: Union1 = {
  name: "",
  color: "",
};

let union3: Union1 = {
  name: "",
  language: "",
};

// let union4 : Union1 = {
// 	name : "",
// }

// 교집합 타입 - Intersection 타입

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
