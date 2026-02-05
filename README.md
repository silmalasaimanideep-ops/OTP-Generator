# OTP-Generator
# 🔐 OTP Generator — React + Vite

A simple and elegant **OTP (One-Time Password) Generator** built using **React JS** and **Vite**.

This app generates a random OTP that **automatically expires after 10 seconds**.  
To get a new OTP, the user must click **"Generate OTP"** again.

---

## 🌐 Live Demo

👉https://otp-generator-2ma.pages.dev/

---

## 🚀 Features

- Generate random 6-digit OTP
- OTP expires automatically after **10 seconds**
- Regenerate OTP by clicking button
- Clean glassmorphism UI
- Lightweight and fast with Vite
- Beginner friendly project

---

## 🛠️ Tech Stack

- React JS
- Vite
- CSS
- JavaScript (setTimeout)

---

## 📂 Project Structure
OTP-Generator/
├─ public/
├─ src/
│  ├─ assets/
│  │  └─ OTP-Icon.png
│  ├─ component/
│  │  └─ OtpGenerator.jsx
│  ├─ style/
│  │  └─ OTPGenerator.css
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md

---

## ⚙️ How It Works

1. User clicks **Generate OTP**
2. A random 6-digit OTP is generated
3. OTP is displayed on the screen
4. A 10-second timer starts
5. OTP disappears automatically after 10 seconds
6. User must click again to generate a new OTP

---

## 🧠 Core Logic

```javascript
const generateOTP = () => {
  const newOtp = Math.floor(100000 + Math.random() * 900000);
  setOtp(newOtp);

  setTimeout(() => {
    setOtp(null);
  }, 10000);
};
