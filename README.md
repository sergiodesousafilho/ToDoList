# ToDoList
Aplicação de lista de tarefas em Angular e ASP .NET Core

## O que foi feito

Utilizei como base para o front-end o template gratuito SB Admin

[https://startangular.com/product/sb-admin-bootstrap-4-angular-8/](https://startangular.com/product/sb-admin-bootstrap-4-angular-8/)


A base de dados utilizada foi SQL Server. 
Como solicitado, gerei os arquivos de migrations através de code first.


Infelizmente, tive alguns contratempos no fim de semana e não terminei o projeto.
Estou enviando o desenvolvimento parcial que consegui fazer.


## Como executar


* Configurar a connection string para sua instância local de SQL Server no arquivo appsettings.json no projeto de back-end.

* No console do gerenciador de pacotes Nuget, selecionar o projeto de acesso ao banco ToDo.Repository.EF e executar o comando update-database para criar a base de dados localmente.

* Executar o projeto de back-end.

* No terminal, navegar até a pasta do projeto de front-end onde se encontra o arquivo package.json e executar o comando npm install. Isso irá iniciar o download das dependências do fron-end.

* Executar então o comando npm start para executar o projeto localmente.

* Abrir o navegador no endereço localhost:4200.

* Para ver dados na tela de lista de tarefas será necessário fazer insert manualmente nas tabelas de categorias e lista de tarefas, as telas de criação não ficaram prontas. A entidade de uma tarefa específica não chegou a ser usada pois não deu tempo de fazer a tela de detalhes de uma lista de tarefas.