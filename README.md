# MedBridge — Real-Time Medical Translation Platform

MedBridge is a full-stack web application designed to act as a real-time communication bridge between doctors and patients who speak different languages. The application emphasizes clarity, accessibility, and extensibility within realistic time and infrastructure constraints.

---

## Project Overview

The application enables doctors and patients to communicate through translated text and audio messages. Each participant selects their role and preferred language, and messages are translated in near real time. Conversations are logged and persisted for future reference.

This project was built as part of a time-bound take-home assignment, focusing on **problem-solving approach, system design, and practical trade-offs** rather than full production completeness.

---

## Key Features

- **Doctor–Patient role-based chat** with clear visual distinction  
- **Multilingual text translation** with explicit source and target language selection  
- **Audio recording and playback** directly within the chat interface  
- **Persistent conversation storage** using MongoDB  
- **Clean, mobile-friendly user interface**

---

## Architecture and Tech Stack

### Frontend
- **React (Vite)**
- Deployed on **Vercel**

### Backend
- **Node.js with Express**
- **MongoDB Atlas**
- Deployed on **Render**

### Additional Details
- REST-based API architecture  
- Environment-variable–based configuration for deployment flexibility  

---

## Application Flow

1. A conversation session is initialized on application load.  
2. The sender selects their role (**Doctor** or **Patient**) and languages.  
3. Messages (text or audio) are sent to the backend.  
4. Text messages are translated before being stored and returned.  
5. Audio messages are uploaded and referenced within the conversation.  
6. All interactions are logged with timestamps and persisted.  

---

## Known Limitations

- **Translation relies on a free public API**, which may:  
  - Be **rate-limited**  
  - Provide **approximate translations** for complex medical terminology  
  - Be **less reliable for long or multi-paragraph input**  

- **No user authentication or role-based access control**  
- **Audio files are stored locally** on the server  
- **Real-time updates use a request–response model** rather than WebSockets  
- **AI-powered medical summarization is not implemented**  

These trade-offs were made intentionally to prioritize **clarity, stability, and feature completeness** within the allowed timeframe.

---

## Future Improvements

- AI-powered medical conversation summarization  
- WebSocket-based real-time communication  
- User authentication and authorization  
- Cloud-based audio storage  
- Improved handling of medical terminology  

---

## Deployment Notes

- **Frontend:** Vercel  
- **Backend:** Render  
- **Database:** MongoDB Atlas  

On first access, backend requests may take a few seconds due to free-tier service cold starts.

---

## Final Note

This project demonstrates a practical approach to building and deploying a healthcare-focused, multilingual communication platform under limited time constraints, with an emphasis on maintainable architecture and extensibility.
