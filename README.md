# 🔗 React useContext Deep Dive – Multi-Level State Sharing Demo

This project demonstrates how to use React's `useContext` hook to share and update state across deeply nested components **without prop drilling**.

Instead of passing props from Component A to D through B and C, we leverage the power of **React Context API** to simplify state management and component communication.

## 🚀 Features

- 🔄 Centralized state management with `useContext`
- 🧱 Clean component structure: A ➝ B ➝ C ➝ D
- 📦 Demonstrates both reading and updating shared state
- 🧪 Ideal for understanding context usage in real-world apps

---

## 📁 Project Structure

src/
├── ComponentA.jsx # Context Provider + State
├── ComponentB.jsx # Intermediate wrapper
├── ComponentC.jsx # Context consumer + state updater
├── ComponentD.jsx # Context consumer


---

## 🧠 Key Concepts

- **React Context API**: Allows global state sharing across components.
- **useContext Hook**: Simplifies state access within consumer components.
- **State Lifting Avoided**: No need to pass props step-by-step down the tree.

---

## 📦 Installation & Run Locally

git clone https://github.com/yourusername/usecontext-demo.git
cd usecontext-demo
npm install
npm start

🧬 How It Works
ComponentA creates a state (user) and provides it via UserContext.Provider.

ComponentC consumes the user state and includes a button to update it using setUser.

ComponentD also consumes the updated value and reflects the change immediately — without any props involved.

✨ Demo Behavior
Initial user value: "BroCode"

Click the "Change User" button in ComponentC

Watch the change reflect in both ComponentA and ComponentD live

🛠️ Technologies Used
React

useContext Hook

Functional Components

Tailwind CSS

🙋‍♂️ Why This Project?
This project stands out by:

Structuring Context in a clear, modular way

Providing both state access and mutation

Avoiding common useContext mistakes (like nested Providers or unnecessary re-renders)

Demonstrating practical, interview-ready context usage

---

## 👨‍💻 Author

**Mridul Garg**

- 💼 [LinkedIn](https://www.linkedin.com/in/mridulg08/)
- 🧑‍💻 [GitHub](https://github.com/MridulGarg08)

If you found this helpful or learned something new, feel free to ⭐ star the repo and connect!
