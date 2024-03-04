/**
 * @NApiVersion 2.1
 * @ScriptType UserEventScript
 */


define(['N/record'], function (record) {

    function afterSubmit(context) {
        var employee = context.newRecord;
        var empCode = employee.getValue("custentity_sdr_employee_code");
        var supervisorId = employee.getValue("supervisor");
        log.debug(empCode);
        log.debug(supervisorId);
    
        if (context.type == context.UserEventType.CREATE) {
            var phonCallRecord = record.create({
                type : record.Type.PHONE_CALL,
                defaultValues : {
                    customform : -150 // Id of the standard form
                }
            });
            phonCallRecord.setValue("title", "Call HR for Benefits");
            phonCallRecord.setValue("assigned", employee.id);
            phonCallRecord.save();
        }
    }

    return {
        afterSubmit : afterSubmit
    }
});