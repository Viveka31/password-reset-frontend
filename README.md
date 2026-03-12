## Testing the Password Reset Flow

This project includes a password reset feature. For testing purposes, the database already contains the following users:

* [viveka310820@gmail.com](mailto:viveka310820@gmail.com)
* [student1@gmail.com](mailto:student1@gmail.com)
* [student2@gmail.com](mailto:student2@gmail.com)

### Important Notes

* The email **[viveka310820@gmail.com](mailto:viveka310820@gmail.com)** is connected to the Mailtrap testing inbox.
* When a password reset request is made for this email, the reset email will appear in the Mailtrap inbox.

### Testing Instructions

1. Start the backend server.
2. Use the **Forgot Password** feature in the frontend or send a request to the password reset endpoint.
3. Use one of the emails listed above.

Example test emails:

* [viveka310820@gmail.com](mailto:viveka310820@gmail.com)
* [student1@gmail.com](mailto:student1@gmail.com)
* [student2@gmail.com](mailto:student2@gmail.com)

### Reset Link Behavior

* For development and testing purposes, the **password reset link is also logged in the backend console**.
* This allows testers to copy the reset link directly from the terminal if needed.

### Example Flow

1. Enter one of the test emails in the **Forgot Password** form.
2. Submit the request.
3. Check:

   * The **Mailtrap inbox** (for `viveka310820@gmail.com`), or
   * The **backend console log** where the reset link will be printed.
4. Open the reset link and set a new password.

### Notes

* This setup is intended for **development and testing only**.
* In a production environment, reset links would only be sent via email and not logged to the console.
