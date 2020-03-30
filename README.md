# Aries_React

## Purpose

This is an Introduction to react, we will learn some basic concept, providing a strong basics.

* **JSX Syntax**
* **Functional Component**
* **Props**
* **State Manadgement**
* **Context** (advanced)

## Prerequisite

First of all, let's get some setup:

  * **VSCode**: https://code.visualstudio.com/ (optional) - Number 1 code editor on the market
  * **Git Bash**: https://gitforwindows.org/ (mandatory) - A Git manager bundled with a Unix Shell, allows you to run shell command including git
  * **Node JS**: https://nodejs.org/en/download/ (mandatory) - Javascript Runtime environement
  * **Yarn**: https://classic.yarnpkg.com/fr/docs/install/#windows-stable (mandatory) - Package manager
  
  **Clone The repository** : git clone https://github.com/RemiSeris/Aries_React.git
  
  * **Get into the code folder**: cd Aries_React
  
 * **Get into the code folder**: cd my-app
  
  * **Install dependecies**: yarn

 * **Run in developpement**: yarn start
 
 * **Open vsCode in CurrentDirectory**: code .

  
## Workshops

### 1 Hello scalability

**Goals** :

* Run a React based Project
* Create our First functional component
* Create and use a repetible components with props


**Instruction**:

1. Do all the the prerequisite
2. Clone the project
3. Run the project
4. Create a Functionnal component called **Item** with border, shadow, and a "Hello World" in the center .
5. Create a Functionnal component called **List** containing many **Item**
6. Pass down the **Item** content as Props from the **List** component (item should display "Hello World 1", "Hello World 2", ...) 


### 2 State of the art 

**Goals** :

* Meet the hooks notion
* Learn how to use State

**Ressource** :

* useState Hooks documentation https://fr.reactjs.org/docs/hooks-state.html
* Array documentation https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array

**Instruction**:

1. Make a "List" component pilling the previously made "Item" components in column
2. Make a button component with a onClick prop
3. Add two Button too your layout on with the string "Add" and one With the string "Delete"
4. When the "Add" button is clicked an item is added to the list, When the "Delete" button is clicked an item is deleted from the list

### 3 Hello open world !

**Goals** :

* Discover the library system
* Discover an ui library

**Ressource** :

* Material-ui documentation https://material-ui.com/getting-started/installation/
* LocalStorage documentation https://developer.mozilla.org/fr/docs/Web/API/Storage/LocalStorage

**Instruction**:

1. Built your layout with material-ui components
2. Store and retrieve your data from localStorage
3. Handle list creation , list deletion (list will have a title)
4. Implement a call to action to store your list/items
5. Handle item naming/renaming
6. Handle item Check/Uncheck

### 4 Did i git it ?

**Goals** :

* Asses your knowledge on react fundamental
* Familiarize with git

**Ressource** :

* Git documentation https://help.github.com/en/github/using-git/learning-about-git

**Instruction**:

1. Create a github account
2. Create your branch with *git checkout -b "branch name"*
3. Add all repositorty files to your commit index *git add --all*
4. Commit your files *git commit -m "my commit msg"*
5. Push your commit to the remote repository *git push*
6. Check on github !

**On Git**:

* To switch branches git checkout *branch name*
* To push work *git push*
* To pull from master *git pull origin master*



### Learn by yourself

* **React Documentation**: https://fr.reactjs.org/docs/components-and-props.html
* **Git**: https://medium.com/@onejohi/git-understanding-the-basics-ba004a20dacc
