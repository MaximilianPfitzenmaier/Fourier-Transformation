# bv-project

1D Fourier Test

-   https://bv-project.netlify.app/

## :electric_plug: Preparation

Before you clone this repository you should make sure to get the following things done first.

### Node.js

Since we use languages like SASS we need libraries that help us to build all the required assets for the Project.
Using the latest LTS version of node.js should work just fine: https://nodejs.org/en/download/

## :checkered_flag: Installation

### Clone the repository

1. Open a terminal and move to your folder.
2. Being there, clone this repository into a new directory called 'project' with `git clone git@github.com:MaximilianPfitzenmaier/bv-project.git project`.
3. Move the `.git` folder to the project webroot (`mv project/.git .`) and delete the cloned folder afterwards: `rm -rf project`
4. Restore the project structure with `git reset HEAD --hard`. Now you should see a lot of additional files in your folder.

### Install plugins and build assets

1. Move to your app folder with `cd app/`
2. Install all npm dependendies by typing `npm install` or just `npm i`
3. Run `npm run build` to build all assets (e.g. styles)

### Run React app

1. Run `npm run start` to start the App. A browser window with the app should now open.
2. Open a second terminal and run `npm run watch` if you are working on SASS files.

### Done!

You should now be able to reach your site.

## Working Workflow

A few important resources and tips

### BEM | SASS

To have an easier life, we work according to BEM:

-   https://css-tricks.com/bem-101/
-   https://sass-lang.com/guide

### ES6

We are using ES6 not jQuery:
https://youmightnotneedjquery.com/

### Maybe some useful tips

-   https://www.nayuki.io/res/free-small-fft-in-multiple-languages/fft.js
-   https://tobiaskaulich.de/studium/cv-ml-seminar/convolution.html
-   https://www.patterns.dev/

### Starting Routine

1. Check if you are up to date: `git fetch && git status`
2. If there are no changes in your local environment but on the repository, first make sure to get back up to date by doing: `git pull`.
3. Else if there are changes in your local environment and on the repository, first make sure to get back up to date by doing: `git stash -u && git pull`. Now with `git stash pop` to get your local changes back.
4. Else everthing is up to date already

### Push Routine

1. First navigate to the "App" folder.
2. Check if you are up to date again maybe someone pushed something: `git stash -u && git fetch && git status`.
3. If there are changes on the repository, first make sure to get back up to date by doing: `git pull`.
4. Now with `git stash pop` you get back your local changes.
5. With `git add .` all local changes will added to commit.
6. With `git commit` you are starting the commit. Add a Titel and a description of what you did. With `strg+o` then `strg+x` you are saving and closing the commit.
7. Finally type `git push` tp push the changes.

# Timetable

-   [ ] Abgabe Projektplan/Exposee bis zum 17. Mai 2022
-   [ ] Präsentation der Projektideen am 19. Mai 2022, 16 Uhr c.t.
-   [ ] Das Exposee soll eine Beschreibung des Projektziels mit einzelnen Meilensteinen sowie eine Aufteilung nach Praktikumsteilnehmern beinhalten. Das Thema des Projekts muss vorher mit dem Tutor abgesprochen sein.
-   [ ] Zwischenpräsentation am 23. Juni 2022, 16 Uhr c.t. (Abgabe 22.6.)
-   [ ] Abschlusspräsentation Ende des Semesters
-   [ ] Abgabe der Ausarbeitung Anfang Semesterferien

# ToDo

-   [ ] Funktionen klären
-   [ ] Grund Grid bauen für verschiedenen Componenten
-   [ ] Optional unit tests
-   [x] Git aufsetzen
-   [x] React installieren
-   [x] gitignore korrekt vorbereiten
-   [x] netlify seite erstellen
-   [x] netlify autmatisierter deploy
-   [x] sass einrichten
-   [x] Webpack

[To the top](#bv-project)
