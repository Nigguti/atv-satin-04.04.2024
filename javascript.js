const x = "pokemon.html?evolucao=squirtle";
const searchParams = new URLSearchParams(x);

for (const p of searchParams) {
    console.log(p);
  }

  console.log(searchParams.get("foo") === null);

  function trocarTitulo(name) {
   document.title = name;
  }
