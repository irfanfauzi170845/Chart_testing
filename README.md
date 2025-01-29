# Cart Testing - API Automation

Jest Automation API Testing
Automated API testing framework built using Jest. This framework is designed to test RESTful APIs with features like request validation, response verification, and reporting.

Table of Contents
1. Getting Started
2. Project Structure
3. Installation
4. Running Tests in vs code
5. Simple running test in Jenkins
6. Methode, Endpoint and Response Code
7. Adding New Tests
8. Generating Reports
9. Saving File to Github Repository
10. Application testing in this folder CHART_TESTING
11. CI/CD using Jenkins

---------------------
Getting Started

This cart testing is testing for internal recruitment to become QA in Bluebird. 
this testing build in jest and save in github as repository file. 
the testing source is open API from "https://api.practicesoftwaretesting.com/".

---------------------
Project Structure

.
1.  ├── __tests__/                 # Test files
2.  │   ├── create-charts/         # Folder for testing Create Chart APIs
3.  │   │   └── create-chart.js
4.  │   ├── get-charts/            # Folder for testing Get Chart APIs
5.  │   │   └── get-chart.js
6.  ├── collections/               # API collections
7.  │   ├── create_charts/         # Logic for Create Chart API
8.  │   │   └── create_charts.success.js
9.  │   ├── get_charts/            # Logic for Get Chart API
10. │       └── get_charts.success.js
11. ├── config/                    # Configuration files
12. │   ├── global-setup.js        # Global setup for tests
13. │   ├── jest.config.js         # Jest configuration file
14. ├── test-data/                 # Test data in JSON format
15. │   ├── create_charts/         # Test data for Create Chart API
16. │   └── get_charts/            # Test data for Get Chart API
17. ├── utilities/                 # Helper utilities for the framework
18. │   └── verifier.js
19. ├── reports/                   # Test reports (generated "jest_html_reporters")
20. ├── package.json               # Project dependencies and scripts
21. └── README.md                  # Documentation

---------------------
Installation for using jest

1. download node js and install vs code in local
2. write "npm init -y" to get file package.json in vs code terminal
3. write "npm install --save-dev jest-html-reporters" to ge file package.lock.json and node module, and report jest-html-reporters.html
4. write "npm install --save-dev @jest/globals" and other library to get libraries.
5. make file jest.config.js for getting jest_html_reporters.html when run test like below
    
    reporters: [
        "default",
        "jest-html-reporters"
    ],
    
6. make folder caller (rest-api.js) to create methode that we will use in rest API
7. make folder utilities (verifier.js) to create function for verify response
8. make folder file global-variable.json and jest.config.js to create variable global that can use for all file
9. make folder collection to create file for handling methode with header request that will use
10. make folder test-data to create file for determine request and response that we want get
11. make folder __test__ to create file for testsuite, test case, and logic for running test

---------------------
Running Test in vs code

1. npm test                                     # run test all test suites
2. npm test -- __test__/folder_dituju           # run test base on folder
3. npm test -- __test__/folder_dituju/file.js   # run test base on test suites       

---------------------
Simple running test in Jenkins

result in Jenkins 

1. Started by user irfan fauzi
2. [Pipeline] Start of Pipeline
3. [Pipeline] End of Pipeline
4. Finished: SUCCESS

Note: for complete CI/CD can run from jenkinsfile base on information below

---------------------
Methode, Endpoint and Response Code

Positive case that already tested base on contract API and Negative case to get validation of this Automation cart is base on Endpoint, Status_code, Json_Schema Response Body, that already manipulated. 

After trying some manipulated data body request and endpoint in postman, we get information that there are some status code that we get such as below:

1. 200 (success)
2. 204 (success)
3. 301 (success with body {} and req.body.null)
4. 404 (Resource not found)
5. 405 (Method is not allowed for the requested route)

these are some endpoint and validation that can find in this open API

Url : https://api.practicesoftwaretesting.com/

1. Create Chart : (Validation status_code, body)
    * 201 (`/carts`)                # Endpoint in Contract API, 
    * 404 (`/carts/abc`)

2. AddItem Chart: (Validation status_code, body, json_schema, req.body.null)
    * 201 (`/carts?id=${cartId}`)
    * 404 (`/carts/${cartId}`)      # Endpoint in Contract API, 

3. Get Chart    : (Validation status_code, body, json_schema)
    * 200 (`/carts/${cartId}`)      # Endpoint in Contract API, 
    * 301 (`/carts/${cartId}/`)
    * 404 (`/cart/${cartId}`)

4. Update Chart : (Validation status_code, body, req.body.null)
    * 200 (``/carts/${cartId}/product/quantity`)  # still Failed Endpoint in Contract API, 
    * 301 (`/carts/${cartId}/product/quantity/`)
    * 404 (`/carts/${cartId}/${productId}/quantity`)
    * 405 (`/carts/${cartId}`)

5. Delete Chart : (Validation status_code, body)
    * 204 (`/carts/${cartId}`)      # Endpoint in Contract API, 
    * 301 (`/cart/${cartId}/`)
    * 404 (`/carts/${cartId}/abc`)
    
6. DeleteItem Chart : (Validation status_code, body)
    * 204 (`/carts/${cartId}/product/${productId}`) # Endpoint in Contract API,
    * 301 (`/cart/${cartId}/product/${productId}/`)
    * 404 (`/cart/${cartId}/product/${productId}`)

---------------------
Adding New Test

for adding new test, we can do for some steps
1. determine the API that we want test is Rest or gRPC
2. find the request and response that we want to get. we can check it first from API contract or try in postman first
3. write payload request and response code or body that we want get
4. write handler methode in collection base on methode, url, endpoint, and header of API
5. write test file in folder __test__ to determine response that we want verify with the source of file.

---------------------
Generating Report

testing in jest, we can straight to get report from file jest_html_reporters.html.
from that file we can see dashboard of our result testing.


---------------------
Saving File to Github repository

1. Create account in Github
2. Click Home
3. Click New Repository
4. Copy link Repo
5. Open Fork for push, pull, commit, and clone
6. init new repo dan copy file ke folder repo di local
7. Click local change and push all stage
8. Fill commit subject and description, after that push commit button
9. after success commit to local branch then click push to send data into github


--------------------
Application testing in this folder CHART_TESTING

1. Jest Automation testing 
2. package-test of Cart.postman_collection

--------------------
CI/CD using Jenkins

1. Visit the official Jenkins site: https://www.jenkins.io/download/.
2. Select the Windows distribution and download the Jenkins MSI Installer file.
3. Run Jenkins with the command: java -jar jenkins.war --httpPort=8080.
4. Enter the password stored in: C:\Program Files\Jenkins\secrets\initialAdminPassword.
5. Download agent.jar from http://localhost:8080/jnlpJars/agent.jar and save it in the Jenkins folder.
6. Open Jenkins and create an agent to execute each step in the pipeline:
    * Click Manage Jenkins → Node → New Node.
    * Enter the agent name → Select Permanent Agent → Click Create.
    * Fill in the required fields to create the agent → Save.
7. Click Node, then select the agent we just created. After that, you will see a command (curl) to run the agent. Copy the command and paste it into the command prompt in the Jenkins directory.
8. Once the Jenkins agent is online, proceed as follows:
    * Click Dashboard → Click New Item.
    * Fill in the New Item name as required, add the repository link, paste the pipeline steps, and run.
9. Install git to get file git.exe for connecting from jenkins to github
    * https://git-scm.com/downloads
10. making file jenkinsfile in job github using command "echo. > Jenkinsfile" in vs code and copy pipeline structure that we want implement
    * note : in step using "bat" for windows, and "sh" for linux





