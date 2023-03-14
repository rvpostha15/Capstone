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

AssignMint uses the following technologies:

- React
- Ruby on Rails
- PostgreSQL
- HTML/CSS
- JavaScript
- Axios
- React Router
- Devise
- Bcrypt

## Domain Model / Entity Relationship Diagram

![Domain Model / Entity Relationship Diagram](<blockquote class="imgur-embed-pub" lang="en" data-id="a/qJCpDaz" data-context="false" ><a href="//imgur.com/a/qJCpDaz"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>) 

## MVP Requirements

AssignMint meets the following minimum viable product requirements:

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

AssignMint includes the following stretch goals:

- Logging in as a student will display a student-version of the web-app
- Students will be able to study flashcards
- Connect to an external API (to be determined) to import decks that others have created on other platforms

## User Story

As a teacher, I want to be able to sign up and log in to the application, create decks of flashcards, perform full CRUD on flashcards within those decks, create assignments and flashcard decks, assign them to my students, and monitor their progress. As a student, I want to be able to sign up and log in to the application, study assigned decks, update the level of perceived difficulty for an individual card, and study any deck whether assigned or not.
