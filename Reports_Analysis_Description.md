## Export documents subsystem

### Use case: Generate Stock Reports
**Description:** Gathers stock data in the system to be compiled and exported into a document.
**Actors:** Owner, assistant

**Input:** inventory data.

**Preconditions:**
- Existing data in the database or inventory data.

**Postconditions:**
- The stock report is generated in the system.
- The report is exportable into PDF.

**Flow:**
1. User navigates to "Reports and Analysis" tab.
2. System displays report options.
3. User selects desired option(s).
4. User selects "generate report".
5. System queries relevant data from the database.
6. System generates a report.
7. User confirms generation.
8. Document is stored in the system.

**Extensions:**
5a. No stock data is available.
1. System notifies the user to wait or try again later.
2. User can retry or cancel.

### Use case: Generate document

### Use case: View document
