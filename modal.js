document.getElementById("modalButton").addEventListener("click", function () {
    var modal = createModal();
    document.body.appendChild(modal);

    setTimeout(function () {
        modal.classList.add("active");
    }, 10);
});

function createModal() {
    var modal = document.createElement("div");
    modal.className = "modal";

    var modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    var contentContainer = document.createElement("div");
    contentContainer.className = "content-container";

    var image = document.createElement("img");
    image.src = "images/mj.jpg";  //AGREGAR LA IMAGEN QUE SE QUIERA
    image.className = "modal-image";

    var textContainer = document.createElement("div");
    textContainer.className = "text-container";

    var header = document.createElement("h2");
    header.textContent = "Título del Modal"; //PONER EL TITULO QUE SE QUIERA

    var paragraph = document.createElement("p");
    paragraph.textContent = "Aca se puede poner el texto que se quiera"; //PONER EL TEXTO QUE QUIERA

    var closeButton = document.createElement("span"); //Boton para cerrar el modal
    closeButton.innerHTML = "&times;";
    closeButton.className = "close-button";

    contentContainer.appendChild(image);
    textContainer.appendChild(header);
    textContainer.appendChild(paragraph);
    contentContainer.appendChild(textContainer);
    modalContent.appendChild(contentContainer);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);

    closeButton.addEventListener("click", function () {
        modal.classList.remove("active");
        setTimeout(function () {
            modal.parentNode.removeChild(modal);
        }, 300);
    });

    // Generar estilos CSS dinámicamente
    var style = document.createElement("style");
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease-in-out;
        }
        
        .modal.active {
            opacity: 1;
            pointer-events: auto;
        }
        
        .modal-content {
            background-color: #333;
            padding: 20px;
            border-radius: 5px;
            max-width: 600px;
            width: 80%;
            text-align: center;
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        
        .content-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
        }
        
        .modal-image {
            width: 35%;
            height: auto;
            object-fit: cover;
            border-radius: 5px;
            border: 2px solid white;
        }
        
        .text-container {
            font-family: 'Inter', sans-serif;
            padding-left: 20px;
            width: 65%;
        }
        
        .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
        }
        h2 {
            text-decoration: underline;
        }
    `;

    document.head.appendChild(style);

    return modal;
}
