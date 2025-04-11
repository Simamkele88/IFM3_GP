## Inventory Management Subsystem 

### Use Case: View Inventory
**Actor(s):** Tahir, Assistant
**Description:** Allows the owner to view the available inventory.
**Preconditions:** 
- User is signed in as an owner or assistant. 
- There must be existing orders.
Input: 
Output: 
1. Tahir selects inventory
2. System displays all products and spare parts

Extensions
2a No products available
    1. System informs the user to add product

Use Case: Add product/Spare part
Input: Product details or Spare part details 
Output: Confirmation
1. Tahir selects a relevant product or spare part
2. Tahir clicks on add product
3. Systems display a form
4. Tahir fills in the form
5. System validates input
6. System stores product information
7. System sends a confirmation email

Extensions
5a Invalid data entered
    1. System informs the user about the invalid input
    2. Tahir can fix the input or cancel


Use Case: Remove product/spare part
Input: 
Output: Confirmation
1. Tahir selects a relevant product or spare part
2. The system displays the product or spare part details
3. Tahir clicks on remove product
4. The system asks for confirmation
5. System deletes product
6. System sends confirmation message

Extensions
4a. Tahir chooses no as answer
    1. The system draws the change and go back to product information


Use Case: Edit product/spare part
Input: product details or spare part details
Output: Confirmation
1.  Tahir selects a relevant product or spare part
2. The system displays the product information
3. Tahir clicks Edit product
4. Tahir changes product details
5. System validates data
6. System stores product or spare part details
7. System sends confirmation notification


Extensions
5a Invalid data entered
    1. System informs the user about the invalid input
    2. Tahir can fix the data or cancel



Use Case: Scan product
Input: Product Quantity 
Output: Confirmation
1. Warehouse Manager opens “Scan product” feature on mobile app
2. Warehouse Manager Scans the barcode of the product
3. System validates barcode 
4. System display product information
5. Warehouse Manager confirms quantity
6. System updates product information
7. System displays confirmation message

Extensions
1a Barcode scanner offline
    1. Systems display barcode scanner not available
    2. Warehouse Manager click manually update product information or cancel

3a Invalid Barcode
    1. Systems detect invalid barcode and display Barcode not found
    2. Warehouse Manager can rescan or manual update product

6a Product does not exist
    1. System informs the warehouse manager that product is not in the database
    2. Warehouse manager can notify Tahir or cancel





Use Case: Manually Update product information
Input: Quantity
Output: Confirmation
1. Warehouse Manager selects update product
2. System displays all products and spare parts
3. Warehouse manager search the product using product name or product id
4. System display the product
5. Warehouse manager selects relevant product
6. Warehouse manager confirms quantity
7. System validates input
8. System updates the product information
9.  System displays confirmation message

Extensions
3a Product does not exist
    1. System informs the user that the product is not available
    2. Warehouse manager retype product name or cancel

3a Product does not exist
    1. System informs the user that the product is not available