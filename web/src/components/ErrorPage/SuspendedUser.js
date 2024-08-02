import React from "react";
import { useNavigate } from "react-router-dom"; // Updated import

export default function SuspendedUser() {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem("user");

    // Navigate to home page after logout
    navigate("/register");
  };

  return (
    <div style={styles.container}>
      <h1>Your Account Has Been Suspended</h1>
      <p>
        It appears that your account has been suspended by an administrator.
        This could be due to a variety of reasons, and you may need to contact
        support for further assistance.
      </p>
      <p>
        If you believe this is an error or would like more information about the
        suspension, please reach out to our support team.
      </p>
      <div style={styles.contactSupport}>
        <h2>Contact Support</h2>
        <p>
          Email: <a href="mailto:support@example.com">support@example.com</a>
        </p>
        <p>
          Phone: <a href="tel:+1234567890">+1-234-567-890</a>
        </p>
      </div>
      <div style={styles.feedbackContainer}>
        <h2>Feedback Form</h2>
        <form
          action="https://example.com/feedback"
          method="post"
          style={styles.feedbackForm}
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={styles.input}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style={styles.input}
          />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            style={styles.textarea}
          ></textarea>
          <br />
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>
              Send Feedback
            </button>
            <button
              type="button"
              onClick={handleLogout}
              style={styles.logoutButton}
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  contactSupport: {
    marginTop: "20px",
  },
  feedbackContainer: {
    marginTop: "20px",
  },
  feedbackForm: {
    display: "inline-block",
    textAlign: "left",
  },
  input: {
    display: "block",
    width: "100%",
    margin: "8px 0",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    display: "block",
    width: "100%",
    margin: "8px 0",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  buttonContainer: {
    marginTop: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    marginRight: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
