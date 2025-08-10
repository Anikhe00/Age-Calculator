# 📅 Age Calculator

A simple **Age Calculator** built with **HTML**, **CSS**, and **Vanilla JavaScript**.  
This app allows users to input their date of birth and calculates their exact age in **years**, **months**, and **days**.

---

## 🚀 Features

- User-friendly form for entering **day**, **month**, and **year**.
- Validation for:
  - Empty fields.
  - Invalid day or month values.
  - Future dates.
- Real-time error messages with styled feedback.
- Accurate age calculation accounting for month and day differences.
- Clean and minimal responsive design.

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the app.
- **CSS3** – Styling, layout, and responsive design.
- **Vanilla JavaScript (ES6)** – Form validation and age calculation logic.

---

## 📂 Project Structure

```
├── index.html        # Main HTML file
├── style.css         # Styling for the app
├── script.js         # Form validation and age calculation logic
└── README.md         # Project documentation
```

---

## 📖 How It Works

1. The user enters their **day**, **month**, and **year** of birth.
2. The app validates:
   - All fields are filled.
   - The date is valid (e.g., no 32nd of a month).
   - The date is not in the future.
3. If valid, it calculates:
   - **Years**: Difference between current year and birth year.
   - **Months**: Adjusted for negative months.
   - **Days**: Adjusted for negative days.
4. The results are displayed on screen.

---

## 💻 Setup & Usage

1. Clone or download the project.
2. Open `index.html` in your browser.
3. Enter your date of birth and click **Submit**.
4. View your calculated age instantly.

---

## 🎯 Possible Improvements

- Add leap year validation.
- Support multiple date formats.
- Improve UI with animations and transitions.

---

## 📜 License

This project is open-source and free to use for educational and personal purposes.