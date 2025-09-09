// Открытие модального окна
function openModal(imageSrc) {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modal-image");

  modal.style.display = "block";
  modalImage.src = imageSrc;
}

// Закрытие модального окна
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// PDF

// document.addEventListener("DOMContentLoaded", function () {
//   const portfolioItems = document.querySelectorAll(".pdf-item");
//   const modal2 = document.getElementById("pdfModal2");
//   const pdfFrame = document.getElementById("pdfFrame");
//   const closeModal2 = document.getElementById("closeModal2");
//   const modal2Title = document.querySelector(".modal2-title");

//   // Обработчик кликов по элементам портфолио
//   portfolioItems.forEach((item) => {
//     item.addEventListener("click", function () {
//       const pdfPath = this.getAttribute("data-pdf");
//       const subtitle = this.querySelector(".pdf-subtitle").textContent;

//       // Устанавливаем путь к PDF и заголовок
//       pdfFrame.src = pdfPath;
//       modal2Title.textContent = subtitle;

//       // Показываем модальное окно
//       modal2.classList.add("active");
//       document.body.style.overflow = "hidden"; // Предотвращаем прокрутку страницы
//     });
//   });

//   // Закрытие модального окна
//   closeModal2.addEventListener("click", function () {
//     modal2.classList.remove("active");
//     pdfFrame.src = ""; // Очищаем src, чтобы остановить воспроизведение видео или аудио
//     document.body.style.overflow = ""; // Восстанавливаем прокрутку страницы
//   });

//   // Закрытие модального окна при клике вне контента
//   modal2.addEventListener("click", function (e) {
//     if (e.target === modal2) {
//       modal2.classList.remove("active");
//       pdfFrame.src = "";
//       document.body.style.overflow = "";
//     }
//   });

//   // Закрытие модального окна по клавише Escape
//   document.addEventListener("keydown", function (e) {
//     if (e.key === "Escape" && modal2.classList.contains("active")) {
//       modal2.classList.remove("active");
//       pdfFrame.src = "";
//       document.body.style.overflow = "";
//     }
//   });
// });

// PDF2
document.addEventListener("DOMContentLoaded", function () {
  const pdfItems = document.querySelectorAll(".pdf-item");
  const modal = document.getElementById("pdfModal2");
  const pdfFrame = document.getElementById("pdfFrame");
  const closeModal = document.getElementById("closeModal2");
  const modalTitle = document.querySelector(".modal2-title");

  // Обработчик кликов по элементам PDF
  pdfItems.forEach((item) => {
    item.addEventListener("click", function () {
      const pdfPath = this.getAttribute("data-pdf");

      // Устанавливаем путь к PDF с параметрами для отключения загрузки и печати
      // disableDownload=1 - отключает кнопку скачивания
      // noprint=1 - отключает печать
      // toolbar=0 - скрывает панель инструментов
      pdfFrame.src = pdfPath + "#toolbar=0&disableDownload=1&noprint=1";

      // Определяем заголовок на основе PDF файла
      if (pdfPath.includes("Telegram")) {
        modalTitle.textContent = "";
      } else if (pdfPath.includes("Confluence")) {
        modalTitle.textContent = "";
      } else {
        modalTitle.textContent = "Просмотр документа";
      }

      // Показываем модальное окно
      modal.classList.add("active");
      document.body.style.overflow = "hidden"; // Предотвращаем прокрутку страницы
    });
  });

  // Закрытие модального окна
  closeModal.addEventListener("click", function () {
    modal.classList.remove("active");
    pdfFrame.src = ""; // Очищаем src, чтобы остановить воспроизведение видео или аудио
    document.body.style.overflow = ""; // Восстанавливаем прокрутку страницы
  });

  // Закрытие модального окна при клике вне контента
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
      pdfFrame.src = "";
      document.body.style.overflow = "";
    }
  });

  // Закрытие модального окна по клавише Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      pdfFrame.src = "";
      document.body.style.overflow = "";
    }
  });

  // Блокировка правого клика на iframe
  const pdfContainer = document.querySelector(".pdf-container");
  pdfContainer.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return false;
  });

  // Блокировка сочетаний клавиш для скачивания (Ctrl+S, Ctrl+Shift+S)
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
      e.preventDefault();
      return false;
    }
  });
});
