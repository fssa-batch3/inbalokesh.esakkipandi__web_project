# inbalokesh.esakkipandi__web_project
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fssa-batch3_inbalokesh.esakkipandi__web_project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fssa-batch3_inbalokesh.esakkipandi__web_project)



PROBLEM STATEMENT -  https://docs.google.com/document/d/19wvSyEjhBu3xp5E8nq7kMPUMXhduhfyA/edit

FLOW CHART - https://drive.google.com/file/d/1PP1BrD-9yDyZgIWO9qBMWlsvC7-v7-kY/view?usp=sharing

LOW FIDELITY - https://docs.google.com/document/d/1UDu2AEF0KWBcD3FHCd2NA6LUcekOamRE39dwJAdSUIM/edit

# Only home food

1) User (completed)

    - Create user 
    - Read user 
    - Update user 
    - Delete user 

2) Product (completed)

    - Create product 
    - Read product 
    - Update product 
    - Delete product 
    - Add and remove product 

3) Cart (completed)

    - Add to cart 
    - Read cart 
    - Update cart 
    - Remove cart 
    
 4) Order (Not-completed)
 
    - Place order 
    - Read order 
    - Cancel order 
    - Re-order 


## User

### Create an account
- Scenario 1: Successfully create an account
    - Steps:
        1. Navigate to the registration page.
        2. Enter the required information such as name, phone no, email, address and password.
        3. Click the "Submit" button.
    - Expected Result:
        - The user is redirected to the login page.

### Login as user
- Scenario 1: Successfully login in to account
    - Steps:
        1. Navigate to the login page.
        2. Enter the required information such as mobile no, and password.
        3. Click the "login" button.
    - Expected Result:
        - The user is redirected to the user profile page.

### View profile page
- Scenario 1: Successfully view user profile
    - Steps:
        1. Login as a user.
        2. Navigate to the profile page.
        3. User can edit profile, delete profile and Log out from the profile page.
    - Expected Result:
        - The user can view the profile page.

### Edit profile
- Scenario 1: Successfully edit user profile
    - Steps:
        1. Login as a user.
        2. Navigate to profile page.
        3. Click "Edit profile" button.
        4. Navigated to the edit profile page.
        4. You can only edit your name and address and Click "Save" to update the details.
    - Expected Result:
        - The user details are updated to the profile.

### Delete profile
- Scenario 1: Successfully delete user profile
    - Steps:
        1. Login as a user.
        2. Navigate to the profile page.
        3. Click "Delete" and select "Yes" to delete the account.
    - Expected Result:
        - The user can delete their profile.

### View food items(Menu)
- Scenario 1: Successfully view food items
    - Steps:
        1. Log in as a user.
        2. Navigate to the Menu page.
        3. View the list of available food items.
    - Expected Result:
        - The user can view the list of available items.

### Add product/item to cart
- Scenario 1: Successfully add item to cart
    - Steps:
        1. Login as a user.
        2. Navigate to the Menu page.
        3. Choose the food and click the "Add to Cart" button.
    - Expected Result:
        - The food item is added to the user's cart.
        - The count is added to the cart icon.

### View items in cart
- Scenario 1: Successfully view items in cart
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. View the list of items in the cart.
    - Expected Result:
        - The user can view the list of items in the cart.

### Remove item from cart
- Scenario 1: Successfully remove item from cart
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. Click the "Remove" button to remove the item.
    - Expected Result:
        - The item is removed from the user's cart.

### Update cart item
- Scenario 1: Successfully update items in cart
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. Update the delivery time and quantity of the items in the cart.
    - Expected Result:
        - The delivery time and quantity is updated in the summary with its price.

### Place order items
- Scenario 1: Successfully place the order
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. Click "Place order" button.
        4. Confirm the order by cliking "Yes".
        5. Click "View order" button.
    - Expected Result:
        - Order is placed sucesfully.

### View order
- Scenario 1: Successfully place the order
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. Click "Place order" button.
        4. Confirm the order by cliking "Yes".
        5. Click "View order" button.
    - Expected Result:
        - Order is placed sucesfully.

