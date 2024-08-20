# 0x05. NodeJS Basics

## Back-end | JavaScript | ES6 | NodeJS | ExpressJS

---

## Resources

Read or watch:

- [Node JS getting started](https://nodejs.dev/learn)
- [Process API doc](https://nodejs.org/api/process.html)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)

---

## Learning Objectives

By the end of this project, you should be able to explain the following concepts without the help of Google:

- Run JavaScript using NodeJS
- Use NodeJS modules
- Use specific NodeJS modules to read files
- Use the `process` object to access command line arguments and environment variables
- Create a small HTTP server using NodeJS
- Create a small HTTP server using ExpressJS
- Create advanced routes with ExpressJS
- Use ES6 with NodeJS with `babel-node`
- Use `nodemon` to develop faster

---

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using Node.js (version 12.x.x)
- All files should end with a new line
- A `README.md` file at the root of the project folder is mandatory
- Your code should use the `.js` extension
- Your code will be tested using `Jest` and the command `npm run test`
- Your code will be verified against lint using `ESLint`
- Your code needs to pass all tests and lint. You can verify the entire project by running `npm run full-test`
- All functions/classes must be exported using this format: `module.exports = myFunction;`

---

## Provided Files

- **database.csv**
  ```csv
  firstname,lastname,age,field
  Johann,Kerbrou,30,CS
  Guillaume,Salou,30,SWE
  Arielle,Salou,20,CS
  Jonathan,Benou,30,CS
  Emmanuel,Turlou,40,CS
  Guillaume,Plessous,35,CS
  Joseph,Crisou,34,SWE
  Paul,Schneider,60,SWE
  Tommy,Schoul,32,SWE
  Katie,Shirou,21,CS
```

# Node.js Tasks

## Tasks

### 0. Executing Basic JavaScript with Node.js
**Mandatory**

Create a function named `displayMessage` in the file `0-console.js` that prints to STDOUT the string argument.

Example usage:

```bash
$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

$ node 0-main.js
Hello NodeJS!
$
```

### 1: Using Process stdin

### Description
Create a program named `1-stdin.js` that will be executed through the command line:

- Display the message: `Welcome to Holberton School, what is your name?` (followed by a new line).
- The user should be able to input their name on a new line.
- Display `Your name is: INPUT`.
- When the user ends the program, display `This important software is now closing` (followed by a new line).

### Requirements
Your code will be tested through a child process, ensure it meets the following criteria:

```bash
$ node 1-stdin.js
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
$ 

$ echo "John" | node 1-stdin.js
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
```
