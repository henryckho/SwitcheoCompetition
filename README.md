# SwitcheoCompetition
This repository got in the Top 10 as part of the Switcheo API Development competition as per this article
https://medium.com/switcheo/switcheo-api-development-contest-switcheoperks-results-832ae11f0449

## Deployment
This app can be viewed at https://henryckho.github.io/SwitcheoCompetition deployed via Github pages

The docs folder is a built version using `ng build`. It is in a docs folder because it is chosen as the source for github pages.

## Background
Switcheo has scheduled maintenance once in a while and when they have scheduled maintenance, people can't access their contract wallet.

This project is for people to access their contract wallet and to withdraw the balances from the contract into their wallet.

If your tokens are also in trades, it is possible to cancel the trade before withdrawing.

It supports Testnet and Mainnet v1, v1.5 and v2.

This project uses the [Angular IO](https://angular.io/) framework and uses [Switcheo API](https://docs.switcheo.network/)

## Setup
1. Install [Node.js](https://nodejs.org/)
2. Install [npm](https://www.npmjs.com/)
3. Run `npm install`
4. Run `npm start` this will run `ng serve --port 8080 --open`

## Demo

Upon accessing the site "Step 1: Select Switcheo contract" will be defaulted to Mainnet v2, if you wish to change contract, you can use the edit button and the dropdown menus will be made available to change.
![](https://raw.githubusercontent.com/henryckho/SwitcheoCompetition/master/readme-img/001.PNG)

After selecting your contract you move onto "Step 2: Enter your NEO address or private key".
If you choose to enter your NEO address you can view the current status of your contract wallet and open trades like below.
![](https://raw.githubusercontent.com/henryckho/SwitcheoCompetition/master/readme-img/002.PNG)

If you choose to enter your private key you'll have more options to do stuff such as cancel open orders and withdraw such as below.
![](https://raw.githubusercontent.com/henryckho/SwitcheoCompetition/master/readme-img/003.PNG)

It is also optimised for mobile, so you can access it via your mobile's web browser.
![](https://raw.githubusercontent.com/henryckho/SwitcheoCompetition/master/readme-img/004.PNG)

![](https://raw.githubusercontent.com/henryckho/SwitcheoCompetition/master/readme-img/005.PNG)

![](https://raw.githubusercontent.com/henryckho/SwitcheoCompetition/master/readme-img/006.PNG)
