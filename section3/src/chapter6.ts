//타입 단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
(person.name = ""), (person.age = 23);

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언의 조건
let num1 = 10 as never; // never 타입은 모든 타입의 서브타입
let num2 = 10 as unknown; // unknown타입은 모든 타입의 슈퍼타입

//let num3 = 10 as string; // number 타입과 string 타입은 서로 슈퍼 - 서브 타입 관계 X

// const 단언
let num4 = 10 as const; // 10 Number Literal 타입으로 단언됨
let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 모든 프로퍼티가 readonly를 갖도록 단언됨

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length;
