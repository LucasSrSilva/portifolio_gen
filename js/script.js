const sobre = document.querySelector("#about");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const formulario = document.querySelector(".formulario")

async function getApiGithub() {
    try {
        const dadosPerfil = await fetch(`https://api.github.com/users/lucasSrSilva`)
        const perfil = await dadosPerfil.json();

        let conteudo = `
            
                <img class="sobre__imagem" src="${perfil.avatar_url}" alt="Foto do Perfil do Github">


                <article id="sobre_texto">

                    <h1>Sobre mim</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quibusdam odit voluptates incidunt inventore rem error harum
                        blanditiis accusamus vitae, minus fugit consequatur?
                        Dolorum maiores magni deleniti modi sit laudantium totam!
                    </p>
                    <div id="sobre_github">

                        <a target="_blank" href="${perfil.html_url}">Github</a>
                        <p>${perfil.followers}</p>
                        <p>${perfil.public_repos}</p>

                    </div>

                </article>

            `

            sobre.innerHTML = conteudo;
    }
    catch {
        console.error(error);
    }
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const campoEmail = document.querySelector("#email");
    const txtEmail = document.querySelector("#txtEmail");

    if(!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = "Digite um E-mail válido"
        campoEmail.focus();
        return;
    }else {
        txtEmail.innerHTML = "";
    }
    formulario.submit();
})

getApiGithub();