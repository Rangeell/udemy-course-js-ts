import path from 'node:path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/class015-exercise-video/exercise.ts', // Arquivo de entrada para o TS no Webpack
  module: {
    rules: [
      {
        // Expressão regular para encontrar todos os arquivos que terminam com ".tsx" (x opcional)
        test: /\.tsx?$/,
        loader: 'ts-loader', // Para todos os arquivos que ele encontrar, ele vai usar o ts-loader
        exclude: /node_modules/, // Exclui a pasta node_modules na compilação
        options: {
          configFile: 'tsconfig.frontend.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolução de módulos
  },
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'), // Pasta de saída
  },

  devtool: 'source-map',
};

export default config;
