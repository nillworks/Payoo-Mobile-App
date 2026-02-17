# 💳 PAYOO – Smart Mobile Financial Services (MFS)

PAYOO is a smart and modern **Mobile Financial Services (MFS)** web application that delivers a seamless digital banking experience.

Built using **HTML**, **Tailwind CSS**, **DaisyUI**, and **Vanilla JavaScript**, this project provides a clean and user-friendly platform for managing financial transactions securely and efficiently.

---

## 🚀 Live Features

- 🔐 Simple Login Interface  
- 🏠 Home Dashboard with Account Balance  
- 💰 Add Money  
- 💵 Cash Out (PIN Verification Required)  
- 📤 Secure Money Transfer  
- 🎁 Bonus Rewards System  
- 📊 Transaction History Tracking  
- 🔒 PIN Security for Every Transaction  
- 📱 Fully Responsive UI (DaisyUI + TailwindCSS)

---

## 🛠️ Technologies Used

- HTML5  
- Tailwind CSS v4  
- DaisyUI  
- JavaScript  
- Node.js (for Tailwind CLI build process)

---

## 📦 Installation & Setup Guide

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone git@github.com:nillworks/Payoo-Mobile-App.git
cd payoo
```

### 2️⃣ Install Dependencies

Make sure you have **Node.js** installed.

```bash
npm install
```

### 3️⃣ Run Tailwind Build Command (Watch Mode)

```bash
npm run build:css
```

This will generate the CSS file from:

```
src/input.css ➜ src/output.css
```

And it will automatically watch for changes.

### 4️⃣ Open the Project

Now open `index.html` in your browser.

---

## 📜 package.json Scripts

```json
"scripts": {
  "build:css": "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch"
}
```

---

## 📦 Dependencies

```json
"dependencies": {
  "@tailwindcss/cli": "^4.1.18",
  "daisyui": "^5.5.18",
  "tailwindcss": "^4.1.18"
}
```


---

## 🔐 Security System

- Every financial transaction requires PIN verification.
- Prevents unauthorized money transfers or withdrawals.
- Enhances user account protection.

---

## 🎯 Project Purpose

This project was created to practice:

- DOM Manipulation  
- JavaScript Financial Logic  
- Secure Transaction Validation  
- Tailwind CSS v4 Setup  
- DaisyUI Component Design  
- Responsive Web Design  

---

## 👨‍💻 Author

Developed by **Shipon Roy**

---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub.
