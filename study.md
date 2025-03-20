# Feasibility and Risk Study

##  System feasibility
- The proposed Inventory Management System shares similarities with existing inventory solutions used by wholesalers and distributors. These systems typically include stock tracking, order management, and supplier coordination. However, our system offers customized functionalities tailored for a small distributor business, such as:

    - Supplier Communication: Unlike many generic inventory systems, this system allows direct interaction with suppliers for faulty product returns.
    - Independent Mobile & Web Application: Most inventory systems are web-based only, but our solution includes a mobile app for employees to update stock conditions in real-time.
    - Notification Management: Automated alerts for low stock, pending purchase orders, and faulty product tracking.
    - Warehouse Space Tracking: A feature that helps the admin check available storage space in different warehouses.
  
##  Technical feasibility
The technical feasibility of this implementation will slightly differ depending on the existing system in a warehouse. Warehouses that already have a system in place will need to change their hardware to adapt to the new system. Subsequent changes are also needed to implement the software with the hardware. Since the warehouse in question has no systems in place, adding the required hardware and software will cause no conflicts, therefore being simpler. The system will make use of commonly used hardware such as barcode scanners. There are no specialized equipment needed. Software requirements will include familiar technologies for the web platform and application
### Hardware Requirements

    Admin's Device: A PC/laptop with internet access.
    Employee’s Device: Mobile phones (Android/iOS) to access the mobile app.
    Barcode Scanner: If automated stock scanning is needed.

### Software Requirements

    Backend:Javascript and .NET Core with MySQL for database management.
    Frontend:
        Web Application: HTML, CSS, 
        Mobile Application: Built in Android studio
    Version Control: GitHub for source code management.

## Economic feasibility
- The economic feasibility can be justified by low development costs, high financial benefits, and low operating expenses.
- Existing hardware such as smartphones, computers, and barcode scanners are used with open-source frameworks that reduce licensing fees.
- The system aims to improve the efficiency of tracking stock, which reduces employee workload and labor costs.
  
## Operational feasibility
The system is user-friendly and practical for both admins and employees.
Human Factor Considerations

    Admin Users:
        Can easily track stock levels, analyze trends, and manage orders via the web dashboard.
        Receives automated notifications for low stock and pending orders.
    Employees (Warehouse Staff):
        Can use the mobile app to update stock conditions in real-time.
        Can report faulty or damaged products for quick returns.
    Suppliers:
        Receive faulty product reports and return requests efficiently.