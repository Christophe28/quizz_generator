let $ = document.querySelector.bind(document);

let body = $("body");
let form = document.createElement("form");

let start_quizz = document.createElement("button");
start_quizz.textContent = "Lancer le quizz";
start_quizz.addEventListener("click", display_quizz);

body.appendChild(start_quizz);

const data = [
  {
    type: "direct",
    question: "Quel est le surnom d'un tractopelle au Québec ?",

    response: {
      responsetrue: "pépine",
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

let score = 0;

function display_quizz() {
  start_quizz.style.display = "none";
  let end_quizz = document.createElement("input");
  end_quizz.type = "submit";
  end_quizz.addEventListener("click", (e) => {
    end_quizz.style.display = "none";
    e.preventDefault();
    for (let elem_form of form) {
      if (elem_form.type === "radio" && elem_form.checked) {
        if (
          elem_form.id ===
          data[elem_form.parentNode.parentNode.id].response.responsetrue
        ) {
          score += 1;
        }
      }
      if (elem_form.type === "text") {
        console.log(data[elem_form.parentNode.id]);
        if (
          elem_form.value.toLowerCase() ===
          data[elem_form.parentNode.id].response.responsetrue
        ) {
          console.log(elem_form);
          score += 1;
        }
      }
    }
    console.log(score);
  });
  body.appendChild(form);

  data.map((elem, index) => {
    let div = document.createElement("div");
    div.id = index;
    let p = document.createElement("p");
    p.textContent = elem.question;
    div.appendChild(p);
    display_input_by_question_type(
      elem.type,
      elem.question,
      div,
      elem.response
    );
    form.appendChild(div);
    form.appendChild(end_quizz);
  });
}

const display_input_by_question_type = (
  type_questions,
  question,
  container,
  responses
) => {
  let section_container_radio = document.createElement("section");
  if (type_questions === "direct") {
    let input_text = document.createElement("input");
    input_text.type = "text";
    input_text.setAttribute("required", "required");
    container.appendChild(input_text);
  } else {
    for (let key in responses) {
      let input_radio = document.createElement("input");
      input_radio.type = "radio";
      input_radio.id = responses[key];
      input_radio.name = question;
      let label_radio = document.createElement("label");
      label_radio.textContent = responses[key];
      section_container_radio.appendChild(input_radio);
      section_container_radio.appendChild(label_radio);
      section_container_radio.childNodes[0].defaultChecked = true;
      container.appendChild(section_container_radio);
    }
  }
};
