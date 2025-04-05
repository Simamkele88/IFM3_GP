## Order Management Subsystem 

### Use case: View warehouses

**Actor(s):** Tahir   
**Description:** Allows the owner to view all the company warehouses in different places.   
**Preconditions:** 
- User is signed in as an owner. 
- There must be existing warehouses.  

**Input:**   
**Output:** List of company warehouses.     

**Basic Flow:**
1. The owner selects the "Warehouses" option.   
2. The system retrieves and displays the list of warehouses.   
3. The owner clicks on a specific warehouse to see its details.  
4. The system shows the warehouse information.

**Extensions:**   
- **1.a No warehouses available**
   - System displays a message: "No warehouses available."
- **1b. Database error while retrieving orders:**
   - System logs the error and shows: "Unable to load warehouses. Please try again later."


### Use case: Add warehouse

**Actor(s):** Tahir   
**Descriptions:** Allows the owner to add a new warehouse.   
**Include:** View warehouse  
**Preconditions:** User is on the warehouse management page.

**Basic Flow:**   
1. Tahir selects "Add Warehouse".
2. System displays a form for entering warehouse details. 
3. Tahir fills in the required fields .
4. Tahir clicks “Save”.
5. System validates input and adds the warehouse.
6. Confirmation message is displayed.
   
**Extensions:**   
- **3a. Missing required fields:**
   - System highlights missing fields and prompts user to complete them."
- **5a. Invalid input:**
   - System shows an error and does not save the warehouse."
- **5b. Warehouse already exists:**  
   - System displays an error message: "Warehouse with this name already exists."
   

### Use case: Edit warehouse

**Actor(s):** Tahir   
**Descriptions:** Allows the owner to edit warehouse information.   
**Include:** View warehouse.
**Preconditions:** User has selected a warehouse from the view.

**Input:**    
**Output:**    

**Basic Flow:**   
1. Tahir selects a warehouse from the "View Warehouse" list.
2. Tahir clicks "Edit".
3. System displays current warehouse details in editable form.
4. Tahir updates the information.
5. Tahir clicks “Save”.
6. System validates and updates the warehouse details.
7. Confirmation message is displayed.
   
**Extensions:**   
- **4a. User leaves fields empty or adds invalid data:**
   - System highlights errors and does not proceed.
- **6a. System error during update:**
   - System shows an error message and logs the issue. 


### Use case: Remove warehouse

**Actor(s):** Tahir   
**Descriptions:** Allows the owner to remove the warehouse from the system.      
**Include:** View warehouse.  
**Preconditions:** 
- The order must be approved.
  
**Postcondition:** The order is approved and the purchased order is generated.

**Input:**    
**Output:**
- The system sends the PO to the supplier.
- The system notifies the owner that the PO has been generated successfully.

**Basic Flow:**   
1. Tahir selects a warehouse from the "View Warehouse" list.
2. Tahir clicks "Remove".
3. System prompts for confirmation.
4. Tahir confirms deletion.
5. System deletes the warehouse.
6. Confirmation message is shown.
   
**Extensions:**   
- **a. User cancels deletion:**
   - System aborts the deletion and returns to the previous view. order details."
- **5a. Warehouse is linked to existing inventory or records:**
   - System prevents deletion and shows message: "Warehouse cannot be deleted as it is linked to active inventory."
















   