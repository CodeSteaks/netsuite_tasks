/**
 * NApiVersion 2.1
 * NScriptType Client Script
 */

define(['N/ui/dialog'], function(dialog) {
    function helloWorld(){
        var options = {
            title: "Hello!",
            message: "Hello, World!"
        };
        try {
            dialog.alert(options);
            log.debug({
                title: "Success",
                details: "Alert displayed successfully"
            });
        } catch (e) {
            log.error({
                title: e.name,
                details: e.message
            });
        }
    }

    return {
        pageInit: helloWorld
    }
});