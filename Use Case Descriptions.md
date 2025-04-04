# USE CASE DESCRIPTIONS
## Login and register substem
### Register
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
7. System confirms successful registration and redirects the user to the home page.  

**Alternate Paths:**
- Invalid data: System prompts user to correct errors.
- Email already exists: System notifies user and suggests login.

**Inputs:** User credentials (Email, password, role, name, reg key).
**Outputs:** New user account, confirmation email
