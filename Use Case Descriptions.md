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
**Actor(s):** Email service, System 
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

## Repairs and damages Subsystem
### Use Case: View Suppliers Returns
**Inputs:** N/A  
**Outputs:** List of all the products that need to be returned to suppliers  
**Preconditions:** Supplier returns exist in the system.  

**Basic Path:**
1. Tahir or Tahir's assistant selects "View Suppliers Returns."
2. System retrieves return records.
3. System displays returns

**Extensions:**
2a. No returns found
1. System notifies Tahir or Tahir's assistant.


### Use Case: Add New Returns
**Inputs:** Supplier details, product details, return reason.  
**Outputs:** New return record, inventory update.  
**Preconditions:** Product is identified as faulty/damaged.  

**Basic Path:**
1. Tahir's assistant selects "Add New Returns."
2. System prompts for supplier and product details.
3. Tahir's assistant provides supplier and product details.
4. Tahir's assistant enters return reason.
5. System validates and stores information.
6. System notifies the supplier.
7. System updates inventory.  

**Extensions:**
5a. Invalid input data
1. System rejects input and prompts correction.
5b. Duplicate entry (Return already exists)
1. Alert Tahir's assistant.
5c. Product does not exist in the database
1. Alert Tahir's assistant and prompts for another entry


### Use Case: View Customer Repairs
**Inputs:** N/A  
**Outputs:** List of customer products that need to be repaired.  
**Preconditions:** Repairs exist in the system.  

**Basic Path:**
1. Tahir or Tahir's assistant selects "View Customer Repairs."
2. System retrieves repair records.
3. System displays repairs (e.g., product details, status, customer name).

**Extensions:**
2a. No customer repairs found.
1. System notifies Tahir or Tahir's assistant.


### Use Case: Add New Repair
**Inputs:** Customer details, product details, repair description.  
**Outputs:** New return record, inventory update.  
**Preconditions:** Customer reports a product issue.  

**Basic Path:**
1. Tahir's assistant selects "Add New Repair."
2. System prompts for customer and product details.
3. Tahir's assistant provides customer and product details.
4. Tahir's assistant enters the repair description.
5. System validates and stores information.
6. Assistant notifies the customer.
7. System updates inventory.  

**Extensions:**
5a. Invalid input data.
1. System rejects input and prompts correction.
5b. Duplicate entry (Repair already exists)
1. Alert Tahir's assistant.
5c. Product not under warranty.
1. Alert Tahir's assistant and prompts for another entry
5d. Customer does not exists.
1. Reject entry.
2. Notify Tahir's assistant


### Use Case: Notify Customer //This user case don't make sense because the assistant use the email which is not part of the system
**Inputs:** Repair ID, customer contact details.  
**Outputs:** Notification sent confirmation.  
**Preconditions:** Repair request is logged or repair updates.  

**Basic Path:**
1. Tahir's assistant selects "Message customers."
2. System prompts for customer ID and product details.
3. Createas an email with repair details.
4. Email service delivers the message
