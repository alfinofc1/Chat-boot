# Chatbot Application

## Description
This is a chatbot application built with Next.js, React, and Tailwind CSS. It allows users to chat with an AI assistant, store conversation history, and manage multiple chat sessions. The chatbot generates responses using an AI API.

## Live URL
  https://chat-boot-dusky.vercel.app/

## Features
- AI-powered chatbot responses
- Chat history management
- Multiple chat sessions with unique names
- Local storage support for saving chats
- Dark mode compatibility

## Technologies Used
- **"next": "15.2.1"**
- **"next-themes": "^0.4.4"**
- **"react": "^19.0.0"**
- **"react-dom": "^19.0.0"**
- **"react-icons": "^5.5.0"**
- **"react-toastify": "^11.0.5"**
- **"axios": "^1.8.1"**

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/lutforrahman3845/Chat-boot.git
   ```
2. Navigate to the project folder:
   ```sh
   cd chatbot-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Usage
1. Type a message in the chat input field and press button.
2. The chatbot will generate a response.
3. Start a new chat session, and the chat name will be set based on your first message.
4. Previous chats are saved and can be accessed later.

## File Structure
```
chatbot-app/
│-- public/
|   ├── assets/
|-- src/
|   ├── app/
|   ├── components/
|   ├── Context/
|   ├── hooks/
│-- .gitignore
│-- package.json
│-- README.md
```

## API Integration
- The chatbot fetches responses from an AI API using the `aiResponse` function.
- The `generateBotResponse` function manages AI response handling and updates the chat history.

## Issues & Contributions
Feel free to open an issue if you encounter any problems. Contributions are welcome!
