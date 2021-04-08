import { expect } from "chai";
import { Before, Given, TableDefinition, Then, When } from "cucumber";

import Menu from "../src/restaurant/menu";
import Bill from "../src/restaurant/bill";

let menus: Menu[];
let bill: Bill;

Before(() => {
  menus = [];
  bill = new Bill();
});

Given("los siguientes menús:", function (dataTable: TableDefinition) {
  dataTable
    .rows()
    .forEach(
      values =>
      (menus[values[0]] = new Menu(
        Number(values[0]),
        100 * Number(values[1])
      ))
    );
});

/* Given("que he comprado {int} menús del número {int}", function (units: number,
  option: number) {
  // Given('que he comprado {int} menús del número {float}', function (int, float) {
  // Given('que he comprado {float} menús del número {int}', function (float, int) {
  // Given('que he comprado {float} menús del número {float}', function (float, float2) {
  // Write code here that turns the phrase above into concrete actions
  // return "pending";
  const menu = menus[option];
  for (let i = 0; i < units; i++) {
    bill.add(menu);
  }
}); */

Given(/^que he comprado (\d+) menús? del número (\d+)$/, function (
  units: number,
  option: number
) {
  const menu = menus[option];
  for (let i = 0; i < units; i++) {
    bill.add(menu);
  }
});

When("pido la cuenta recibo una factura de {int} euros", function (total: number) {
  // When('pido la cuenta recibo una factura de {float} euros', function (float) {
  // Write code here that turns the phrase above into concrete actions
  // return "pending";
  expect(bill.total()).to.equal(total * 100);
});

When("pago en efectivo con {int} euros", function (ammount: number) {
  bill.payWithMoney(ammount * 100);
  // When('pago en efectivo con {float} euros', function (float) {
  // Write code here that turns the phrase above into concrete actions
  //return "pending";
});

Then("la factura está pagada", function () {
  expect(bill.restToPay()).to.equal(0)
  // Write code here that turns the phrase above into concrete actions
  //return "pending";
});

Then("he obtenido {int} puntos", function (points: number) {
  expect(bill.points()).to.equal(points);
  // Then('he obtenido {float} puntos', function (float) {
  // Write code here that turns the phrase above into concrete actions
  //return "pending";
});

When("pago con {int} puntos y {int} euros", function (
  points: number,
  money: number
) {
  bill.payWithMoney(money * 100);
  bill.payWithPoints(points);
  // When('pago con {int} puntos y {float} euros', function (int, float) {
  // When('pago con {float} puntos y {int} euros', function (float, int) {
  // When('pago con {float} puntos y {float} euros', function (float, float2) {
  // Write code here that turns the phrase above into concrete actions
  //return "pending";
});

Then("quedan {int} euros por pagar", function(amount: number) {
  expect(amount * 100).to.equal(bill.restToPay());
  // Then('quedan {float} euros por pagar', function (float) {
  // Write code here that turns the phrase above into concrete actions
  // return "pending";
});


