/**
 * @NApiVersion 2.1
 * @SctiptType Client Script
 */

define([], function(){
    function pageInit(context) {
        let record = context.currentRecord;
        let empCode = record.getValue("fieldId");
        if (!empCode) {
            alert("Please Enter Employee Code");
        }
    }

    function fieldChanged(context) {
        let employee = context.currentRecord;

        if (context.fieldId == 'phone') {
            let fax = employee.getValue("fax");
            if (!fax) {
                let phone = employee.getValue("phone");
                if (phone) {
                    employee.setValue("fax", phone);
                }
            }
        }
    }

    function validateField(context) {
        let employee = context.currentRecord;
        let empCode = employee.getValue("employee_code");
        if (empCode && empCode == "TestEmployee") {
            alert("wardaat wrong");
            return false
        }
        return true
    }

    return {
        pageInit: pageInit,
        fieldChanged: fieldChanged,
        validateField: validateField
    }
});