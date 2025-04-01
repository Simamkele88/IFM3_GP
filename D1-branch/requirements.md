# 2. Requirements Extraction

## Functional Requirements
- The system should allow users to register and login.
- The system should allow admin to order products from other companies.
- The system should allow the admin to track orders.
- The system should allow the employee to indicate the condition of each arrived product.
- Upon the scanning of a product, the system should allow the employee to enter the condition of the product and show the product.
- The system should allow the admin to show the products that are damaged and those that are not.
- The system should allow the admin to keep track of the products that are being repaired.
- The system should send notifications for low stock levels, pending purchases, and other critical events.
- The system should allow the user to view purchase history.
- The system should allow th euser to export reports in a PDF format.
- The system should allow the admin to set reorder points for each product.
-  When stock levels fall below the reorder point, the system should generate a purchase order automatically.
-  The system should be able to view and approve/reject generated product orders.
-  The system should allow admib to add, update, and delete inventory items.


## Non-Functional Requirements

-  The system should be able to handle at least 10 concurrent users
-  The system should process inventory updates in less than 5 seconds
-  The system should generate reports in under 5 seconds
-  The functionality should return results in under 2 seconds for up to 100 products
-  The database should support up to 100 inventory records without performance degradation
-  The system should log arriving products to the database
-  The user interface should be intuitive and easy to navigate, even for non-technical users.
-  The system should provide help guides and error messages to assist users.
-  The system should integrate with third-party services, such as barcode databases
-  The mobile app should support devices running iOS 14+ and Android 10+.
-  The system should maintain a record of all repaired items that have been returned to customers for at least 3 months 