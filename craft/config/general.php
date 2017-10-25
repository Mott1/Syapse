<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(

    '*' => array(

        // Base site URL
        'siteUrl' => null,

        // Environment-specific variables (see https://craftcms.com/docs/multi-environment-configs#environment-specific-variables)
        'environmentVariables' => array(),

        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Enable CSRF Protection (recommended, will be enabled by default in Craft 3)
        'enableCsrfProtection' => true,

        // Whether "index.php" should be visible in URLs (true, false, "auto")
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => false,

    ),

    'test.syapse.com' => array(

        'environmentVariables' => array(
            'baseUrl' => 'https://test.syapse.com/',
            'basePath' => '/home/syapseadmin/webapps/test_syapse/public/',
            'inlinPublicRoot' => '/home/syapseadmin/webapps/test_syapse/public/',
        ),

    ),

    'stage.syapse.com' => array(

        'environmentVariables' => array(
            'baseUrl' => 'https://stage.syapse.com/',
            'basePath' => '/home/syapseadmin/webapps/stage_syapse/public/',
            'inlinPublicRoot' => '/home/syapseadmin/webapps/stage_syapse/public/',
        ),

    ),

    'localhost' => array(

        'devMode' => true,

        'environmentVariables' => array(
            'baseUrl' => 'http://localhost:8888/',
            'basePath' => '/Applications/MAMP/htdocs/syapse/public/',
            'inlinPublicRoot' => '/Applications/MAMP/htdocs/syapse/public/',
        ),

    )

);