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
- [User Story](#user-story)

## Installation

To install AssignMint on your local machine, follow these steps:

1. Clone the GitHub repository.
2. Navigate to the root directory of the project in your terminal.
3. Run `bundle install` to install the required Ruby gems.
4. Run `rails db:migrate` to set up the database.
5. Run `rails db:seed` to populate the database with sample data.

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
