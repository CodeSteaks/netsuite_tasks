/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 */

define(["N/ui/dialog"], function(dialog){
    function saveRecord(context) {
        let bonusRecord = context.currentRecord;
        if (context.fieldId == "123") {
            let percent = bonusRecord.getValue("123");
            if (percent && percent > 100) {
                dialog.alert({
                    title: "Error...!",
                    message: "Percentage value cannot be greater then 100."
                });
                return false;
            }
        }
        return true
    }

    return {
        saveRecord: saveRecord
    }
});