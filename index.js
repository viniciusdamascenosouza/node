import fs from "fs";
import chalk from "chalk";

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];

  const resultados = capturas.map((captura) => ({ [captura[1]]: captura[2] }));
  return resultados;
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
    console.log(executaExtraiLinks);
  } catch (erro) {
    trataErro(erro);
  }
}

pegaArquivo("./arquivos/texto.md");

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
