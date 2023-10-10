import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.bgRed(erro.code, "Não arquivo no diretório!"));
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
