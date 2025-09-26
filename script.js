const lengthInput = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");

// Conjuntos de caracteres
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-{}[]:;<>?,./";

// Função para gerar senha
function generatePassword() {
  let length = parseInt(lengthInput.value);
  let chars = "";

  if (uppercaseCheck.checked) chars += upper;
  if (lowercaseCheck.checked) chars += lower;
  if (numbersCheck.checked) chars += numbers;
  if (symbolsCheck.checked) chars += symbols;

  if (chars === "") {
    alert("Selecione pelo menos uma opção!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordField.value = password;
}

// Função para copiar senha
function copyPassword() {
  if (passwordField.value === "") {
    alert("Nenhuma senha gerada!");
    return;
  }
  passwordField.select();
  document.execCommand("copy");
  alert("Senha copiada para a área de transferência!");
}

// Eventos
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
