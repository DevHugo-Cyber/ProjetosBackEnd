import express from "express";
import routes from "./src/routes/postsRoutes.js";
// Importa o framework Express.js para criar a aplicação web.

const app = express();
// Cria uma instância do Express.js, que será o núcleo da aplicação.
app.use(express.static("uploads"))
routes(app)

//const posts = [
  // Array de objetos que representam os posts, utilizado como dados de exemplo.
  //{id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
  //{id: 2 , descricao: "Gato fazendo yoga", imagem: "https://placecats.com/cute/300/200" },
  //{id: 3, descricao: "Gasto fazendo panquecas", imagem: "https://placecats.com/cute/300/200" },
//];

app.listen(3000,() => {
  console.log("Servidor escutando...");
});
// Inicia o servidor na porta 3000 e exibe uma mensagem no console.


  
