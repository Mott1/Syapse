# Syapse Craft CMS Site

#### Technology Stack:
---------------

 - MAMP
 - Apache
 - MySQL
 - PHP
 - Node.js
 - NPM
 - Craft CMS
 - Twig
 - Grunt
 - Sass
 
---------------
#### Local Webserver Configuration (MAMP):
---------------

 - Apache Port: 8888
 - MySQL Port: 3306
 - PHP Version: 7.0+
 - Document Root: *(full path to project)*/public/
 
---------------
#### Creating and Importing Database:
---------------

1. Add a new database (utf8, utf8_general_ci) locally named "syapse_craftcms".
    
2. Export the production database using the "Backup Database" utility at:
https://www.syapse.com/admin/settings
**Note:** Have an admin user account created if you do not already have credentials.

3. Import the database into the local "syapse_craftcms" database.
 
---------------
#### Download the Production Media Assets:
---------------

Using SFTP or SCP download the following directories:

- /public/uploads
- /craft/storage/userphotos

Put each in the same paths as your local directories.
 
---------------
#### Grunt:
---------------

1. Install Node Modules

    ```
    $ npm install
    ```
    
2. The websites should now be accessible:

    ```
    http://localhost:8888/
    http://localhost:8888/admin
    ```
 
---------------
#### Grunt Tasks
---------------

1. Builds all files in the site (which is required prior to deploying to a server):

    ```
    $ grunt build
    ```

2. Watches for changes in files and compiles those files.
    
    ```
    $ grunt
    $ grunt watch
    ```
