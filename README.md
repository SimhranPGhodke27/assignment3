# Greet Users App

This README provides instructions for setting up and running the Greet Users application with Nginx and Go. Follow these steps to configure and launch the application on your local machine.

## 1. Install Nginx

- **Install Nginx**: Download and install Nginx in your C drive. Follow the installation instructions specific to your operating system and ensure that Nginx is correctly set up.

## 2. Set Up the Project

1. **Create Project Directory**
   - Create a folder named `greet-users-app` in your local directory.

2. **Download Repository Files**
   - Download all the files from this repository into the `greet-users-app` folder created in the previous step.

3. **Copy Files to Nginx**
   - Copy the contents of the `dist` folder from `greet-users-app` and paste them into the `html` folder located in your Nginx installation directory (e.g., `C:\nginx\html`).

4. **Configure Nginx**
   - Edit the `nginx.conf` file located in the `conf` folder of your Nginx directory (e.g., `C:\nginx\conf\nginx.conf`).
   - Replace the contents with the configuration provided in `greet-users-app\nginx-1.27.1\conf\nginx.conf` and save the file.

## 3. Run the API Server

1. **Open Command Prompt**
   - Open Command Prompt on your computer.

2. **Navigate to the Project Directory**
   - Change the directory to your project folder:

     ```bash
     cd your\projectdirectory\greet-users-app\myapi2
     ```

3. **Start the API Server**
   - Run the following command to start the API server:

     ```bash
     go run main.go
     ```

   - You should see the message: `Server is running on http://localhost:9090`.

## 4. Run Nginx

1. **Open Another Command Prompt**
   - Open a new Command Prompt window.

2. **Navigate to the Nginx Directory**
   - Change the directory to your Nginx installation directory:

     ```bash
     cd your\nginxdirectory
     ```

3. **Start Nginx**
   - Run the following command to start Nginx:

     ```bash
     nginx.exe
     ```

   - This will launch the application on `localhost:4200`.

## 5. View the Application

1. **Open Your Browser**
   - Go to your web browser and type `localhost:4200` in the address bar.

   - You should see the running application.

2. **Verify the User List**
   - The user list should be displayed in the middle column, provided by the API running on `localhost:9090`.

## 6. Exit the Application and Servers

1. **Close the Browser**
   - To exit the application, simply close the browser window.

2. **Stop the API Server**
   - To stop the API server, press `Ctrl+C` in the Command Prompt window where the server is running.

3. **Stop Nginx**
   - Open another Command Prompt window.
   - Change the directory to your Nginx installation directory:

     ```bash
     cd your\nginxdirectory
     ```

   - Run the following command to stop Nginx:

     ```bash
     nginx -s stop
     ```



# GreetUsersApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
