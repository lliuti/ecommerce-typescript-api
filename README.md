# ecommerce-typescript-api

An eCommerce API using Typescript + PostgreSQL with TypeORM

<br>

---

## Description

An API that allows Users to create and buy Products

<br>

---

## Entities

<br>

### User

```
id: uuid(PK);

name: string;

email: string;

password: string;

document: string;

created_at: date;

updated_at: date;
```

<br>

### Product

```
id: uuid (PK)

name: string

email: string

password: string

document: string

created_at: date

updated_at: date
```

<br>

### Transactions

```
id: uuid (PK)

product_id: uuid (FK)

owner_id: uuid (FK)

buyer_id: uuid (FK)

price: number

method: string (debit/credit)

created_at: date

updated_at: date
```

<br>

### ConfirmationEmail

```
id: uuid (PK)

product_id: uuid (FK)

owner_id: uuid (FK)

buyer_id: uuid (FK)

price: number

method: string (debit/credit)

created_at: date

updated_at: date
```

<br>

---

## Functional Requirements

- [x] Usuário deve poder se cadastrar na plataforma
- [x] Usuários devem ser autenticados (login) na plataforma
- [x] Usuário deve poder cadastrar produtos na plataforma
- [x] Usuário deve poder ver todos os produtos cadastrados
- [x] Usuário deve poder ver todos os produtos de um usuário especifico
- [x] Usuário pode comprar (criar transacao) um produto cadastrado
- [x] Usuário deve receber email de confirmacao ao criar conta
- [x] Usuário deve poder confirmar o email

## Business Rules

- [x] Usuários não podem se cadastrar com um e-mail ou documento já cadastrado
- [x] Senhas dos usuários não devem ser exibidas nos retornos
- [x] Usuários não podem cadastrar produtos se estiverem deslogados
- [x] Usuário não pode comprar um produto dele mesmo
- [x] Quando uma transacao for feita, o produto comprado deve ter seu _status_ alterado para _sold_
- [x] Usuário não pode fazer login se não tiver confirmado o email
