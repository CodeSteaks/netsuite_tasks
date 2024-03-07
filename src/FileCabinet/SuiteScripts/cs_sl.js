/**
 * @NApiVersion 2.1
 * @ScriptType ClientScript
 */

define(['N/record'], function (record) {
    return {
        lineInit : function(context) {
            var salesOder = context.currentRecord;
            var item = record.getSublistValue({
                group : 'item',
                name  : 'amount',
                line  : '2'
            });
        },
        validateLine : function(context) {
            
        }
    }
});



/*
    Sublist Methods
    Record.getLineCount()
    Record.getSublistValue()
    Record.setSublistValue()
    Record.getSublistText()
    Record.setSublistText()
    Record.getCurrentSublistValue()
    Recrod.setCurrentSublistValue()
    Record.getCurrentSublistText()
    Recrod.setCurrentSublistText()
*/


/*
    Sublist  Client Side Entry Points
    User Action: Initialize a sublist line
    Client Entry Point: lineInit

    User Action: Validate a sublist line
    Client Entry Point: validateLine
*/