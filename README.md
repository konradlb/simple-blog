# Silmple React blog with Firebase

Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Playground with React.js and Firebase. The goal was to build simple blog and store posts data in Firebase

1. Clone this repo by

```
git clone https://github.com/konradlb/simple-blog.git

```

and go inside the directory

```
cd simple-blog
```

2. Paste your Firebase api keys into .env.template and change it name into .env

```
REACT_APP_apiKey= "..."
REACT_APP_authDomain= "..."
REACT_APP_projectId= "..."
REACT_APP_storageBucket= "..."
REACT_APP_messagingSenderId= "..."
REACT_APP_appId= "..."
```

3. Create collection "posts" in firebase console

4. Install dependencies

```
npm install
```

5. Run the app in the development mode

```
npm start
```

Application will run on http://localhost:3000. You need to have free port 3000 to run this app.
