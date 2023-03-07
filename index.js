import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Não há arquivos no diretório"));
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  fs.promisses.readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch(trataErro);
}

pegaArquivo("./TEXTO.txt");
