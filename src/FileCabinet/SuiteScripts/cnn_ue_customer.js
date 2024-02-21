/**
 * NApiVersion 2.0
 * NScriptType UserEventScript
 */

define([], function () {
    return {
        afterSubmit: function(context) {
            log.debug("This is my first SuiteScript");
        }
    }
});