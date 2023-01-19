const data = [
  {
    type: "direct",
    question: "Quel est le surnom d'un tractopelle au Québec ?",

    response: {
      responsetrue: "Pépine",
    },
  },
  {
    type: "qcm",
    question: "quel est le fabricant qui ne produit pas de tractopelle ?",
    response: {
      responsefalse1: "Caterpillar",
      responsefalse2: "Volvo",
      responsetrue: "Tesla",
      responsefalse3: "JCB",
    },
  },

  {
    type: "vf",
    question: "Est-ce qu'un tractopelle est un engin génial ?",
    response: {
      responsetrue: "Vrai",
      responsefalse: "Faux",
    },
  },
  {
    type: "direct",
    question: "Tractopelle, un engin de chantier[...]",
    response: {
      responsetrue: "génial",
    },
  },
  {
    type: "qcm",
    question: "En quelle année a été inventéle tractopelle ?",
    response: {
      responsefalse1: "1947",
      responsefalse2: "1953",
      responsefalse3: "1967",
      responsetrue: "2025",
    },
  },
];

const lolilo_test = [];

let myBody = document.querySelector("body");
let test = document.getElementById("test");
let button = document.createElement("button");
button.innerText = "Commencer le quizz";
myBody.appendChild(button);

let form = document.createElement("form");

button.addEventListener("click", () => {
  button.style.display = "none";

  myBody.appendChild(form);
  data.map((elem) => {
    let p = document.createElement("p");
    let div = document.createElement("div");
    p.innerText = elem.question;
    form.appendChild(div);
    div.appendChild(p);
    if (elem.type === "direct") {
      let input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("required", "required");
      div.appendChild(input);
    } else {
      for (let res in elem.response) {
        let radio = document.createElement("input");
        radio.id = elem.response[res];
        radio.type = "radio";
        radio.name = elem.question;
        // radio.addEventListener("click", (e) => {});
        let label = document.createElement("label");
        label.setAttribute("for", elem.response[res]);
        label.innerText = elem.response[res];
        div.appendChild(label);
        div.appendChild(radio);
      }
    }
  });
});

//A garder mais replacer correctement pour que l'input soit placé à la fin du form
let testSubmit = document.createElement("button");
testSubmit.innerText = "Valider le formulaire";
form.appendChild(testSubmit);

testSubmit.addEventListener("click", (e) => {
  const isChecked = check_radio_if_checked();
  const textChecked = check_text_input();
  if (isChecked && textChecked) {
    console.log("le formulaire a été envoyé.");
  } else {
    e.preventDefault();
    console.log("Les radio ne sont pas validés trou de balle");
  }
});

const check_radio_if_checked = () => {
  for (let elem of form) {
    if (elem.type === "radio" && elem.checked) {
      lolilo_test.push(elem.id);
      return true;
    }
    if (elem.type === "text") {
      lolilo_test.push(elem.value);
      console.log(lolilo_test);
    }
  }
  // if (lolilo_test.length < 3) {
  //   alert("rempli test radio connard");
  // }
};
