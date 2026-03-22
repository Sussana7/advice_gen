# 🎲 Advice Generator App

A sleek and interactive advice generator built as part of a Frontend Mentor challenge. This project focuses on clean UI/UX, responsive design, and seamless API integration.

---

## 🚀 The Challenge

The goal of this project was to build an advice generator app that fetches data from the Advice Slip API and matches the provided design as closely as possible.

Users can:

* View an optimal layout across different screen sizes (mobile, tablet, desktop)
* See hover states for all interactive elements
* Generate new advice by clicking the dice icon

---

## 🛠️ My Process

### 💻 Built With

* **HTML5** – Semantic markup for accessibility
* **CSS3** – Custom properties, Flexbox, and mobile-first design
* **JavaScript (Vanilla JS)** – Async/await and Fetch API for data handling

---

## 📚 What I Learned

This project helped me strengthen key frontend development skills:

* **API Integration:** Fetching and handling data from a third-party API
* **Asynchronous JavaScript:** Using `async/await` for cleaner and more readable code
* **CSS Positioning:** Centering elements using `position: absolute` and `transform`
* **Responsive Design:** Adapting layouts using media queries and the `<picture>` element

---

## ⭐ Highlight

Here’s a snippet of the async function used to fetch advice:

```javascript
async function getAdvice() {
  const response = await fetch(`https://api.adviceslip.com/advice?t=${Math.random()}`);
  const data = await response.json();
  // Update UI with new advice
}
```

---

## 📸 Screenshots

### 🖥️ Desktop View

![Desktop View](image.png)

### 📱 Mobile View

![Mobile View](image-1.png)

---

---

## 👩‍💻 Author

* **Name:** Sussana Teye
* **Frontend Mentor:** https://www.frontendmentor.io/profile/Sussana7

---

## 💡 Future Improvements

* Add loading and error states for better UX
* Improve accessibility (ARIA roles, keyboard navigation)
* Add subtle animations for smoother interactions

---
