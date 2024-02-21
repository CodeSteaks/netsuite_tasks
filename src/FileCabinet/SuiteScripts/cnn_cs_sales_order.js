/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 */

define([], function(){
    function onButtonClick() {
        alert("Button Clicked");
    }

    function pageInit(context) {
        log.debug("working")
    }

    return {
        buttonClicked: onButtonClick,
        pageInit: pageInit
    }
});