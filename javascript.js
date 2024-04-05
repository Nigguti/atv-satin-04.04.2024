const x = "pokemon.html?evolucao=squirtle";
const searchParams = new URLSearchParams(x);
const evolucao = searchParams.get("evolucao");

for (const p of searchParams) {
    console.log(p);
  }

  console.log(searchParams.get("foo") === null);

  function trocarTitulo(name) {
   document.title = name;
  }


if (evolucao !== null) {
    const url = `https://pokeapi.co/api/v2/pokemon/${evolucao}`;
}

fetch(url)
        .then(response => {
    
            if (!response.ok) {
                throw new Error('Erro na requisição à PokeAPI');
            }
        
            return response.json();
        })