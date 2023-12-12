// if1

// let num = 5;

// if (num > 0) {
//     console.log(++num);
// } else{
//     console.log(num);
// }

// if2

// let num = 0;

// if (num > 0) {
//     console.log(++num);
// } else if (num < 0) {
//     console.log(num - 2);
// } else if (num == 0) {
//     console.log(num + 10);
// } 

// if3

// let num = 5;
// let num1 = 6;
// let num2 = 7;

// let positiveCount = 0;

// if (num > 0) {
//     positiveCount++;
// }

// if (num1 > 0) {
//     positiveCount++
// }

// if (num2 > 0) {
//     positiveCount++
// }

// console.log(positiveCount);

// if4

// let a = 5;
// let b = 10;

// if (a > b) {
//     console.log(a);
// } else{
//     console.log(b);
// }

// if5

// let a = 5;
// let b = 9;

// if (a < b) {
//     console.log(1);
// } else if (a > b) {
//     console.log(2);
// }

// if6

// let a = 5;
// let b = 10;

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// } //Kottasi

// if (a < b) {
//   console.log(a);
// } else {
//   console.log(b);
// } //Kichkinasi

// if7

// let a = 5;
// let b = 15;

// let k = a;

// if (a = b) {
//     console.log(a);
// }

// if (b = k) {
//     console.log(b);
// }

// if8

// let a = 5;
// let b = 8;

// if (a != b) {
//     console.log(a + b);
// } else{
//     console.log(0);
// }

// if9

// let a = 5;
// let b = 9;

// if (a != b && a > b) {
//     console.log(a);
// } else if (a != b && a < b) {
//     console.log(b);
// } else if (a == b) {
//     console.log(0);
// }

// if10

// let a = 5;
// let b = 6;
// let c = 7;

// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c) {
//     console.log(b);
// } else if (c > a && c > b) {
//     console.log(c);
// }

// if11

// let a = 5;
// let b = 9;
// let c = 7;

// if (a > b && a < c) {
//     console.log(a);
// } else if (b > a && b < c) {
//     console.log(b);
// } else if (c > a && c < b) {
//     console.log(c);
// }

// if12

// let a = 6;
// let b = 7;
// let c = 8;

// let ab = a + b;
// let ac = a + c;
// let bc = b + c;

// if (ab > ac && ab > bc) {
//   console.log(ab);
// } else if (ac > ab && ac > bc) {
//   console.log(ac);
// } else if (bc > ab && bc > ac) {
//   console.log(bc);
// }

// if13

// let A = 10;
// let B = 15;
// let C = 20;

// if (A < B && B < C) {
//   A *= 2;
//   B *= 2;
//   C *= 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }

// console.log("A:", A);
// console.log("B:", B);
// console.log("C:", C);

// if14

// let A = 5;
// let B = 10;
// let C = 15;

// if (A < B && B < C || A > B && B > C) {
//   A *= 2;
//   B *= 2;
//   C *= 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }

// console.log("A:", A);
// console.log("B:", B);
// console.log("C:", C);

// if15

// let a = 5;
// let b = 4;
// let c = 5;
// let d = 5;

// if (a == c && a == d) {
//     console.log(2);
// }

// if (a == b && a == c) {
//     console.log(4);
// }

// if (a == b && a == d) {
//     console.log(3);
// }

// if16

// let x = 2;

// if (x <= 0) {
//     console.log(-x);
// } else if (0 < x < 2) {
//     console.log(x ** 2);
// } else if (x >= 2) {
//     console.log(4);
// }

// if17

// let x = 2020;

// if (x % 100 === 0 && x % 400 !== 0) {
//   console.log("365 day");
// } else if (x % 4 === 0) {
//   console.log("366 day");
// } else if (x <= 0) {
//   console.log("Notori yil");
// } else {
//   console.log("365 day");
// };

// if18

// let son = 505;

// let a = son % 2 == 0 && son >= 10 && son < 100;
// let b = son % 2 !== 0 && son >= 100 && son < 1000;

// if (a) {
//     console.log('{son} Ikki xonali juft son');
// } else if (b) {
//     console.log('{son} Uch xonali toq son');
// } else {
//     console.log('boshqa kategoriya');
// }

// case1

// let K = 5;

// let res;

// if (K <= 5) {
//     switch (K) {
//       case 1:
//         res = K + "- Yomon";
//         break;
//       case 2:
//         res = K + "- Qoniqarsiz";
//         break;
//       case 3:
//         res = K + "- Qoniqarli";
//         break;
//       case 4:
//         res = K + "- Yahshi";
//         break;
//       case 5:
//         res = K + "- A'lo";
//         break;
//       default:
//         res = "Bunday baxo yoq"
//         break;
//     }
//     console.log(res);
// }   else {
//        console.log("Xato"); 
//     }

// case2

// let S = 2;

// let res;

// if (S <= 4) {
//   switch (S) {
//     case 1:
//       res = S + "Qish";
//       break;
//     case 2:
//       res = S + "Bahor";
//       break;
//     case 3:
//       res = S + "Yoz";
//       break;
//     case 4:
//       res = S + "Kuz";
//       break;
//     default:
//       res = "Bunday fasl yoq";
//       break;
//   }
//   console.log(res);
// } else {
//   console.log("Xato");
// }

// case3

// let oy = 4;

// if (oy <= 31) {
//     switch (oy) {
//       case 1:
//         res = 31 + " kun Yanvar";
//         break;
//       case 2:
//         res = 28/29 + " kun Fevral";
//         break;
//       case 3:
//         res = 31 + " kun Mart";
//         break;
//       case 4:
//         res = 30 + " kun Aprel";
//         break;
//       case 5:
//         res = 31 + " kun May";
//         break;
//       case 6:
//         res = 31 + " kun Iyun";
//         break;
//       case 7:
//         res = 30 + " kun Iyul";
//         break;
//       case 8:
//         res = 31 + " kun Avgust";
//         break;
//       case 9:
//         res = 30 + " kun Sentyabr";
//         break;
//       case 10:
//         res = 31 + " kun Oktyabr";
//         break;
//       case 11:
//         res = 30 + " kun Noyabr";
//         break;
//       case 12:
//         res = 31 + " kun Dekabr";
//         break;
//       default:
//         res = "Bunday oy yoq"
//         break;
//     } console.log(res);
// }

// case 4

// let x = 5;
// let y = 12;

// let res;

// switch (x) {
//   case 1:
//     res = y + " Detsimetr = " + y / 10 + "Metrga teng"
//     break;
//   case 2:
//     res = y + " Kilometr = " + y * 1000 + "Metrga teng"
//     break;
//   case 3:
//     res = y + " Metr" + y + "Metrga teng"
//     break;
//   case 4:
//     res = y + " Millimetr = " + y / 1000 + "Metrga teng"
//     break;
//   case 5:
//     res = y + " Santimetr = " + y / 100 + "Metrga teng"
//     break;
//   default:
//     res = "Xato"
//     break;
// }

// console.log(res);

// case5

// let b = 5;
// let v = 8;

// switch (b) {
//   case 1:
//     console.log(" " + v * 1 + " " + "kilogramm");
//     break;
//   case 2:
//     console.log(" " + v / 1000000 + " " + "kilogramm");
//     break;
//   case 3:
//     console.log(" " + v / 1000 + " " + "kilogramm");
//     break;
//   case 4:
//     console.log(" " + v * 1000 + " " + "kilogramm");
//     break;
//   case 5:
//     console.log(" " + v * 100 + " " + "kilogramm");
//     break;
//   default:
//     console.log("xato");
// }

// case6

// let M = 5;
// let D = 25;

// let res;

// if (D < 31) {
//   switch (M) {
//     case 1:
//       res = D + "January";
//       break;
//     case 2:
//       res = D + "February";
//       break;
//     case 3:
//       res = D + "March";
//       break;
//     case 4:
//       res = D + "April";
//       break;
//     case 5:
//       res = D + "May";
//       break;
//     case 6:
//       res = D + "June";
//       break;
//     case 7:
//       res = D + "July";
//       break;
//     case 8:
//       res = D + "August";
//       break;
//     case 9:
//       res = D + "September";
//       break;
//     case 10:
//       res = D + "October";
//       break;
//     case 11:
//       res = D + "November";
//       break;
//     case 12:
//       res = D + "December";
//       break;
//     default:
//       res = "Bunday oy yoq";
//       break;
//   }

//   console.log(res);
// } else {
//   console.log("Bunday kun yoq");
// }

// case7

// let M = 7;
// let D = 25;

// if (D == 31) {
//   D = 0;
//   M++;
//   if (M == 13) {
//     M = 1
//   }
// }

// let res;

// if (D < 31) {
//   switch (M) {
//     case 1:
//       res = D + 1 + " Yanvar";
//       break;
//     case 2:
//       res = D + 1 + " Fevral";
//       break;
//     case 3:
//       res = D + 1 + " Mart";
//       break;
//     case 4:
//       res = D + 1 + " Aprel";
//       break;
//     case 5:
//       res = D + 1 + " May";
//       break;
//     case 6:
//       res = D + 1 + " Iyun";
//       break;
//     case 7:
//       res = D + 1 + " Iyul";
//       break;
//     case 8:
//       res = D + 1 + " Avgust";
//       break;
//     case 9:
//       res = D + 1 + " Sentyabr";
//       break;
//     case 10:
//       res = D + 1 + " Oktyabr";
//       break;
//     case 11:
//       res = D + 1 + " Noyabr";
//       break;
//     case 12:
//       res = D + 1 + " Dekabr";
//       break;
//     default:
//       res = "Bunaqa oy yoq";
//       break;
//   }

//   console.log(res);
// } else {
//   console.log("Bunaqa kun yoq");
// }

// case8

// let Y = 5;
// let K = 4;

// let S = Y + K;

// let res;

// switch (S) {
//   case "s0":
//     res = "Robot shimolga qarab harakatni dovom ettirdi";
//     break;
//   case "s1":
//     res = "Robot g'arbga qarab turipti";
//     break;
//   case "s2":
//     res = "Robot sharqqa qarab turipti";
//     break;
//   case "j0":
//     res = "Robot janubga qarab harakatni dovom ettirdi";
//     break;
//   case "j1":
//     res = "Robot sharqqa qarab turipti";
//     break;
//   case "j2":
//     res = "Robot g'arbga qarab turipti";
//     break;
//   case "q0":
//     res = "Robot sharqqa qarab harakatni dovom ettirdi";
//     break;
//   case "q1":
//     res = "Robot shimolga qarab turipti";
//     break;
//   case "q2":
//     res = "Robot janubga qarab turipti";
//     break;
//   case "g0":
//     res = "Robot g'arbga qarab harakatni dovom ettirdi";
//     break;
//   case "g1":
//     res = "Robot janubga qarab turipti";
//     break;
//   case "g2":
//     res = "Robot shimolga qarab turipti";
//     break;
//   default:
//     res = "Xato";
//     break;
// }

// console.log(res);

// case9

// let M = 3;
// let N = 7;

// if (N == 6) {
//   N = "olti"
// } else if (N == 7) {
//   N = "yetti"
// } else if (N == 8) {
//   N = "sakkiz"
// } else if (N == 9) {
//   N = "to'qqiz"
// } else if (N == 10) {
//   N = "o'n"
// } else if (N == 11) {
//   N = "valet"
// } else if (N == 12) {
//   N = "dama"
// } else if (N == 13) {
//   N = "qirol"
// } else if (N == 14) {
//   N = "tuz"
// } else {
//   M = 0
// };

// let res;

// switch (M) {
//   case 1:
//     res = N + " g'isht";
//     break;
//   case 2:
//     res = N + " olma";
//     break;
//   case 3:
//     res = N + " chillak";
//     break;
//   case 4:
//     res = N + " qarg'a";
//     break;
//   default:
//     res = "Xato";
//     break;
// }

// console.log(res);

// case10

// let M = 35;

// let bir = M % 10;
// let on = (M - bir) / 10;
// let N

// if (bir == 0) {
//   N = ""
// } else if (bir == 1) {
//   N = " bir"
// } else if (bir == 2) {
//   N = " ikki"
// } else if (bir == 3) {
//   N = " uch"
// } else if (bir == 4) {
//   N = " to'rt"
// } else if (bir == 5) {
//   N = " besh"
// } else if (bir == 6) {
//   N = " olti"
// } else if (bir == 7) {
//   N = " yetti"
// } else if (bir == 8) {
//   N = " sakkiz"
// } else if (bir == 9) {
//   N = " to'qqiz"
// };

// let res;

// switch (on) {
//   case 1:
//     res = "O'n" + N + "ta exc";
//     break;
//   case 2:
//     res = "Yigirma" + N + "ta exc";
//     break;
//   case 3:
//     res = "O'ttiz" + N + "ta exc";
//     break;
//   case 4:
//     res = "Qirq" + N + "ta exc";
//     break;
//   default:
//     res = "Xato";
//     break;
// }

// console.log(res);

// case11

// let A = 555;

// let bir = A % 10;
// let on = (A % 100 - bir) / 10;
// let yuz = (A - on * 10 - bir) / 100;
// let N;
// let M;

// if (bir == 0) {
//   N = ""
// } else if (bir == 1) {
//   N = " bir"
// } else if (bir == 2) {
//   N = " ikki"
// } else if (bir == 3) {
//   N = " uch"
// } else if (bir == 4) {
//   N = " to'rt"
// } else if (bir == 5) {
//   N = " besh"
// } else if (bir == 6) {
//   N = " olti"
// } else if (bir == 7) {
//   N = " yetti"
// } else if (bir == 8) {
//   N = " sakkiz"
// } else if (bir == 9) {
//   N = " to'qqiz"
// };

// if (on == 0) {
//   M = ""
// } else if (on == 1) {
//   M = " o'n"
// } else if (on == 2) {
//   M = " yigirma"
// } else if (on == 3) {
//   M = " o'ttiz"
// } else if (on == 4) {
//   M = " qirq"
// } else if (on == 5) {
//   M = " ellik"
// } else if (on == 6) {
//   M = " oltimish"
// } else if (on == 7) {
//   M = " yetmish"
// } else if (on == 8) {
//   M = " sakson"
// } else if (on == 9) {
//   M = " to'qson"
// };

// let res;

// switch (yuz) {
//   case 1:
//     res = "bir yuz" + M + N;
//     break;
//     case 2:
//       res = "ikki yuz" + M + N;
//       break;
//   case 3:
//     res = "uch yuz" + M + N;
//     break;
//   case 4:
//     res = "to'rt yuz" + M + N;
//     break;
//   case 5:
//     res = "besh yuz" + M + N;
//     break;
//   case 6:
//     res = "olti yuz" + M + N;
//     break;
//   case 7:
//     res = "yetti yuz" + M + N;
//     break;
//   case 8:
//     res = "sakkiz yuz" + M + N;
//     break;
//   case 9:
//     res = "to'qqiz yuz" + M + N;
//     break;
//   default:
//     res = "Xato";
//     break;
// };

// console.log(res);

// case12

// let A = 999;

// let asr = (A + 57) % 60;
// let rang = Math.ceil(asr / 12);
// let hayvon = asr % 12;
// console.log(rang);

// let M;

// if (hayvon == 0) {
//   M = " to'ng'iz";
// } else if (hayvon == 1) {
//   M = " sichqon";
// } else if (hayvon == 2) {
//   M = " sigir";
// } else if (hayvon == 3) {
//   M = " yo'lbars";
// } else if (hayvon == 4) {
//   M = " quyon";
// } else if (hayvon == 5) {
//   M = " ajdar";
// } else if (hayvon == 6) {
//   M = " ilon";
// } else if (hayvon == 7) {
//   M = " ot";
// } else if (hayvon == 8) {
//   M = " qo'y";
// } else if (hayvon == 9) {
//   M = " maymun";
// } else if (hayvon == 9) {
//   M = " tovuq";
// } else if (hayvon == 9) {
//   M = " it";
// }

// let res;

// switch (rang) {
//   case 0:
//   case 5:
//     res = "Qora" + M;
//     break;
//   case 1:
//     res = "Yashil" + M;
//     break;
//   case 2:
//     res = "Qizil" + M;
//     break;
//   case 3:
//     res = "Sariq" + M;
//     break;
//   case 4:
//     res = "Oq" + M;
//     break;
//   default:
//     res = "Xato";
//     break;
// }

// console.log(res);