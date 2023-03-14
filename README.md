# AssignMint

## Description

AssignMint is a web application designed to help teachers easily create assignments and flashcard decks, assign them to their students for study, and monitor their progress all in one place. The application uses React as a frontend and Ruby on Rails as a backend.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Domain Model / Entity Relationship Diagram](#domain-model--entity-relationship-diagram)
- [MVP Requirements](#mvp-requirements)
- [Stretch Goals](#stretch-goals)
- [Links](#links)

## Installation

To install AssignMint on your local machine, follow these steps:

1. Clone the GitHub repository.
2. Navigate to the root directory of the project in your terminal.
3. Run `bundle install` to install the required Ruby gems.
4. Run `rails db:migrate` to set up the database.
5. Run `rails db:seed` to populate the database with sample data.
6. Run `rails s` to start the rails server.
7. Open up a new terminal
8. Navigate to the client folder
9. Run `npm install` to install the required packages for the frontend.
10. Run `npm start` to start the frontend server.

## Usage

To use AssignMint, simply navigate to the web application's URL and create an account as a teacher. From there, you can create assignments and flashcard decks, assign them to your students, and monitor their progress. The application also features authentication and authorization, as well as custom CSS to make the user interface more visually appealing.

## Technologies

- React
- Ruby on Rails
- PostgreSQL
- HTML/CSS
- JavaScript
- React Router
- Devise
- Bcrypt

## Domain Model / Entity Relationship Diagram

![ERD](https://user-images.githubusercontent.com/115106981/224885570-ca1d17fa-67c1-4ecc-89e0-07f43d1ffcf0.jpg) 

## MVP Requirements

### Backend (Ruby on Rails API)

- Authorization/authentication
- Multiple has_many_through relationships
- Seeds from a complex data set
- Custom routes
- Custom controller/model methods
- Validations

### Frontend (React)

- Authorization/authentication
- Interacting with a complex API
- Custom CSS

## Stretch Goals

- Logging in as a student will display a student-version of the web-app
- Students will be able to study flashcards
- Connect to an external API (to be determined) to import decks that others have created on other platforms

## Links
- [Project Pitch](https://docs.google.com/document/d/1WmIiYez49Na_1eP1I17_heVjv6m_5hpN2YAwVDWoQXM/edit#)
- [Domain Models](https://docs.google.com/spreadsheets/d/1DpbfynByxM7Uud9Q8oIT-ou6IvRDhjhTXE_a2pIqjNA/edit#gid=0)
- [Validations](https://docs.google.com/spreadsheets/d/1DpbfynByxM7Uud9Q8oIT-ou6IvRDhjhTXE_a2pIqjNA/edit#gid=1067435169)
- [WireFrame](https://www.figma.com/file/q7smkkMRpJdFsE0Nrlr2Rs/Ron-Posthauer-Capstone?node-id=0%3A1&t=3Ze0QhK2kDwvFuA5-1)
