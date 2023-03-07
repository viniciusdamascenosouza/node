import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
  throw new Error(chalk.bgRed(erro.code, "Não há arquivos no diretório"));
}

// async / await:
async function pegaArquivo(caminhoDoArquivo) {
  try{
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.bgGreen(texto));
  } catch(erro) {
    trataErro(erro)
  }
}


// Promisses com then:

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf-8";
//   fs.promisses.readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro);
// }

pegaArquivo('./TEXTO.txt');
