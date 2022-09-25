const link1 = document.getElementById("nav-link1");
const link2 = document.getElementById("nav-link2");
const link3 = document.getElementById("nav-link3");

const collapsed_1 = document.querySelector("#collapsed-1");
const collapsed_2 = document.querySelector("#collapsed-2");
const collapsed_3 = document.querySelector("#collapsed-3");

const panelBox1 = document.querySelector(".panel-box-1");
const panelBox2 = document.querySelector(".panel-box-2");
const panelBox3 = document.querySelector(".panel-box-3");

const edu_1 = document.getElementById("edu-1");
const edu_2 = document.getElementById("edu-2");
const edu_3 = document.getElementById("edu-3");

const icon1 = document.getElementById("col-icon-1");
const icon3 = document.getElementById("col-icon-3");
const icon2 = document.getElementById("col-icon-2");

// Header Nav

link1.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "blue";
});

link2.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "black";
});

link3.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "red";
});

// collaps for Education

collapsed_1.addEventListener("click", () => {
  panelBox1.classList.toggle("hide");
  if (!panelBox1.classList.contains("hide")) {
    panelBox2.classList.add("hide");
    panelBox3.classList.add("hide");
    icon2.innerHTML = "➕";
    icon3.innerHTML = "➕";
    edu_2.innerHTML = "HSC";
    edu_3.innerHTML = "BCCA";

    icon1.innerHTML = "➖";
    edu_1.innerHTML = "BCCA (Bachelor of Commerce in Computer Application)";
    panelBox1.style.backgroundColor = "#343a40";
  } else {
    icon1.innerHTML = "➕";
    edu_1.innerHTML = "BCCA";
  }
});

collapsed_2.addEventListener(
  "click",
  () => {
    panelBox2.classList.toggle("hide");
    if (!panelBox2.classList.contains("hide")) {
      panelBox1.classList.add("hide");
      panelBox3.classList.add("hide");
      icon1.innerHTML = "➕";
      icon3.innerHTML = "➕";
      edu_1.innerHTML = "BCCA";
      edu_3.innerHTML = "SSC";

      icon2.innerHTML = "➖";
      edu_2.innerHTML = "HSC (Higher Secondary School Certificate)";
      panelBox2.style.backgroundColor = "#343a40";
    } else {
      icon2.innerHTML = "➕";
      edu_2.innerHTML = "HSC";
    }
  }
  //   collapse("edu-2", "HSC", "HSC (Higher Secondary School Certificate)")
);

collapsed_3.addEventListener(
  "click",
  () => {
    panelBox3.classList.toggle("hide");
    if (!panelBox3.classList.contains("hide")) {
      panelBox1.classList.add("hide");
      panelBox2.classList.add("hide");
      icon1.innerHTML = "➕";
      icon2.innerHTML = "➕";
      edu_1.innerHTML = "BCCA";
      edu_2.innerHTML = "HSC";

      icon3.innerHTML = "➖";
      edu_3.innerHTML = "SSC (Secondary School Certificate)";
      panelBox3.style.backgroundColor = "#343a40";
    } else {
      icon3.innerHTML = "➕";
      edu_3.innerHTML = "SSC";
    }
  }
  //   collapse("edu-3", "SSC", "SSC (Secondary School Certificate)")
);
