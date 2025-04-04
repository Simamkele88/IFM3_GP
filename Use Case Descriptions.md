# USE CASE DESCRIPTIONS
## Login and register substem
### Use Case: Register
**Actor(s):** Tahir, Tahir's assistant, Warehouse Staff  
**Description:** Allows users to create an account in the system.  
**Preconditions:** User is not registered.  
**Postconditions:** A new user account is created, and a confirmation email is sent.  

**Basic Path:**  
1. User accesses the login page.
2. User selects "Register."
3. System displays registration form (email, password, role, name, regKey)
4. User fills in details and submits.
5. System validates data and creates an account.
6. System sends confirmation email
7. System confirms successful registration and redirects the user to the log in page.  

**Alternate Paths:**
- Invalid data: System prompts user to correct input errors.
- Email already exists: System notifies user and suggests login.

**Inputs:** User credentials (Email, password, role, name, reg key).  
**Outputs:** New user account, confirmation email  


### Use Case: Log in
**Actor(s):** Tahir, Tahir's assistant, Warehouse Staff  
**Description:** Authenticates users to access the system.  
**Preconditions:** User has a registered account.  
**Postconditions:** The user is successfully logged into the system and granted access to their account.  

**Basic Path:**  
1. User selects "Log in".
2. System prompts for email and password.
3. User enters credentials.
4. System verifies credentials.
5. System grants access based on role and redirects to the home page.  

**Alternate Paths:**
- Incorrect credentials: System displays error and allows retry.
- Forgotten password: Redirects to "Reset password".

**Inputs:** User credentials (Email, password).  
**Outputs:** Access to dashboard, session token.


### Use Case: Reset Password
**Actor(s):** Tahir, Tahir's assistant, Warehouse Staff, System  
**Description:** Resets a user’s password via email confirmation.   
**Preconditions:** User is registered but cannot log in.  
**Postconditions:** The user receives a password reset link and can set a new password.  

**Basic Path:**  
1. User selects the "Forgot Password" option on the login page.  
2. System prompts for registered email.
3. User enters and submit the email.
4. System sends reset link to email.
5. User follows link and sets new password.
6. System confirms password update.  

**Alternate Paths:**
- Email not found: System notifies user.
- Expired link: System regenerates reset link.  

**Inputs:** Registered email, new password.  
**Outputs:** Password reset confirmation.


### Use Case: Send Confirmation Email
**Actor(s):** System 
**Description:** Sends a confirmation email after registration or password reset.   
**Preconditions:** User completes registration or requests password reset.  
**Postconditions:** The confirmation email is successfully sent and received by the user.  

**Basic Path:**  
1. System triggers email generation.  
2. System sends email with link (activation/reset).
3. Email service delivers message.

**Alternate Paths:**
- Email failed: System retries or logs error. 

**Inputs:** User email, email template.  
**Outputs:** Email sent status, user notification.

## Notification & Alert Subsystem
