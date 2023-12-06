# Project Title : visitu

visitu is a GraphQL API built with Node.js, utilizing TypeORM and TypeGraphQL. It allows users to add and list people with their birthdays and relative dates.

## Getting Started

These instructions will help you get a copy of visitu up and running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed:

- 1. Node.js
- 2. npm (Node Package Manager)
- 3. Docker (for containerization)

# Installing

To get visitu running locally, follow these steps:

## Setting Up the Environment

#### 1. Clone the repository

```
git clone [repository link]
```

#### 2. Navigate to the project directory

```
cd server
```

#### 3. Install dependencies

```
npm install
```

## Running the Application

#### Start the application

```
npm start
```

## Using Docker

For containerization with Docker:

Building the Docker Image

#### Build the Docker image

```
docker build -t visitu .
```

## Running the Docker Container

#### Run the Docker container

```
docker run -p 4000:4000 visitu
```

## Testing the server using postman or thunder client

#### Post Request with Json body for query

```
{
  "query": "query { allPeople { id name birthday relativeDate } }"
}
```

#### Post Request with Json body for mutation calculating Years

```
{
  "query": "mutation { addPerson(name: \"Joseph Christ\", birthday: \"1990-01-01\") { id name } }"
}
```

#### Post Request with Json body for mutation calculating Months

```
{
  "query": "mutation { addPerson(name: \"Alex Smith\", birthday: \"2023-09-01\") { id name } }"
}

```

#### Post Request with Json body for mutation calculating days

```
{
  "query": "mutation { addPerson(name: \"Maria Garcia\", birthday: \"2023-12-03\") { id name } }"
}

```

#### Post Request with Json body for mutation calculating Hours

```
{
  "query": "mutation { addPerson(name: \"John Lee\", birthday: \"2023-12-06T01:00:00.000Z\") { id name } }"
}

```

## Running the Tests

#### Run automated tests for the application:

```
npm test
```
