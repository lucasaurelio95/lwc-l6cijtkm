import { LightningElement, api } from "lwc";

export default class App extends LightningElement {
 @api produto = 'Leite';
 @api valor = '10 R$';
}
