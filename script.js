
// эффект движения курсора

const cursor = document.createElement("div");

cursor.style.position = "fixed";
cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.borderRadius = "50%";
cursor.style.border = "1px solid white";
cursor.style.pointerEvents = "none";
cursor.style.zIndex = "999";

document.body.appendChild(cursor);


document.addEventListener(
"mousemove",
(e)=>{

cursor.style.left = e.clientX - 10 + "px";
cursor.style.top = e.clientY - 10 + "px";

});
