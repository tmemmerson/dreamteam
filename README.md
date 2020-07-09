<p align="center">
  <img width="350" height="302" src="https://coding-assets.s3-us-west-2.amazonaws.com/img/Front-Mock-Up.png">
</p>

<br>

# _DREAM TEAM_

#### _search stats for your favorite NBA players_	

#### By _**Tristan Emmerson, Johnny Duverseau, Ben White, Teresa Rosinksi**_

<br>

## **DESCRIPTION**

_This project utilizes the chaining of multiple API call responses to return historical statistical data on NBA players._

<br>

## **SPECIFICATIONS**

| Spec 	| Input 	| Output 	|
|-	|-	|-	|
| make initial API call for player IDs 	| fetch currentPage 	| {<br>id: 237<br>first_name: LeBron<br>last_name: James<br>}<br>..<br>.. 	|
| make second API call for player stats 	| {<br>id: 237<br>} 	| {<br>id: 237<br>first_name: LeBron,<br>last_name: James,<br>pts: 27.36<br>ast: 8.25,<br>reb: 8.44,<br>} 	|
| accept user text search field input 	| james 	| return:<br>lebron james<br>james donaldson<br>james blackwell<br>james collins<br>.. 	|

<br>

## **SETUP & INSTALL**

*  _Recommended browser for everything in life. [Google Chrome](https://www.google.com/chrome/)_.

*  _Github [repository](https://github.com/tmemmerson/dreamteam)_

*  **Windows/Mac Users:** If modifying for personal use, dl Git [here](https://git-scm.com/downloads/) (v2.62.2)

* Download [Visual Studio Code](https://code.visualstudio.com/) (v1.45)

* Download ZIP [here](https://github.com/tmemmerson/dreamteam.git) OR if you are comfortable cloning a repo, copy the link as shown below.

![cloning](https://coding-assets.s3-us-west-2.amazonaws.com/img/clone.gif "How to clone repo")

* this image shows you where to paste your copied link into VSCode

![cloning](https://coding-assets.s3-us-west-2.amazonaws.com/img/clone-github2.gif "Cloning from Github within VSCode")

<br>

## **PROTECTING YOUR DATA**

* Step 1: create a .gitignore file in the top level of your project directory. populate the file as shown in step 1 of the image below.

* Step 2: commit that .gitignore file (this prevents your sensitive information like your API key being shown to others). **DO NOT PROCEED TO STEP 3 UNTIL YOU DO THIS!**

* Step 3: in your terminal type "npm install" and enter. this will install the files necessary to utilize this app.

* Step 4: in your terminal type "npm run build". this will build the app and place those files in a directory labeled "/dist". From here, you can right-click the index.html file and open in your browser or simply drag-and-drop into a browser window. 

<br>

## **Known Bugs**

_**No Known Bugs:**7/9/2020_

<br>

## **Support and contact details**

Questions, comments and concerns can be directed to the author(s) 

[Tristan Emmerson](tristan@stickerslug.com)

[Teresa Rosinski](trosinski89@gmail.com)

[Johnny Duverseau](duverseaujohnny21@gmail.com)

[Ben White](bwhite2140@outlook.com)

<br>

## **Technologies Used**

_**Written in:** [Visual Studio Code](https://code.visualstudio.com/)_

_**Image work:** [Adobe Photoshop](https://www.adobe.com/products/photoshop.html/)_

_**API Utilized:** [BallDontLie.com](https://www.balldontlie.io/#introduction)_


<br>

## **License**
![alt text][logo]

[logo]: https://img.shields.io/bower/l/bootstrap "MIT License"

Copyright (c) 2020 **_Tristan Emmerson, Johnny Duverseau, Ben White, Teresa Rosinksi_**
