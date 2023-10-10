import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.bgRed(erro.code, "Não arquivo no diretório!"));
}

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = "utf-8"
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if(erro) {
//             trataErro(erro)
//         }
//     console.log(chalk.green(texto));
//   });
// }

function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-08";
  fs.promises.readFile(caminhoDoArquivo, encoding)
    .then((texto) => {
    console.log(chalk.green(texto));
  })
  .catch((erro) => trataErro(erro))
}
