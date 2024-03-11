/**
 * @NApiVersion 2.1
 * @ScriptType ClientScript
 */


define(['N/ui/dialog', 'N/email'], function (dialog, email) {
    // function that will be triggered on page refresh.
    function pageInit (context) {
        var order = context.currentRecord;
        var status = order.getText("orderstatus");

        if (status == "Billed" && context.mode == "edit") {
            dialog.alert({
                title   : "Edit Warning",
                message : "This order has already been billed. Auditors will be notified of this action."
            });

            email.send({
                author     : -5,
                recipients : -5,
                subject    : "User has edited a billed order",
                message    : "Order " + order.getValue("tanid") + " has been recently opened."
            });
        }
    }

    return {
        pageInit : pageInit
    }
});