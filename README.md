# QASF Event Manager 🎉

**QASF Event Manager** is a modern ReactJS dashboard application built for managing various event-related functionalities such as sessions, participants, reminders, social media uploads, and more. It leverages **ReactJS** for building a dynamic and interactive user interface, while **Tailwind CSS** provides utility-first styling for a clean and responsive layout. The app uses **React Router** for seamless navigation and **React Icons** for visually appealing and intuitive icons. 



https://github.com/user-attachments/assets/b1869522-358f-4209-b08b-41a5e59078f8



---

## **Key Features** 🌟

### 1. **Sidebar Navigation** 🧭
- **Design**: 
  - A gradient sidebar with a teal color scheme.
  - Icons from **react-icons** for smooth navigation.
  - A circular calendar icon with a blue border enhances the sidebar’s visual appeal.
  - Titles and routes for quick access to various sections.

- **Routes Included**:
  - Dashboard (home page) 🏠
  - Participant Management 🧑‍🤝‍🧑
  - Session Management 📅
  - Social Media Upload 📸
  - Reminder Management ⏰
  - Profile Management 👤
  - User Permission Management 🔐

### 2. **Main Content Area** 📊
The main content area dynamically displays information based on the active route:

- **Dashboard Route (Home)**:
  - **Metrics Section**: Displays three widgets with details about:
    - Total Sessions 📈
    - Total Participants 👥
    - Feedback Collected 📝
  - **Recent Activities Section**: Shows the most recently conducted sessions with a "Details" button for each.
  - **Quick Actions Section**: Includes three interactive buttons:
    - **Create New Session** ➕: Adds a new session to the recent activities list.
    - **View Feedback** 👀: Placeholder for viewing feedback data.
    - **Upload Media** 📤: Redirects to the Social Media Management page.

- **Other Routes**: Dynamically renders content for routes like Participant Management, Session Management, etc.

### 3. **Core Functionalities** 🔧
- **Adding Sessions**: 
  - The "Create New Session" button dynamically generates a new session and adds it to the recent activities list. 📝
  - Each session is labeled as "Session X conducted," where X is the session number.

- **Social Media Management**: 
  - Clicking **Upload Media** redirects to the Social Media Management page. 📱

- **Dynamic Styling**: 
  - Buttons are well-aligned using **Flexbox** and **Grid** layouts for a clean and responsive design. 💡
  - Buttons change color subtly on hover to enhance interactivity. 🎨

---

## **Future Enhancements** 🚀

- **Interactive Feedback**: Implement a modal or new page to view and manage feedback data. 💬
- **Session Details**: Clicking "Details" on a session could redirect to a detailed session management page. 📑
- **Dynamic Metrics**: Integrate backend APIs to fetch real-time data for metrics like total sessions and participants. 🔄

---

**QASF Event Manager** provides a streamlined and modern solution for managing event operations, offering easy navigation and a responsive design. It leverages modern web development practices and will continue to evolve with new features and improvements. 🌍✨

