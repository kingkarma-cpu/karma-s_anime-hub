const companion = document.createElement("div");
companion.id = "karma-companion";

document.body.appendChild(companion);
console.log("Karma's companion is ready!");

companion.style.position = "fixed";
companion.style.bottom = "20px";
companion.style.right = "20px";
companion.style.zIndex = "9999";
companion.style.width = "150px";
companion.style.height = "150px";
companion.style.background = "#a855f7";
companion.style.borderRadius = "50%";
companion.style.display = "flex";
companion.style.alignItems = "center";
companion.style.justifyContent = "center";
companion.style.flexDirection = "column";
companion.style.color = "white";
companion.style.fontFamily = "Arial, sans-serif";
companion.style.textAlign = "center";
companion.style.padding = "12px";
companion.style.boxSizing = "border-box";

/*======= BOT APPEARANCE=======*/
const face = document.createElement("div");
face.id = "karma-face";
face.style.width = "100px";
face.style.height = "110px";
face.style.background = "#ffe0d2";
face.style.borderRadius = "45% 45% 48% 48%";
face.style.position = "relative";
companion.appendChild(face);

/*==== EYE ====*/
const leftEye = document.createElement("div");

leftEye.style.width = "24px";
leftEye.style.height = "30px";
leftEye.style.background = "#34204f";
leftEye.style.borderRadius = "50%";
leftEye.style.position = "absolute";
leftEye.style.zIndex = "2";
leftEye.style.top = "38px";
leftEye.style.left = "18px";
face.appendChild(leftEye);

const rightEye = document.createElement("div");

rightEye.style.width = "24px";
rightEye.style.height = "30px";
rightEye.style.background = "#34204f";
rightEye.style.borderRadius = "50%";
rightEye.style.position = "absolute";
rightEye.style.zIndex = "2";
rightEye.style.top = "38px";
rightEye.style.right = "18px";

face.appendChild(rightEye);

const leftSparkle = document.createElement("div");

leftSparkle.style.width = "8px";
leftSparkle.style.height = "10px";
leftSparkle.style.background = "white";
leftSparkle.style.borderRadius = "50%";
leftSparkle.style.position = "absolute";
leftSparkle.style.top = "4px";
leftSparkle.style.left = "4px";

leftEye.appendChild(leftSparkle);

const rightSparkle = document.createElement("div");

rightSparkle.style.width = "8px";
rightSparkle.style.height = "10px";
rightSparkle.style.background = "white";
rightSparkle.style.borderRadius = "50%";
rightSparkle.style.position = "absolute";
rightSparkle.style.top = "4px";
rightSparkle.style.left = "4px";

rightEye.appendChild(rightSparkle);

/*==== BLUSH ====*/

const leftBlush = document.createElement("div");

leftBlush.style.width = "16px";
leftBlush.style.height = "9px";
leftBlush.style.background = "#ff91a4";
leftBlush.style.borderRadius = "50%";
leftBlush.style.position = "absolute";
leftBlush.style.top = "72px";
leftBlush.style.left = "12px";

face.appendChild(leftBlush);

const rightBlush = document.createElement("div");

rightBlush.style.width = "16px";
rightBlush.style.height = "9px";
rightBlush.style.background = "#ff91a4";
rightBlush.style.borderRadius = "50%";
rightBlush.style.position = "absolute";
rightBlush.style.top = "72px";
rightBlush.style.right = "12px";

face.appendChild(rightBlush);

/* === MOUTH ===*/
const mouth = document.createElement("div");

mouth.style.width = "14px";
mouth.style.height = "7px";
mouth.style.borderBottom = "3px solid #b94f68";
mouth.style.borderRadius = "0 0 50% 50%";
mouth.style.position = "absolute";
mouth.style.top = "83px";
mouth.style.left = "43px";

face.appendChild(mouth);

/*===== HAIR ====*/
const hair = document.createElement("div");

hair.style.width = "112px";
hair.style.height = "48px";
hair.style.background = "#b58aff";
hair.style.borderRadius = "55% 55% 25% 25%";
hair.style.position = "absolute";
hair.style.top = "-12px";
hair.style.left = "-6px";
hair.style.zIndex = "0";

face.appendChild(hair);

const bangs = document.createElement("div");

bangs.style.width = "38px";
bangs.style.height = "30px";
bangs.style.background = "#b58aff";
bangs.style.borderRadius = "0 0 60% 20%";
bangs.style.position = "absolute";
bangs.style.top = "0";
bangs.style.left = "25px";
bangs.style.zIndex = "3";
bangs.style.transform = "rotate(15deg)";

face.appendChild(bangs);

const leftHair = document.createElement("div");

leftHair.style.width = "25px";
leftHair.style.height = "65px";
leftHair.style.background = "#b58aff";
leftHair.style.borderRadius = "50% 20% 40% 50%";
leftHair.style.position = "absolute";
leftHair.style.top = "12px";
leftHair.style.left = "-8px";
leftHair.style.zIndex = "3";

face.appendChild(leftHair);

const rightHair = document.createElement("div");

rightHair.style.width = "25px";
rightHair.style.height = "65px";
rightHair.style.background = "#b58aff";
rightHair.style.borderRadius = "20% 50% 50% 40%";
rightHair.style.position = "absolute";
rightHair.style.top = "12px";
rightHair.style.right = "-8px";
rightHair.style.zIndex = "3";

face.appendChild(rightHair);

/*==== HAIR FLOWER ====*/

const flower = document.createElement("div");

flower.style.width = "24px";
flower.style.height = "24px";
flower.style.position = "absolute";
flower.style.top = "-12px";
flower.style.right = "5px";
flower.style.zIndex = "4";

const petalPositions = [
  { top: "0px", left: "8px" },
  { top: "5px", left: "15px" },
  { top: "12px", left: "10px" },
  { top: "5px", left: "2px" },
  { top: "1px", left: "3px" }
];

petalPositions.forEach((position) => {
  const petal = document.createElement("div");

  petal.style.width = "11px";
  petal.style.height = "11px";
  petal.style.background = "#ff85c8";
  petal.style.borderRadius = "50%";
  petal.style.position = "absolute";
  petal.style.top = position.top;
  petal.style.left = position.left;

  flower.appendChild(petal);
});

const flowerCenter = document.createElement("div");

flowerCenter.style.width = "8px";
flowerCenter.style.height = "8px";
flowerCenter.style.background = "#ffe66d";
flowerCenter.style.borderRadius = "50%";
flowerCenter.style.position = "absolute";
flowerCenter.style.top = "8px";
flowerCenter.style.left = "8px";

flower.appendChild(flowerCenter);
face.appendChild(flower);
flower.style.filter = "drop-shadow(0 2px 3px #6b3fa0)";
flower.style.transform = "rotate(12deg)";
face.style.border = "2px solid #f5c7e8";
face.style.boxShadow = "0 3px 10px #6b3fa055";

companion.style.overflow = "visible";
companion.style.gap = "0";
face.style.flexShrink = "0";