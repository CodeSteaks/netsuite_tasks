/**
 * @NApiVersion 2.1
 * @ScriptType ClientScript
 */

define(['N/record'], function (record) {
    return {
        pageInit : function(context) {
            var salesOder = context.currentRecord;
            var item = record.getSublistValue({
                group : 'item',
                name  : 'amount',
                line  : '2'
            });
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