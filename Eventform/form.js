const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const errorContainer = document.querySelector("#errorContainer");

const notesLabel = document.querySelector("#notesLabel");

function updateNotesField() {
  const value = type.value;

  if (value === "student") {
    notesContainer.hidden = false;
    notes.required = true; 
    notesLabel.textContent = "Student I#";
  } else if (value === "guest") {
    notesContainer.hidden = false;
    notes.required = true;
    notesLabel.textContent = "Access Code";
  } else {
    notesContainer.hidden = true;
    notes.required = false;
    notes.value = ""
  }
}

type.addEventListener("change", updateNotesField);
updateNotesField();

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  errorContainer.textContent = "";
  output.innerHTML = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const selectedType = form.type.value;
  const availableDate = form.availableDate.value;
  const note = form.notes.value.trim();

  if (isPastDate(availableDate)) {
    errorContainer.textContent = "Event Date must be later than the current date.";
    return;
  }

  let tipoFormateado = "";
  let etiquetaNota = "";

  if (selectedType === "student") {
    if (isNaN(note) || note.length !== 9) {
      errorContainer.textContent = "Student I# must be exactly 9 digits.";
      return;
    }
    tipoFormateado = "Student";
    etiquetaNota = "Student I#";

  } else if (selectedType === "guest") {
    if (note !== "EVENT131") {
      errorContainer.textContent = "Access Code is invalid. It must be EVENT131.";
      return;
    }
    tipoFormateado = "Guest";
    etiquetaNota = "Access Code";
  }

  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p><b>Name:</b> ${firstName} ${lastName}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Type:</b> ${tipoFormateado}</p>
    <p><b>Date:</b> ${availableDate}</p>
    <p><b>${etiquetaNota}:</b> ${note}</p>
  `;

  form.reset();
  updateNotesField();
});