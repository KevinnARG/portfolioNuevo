// CONTACTO

let email = document.querySelector("#email")
let nombre = document.querySelector("#nombre")
let asunto = document.querySelector("#asunto")
let mensaje = document.querySelector("#mensaje")

const webhookURL = "https://discord.com/api/webhooks/1153080437099475006/ExVXbs99BrbpKpX6DUX6HCGYuV09wAJF_HSU8-gdEmozfwN1pTmhY9Mj6ZE4DTzUxl4x";

document.querySelector("#enviar").addEventListener("click", (e) => {
    
    const message = {
      content: `
    **NUEVO MENSAJE DE CONTACTO**
    
    Email: ${email.value}
    Nombre: ${nombre.value}
    Asunto: ${asunto.value}
        
    Mensaje: ${mensaje.value}

    ---------------------------
      `
    };
    
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    };

    e.preventDefault()
    
    if (!email.value || !nombre.value || !asunto.value || !mensaje.value) {
        
        alert("Tenés que rellenar todos los campos para enviar el mensaje!")
        
    } else {
        
        fetch(webhookURL, options)
          .then(response => {
            if (response.status === 204) {
              console.log("Mensaje enviado con éxito a Discord");
              document.querySelector("#form").reset()
            } else {
              console.error("Error al enviar el mensaje a Discord:", response.status);
            }
          })
          .catch(error => {
            console.error("Error en la solicitud HTTP:", error);
          });
          
    }

})