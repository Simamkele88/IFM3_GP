## Order Management Subsystem 

### Use case: View orders

**Actor(s):** Tahir   
**Description:** Allows the owner to be able to view orders and accept/reject orders that were recommended based on the quantity left, He/She can also auto generate to purchase an order.   
**Preconditions:** 
- User is signed in as an owner. 
- There must be existing orders.


**Postcondition:** The owner has reviewed the orders and can decide to approve or reject them    

**Input:**   
**Output:** List of orders.     

**Basic Flow:**
1. The owner selects the "View Orders" option.   
2. The system retrieves and displays the list of orders.   
3. The owner clicks on a specific order to see its details.  
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
- The owner must have viewd the order.
- The order must be in a pending state.
  
**Postcondition:** The order is approved and the purchased order is generated.

**Input:**    
**Output:**    

**Basic Flow:**   
1. The owner selects an order from the list.
2. The owner clicks the "**Approve**" button.
3. The system checks if the order is still in pending status.
4. The system updates the order status to "Accepted".
5. The system triggers the Auto Generate PO use case.
   
**Extensions:**   
- **2a. Order is already approved:**
   - System prevents re-approval and displays: "This order has already been processed."
- **1b. Database error while retrieving orders:**
   - System prevents approval and shows: "Cannot approve order. Missing supplier details."
  

### Use case: Reject orders

**Actor(s):** Tahir   
**Descriptions:** Approve the recommended orders.
**Preconditions:** 
- The owner must have viewd the order.
- The order must be in a pending state.  

**Input:**    
**Output:**    

**Basic Flow:**   
1. The owner selects an order from the list.
2. The owner clicks the "**Reject**" button.
3. The system checks if the order is still in pending status.
4. The system removes the order.
   


### Use case: Auto Generate PO

**Actor(s):** Tahir   
**Descriptions:** Auto generate an order based on the past orders.    
**Preconditions:** 
- The order must be approved.
  
**Postcondition:** The order is approved and the purchased order is generated.

**Input:**    
**Output:**
- The system sends the PO to the supplier.
- The system notifies the owner that the PO has been generated successfully.

**Basic Flow:**   
1. The system retrieves order details.
2. The system generates a Purchase Order (PO) with:
   - Order ID
   - Supplier details
   - List of approved items 
   - Payment terms
3. The system sends the PO to the supplier.
4. The system notifies the owner that the PO has been generated successfully.
   
   
**Extensions:**   
- **4a. PO generation fails due to missing details:**
   - System logs an error and alerts the owner: "Purchase Order generation failed. Please check order details."
- **4b. Supplier system is unavailable:**
   - PO remains in pending state, and system retries later.







   

