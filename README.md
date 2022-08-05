# Fourier Transformation

## :electric_plug: Preparation

Before you clone this repository you should make sure to get the following things done first.

### Node.js

Since we use languages like SASS we need libraries that help us to build all the required assets for the Project.
Using the latest LTS version of node.js should work just fine: https://nodejs.org/en/download/

## :checkered_flag: Installation

### Clone the repository

1. Open a terminal and move to your folder.
2. Being there, clone this repository into a new directory called 'project' with `git clone git@github.com:MaximilianPfitzenmaier/Fourier-Transformation.git project`.
3. Move the `.git` folder to the project webroot (`mv project/.git .`) and delete the cloned folder afterwards: `rm -rf project`
4. Restore the project structure with `git reset HEAD --hard`. Now you should see a lot of additional files in your folder.

### Install plugins and build assets

1. Move to your app folder with `cd app/`
2. Install all npm dependendies by typing `npm install` or just `npm i`
3. Run `npm run build` to build all assets (e.g. styles)

### Run React app

1. Run `npm run start` to start the App. A browser window with the app should now open.

### Done!

You should now be able to reach your site.

[To the top](#Fourier-Transformation)
