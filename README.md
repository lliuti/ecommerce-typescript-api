# ecommerce-typescript-api

An eCommerce API using Typescript + PostgreSQL with TypeORM

![Catalog](https://image.freepik.com/free-vector/catalogue-concept-illustration_114360-2032.jpg)

<br>

## Description

An API that allows Users to create and buy Products

## How to run

To run this API all you will need to have installed is: docker

After cloning this repository and entering its directory, run the command:

```
docker compose up
```

---

<br>

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

- [x] Users must be able to be registered
- [x] Users must be authenticateds (login)
- [x] Users may register Products
- [x] Users may see all stored Products
- [x] Users may be able to see all products from a specific User
- [x] Users may be able to buy a Product
- [x] Users must receive an confirmation email when registered
- [x] Users must be able to confirm their email

## Business Rules

- [x] Users cannot be registered with an already existing document/email
- [x] User's password can not be returned
- [x] Users cant register Products when unauthenticated
- [x] Users cant buy their own Products
- [x] When a User buy a Product, the Product must have its _status_ changed to _sold_
- [x] Users cant be authenticated without confirming their email
