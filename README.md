#  Chatbot Flow Builder

A visual chatbot flow builder built using **React** and **React Flow**, created for the BiteSpeed frontend assignment.

---

## 🚀 Live Demo

👉 **[Live App on Vercel](https://chatbot-webdevelopment.vercel.app/)**  
_You can interact with the chatbot flow builder directly here._

---

## ✨ Features

- 🧱 **Drag & Drop Nodes**  
  Drag Text Message nodes into the canvas from the Node Panel.

- 🔗 **Connect Nodes**  
  Easily connect nodes with directional edges using React Flow handles.

- 📝 **Editable Messages**  
  Click on any node to edit its message in the Settings Panel.

- ✅ **Validation on Save**  
  The "Save Flow" button checks that only one node has no outgoing edge — matching typical chatbot flow logic.

---

## 🔧 Tech Stack

- **React**
- **React Flow** (for flow diagram support)
- **Custom Components** for Node Panel, Settings Panel, Save Logic

---

## 📸 Screenshots

./public/sample-chat-flow.png,
./public/on-flow-save.png

---

## 📂 Folder Structure
src/
├── components/
│ ├── CustomNode.js
│ ├── NodePanel.js
│ └── SettingsPanel.js
├── App.js
└── index.js

To run the project locally:

1. Clone the repository using  
   `git clone https://github.com/pavithra9652/Chatbot-Webdevelopment.git`  
   and navigate into the project folder:  
   `cd Chatbot-Webdevelopment`

2. Install dependencies with  
   `npm install`

3. Start the development server by running  
   `npm start`  
   This will open the app at `http://localhost:3000` in your default browser.

Once the app is open:

- Click **“Add Text Message”** to insert a node.
- Drag the node into position on the canvas.
- Use the black dots on the right (source) and left (target) to connect nodes.
- Click any node to edit its message in the **Settings Panel**.
- Click **“Save Flow”** to validate the structure.
  - ✅ If only one node has no outgoing connection, the flow is valid.
  - ❌ If multiple nodes have no outgoing edges, an error message appears.

## 🛠 Built With

- **React** – UI library
- **React Flow** – Visual node-based flow diagram library
- **CSS** – Custom styling for nodes and layout

---

## ✅ Task Requirements Covered

- ✅ Custom Text Node rendering
- ✅ Node Panel (left) and Settings Panel (right)
- ✅ Editable node content
- ✅ Handle-based connections (source and target)
- ✅ Edge rules (only 1 outgoing allowed)
- ✅ Save validation logic
- ✅ **Deployed live on Vercel**

---

## 🌐 Deployment

The project is deployed and live at:  
👉 **[https://chatbot-webdevelopment.vercel.app/](https://chatbot-webdevelopment.vercel.app/)**

Deployment was done using **Vercel** (https://vercel.com), with a simple integration from GitHub.

---

## 📬 Contact

Created by **Mopuru Pavithra**  
For questions, feedback, or collaborations, feel free to connect via **LinkedIn** (https://www.linkedin.com/in/mopuru-pavithra-91a758341/) or open an issue in the GitHub repo.
