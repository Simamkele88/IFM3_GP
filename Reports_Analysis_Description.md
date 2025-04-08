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
4. User selects "Create report".
5. User selects the type of report.
6. The user chooses desired report data
7. System queries relevant data from the database.
8. System generates a report.
9. User confirms generation.
10. Document is stored in the system.

**Extensions:** <br>
7a. Data is unavailable.
1. System notifies the user to wait or try again later.


### Use case: Export Document
**Description:** Exports the report document into a PDF file.

**Actors:** Owner, assistant

**Input:** Generated report

**Output:** PDF file report

**Preconditions:**
- An existing report that has been generated.

**Postconditions:**
- The report is saved as a PDF file and is available for download.

**Flow:**
1. User clicks "Download".
2. System exports the file into PDF.
3. System generates file.
4. System sends file to the user.
5. User receives file.
6. User views file.
