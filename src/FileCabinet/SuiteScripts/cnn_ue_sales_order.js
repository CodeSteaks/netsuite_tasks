/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */


define(['N/ui/serverWidget'], function(serverWidget) {
    function beforeLoad (context) {
        if(context.type === context.UserEventType.VIEW) {
            let saleOrder = context.newRecord;
            let memo = saleOrder.getValue("memo");
            if (memo.split("-")[0] === "SO") {
                let form = context.form;
                form.clientScriptModulePath = "./SuiteScripts/cnn_cs_sales_order.js"
                form.addButton({
                    id: "cnn_cust_so_btn",
                    lable: "My Custom SO Button",
                    functionName: "onButtonClick"
                });
            }
        }
    }

    return {
        beforeLoad: beforeLoad
    }
});