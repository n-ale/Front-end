let trocado = false;

function proximo(){
    const grupos = document.querySelectorAll(".grupo");

    if(!trocado){

        grupos[0].innerHTML = `
            <h2> 🅳 Grupo D </h2>
            <p><b>Seleções</b></p>
            <ul>
                <li> Estados Unidos </li>
                <li> Paraguai </li>
                <li> Austrália </li>
                <li> Turquia </li>
            </ul>
            <details>
                <summary><b> Fatos </b></summary>
                <p> Os EUA jogam em casa, vantagem histórica em Copas.
                Austrália enfrenta frequentemente seleções sul-americanas em torneios. </p>
            </details>
        `;

        grupos[1].innerHTML = `
            <h2> 🅴 Grupo E </h2>
            <p><b>Seleções</b></p>
            <ul>
                <li> Alemanha </li>
                <li> Equador </li>
                <li> Costa do Marfim </li>
                <li> Curaçao </li>
            </ul>
            <details>
                <summary><b> Fatos </b></summary>
                <p> Alemanha costuma dominar fases de grupos.
                Equador e Costa do Marfim têm estilos físicos semelhantes. </p>
            </details>
        `;

        grupos[2].innerHTML = `
            <h2> 🅵 Grupo F </h2>
            <p><b>Seleções</b></p>
            <ul>
                <li> Holanda </li>
                <li> Japão </li>
                <li> Tunísia </li>
                <li> Suécia </li>
            </ul>
            <details>
                <summary><b> Fatos </b></summary>
                <p> Brasil, Marrocos e Escócia já dividiram grupo em 1998.
                Brasil nunca perdeu para a Escócia em Copas. </p>
            </details>
        `;

        trocado = true;
    }
}