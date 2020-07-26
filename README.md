# Magento2 Module: Edspc ClientIP

    ``edspc/module-clientip``

 - [Main Functionalities](#markdown-header-main-functionalities)
 - [Installation](#markdown-header-installation)


## Main Functionalities
Show client IP address in customer bar.

## Installation
\* = in production please use the `--keep-generated` option

### Type 1: Zip file

 - Download latest [master branch](https://github.com/edspc/module-clientip/archive/master.zip)
 - Create code directory `mkdir app/code/Edspc/ClientIP -p`
 - Unzip the zip in `app/code/Edspc/ClientIP`
 - Enable the module by running `bin/magento module:enable Edspc_ClientIP`
 - Apply database updates by running `bin/magento setup:upgrade`\*
 - Flush the cache by running `bin/magento cache:flush`

### Type 2: Composer

 - Install the module composer by running `composer require edspc/module-clientip`
 - enable the module by running `bin/magento module:enable Edspc_ClientIP`
 - apply database updates by running `bin/magento setup:upgrade`\*
 - Flush the cache by running `bin/magento cache:flush`
