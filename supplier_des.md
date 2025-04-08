## Supplier Management Subsystem 

### Use case: View Suppliers

**Actor(s):** Tahir   
**Description:** Allows the owner to view suppliers that he was/is in contact with.   
**Preconditions:** 
- User is signed in as an owner. 
- There must be existing suppliers.  

**Input:**   
**Output:** List of company suppliers.     

**Basic Flow:**
1. The owner selects the "Suppliers" option.   
2. The system retrieves and displays the list of suppliers.   
3. The owner clicks on a specific supplier to see its details.  
4. The system shows the supplier information.

**Extensions:**   
- **1.a No suppliers available**
   - System displays a message: "No suppliers available."
- **1b. Database error while retrieving suppliers:**
   - System logs the error and shows: "Unable to load suppliers. Please try again later."


### Use case: Add supplier

**Actor(s):** Tahir   
**Descriptions:** Allows the owner to add a new supplier.   
**Include:** View supplier  
**Preconditions:** User is on the supplier management page.

**Basic Flow:**   
1. Tahir selects "Add supplier".
2. System displays a form for entering supplier details. 
3. Tahir fills in the required fields .
4. Tahir clicks “Save”.
5. System validates input and adds the supplier.
6. Confirmation message is displayed.
   
**Extensions:**   
- **3a. Missing required fields:**
   - System highlights missing fields and prompts user to complete them."
- **5a. Invalid input:**
   - System shows an error and does not save the supplier."
- **5b. supplier already exists:**  
   - System displays an error message: "supplier with this name already exists."
   

### Use case: Edit supplier

**Actor(s):** Tahir   
**Descriptions:** Allows the owner to edit supplier information.   
**Include:** View supplier.
**Preconditions:** User has selected a supplier from the view.

**Input:**    
**Output:**    

**Basic Flow:**   
1. Tahir selects a supplier from the "View supplier" list.
2. Tahir clicks "Edit".
3. System displays current supplier details in editable form.
4. Tahir updates the information.
5. Tahir clicks “Save”.
6. System validates and updates the supplier details.
7. Confirmation message is displayed.
   
**Extensions:**   
- **4a. User leaves fields empty or adds invalid data:**
   - System highlights errors and does not proceed.
- **6a. System error during update:**
   - System shows an error message and logs the issue. 


### Use case: Remove supplier

**Actor(s):** Tahir   
**Descriptions:** Allows the owner to remove the supplier from the system.      
**Include:** View supplier.  
**Preconditions:** Owner has selected a supplier from the list.

**Input:**    
**Output:**


**Basic Flow:**   
1. Tahir selects a supplier from the "View supplier" list.
2. Tahir clicks "Remove".
3. System prompts for confirmation.
4. Tahir confirms deletion.
5. System deletes the supplier.
6. Confirmation message is shown.
   
**Extensions:**   
- **a. User cancels deletion:**
   - System aborts the deletion and returns to the previous view supplier details."
- **5a. supplier is linked to existing inventory or records:**
   - System prevents deletion and shows message: "supplier cannot be deleted as it is linked to active inventory."




