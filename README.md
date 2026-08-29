# Node.js CLI Data Management

A simple **Node.js command-line application** for managing user data using **Yargs**.

## Features

* Add user data
* List all users
* Search by ID
* Delete by ID
* Clear all data
* View data

## Technologies

* Node.js
* JavaScript
* Yargs
* JSON

## Usage

```bash
node app.js add --firstName="Ali" --LastName="Ahmed" --Age="22" --City="Qena" --ID="123"
```

```bash
node app.js list
```

```bash
node app.js search --ID="123"
```

```bash
node app.js delete --ID="123"
```

```bash
node app.js clear
```

```bash
node app.js view
```

## Installation

```bash
npm install
```

Run the application using:

```bash
node app.js
```

