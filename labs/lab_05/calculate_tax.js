"use strict";
const $ = selector => document.querySelector(selector);

const processEntry = () => {
	const income = parseInt($("#income").value);

	if (income < 0){
		alert("Income should be greater than 0");
		focusAndSelect("#income");
	}
	else{
		calculateTax();
	}
}

const calculateTax = () => {
	const income = parseInt($("#income").value);

	if (income > 0 && income <= 9875){
		$("#tax").value = (income * 0.1).toFixed(2);
	}
	else if (income > 9875 && income <= 40125){
		$("#tax").value = (987.5 + ((income - 9875) * 0.12)).toFixed(2);
	}
	else if (income > 40125 && income <= 85525){
		$("#tax").value = (4617.5 + ((income - 40125) * 0.22)).toFixed(2);
	}
	else if (income > 85525 && income <= 163300){
		$("#tax").value = (14605.5 + ((income - 85525) * 0.24)).toFixed(2);
	}
	else if (income > 163300 && income <= 207350){
		$("#tax").value = (33271.5 + ((income - 163300) * 0.32)).toFixed(2);
	}
	else if (income > 207305 && income <= 518400){
		$("#tax").value = (47367.5 + ((income - 207350) * 0.35)).toFixed(2);
	}
	else{
		$("#tax").value = (156235 + ((income - 518400) * 0.37)).toFixed(2);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);
});