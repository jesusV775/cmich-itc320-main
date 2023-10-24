"use strict";
const $ = selector => document.querySelector(selector);

const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
	const taxRate = parseFloat($("#tax_rate").value);

	if (subtotal < 0 || subtotal > 10000) {
        alert("Subtotal must be > 0 and < 10000");
        focusAndSelect("#subtotal");
    } else if (taxRate < 0 || taxRate > 12) {
        alert("Tax rate must be > 0 and < 12");
        focusAndSelect("#tax_rate");
    } else {
		
		$("#sales_tax").value = (subtotal * (taxRate / 100)).toFixed(2);
		$("#total").value = (subtotal + (subtotal * (taxRate / 100))).toFixed(2);
    }

};

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntries);

	$("#clear").addEventListener("click", () => {
        $("#subtotal").value = "";
        $("#tax_rate").value = "";
        $("#sales_tax").value = "";
		$("#total").value = "";

        $("#subtotal").focus();
    });
});

