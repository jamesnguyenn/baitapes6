const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (function () {
  let buttonFinish;
  function getFinishButton() {
    const buttons = $$("a");
    buttons.forEach((button) => {
      if (button.innerHTML === "Finish") {
        buttonFinish = button;
      }
    });
  }
  function displayData() {
    buttonFinish.addEventListener("click", () => {
      const inputs = $$("input");

      const fieldsetContent = $("#steps-uid-0-p-2");

      for (let i of inputs) {
        fieldsetContent.insertAdjacentHTML(
          "beforeend",
          `<div class="display">${i.getAttribute("name").toUpperCase()} : ${
            i.value ? i.value : "No Data Fill"
          }</div>`
        );
      }

      const select = $("select");
      fieldsetContent.insertAdjacentHTML(
        "beforeend",
        `<div class="display">${select.getAttribute("name").toUpperCase()} : ${
          select.value
        }</div>`
      );
      console.log();
    });
  }
  const start = () => {
    getFinishButton();
    displayData();
  };
  start();
})();
