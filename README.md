# AnglarTest

========== Project Configuration

The project is created using Yeoman-Angular Generator and is having the bootstrap component installed with it. The commands listed below requires Nodejs and npm installed and configured on the machine.

To install Yeoman, please run this command

npm install -g yo 
or
sudo npm install -g

To download the Yeoman-Angular generator in your machine, please run

npm install -g generator-angular 
or
sudo npm install -g generator-angular

To build and run the project, you also need to have grunt-cli and bower, install it with

    npm install -g grunt-cli
    npm install -g bower

======================================================================================== Cloning the repo and building the project

Run following command in Terminal or Command Prompt

    git clone -b demo-lively https://github.com/inspheris/V4.git

    cd v4-fe

    npm install

    bower install

    For running the project on your local machine

    grunt serve

    For creating a production version of the project

    grunt build

    After running grunt build a dist folder will be created in the current directory, the content of which can be directly used to view the site on production server.
