// ehleed student.txt uusgene
// baigaa datanuudaa student.txt -eesee harah gej baigaa
// package.json -toigoo holboson bh ysto

// import fs, { appendFile, appendFileSync, readFile } from "node:fs";

const student = [
  {
    name: "Munkhbold",
    seedNo: "2c",
    gender: "male",
    nickname: "muugii",
    hobby: [
      "gamer",
      "artist",
      "streamer",
      "digitalart",
      "volleyball",
      "3dmodelmaker",
    ],
  },

  {
    name: "Javkhlan",
    nickname: "Javhaa",
    seedNo: "1F",
    gender: "male",
    hobby: ["gaming", "coding", "watching movie,anime", "sleeping"],
  },

  {
    name: "Tsatsral",
    seedNo: "4A",
    gender: "male",
    hobby: "watch anime",
    nickname: "nottsatsa",
  },

  {
    name: "Ochirzaya",
    nickname: "Zaya",
    seedNo: "1E",
    gender: "Male",
    hobby: "play-soccer",
  },

  {
    name: "Enkhbayar",
    seedNo: "5c",
    nickname: "Eba",
    gender: "Male",
    hobby: ["Quiz", "movie", "reading", "cooking", "gaming", "hiking"],
  },

  {
    name: "Batmend",
    nickname: "mende",
    seedNo: "4E",
    gender: "male",
    hobby: ["basketball", "billiard", "reading"],
  },

  {
    name: "Tumen-Ulzii",
    seedNo: "3F",
    nickname: "TK",
    gender: "male",
    hobby: ["sagsan bumbug"],
  },

  {
    name: "Magnaibayar",
    nickname: "Magnai",
    seedNo: "2F",
    gender: "male",
    hobby: ["Riding bicycle", "reading", "watching movie, anime", "sleeping"],
  },

  {
    name: "Chimeg-Erdene",
    seedNo: "3e",
    gender: "female",
    nickname: "Chimgee",
    hobby: ["playing puzzle games", "watching movie", "volleyball", "walking"],
  },

  {
    name: "Bayandelger",
    seedNo: "3D",
    gender: "male",
    nickname: "bayna",
    hobby: ["gaming", "cooking", "watch anime"],
  },

  {
    name: "Ganzaya",
    nickname: "Zaya",
    seedNo: "2D",
    gender: "Female",
    ig: "zaya_bdmr",
    hobby: ["movie", "paint", "badminton"],
  },

  {
    name: "Maral",
    seedNo: "3A",
    gender: "Female",
    nickname: "Marla",
    hobby: ["watching movies", "baking"],
  },

  {
    name: "chinggis",
    nickname: "chinggis",
    age: "19",
    seedNo: "3c",
    gender: "men",
    hobby: "yuch hamaaguu hiine",
  },

  {
    name: "Ochirdari",
    nickname: "Ochko",
    seedNo: "2E",
    gender: "male",
    hobby: ["reading", "Movie"],
  },

  {
    name: "Amartuvshin",
    nickname: "Amaraa",
    seedNo: "3B",
    gender: "male",
    hobby: ["curious about everything, but not an expert in anything"],
  },

  {
    name: "bayarjavkhlan",
    seedNo: "5B",
    gender: "male",
    nickname: "vigilante",
    hobby: ["listen to music, driving, watching movie"],
  },

  {
    name: "Бат-Очир",
    seedNo: "2A",
    gender: "эрэгтэй хө",
    hobby: [
      "сагс хааяал",
      "гүйх",
      "зохион бүтээх",
      "засварлах",
      "шинэ зүйл сурах турших",
    ],
    nickname: "надад таалагдвал хүссэнээрээ дуудоо",
  },

  {
    name: "Gantumur",
    seedNo: "1B",
    gender: "Male",
    nickname: "Ganaa",
    hobby: ["Movie", "reading"],
  },

  {
    name: "Oyunbayar",
    nickname: "Omoo",
    seedNo: "4F",
    gender: "female",
    hobby: ["reading", "movie", "outdoor walking", "traveling"],
  },

  {
    name: "Bishrelt",
    nickname: "montoo",
    seedNo: "4c",
    gender: "male",
    hobby: "mongo oloh durtai",
  },

  {
    name: "Tsog",
    seedNo: "5A",
    gender: "Male",
    nickname: "Gots",
    hobby: ["Travel"],
  },

  {
    name: "Garamdagii",
    nickname: "Dagii",
    seedNo: "2B",
    gender: "female",
    hobby: ["Movie"],
  },
];

// // 1. shineer file oruulna
// fs.writeFile("students.txt", "HELLLOOOO", (err) => {
//   console.log(err);
// });

// // 2. odoo baigaa text deer nemegdej orno
// fs.appendFile("students.txt", " WORLD", (err) => {
//   console.log(err);
// });

// 3.
// fs.readFile("student.txt", "utf8", (err, data) => {
//   console.log(data);
// });

// 4. name gargah
// for (let i = 0; i < student.length; i++) {
//   fs.appendFile("student.txt", `\n${student[i].name}`, (err) => {
//     console.log(err);
//   });
// }

// 5. suudliin dugaar gargah
// for (let i = 0; i < student.length; i++) {
//   fs.appendFile("student.txt", `\n${student[i].seedNo}`, (err) => {
//     console.log(err);
//   });
// }

// 6. nerniih n door suudliin dugaar hamt gargah
// for (let i = 0; i < student.length; i++) {
//   fs.appendFile(
//     "student.txt",
//     `\n${student[i].name}, \n${student[i].seedNo}`,
//     (err) => {
//       console.log(err);
//     }
//   );
// }

// 6. tuhain hunii buh medeelliig n gargana

// appendFileSync => toog des daraalald oruulsan

// for (let i = 0; i < student.length; i++) {
//   fs.appendFileSync(
//     "student.txt",
//     `\n id.${i}. ${student[i].name},  ${student[i].nickname}, ${student[i].seedNo}, ${student[i].gender}, ${student[i].hobby}`,
//     (err) => {
//       console.log(err);
//     }
//   );
// }

// for (let i = 0; i < student.length; i++) {
//   fs.appendFileSync(
//     "student.txt",
//     `\n id.${i}. \nname: ${student[i].name},  \nnickname: ${student[i].nickname}, \nseedNo: ${student[i].seedNo}, \ngender:${student[i].gender}, \nhobby: ${student[i].hobby}`,
//     (err) => {
//       console.log(err);
//     }
//   );
// }

// for (let i = 0; i < student.length; i++) {
//   fs.appendFileSync(
//     "student.txt",
//     `\n id.${i}. \nname: ${student[i].name},  \nnickname: ${student[i].nickname}, \nseedNo: ${student[i].seedNo}, \ngender:${student[i].gender}, \nhobby: ${student[i].hobby}`,
//     (err) => {
//       console.log(err);
//     }
//   );
// }

// student.forEach(student);

// 7. bugdende n oor2 zuil baigaa teriin gargana

// student.forEach((student, id) => {
//   let result = "";
//   Object.values(student).map((value) => (result += value + " "));
//   fs.appendFileSync("students.txt", `${result}\n`, (err) => log(err));
// });

// student.forEach((student, id) => {
//   let result = "";
//   Object.keys(student).map(
//     (key) => (result += key + ` = ` + student[key] + ` `)
//   );
//   fs.appendFileSync("students.txt", `${result}\n`, (err) => log(err));
// });

// 8. eregtei gsn humuusiin medeellig gargah, emegtei gesen humuusiin medeellig gargah

// import fs from "fs";

// fs.readFile("./students.txt", "utf8", (err, data) => {
//   const arrayData = data.split("\n");
//   for (let i = 0; i < arrayData.length; i++) {
//     console.log(arrayData[i].split(" \n "));
//   }
// });

// import fs from "fs";

// let students;

// const huis = {
//   male: [],
//   female: [],
// };

// fs.readFile("students.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     students = data.split("\n");
//     students.forEach((student) => {
//       if (student.toLocaleLowerCase().includes("gender = female")) {
//         huis.female = [...huis.female, student];
//       } else {
//         huis.male.push(student);
//       }
//     });

//     function writeFile(gender) {
//       fs.writeFile(`${gender}.txt`, "", (err) => {
//         console.log(err);
//       });

//       huis[gender].forEach((student) => {
//         fs.appendFile(`${gender}.txt`, `${student} \n `, (err) => {
//           console.log(err);
//         });
//       });
//       // fs.appendFile()
//     }
//     writeFile("female");
//   }
// });
