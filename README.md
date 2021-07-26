# angular-node-docker



O app está separado em Node e Angular 
o Banco de Dados já está populado com informações do usuarios.
Será necessario que o docker e o docker-compose estaja previamente intalado na maquina 

https://docs.docker.com/engine/install/

https://docs.docker.com/compose/install/


# Inicando o Projeto com o Docker

Execute  na pasta raiz e execute os seguintes comandos   
```
docker-compose build --no-cache
```
```
docker-compose up -d
```



A aplicação será levantada em http://localhost:4200


# Backend

Copiar arquivo env de exemplo
```
cp .env.example .env
```

Rodar docker compose para subir o banco de dados MySql
```
sudo docker-compose up -d --build
```

Gerar link simbolico
```
ln -s public html
```
Para ativar o servidor de teste
```
php -S localhost:8004 -t public
```

Gerar a key JWT
```
php artisan jwt:secret
```

A API será levantada em http://localhost:8004/api
