# inbalokesh.esakkipandi__web_project
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fssa-batch3_inbalokesh.esakkipandi__web_project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fssa-batch3_inbalokesh.esakkipandi__web_project)



PROBLEM STATEMENT -  https://docs.google.com/document/d/19wvSyEjhBu3xp5E8nq7kMPUMXhduhfyA/edit

FLOW CHART - https://drive.google.com/file/d/1PP1BrD-9yDyZgIWO9qBMWlsvC7-v7-kY/view?usp=sharing

LOW FIDELITY - https://docs.google.com/document/d/1UDu2AEF0KWBcD3FHCd2NA6LUcekOamRE39dwJAdSUIM/edit

# Only home food

1) User (completed)

    - Create user (completed)
    - Read user (completed)
    - Update user (completed)
    - Delete user (completed)

2) Product (completed)

    - Create product (completed)
    - Read product (completed)
    - Update product (completed)
    - Delete product (completed)
    - Add and remove product (completed)

3) Cart (completed)

    - Add to cart (completed)
    - Read cart (completed)
    - Update cart (completed)
    - Remove cart (completed)
    
 4) Order (Not-completed)
 
    - Place order (completed)
    - Read order (completed)
    - Cancel order (completed)
    - Re-order (Not-completed)


## User

### Create an account (completed)
- Scenario 1: Successfully create an account
    - Steps:
        1. Click "Login" button.
        2. Navigate to the login page.
        3. Enter the required information such as name, phone no, email, address and password.
        4. Click the "Submit" button.
    - Expected Result:
        - The user account is sucessfully created.
        - The user is redirected to the login page.

### Login as user (completed)
- Scenario 1: Successfully login in to account
    - Steps:
        1. Navigate to the login page.
        2. Enter the required information such as mobile no, and password.
        3. Click the "login" button.
    - Expected Result:
        - The user is redirected to the user profile page.

### View profile page (completed)
- Scenario 1: Successfully view user profile
    - Steps:
        1. Login as a user.
        2. Navigate to the profile page.
        3. User can edit profile, delete user and Log out from the profile page.
    - Expected Result:
        - The user can view the profile page.

### Edit profile (completed)
- Scenario 1: Successfully edit user profile
    - Steps:
        1. Login as a user.
        2. Navigate to profile page.
        3. Click "Edit profile" button.
        4. Navigated to the edit profile page.
        4. User can only edit name and address and Click "Save" button to update the details.
    - Expected Result:
        - The user details are updated to the profile.
        - And the user is redirected to the profile page.

### Delete User (completed)
- Scenario 1: Successfully delete user profile
    - Steps:
        1. Login as a user.
        2. Navigate to the profile page.
        3. Click "Delete" and select "Yes" to delete the account.
    - Expected Result:
        - The user account is deleted sucessfully.

### View food items(Menu) (completed)
- Scenario 1: Successfully view food items
    - Steps:
        1. Log in as a user.
        2. Navigate to the Menu page.
        3. View the list of available food items.
    - Expected Result:
        - The user can view the list of available items.

### Add product/item to cart (completed)
- Scenario 1: Successfully add item to cart
    - Steps:
        1. Login as a user.
        2. Navigate to the Menu page.
        3. Choose the food and click the "Add to Cart" button.
    - Expected Result:
        - The food item is added to the user's cart.
        - The count is added to the cart icon.

### View items in cart (completed)
- Scenario 1: Successfully view items in cart
    - Steps:
        1. Log in as a user.
        2. Navigate to the cart page.
        3. View the list of items you added in the cart.
    - Expected Result:
        - The user can view the list of items in the cart.

### Remove item from cart (completed)
- Scenario 1: Successfully remove item from cart
    - Steps:
        1. Log in as a user.
        2. Navigate to the cart page.
        3. Click the "Remove" button of the item you want to remove.
    - Expected Result:
        - The item is removed from the user's cart.

### Update cart item (completed)
- Scenario 1: Successfully update items in cart
    - Steps:
        1. Log in as a user.
        2. Navigate to the cart page.
        3. Update the delivery time(Breakfast, Lunch, Dinner) by selecting the option of the item.
        4. Update the quantity of the item.
    - Expected Result:
        - The delivery time and quantity is updated in the summary with its price.

### Place order items (completed)
- Scenario 1: Successfully place the order
    - Steps:
        1. Log in as a user.
        2. Navigate to the cart page.
        3. Click "Place order" button.
        4. Confirm the order by cliking "Yes".
    - Expected Result:
        - Order is placed successfully.

### View order (completed)
- Scenario 1: Successfully view the order
    - Steps:
        1. After order is placed Click "View order" button.

- Scenario 2: Successfully view the order
    - Steps:
        1. Log in as a user.
        2. Navigate to the profile page.
        3. List of orders can be viewed in my orders.
        4. Click "View details" button.
        5. View the details of the particular order.
    - Expected Result:
        - Order details is viewed successfully.

### Cancel order (completed)
- Scenario 1: Successfully cancel the order
    - Steps:
        1. Log in as a user.
        2. Navigate to the profile page.
        3. Click "View details" button of the order.
        4. Click "Cancel order" button.
    - Expected Result:
        - Order is cancelled successfully.
        - Status is updated as cancelled.

### Logout (completed)
- Scenario 1: Successfully logout from the account
    - Steps:
        1. Login as a user.
        2. Navigate to the profile page.
        3. Click "Logout" and select "Yes" button to logout from the account.
    - Expected Result:
        - The user is logged out sucessfully.


## Admin

### Login as admin (completed)
- Scenario 1: Successfully login as admin
    - Steps:
        1. Navigate to the login page.
        2. Enter the required information of admin mobile no, and password.
        3. Click the "login" button.
    - Expected Result:
        - The admin is redirected create product page.

### Create product/item (completed)
- Scenario 1: Successfully create an item
    - Steps:
        1. Login as a admin.
        2. Navigate to the create product page.
        3. Upload the image url, food name, type, quantity and price.
        4. Click the "Create" button.
    - Expected Result:
        - The product/item is created sucessfully.

### View the list products/items (completed)
- Scenario 1: Successfully View the list of products/items
    - Steps:
        1. Login as a admin.
        2. Navigate to the create product page.
        3. View the created card of the products/items.
    - Expected Result:
        - The product/item is viewed sucessfully.

### Edit the product/item (completed)
- Scenario 1: Successfully edit the product/item
    - Steps:
        1. Login as a admin. 
        2. Navigate to the create product page.
        3. Click the "Edit" button for the item you want to edit.
        4. Selected product is viewd in the form.
        5. Edit the product.
        6. Click the "Update" button.
    - Expected Result:
        - The product/item is updated sucessfully.

### Delete the product/item (completed)
- Scenario 1: Successfully delete the product/item
    - Steps:
        1. Login as a admin.
        2. Navigate to the create product page.
        3. Click the "Edit" button for the item you want to edit.
        4. Selected product is viewd in the form.
        5. Click the "Delete" button.
    - Expected Result:
        - The product/item is deleted sucessfully.

### Add the product/item to the Menu (completed)
- Scenario 1: Successfully add the product/item to Menu
    - Steps:
        1. Login as a admin.
        2. Navigate to the create product page.
        3. Click the "Add" button for the item you want to add.
        4. Selected product is added to the Menu.
    - Expected Result:
        - The product/item is added to the menu sucessfully.

### Remove the product/item from the Menu (completed)
- Scenario 1: Successfully remove the product/item from the Menu
    - Steps:
        1. Login as a admin.
        2. Navigate to the create product page.
        3. Click the "Remove" button for the item you want to remove.
        4. Selected product is removed from the Menu.
    - Expected Result:
        - The product/item is removed from the menu sucessfully.