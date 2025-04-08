## Order Management Subsystem 

### Use case: View orders

**Actor(s):** Tahir, Assistant  
**Description:** Allows the user to be able to view orders.     
**Preconditions:** 
- User is signed in as an owner or assistant. 
- There must be existing orders.


**Postcondition:** The user must be able to see the list of orders if available. 

**Input:**   
**Output:** List of orders.     

**Basic Flow:**
1. The user selects the "View Orders" option.   
2. The system retrieves and displays the list of orders.   
3. The user clicks on a specific order to see its details.  
4. The system shows the order information.

**Extensions:**   
- **1.a No orders available**
   - System displays a message: "No orders available."
- **1b. Database error while retrieving orders:**
   - System logs the error and shows: "Unable to load orders. Please try again later."


### Use case: Approve orders

**Actor(s):** Tahir   
**Descriptions:** Approve the recommended orders.
**Preconditions:** 
- The owner must have viewed the order.
- The order must be in a pending state.
  
**Postcondition:** The order is approved and the purchased order is created and sent to supplier.

**Input:**    
**Output:**    

**Basic Flow:**   
1. The owner selects an order from the list.
2. The owner clicks the "**Approve**" button.
3. The system checks if the order is still in pending status.
4. The system updates the order status.

   
**Extensions:**   
- **2a. Order is already approved:**
   - System prevents re-approval and displays: "This order has already been processed."
  

### Use case: Reject orders

**Actor(s):** Tahir   
**Descriptions:** Reject the recommended orders.
**Preconditions:** 
- The owner must have viewed the order.
- The order must be in a pending state.  

**Input:**    
**Output:**    

**Basic Flow:**   
1. The owner selects an order from the list.
2. The owner clicks the "**Reject**" button.
3. The system checks if the order is still in pending status.
4. The system removes the order.
   
### Use case: Add purchase order

**Actor(s):** Assistant    
**Description:** Add a new purchase and send it to the owner.   
**Preconditions:** 
- Must have logged in as an assistant.


**Input:** Order details.    
**Output:**    

**Basic Flow:**  
1. The assistant clicks "Purchase order".
2. The system shows an order form for completion.
3. Assistant completes the order details and click submit.
4. The system validates the information and send the order to the owner.


**Extensions:**   
- **4.a Missing information**
   - System shows an error message and allows the assistant to enter missing details or cancel.
- **4.b Incorrect information**
   - System tells the assistant about the incorrect information enter and tell them to put relevant information or cancel.

### Use case: Set Re-order points

**Actor(s):** Assistant    
**Description:** Set a re-order point for a certain inventory.   
**Preconditions:** 
- Must have logged in as an assistant.


**Input:** Reorder levels.  
**Output:**    

**Basic Flow:**  
1. The assistant clicks "Re-order points".
2. The system shows all the available inventory.
3. Assistant selects one of the items in the inventory and set re-order point.
5. The system save the re-order level and input in the inventory.





   

