# CDP Chatbot

visit site:https://bot-v1-ten.vercel.app/

## Overview
The **CDP Chatbot** is a web-based chatbot designed to answer "how-to" questions related to four Customer Data Platforms (CDPs): **Segment, mParticle, Lytics, and Zeotap**. It extracts relevant information from the official documentation of these CDPs to guide users on performing tasks or achieving specific outcomes within each platform.

## Features
- **Answer "How-to" Questions**: Provides step-by-step instructions for performing tasks in Segment, mParticle, Lytics, and Zeotap.
- **Documentation Extraction**: Retrieves relevant information from official CDP documentation.
- **Handles Question Variations**: Supports different question formats and prevents responses to irrelevant questions.
- **User-Friendly Interface**: Includes a chat UI with a message list, input form, and loading indicators.

## Technologies Used
- **Frontend**: React.js
- **State Management**: React Hooks
- **API Integration**: OpenAI API
- **Styling**: CSS
- **Deployment**: Vercel 

## Project Structure
```
src/
├── components/
│   ├── ChatContainer.jsx       # Main chat UI container
│   ├── MessageList.jsx         # Displays conversation history
│   ├── MessageItem.jsx         # Renders individual messages
│   ├── InputForm.jsx           # Handles user input
│   ├── LoadingIndicator.jsx    # Shows loading state
│   └── ComparisonView.jsx      # Displays CDP comparisons
├── utils/
│   ├── api.js                  # Handles API calls
│   └── questionProcessor.js     # Processes and filters questions
├── styles/
│   ├── App.css                 # Global styles
│   └── index.css               # Main stylesheet
├── App.jsx                      # Root component
├── index.jsx                    # Entry point
└── config.js                    # Configuration file
```
Usage

1. Type a question in the chatbox (e.g., "How do I set up a new source in Segment?").
2. The chatbot processes the question and retrieves relevant steps from the documentation.
3. The response is displayed in a structured and easy-to-follow format.


Further Enchancements required:

● Cross-CDP Comparisons:
○ The chatbot can answer questions about the differences in approaches or
functionalities between the four CDPs.
○ Example question: "How does Segment's audience creation process
compare to Lytics'?"

● Advanced "How-to" Questions:
○ The chatbot can handle more complex or platform-specific "how-to"
questions.
○ It can provide guidance on advanced configurations, integrations, or use
cases.
