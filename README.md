# Pitstop AI 🚗⚙️

Pitstop AI is an AI-powered diagnostic assistant for automotive troubleshooting.  
It analyzes technical manuals and vehicle symptoms to generate structured **Fault Trees** and performs **Fault Tree Analysis (FTA)** to determine the most probable root cause of a failure.

Built with a modern web stack and local AI inference, Pitstop AI bridges traditional engineering diagnostics with generative AI.

## 🚀 Overview

Pitstop AI allows users to:

- Upload or reference **technical manuals**
- Input observed **vehicle symptoms**
- Automatically generate a structured **Fault Tree**
- Perform **Fault Tree Analysis (FTA)**
- Identify the **most probable root cause**
- Visualize failure paths logically and hierarchically

The AI-driven reasoning layer uses **Ollama** with IBM’s **Granite 3.1 MoE** model for structured fault modeling.

---

## 🏗️ Architecture

### Frontend
- **SvelteKit**
- **TypeScript**
- Reactive UI for manual ingestion, symptom entry, and fault visualization

### Backend
- **Firebase**
  - Firestore (structured storage)
  - Firebase Auth (optional user access)
  - Firebase Hosting / Cloud Functions (if applicable)

### AI Engine
- **Ollama** (local model runner)
- **IBM Granite 3.1 MoE**
  - Generates structured Fault Trees
  - Performs analytical reasoning for FTA
  - Produces root cause evaluation

---

## 🧠 How It Works

1. **Manual Ingestion**
   - User provides a technical manual (PDF/text)
   - Relevant sections are parsed and structured

2. **Symptom Input**
   - User enters observed failure symptoms

3. **Fault Tree Generation**
   - The system constructs a hierarchical Fault Tree using Granite 3.1 MoE
   - Nodes represent possible failure modes
   - Logical gates (AND/OR) are defined

4. **Fault Tree Analysis (FTA)**
   - Bottom-up analysis determines:
     - Minimal cut sets
     - Probable root causes
     - Critical failure paths

5. **Output**
   - Visualized Fault Tree
   - Ranked root causes
   - Explanation of reasoning

---

## 📊 Example Use Case

**Input Symptoms:**
- Engine cranks but does not start
- Fuel pump audible
- No spark detected

**Output:**
- Fault Tree diagram
- Probable root cause: Ignition coil failure
- Supporting reasoning from manual sections

## Tech Stack Summary

- Frontend: SvelteKit + TypeScript
- Backend: Firebase (Firestore + Auth)
- AI Runtime: Ollama
- Model: IBM Granite 3.1 MoE
- Domain: Automotive diagnostics, Reliability Engineering

## License
MIT
