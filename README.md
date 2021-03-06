# MERN H2SHOP

# Lessons

1.  Introductions
2.  Install Tools
3.  Create React App
4.  Create Git Repository
5.  React-router-dom
6.  Create Node.JS Server
    1.  Run npm init in root folder
    2.  Update package.json set type: module
    3.  Add .js to import
    4.  Npm install express
    5.  Create server.js
    6.  Add start command as node server/server.js
    7.  Require express
    8.  Create route for / return server is ready
    9.  Move product.js from server is ready
    10. Create route for /api/products
    11. Return products
    12. Run npm start
7.  Fetch Products From Backend
    1.  Set proxy in package.json
    2.  Npm install axios
    3.  Use state hook
    4.  Use Effect hook
    5.  Use Reducer hook
8.  Manage State By Reducer Hook
    1.  Define reducer
    2.  Update fetch data
    3.  Get State from useReducer
9.  Add bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. update App.js
10. Create product and rating component
    1.  create rating component
    2.  create product component
    3.  use rating component in product component
11. Create Product Details Screen
    1.  Fetch product from backend
    2.  Create 3 columns for image, info and action.
12. Create Loading and Message Component
    1.Create loading Component
    2.Use Spinner Component
    3.Create Message Component
    4.Create utils.js to define getError function
13. Implement add to cart
    1. Create React Context
    2. Define reducer
    3. Create store provider
    4. Implement add to cart button click handler
14. Complete Add To Cart
    1.Check exits item in the cart
    2.Check count in stock in backend
15. Create Cart Screen
    1. Create 2 columns
    2. Display items list
    3. Create action column
16. Complete Cart Screen
    1. Click handler for inc/dec item
    2. Click handler for remove item
    3. Click handler for checkout
17. Create Sign in Screen
    1. Create sign in from
    2. Add email and password
    3. Add sign in button
18. Connect to MongoDB Database
    1. Create atlas mongodb database
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database
       username: nguyenvanhai13
       password: 061001
19. Seed Sample Data
    1. Create Product Model
    2. Create user model
    3. create seed route
    4. use route in server.js
    5. seed sample product
20. Seed Sample Users(Su dung library: bcryptjs )
    1. Create user model
    2. Seed sample users
    3. Create user routes
21. Create SignIn backend API
    1. Create SignIn api
    2. npm install jsonwebtoken
    3. define generateToken
22. Complete SignIn Screen
    1. Handle submit action
    2. Save token in store and local storage
    3. Show user name in header
23. Create Shipping Screen
    1. Create from inputs
    2. Handle save shipping address
    3. Add checkout wizard bar
24. Create Sign Up Screen
    1. Create input forms
    2. Handle Submit
    3. Create backend api
25. Implement select Payment method screen
    1. create inform
    2. handle submit
26. Create Place Order Screen
    1. Show cart items , payment and address
    2. Handle place order action
    3. Create order create api
27. Implement place order action
    1. handle place order action
    2. create order create api
28. Create Order Screen
    1. Create backend api for order/:id
    2. Fetch order api in frontend
    3. Show order information in 2 columns
29. Pay Order By PayPal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
30. Display Order History
    1. Create Order Screen
    2. Create order history api
    3. Use api in the frontend
31. Create Profile Screen
    1. Get user info from context
    2. Show user information
    3. Create user update api
    4. Update user info
32. Publish To Heroku
    1. Create and config project
    2. server build folder in frontend folder
    3. create heroku account
    4. Connect it to github
    5. Create mongodb atlas database
    6. Set database connection in heroku env variables
    7. Commit and push
