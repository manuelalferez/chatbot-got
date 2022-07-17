<p align="center">
  <img src="https://ik.imagekit.io/manuelalferez/chatbot-got/logo_FrvWB2wDW.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1657958990594" alt="Logo" width="180">
</p>


  <h3 align="center">Chatbot of Game of Thrones</h3>

  <p align="center">
    Get to know the different Houses of Games of Thrones
    <br />
    <br />
    <a href="https://github.com/manuelalferez/chatbot-got">View Demo</a>
    ·
    <a href="https://github.com/manuelalferez/chatbot-got/issues">Report Bug</a>
    ·
    <a href="https://github.com/manuelalferez/chatbot-got/issues">Request Feature</a>
  </p>

## Description

The goal is to build a small chatbot of Game of Thrones with [Botonic](https://github.com/hubtype/botonic).

These are the requirements of the bot:
* When the user talks for the first time, the bot should show a carousel with the different GoT Houses. 
* Each element of the carousel should have a button that, when clicked, should return the Words of that given House. 
* If a House has no Words, it should not appear in the carousel.
* If the user says anything, the bot will simply reply with a random quote.
Use the following public APIs: https://anapioficeandfire.com/ and https://api.quotable.io/random
* Extra: adapt the webchat styles with GoT (anyway you like, use your creativity!).


## Installation

1. Clone the project
```bash
git clone https://github.com/manuelalferez/chatbot-got.git
```

2. Change directory
```bash
cd personal-website
```

3. Switch to a version < 7 of npm:
```bash
nvm install 13 & nvm use 13
```
4. Installs the project dependencies:
```bash 
npm install
```
5. Install the Botonic client:
```bash
sudo npm install -g @botonic/cli
```
6. Install the project's dependencies:
```bash
npm install
```
7. Run the chatbot: 
```bash
botonic serve
````
8. Open http://localhost:8080/ in your web browser. Your bot is alive! 🎉 🎉

## What it looks like

<p align="center">The bot shows a carousel with the different GoT Houses.</p>
<p align="center">
    <img src="https://ik.imagekit.io/manuelalferez/chatbot-got/Captura_de_pantalla_2022-07-17_a_las_11.36.09_eejH4K1OL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658050712258" width="250">
    <img  src="https://ik.imagekit.io/manuelalferez/chatbot-got/Captura_de_pantalla_2022-07-17_a_las_11.36.45_TvEa1U8AP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658050712265" width="250">
</p>

</br></br>
<p align="center">
    <img src="https://ik.imagekit.io/manuelalferez/chatbot-got/Captura_de_pantalla_2022-07-17_a_las_11.37.58_U_pN5ujNQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658050711893" width="250">
</p>
<p align="center">The bot shows a carousel with the different GoT Houses.</p>



