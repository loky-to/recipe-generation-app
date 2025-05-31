# 🧑‍🍳 Recipe Generator App

A sleek, modern recipe generator built with **React**, **Next.js**, and **Redux**. Simply input your available ingredients, and the app will generate a recipe using **OpenAI's GPT-3.5-turbo**.

Originally inspired by the [Scrimba "Learn React" course design](https://www.figma.com/design/73iyU720zWmrWgJsok5tYE/Chef-Claude?node-id=1-972&t=M9ROhLPrUkRdf4Qn-0), this version improves upon the foundation with a better user experience, expanded functionality, and AI integration upgrades.

---

## 🔧 Features

- Add and remove ingredients dynamically
- Generate recipes using OpenAI (GPT-3.5-turbo)
- Input validation: prevents duplicate (case sensitive) and cleans emojis from input
- Real-time animated loader with Lottie for better user feedback
- Clean and responsive UI based on Scrimba's design
- State management using Redux for scalable architecture

---

## ✨ Enhancements Beyond the Original Design

This project was originally based on a Scrimba course design, but includes the following key improvements:

- **Contextual Introduction Text**  
  Users landing on the app now see an explanation of what the app does — a key UX detail missing from the original design.

- **Ingredient Removal Functionality**  
  Unlike the original, users can now remove ingredients without needing to refresh the page — avoiding frustration from accidental inputs.

- **State Management with Redux**  
  Replaced local `useState` with a Redux store for global state handling. This allowed:
  - Prevent duplicate ingredients (case-sensitive)
  - Sanitize input by stripping emojis
  - More scalable app architecture

- **AI Integration Upgraded to OpenAI**  
  The original design used Claude AI. I initially explored Hugging Face models, but due to deployment limitations, I opted for **OpenAI's GPT-3.5-turbo** for reliable and flexible generation.

- **Animated Loader for Feedback**  
  Integrated a Lottie animation to show users that a recipe is being generated. The original design had no visual loading indicator, which could leave users confused during longer waits.

---

## 🛠 Tech Stack

- **React 19**
- **Next.js 15**
- **Redux Toolkit**
- **SCSS**
- **OpenAI API**

---

## 🚀 Getting Started

To run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/loky-to/recipe-generation-app.git
cd recipe-generator
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run the development server

```bash
yarn dev
```

The app will be available at: [http://localhost:3000](http://localhost:3000)

---

## 🎨 Design Credit

This app is based on the **Chef Claude** UI from Scrimba’s [Learn React](https://scrimba.com/learn-react-c0e) course.  
👉 [Original Figma design by Scrimba](https://www.figma.com/design/73iyU720zWmrWgJsok5tYE/Chef-Claude?node-id=1-972&t=M9ROhLPrUkRdf4Qn-0)

This version adds functional enhancements and design improvements while maintaining the clean and friendly aesthetic of the original.

---
