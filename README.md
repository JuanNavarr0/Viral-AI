# 🏆 Viral AI - AI-Powered Content Generator

🚀 **Viral AI** is a cutting-edge **AI-powered content generation platform** designed to create engaging, viral content for social media and storytelling. Using **machine learning, NLP, and deep learning models**, this tool automates the process of generating text, audio, and images, making it a powerful asset for content creators and marketers.

## 📌 Project Overview
Viral AI consists of two main components:
- **Backend:** Built with **FastAPI**, responsible for processing text inputs, generating AI-driven content, and managing the API.
- **Frontend:** Developed in **React.js**, providing an interactive user interface for generating and visualizing AI-generated content.

💡 **Key Features:**
✅ AI-powered text, audio, and image generation
✅ Automatic prompt-based content creation
✅ Interactive web UI for real-time generation
✅ Serverless deployment and cloud integration

---

## 🏗️ Tech Stack
| Component              | Technology Used      |
|-----------------------|---------------------|
| **Backend**          | FastAPI, Python      |
| **Frontend**         | React.js, JavaScript |
| **Machine Learning** | TensorFlow, Hugging Face, DeepSeek, Qwen |
| **Database**        | PostgreSQL, MongoDB, ChromaDB |
| **Deployment**       | Google Cloud, Firebase |

---

## 🛠️ Installation & Setup
### 🔹 **1. Clone the Repository**
```bash
git clone https://github.com/your-username/Viral-AI.git
cd Viral-AI
```

### 🔹 **2. Install Dependencies**
#### Backend (FastAPI)
```bash
cd backend
pip install -r requirements.txt
```
#### Frontend (React.js)
```bash
cd frontend
npm install
```

### 🔹 **3. Run the Backend**
```bash
cd backend
uvicorn main:app --reload
```

### 🔹 **4. Run the Frontend**
```bash
cd frontend
npm start
```
Now access the application at `http://localhost:3000` 🚀

---

## 📊 Project Structure
```
📂 Viral-AI  
 ┣ 📂 backend  
 ┃ ┣ 📜 main.py  # API with FastAPI  
 ┃ ┣ 📜 generate.py  # Text, audio, image generation  
 ┃ ┣ 📜 prompt_generator.py  # AI-powered prompt processing  
 ┃ ┣ 📜 audio_generator.py  # Text-to-speech AI  
 ┃ ┣ 📜 image_generator.py  # AI-generated images  
 ┃ ┣ 📂 models  # Pretrained AI models  
 ┃ ┗ 📂 configs  # YAML configurations  
 ┣ 📂 frontend  
 ┃ ┣ 📜 App.js  # React app structure  
 ┃ ┣ 📜 index.js  # Root render file  
 ┃ ┣ 📂 components  # UI components  
 ┃ ┣ 📂 pages  # Different views  
 ┃ ┗ 📂 styles  # CSS styling  
 ┣ 📂 docs  # Documentation  
 ┣ 📜 README.md  # Main documentation  
 ┣ 📜 requirements.txt  # Backend dependencies  
 ┣ 📜 package.json  # Frontend dependencies  
 ┗ 📜 .env  # API keys and configuration
```

---

## 📎 License
This project is licensed under the **MIT License** – feel free to use and modify it.

🔹 **Contributions & Issues**: Open a GitHub issue or submit a pull request!

---

🚀 **Ready to create viral content with AI?** 🔥
