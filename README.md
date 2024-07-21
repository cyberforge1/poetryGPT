# PoetryGPT - ChatGPT Fine-Tuned Model


## Project Overview
A fine-tuned ChatGPT Model that responds to prompts with poetry, built using a Fine-Tuned ChatGPT Model, TypeScript and React.


## Deployment Link
This chatbot is live, click [here](https://poetry-gpt.netlify.app/) to visit the site.


## Screenshot
![Application Screenshot](public/app-screenshot.png "Project Screenshot")


## Table of Contents
- [Goals & MVP](#goals--MVP)
- [Tech Stack](#tech-stack)
- [Build Steps](#build-steps)
- [Design Goals](#design-goals)
- [Project Features](#project-features)
- [Additions & Improvements](#additions--improvements)
- [Learning Highlights](#learning-highlights)
- [Known Issues](#known-issues)
- [Challenges](#challenges)


## Goals & MVP
The aim was to create a Typescript React frontend application that would imitate the current ChatGPT interface, and make API requests to a finely-tuned ChatGPT 3.5 Turbo Model that has been trained on data generated by Python scripts.

The project used to fine-tune this model can be found below:

https://github.com/cyberforge1/chat-gpt-fine-tuning


## Tech Stack
- JSX
- SCSS
- Git 
- React
- Typescript
- OpenAI API


## Build Steps
1. Clone the project from GitHub:
   ```bash
   git clone git@github.com:cyberforge1/poetryGPT.git

2. Register for an OpenAI API key at the following link.

   [https://openai.com/index/openai-api/](https://openai.com/index/openai-api/)

3. Create a new finely-tuned model using the following project link and copy the model name.

   [https://github.com/cyberforge1/chat-gpt-fine-tuning](https://github.com/cyberforge1/chat-gpt-fine-tuning)

4. Create a `.env` file in the root directory and attach the values of the keys and finely-tuned model generated in Steps 2 and 3:

    ```plaintext
    VITE_OPENAI_API_KEY= replace_with_your_openai_api_key
    VITE_OPENAI_API_URL=https://api.openai.com/v1/chat/completions
    VITE_OPENAI_MODEL= replace_with_your_openai_finely_tuned_model
    ```
5. Run the project locally using the following command:
    ```bash
    npm run dev
    ```

## How To Use
1. Type a prompt into the input bar and click the submit button to receive a poetic response from the chatbot.
2. Clear the chat history by clicking the new chat button in the top left hand corner of the screen.


## Design Goals
- The goal for this user interface was to have it resemble the current version of the ChatGPT web application but make aesthetic choices that would make it immediately distinguishable as a different application. This was achieved by creating a white interface and using a playful pastel color palette to distinguish specific features.


## Project Features
- [x] Custom imitation of the ChatGPT user interface
- [x] Utilizing a finely-tuned model to create unique responses
- [x] Animation of API response to closely resemble user experience
- [x] Ability to clear the chat on 'New Chat' button click


## Additions & Improvements
- [ ] Addition of a dropdown menu that allows selection of various ChatGPT models
- [ ] Adding a 'Chat History' section on the left side of the interface
- [ ] Creating a set of pre-written prompts for the user to select
- [ ] Allowing the user to cancel the animated response at any time


## Learning Highlights
- Learning how to animate API responses to enhance user experience 
- Building an interface to directly resemble an existing application
- Selecting TypeScript to build with React for the first time

## Known Issues
- Issues with clashing data in the animation function when another request is submitted before the initial request has completed.


## Challenges
An interesting challenge encountered during this project involved suspected grammatical errors in the response from the API. Subsequent phrases were attached directly to previous phrases and with capitalized letters. After mistakenly trying to correct the grammar of the responses, I looked back at the training data, and realized that limericks are structured this way. Therefore, to correct this issue, all that was necessary was to break the response onto a new line when the phrase delimiter was encountered.  


## Contact Me
- Visit my [LinkedIn](https://www.linkedin.com/in/obj809/) for more details.
- Check out my [GitHub](https://github.com/cyberforge1) for more projects.
- Or send me an email at obj809@gmail.com
<br />
Thanks for your interest in this project. Feel free to reach out with any thoughts or questions.
<br />
<br />
Oliver Jenkins © 2024
