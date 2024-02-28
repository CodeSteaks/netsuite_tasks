define([
    'N/record'
], function (record) {
    return {
        beforeSubmit: function (context) {
            // To load a already created record
            const customer = record.load({
                type : record.Type.CUSTOMER,
                id : 123
            });
            // To create a new record
            const employee = record.create({
                type : record.Type.EMPLOYEE,
                isDynamic : true
            });
            // To change the type of record from one to another
            const invoice = record.transform({
                fromId : 123,
                fromType : record.Type.SALES_ORDER,
                toType : record.Type.INVOICE
            });
        }
    }
});