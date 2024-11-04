# Estudo de Arquitetura Limpa com NestJS

Este é um projeto de estudo que implementa os conceitos de Clean Architecture utilizando o framework NestJS.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de estudar e demonstrar a implementação de uma arquitetura limpa (Clean Architecture) em uma aplicação Node.js usando NestJS. O foco principal é mostrar como separar as responsabilidades em camadas bem definidas e manter o código organizado e testável.

Para mais detalhes do projeto, acesse [Clean Architecture com NestJS - Documentação Detalhada](https://luizmauro.github.io/clean-architecture-NestJS/architecture.html).

## 🏗️ Arquitetura

O projeto segue os princípios da Clean Architecture, com as seguintes camadas:

- **Domain**: Contém as entidades e regras de negócio centrais
- **Application**: Casos de uso da aplicação
- **Infrastructure**: Implementações concretas (controllers, repositories, etc)

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## 📁 Estrutura do Projeto

src/
├── domain/ # Entidades e regras de negócio
├── application/ # Casos de uso
├── infrastructure/ # Implementações externas
│ ├── config/ # Configurações
│ ├── repositories/# Repositórios
│ └── common/ # Recursos compartilhados
└── main.ts # Ponto de entrada da aplicação

## 📝 Notas de Estudo

Este projeto serve como um exemplo prático de:

- Implementação de Clean Architecture
- Separação de responsabilidades
- Injeção de dependência
- Testes unitários e de integração
- Boas práticas de desenvolvimento


## 📚 Links Úteis

- [Documentação do NestJS](https://docs.nestjs.com/)
- [Clean Architecture - Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
