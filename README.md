# Cart Testing - API Automation

Jest Automation API Testing
Automated API testing framework built using Jest. This framework is designed to test RESTful APIs with features like request validation, response verification, and reporting.

Table of Contents
1. Getting Started
2. Project Structure
3. Installation
4. Running Tests
5. Methode, Endpoint and Response Code
5. Configuration
6. Adding New Tests
7. Generating Reports
8. Saving File to Github Repository

---------------------
Getting Started

This cart testing is testing for internal recruitment to become QA in Bluebird. this testing build in jest and save in github as repository file. the testing source is open API from "https://api.practicesoftwaretesting.com/".

---------------------
Project Structure

.
├── __tests__/                 # Test files
│   ├── create-charts/         # Folder for testing Create Chart APIs
│   │   └── create-chart.js
│   ├── get-charts/            # Folder for testing Get Chart APIs
│   │   └── get-chart.js
├── collections/               # API collections
│   ├── create_charts/         # Logic for Create Chart API
│   │   └── create_charts.success.js
│   ├── get_charts/            # Logic for Get Chart API
│       └── get_charts.success.js
├── config/                    # Configuration files
│   ├── global-setup.js        # Global setup for tests
│   ├── jest.config.js         # Jest configuration file
├── test-data/                 # Test data in JSON format
│   ├── create_charts/         # Test data for Create Chart API
│   └── get_charts/            # Test data for Get Chart API
├── utilities/                 # Helper utilities for the framework
│   └── verifier.js
├── reports/                   # Test reports (generated "jest_html_reporters")
├── package.json               # Project dependencies and scripts
└── README.md                  # Documentation

---------------------
Installation for using jest






---------------------
Running Test

1. npm test                                     # run test all test suites
2. npm test -- __test__/folder_dituju           # run test base on folder
3. npm test -- __test__/folder_dituju/file.js   # run test base on test suites       

---------------------
Endpoint and Code validation

validation of this Automation cart base on Endpoint because in every case even payload body request already erase, the response still got success when the Endpoint is already as same as contract or get the right Endpoint when not same as contract. specialy for update chart success, it's still can't find success code 200 even already using endpoint in contract or even already try other format endpoint.

these are some endpoint and code validation that can find in this open API

Url : https://api.practicesoftwaretesting.com/

1. Create Chart : 
    a.201 (`/carts`)                # Endpoint in Contract API
    b.404 (`/carts/abc`)
2. AddItem Chart: 
    a.201 (`/carts?id=${cartId}`)
    b.404 (`/carts/${cartId}`)      # Endpoint in Contract API
3. Get Chart    : 
    a.200 (`/carts/${cartId}`)      # Endpoint in Contract API
    b.301 (`/carts/${cartId}/`)
    c.404 (`/cart/${cartId}`)
4. Update Chart : 
    a.200 (``/carts/${cartId}/product/quantity`)     # still Faile Endpoint in Contract API
    b.301 (`/carts/${cartId}/product/quantity/`)
    c.404 (`/carts/${cartId}/${productId}/quantity`)
    d.405 (`/carts/${cartId}`)
5. Delete Chart : 
    a.204 (`/carts/${cartId}`)      # Endpoint in Contract API
    b.301 (`/cart/${cartId}/`)
    c.404 (`/carts/${cartId}/abc`)
6. DeleteItem Chart : 
    a.204 (`/carts/${cartId}/product/${productId}`) # Endpoint in Contract API
    b.301 (`/cart/${cartId}/product/${productId}/`)
    c.404 (`/cart/${cartId}/product/${productId}`)

---------------------
Configuration



---------------------
Adding New Test



---------------------
Generating Report



---------------------
Saving File to Github repository




