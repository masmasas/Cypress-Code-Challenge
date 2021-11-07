# Cypress-Code-Challenge
<div id="top"></div>


## About The Project

<b>Here's a cypress code challenge developed for Alibaba. This challenge is tried to be implemented in the best possible way based on the available time.</b>


### Built With

* [Cypress](https://www.cypress.io/)



## Getting Started

First of all you need to install npm and make sure that is added in the path. To do this, just run the bottom line in CMD or your terminal IDE.
* npm version
  ```sh
  npm -v
  ```


### Prerequisites

After installing npm you need to create package json before installing cypress. For that run this line in your project folder:
* npm
  ```sh
  npm init
  ```
  Note that you can skip all the options.


### Installation

1. Install Cypress via npm
    ```sh
   npm install cypress --save-dev
   ```
   This will install Cypress locally as a dev dependency for your project.
   <br><br>
2. Install wait-until plugin for everything not expected by cypress wait or you can use other methods.
   ```sh
   npm i -D cypress-wait-until
   ```
3. Add this line to your project's cypress/support/commands.js:
   ```js
   import 'cypress-wait-until';
   ```


## Usage

* Launch cypress test runner
  ```sh
  npx cypress open
  ```
  
  After openning cypress you can execute your tests witout any command lines.




## Contact

Masoud Askari - masmasas95@gmail.com

Project Link: [https://github.com/masmasas/cypress-code-challenge](https://github.com/masmasas/cypress-code-challenge)



<p align="right">(<a href="#top">back to top</a>)</p>

