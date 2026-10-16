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
leftEye.style.top = "38px";
leftEye.style.left = "18px";
face.appendChild(leftEye);

const rightEye = document.createElement("div");

rightEye.style.width = "24px";
rightEye.style.height = "30px";
rightEye.style.background = "#34204f";
rightEye.style.borderRadius = "50%";
rightEye.style.position = "absolute";
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