document.getElementById("gameForm").addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent actual form submit

      const name = document.getElementById("fullName").value;

      try {
        const response = await fetch("https://your-railway-backend-url.com/api/save-name", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ fullName: name })
        });

        if (response.ok) {
          alert("Name submitted successfully!");
          // Optionally redirect
          window.location.href = "game.html";
        } else {
          alert("Failed to submit. Try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred.");
      }
    });