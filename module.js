
const topics = [
  { category: "Food", items: [
    { key: "Fried chicken", value: "치킨" },
    { key: "Fried rice", value: "볶음밥" },
    { key: "Ramen", value: "라멘" },
  ]},
  { category: "Job", items: [
    { key: "athlete", value: "운동선수" },
    { key: "teacher", value: "선생님" },
    { key: "Computer Programmer", value: "컴퓨터 프로그래머" },
  ]},
  { category: "IceCream", items: [
    { key: "Ben & Jerry's", value: "밴 앤 제리스" },
    { key: "Häagen-Dazs", value: "하겐다즈" },
    { key: "Blizzard", value: "블리자드" },
  ]},
  { category: "MBTI", items: [
    { key: "ISTJ", value: "ISTJ" },
    { key: "ISTP", value: "ISTP" },
    { key: "INTP", value: "INTP" },
  ]},
  { category: "Fruit", items: [
    { key: "Apple", value: "사과" },
    { key: "Banana", value: "바나나" },
    { key: "Water melon", value: "수박s" },
  ]},
  { category: "Sports", items: [
    { key: "SnowBoard", value: "스노우보드" },
    { key: "Soccer", value: "축구" },
    { key: "Ski", value: "스키" },
  ]},
  { category: "Christmas", items: [
    { key: "Santa Claus", value: "산타 클로스" },
    { key: "Rudolph", value: "루돌프" },
    { key: "Carol", value: "캐롤" },
  ]},
  { category: "Snack", items: [
    { key: "Reese's", value: "Reese's" },
    { key: "Cheetos", value: "치토스" },
    { key: "Choco Pie", value: "초코파이" },
  ]},
  { category: "Animal", items: [
    { key: "Dog", value: "강아지" },
    { key: "Cat", value: "고양이" },
    { key: "Tiger", value: "호랑이" },
  ]},
]
let topicArr = [];
for (let i = 0; i < topics.length; i++) {
  topicArr.push(topics[i].category);
}
