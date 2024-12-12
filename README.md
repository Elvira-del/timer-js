# Timer Project

This project is a simple yet functional timer application written in JavaScript, HTML, and CSS. The app allows users to create multiple independent timers, pause or resume them, and delete timers when no longer needed. The project demonstrates the use of closures and asynchronous programming.

## Features

1. **Independent Timers**: Each timer works independently of others.
2. **Start, Pause, Resume, Delete**: Timers can be paused, resumed, or deleted via intuitive controls.
3. **Asynchronous Updates**: Timers update seamlessly using `setInterval` for periodic updates.
4. **Responsive Design**: The application is styled to look clean and professional.

## Project Structure

```
src/
├── index.html     # Main HTML file
├── style.css      # Styling for the app
└── script.js      # JavaScript for app functionality
```

## Requirements

- A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.)
- No external dependencies or libraries are required.

## Installation and Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Elvira-del/timer-js.git
   cd timer-js
   ```

2. **Open the Application**:
   - Double-click on `index.html` to open it in your default web browser.

3. **Usage Instructions**:
   - Enter the duration (in seconds) for a timer in the input field.
   - Click the "Add Timer" button to create a new timer.
   - Use the "Pause/Resume" button to control the timer.
   - Use the "Delete" button to remove a timer.

## Code Highlights

### Key Concepts

1. **Closures**:
   - Each timer's state (remaining time and running status) is encapsulated within its own closure.

2. **setInterval for Asynchronous Updates**:
   - Timers are updated periodically using `setInterval` to ensure smooth UI updates.

## Known Limitations

- Timers do not persist after a page reload.
- Input validation is basic and assumes correct numeric input.

## Future Enhancements

- Add persistent storage (e.g., `localStorage` or `IndexedDB`) to save timers across sessions.
- Implement audio notifications when a timer finishes.
- Enhance the UI with animations or additional themes.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Author

- **Elvira-del**
- GitHub: [Elvira-del](https://github.com/Elvira-del)

---

Enjoy using the Timer Project! Feel free to reach out for feedback or contributions.

