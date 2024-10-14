document.addEventListener("DOMContentLoaded", () => {
    const colors = ["red", "blue", "green", "purple", "orange", "brown"];

    const form = document.querySelector(".form");
    const btnAddListItem = document.querySelector(".btn__addListItem");
    const btnLogParagraphDimensions = document.querySelector(
      ".btn__logParagraphDimensions"
    );
    const btnToggleParagraph = document.querySelector(
      ".btn__toggleParagraph"
    );
    const btnRemoveLastListItem = document.querySelector(
      ".btn__removeLastListItem"
    );
    const btnChangeParagraphColor = document.querySelector(
      ".btn__changeParagraphColor"
    );
    const paragraph = document.querySelector(".paragraph");
    const ulList = document.querySelector(".ul_list");

    btnAddListItem.addEventListener("click", addListItem);
    btnLogParagraphDimensions.addEventListener(
      "click",
      logParagraphDimensions
    );
    btnRemoveLastListItem.addEventListener("click", removeLastListItem);
    btnChangeParagraphColor.addEventListener("click", changeParagraphColor);
    btnToggleParagraph.addEventListener("click", toggleParagraph);

    form.addEventListener("submit", validateForm);

    modifyDocument();

    // Функция для изменений заголовка, списка, изображения и ссылки
    function modifyDocument() {
      document.querySelector("h1").innerText = "Измененный заголовок";

      document.querySelectorAll(".ui__item").forEach((item, index) => {
        item.innerText += `, порядковый номер:${index + 1}`;
      });

      const image = document.querySelector("img");

      image.setAttribute("src", "https://via.placeholder.com/300");

      const link = document.querySelector("a");
      link.innerHTML = "Перейти на другой сайт";

      link.setAttribute("href", "https://example.com");
    }

    // Функция для добавления нового элемента списка
    function addListItem() {
      const newItem = document.createElement("li");

      newItem.innerText = "Новый элемент списка";

      ulList.appendChild(newItem);
    }

    // Функция для удаления последнего элемента списка
    function removeLastListItem() {
      const lastItem = ulList.lastElementChild;

      if (lastItem) {
        ulList.removeChild(lastItem);
      }
    }

    // Функция для изменения цвета текста абзаца
    function changeParagraphColor() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      paragraph.style.color = randomColor;
    }

    // Функция для скрытия или показа абзаца
    function toggleParagraph() {
      paragraph.style.display =
        paragraph.style.display === "none" ? "block" : "none";
    }

    // Функция для получения размеров абзаца
    function logParagraphDimensions() {
      const rect = paragraph.getBoundingClientRect();

      console.log(`Ширина: ${rect.width}px, Высота: ${rect.height}px`);
    }

    // Функция для проверки формы
    function validateForm(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      if (!name || !email) {
        alert("Пожалуйста, заполните все поля.");
      } else {
        alert(`Форма отправлена!\nИмя: ${name}\nEmail: ${email}`);
      }
    }
  });