import chalk from "chalk";
import pegaArquivo from "./index.js";

const caminho = process.argv;
pegaArquivo(caminho[2]);

async function processaTexto(caminho) {
  const resultado = await pegaArquivo(caminho[2]);
  console.log(chalk.green("lista de links"), resultado);
}

processaTexto(caminho);
