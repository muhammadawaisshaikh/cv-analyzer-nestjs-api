<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Guide to Develop Backend using NESTJS

## Rest API
https://dev.to/carlomigueldy/building-a-restful-api-with-nestjs-and-mongodb-mongoose-2165
https://github.com/carlomigueldy/nest-js-todo-rest-api

## Authentication
https://docs.nestjs.com/security/authentication
https://docs.nestjs.com/security/encryption-and-hashing
https://wanago.io/2020/05/25/api-nestjs-authenticating-users-bcrypt-passport-jwt-cookies/

## CORS
https://docs.nestjs.com/security/cors

## init new nest app
> nest new cv-analyzer-nestjs-api

## add mongodb related dependencies
> npm install --save @nestjs/mongoose mongoose

## create new module using nestjs cli
> nest g module projects
<!-- Using alias: nest g mo Todo -->

## create new service using nestjs cli
> nest g service project
<!-- Using alias: nest g s Todo -->

## create new controller using nestjs cli
> nest g controller project 
<!-- Using alias: nest g co Todo  -->

## Schema, DTO
> create schema and dto directories

## Creating a Todo model/schema
npm install --save @nestjs/mongoose mongoose