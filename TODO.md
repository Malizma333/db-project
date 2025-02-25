- Make user toolbar icon dropdown
  - Logout option
  - Change username option
  - Change password option
  - Manage collections option
- Add settings
  - Filter by allergens
  - Filter by ingredients
  - Filter by author name
  - Visible columns
- Create mock backend
  - fake username/password function
  - get requests for fake data
  - set requests for fake data
- Separate out UI state from backend actions
  - Use mock backend to call request functions
  - Delete recipe
    1) send delete request
    2) receive delete response
    3) update as needed
  - Add recipe
    1) Bring up form with ui form state
    2) Send add request with form data on submit
    3) receive response
    4) update as needed
  - Update text in recipe
    1) Textbox with ui text state
    2) Send update request on text blur
    3) receive response
    4) update
  - Update allergens/ingredients in recipe
    1) Tag management component with internal state
    2) Send update request on tag creation/removal