import fs from "fs";
import chalk from "chalk";

export default pegaArquivo;;

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];

  const resultados = capturas.map(captura => ({ [captura[1]]: captura[2] }));
  return resultados.length !== 0 ? resultados : chalk.bgRed("Não há links no arquivo!")
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.bgRed(erro.code, "Não arquivo no diretório!"));
}

// async/await
async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    const executaExtraiLinks = extraiLinks(texto);
    return executaExtraiLinks;
  } catch (erro) {
    trataErro(erro);
  }
}


// PROMISES COM THEN()

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-08";
//   fs.promises.readFile(caminhoDoArquivo, encoding)
//     .then((texto) => {
//     console.log(chalk.green(texto));
//   })
//   .catch((erro) => trataErro(erro))
// }

//      expressão regular para extrair o link do texto.md        \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
