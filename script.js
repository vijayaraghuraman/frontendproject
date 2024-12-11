// script.js

document.getElementById("event-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get input values
    const eventName = document.getElementById("event-name").value;
    const eventDate = document.getElementById("event-date").value;
    const eventTime = document.getElementById("event-time").value;
    const eventLocation = document.getElementById("event-location").value;
  
    // Create an event list item
    const eventList = document.getElementById("event-list");
    const li = document.createElement("li");
    li.className = "event-item";
  
    li.innerHTML = `
      <strong>${eventName}</strong>
      <div class="event-details">
        <p>Date: ${eventDate}</p>
        <p>Time: ${eventTime}</p>
        <p>Location: ${eventLocation}</p>
      </div>
    `;
  
    // Append to the event list
    eventList.appendChild(li);
  
    // Clear the form
    document.getElementById("event-form").reset();
  });
  