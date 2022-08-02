//passo 1 - importar a api

import { LightningElement, api } from "lwc";

export default class App extends LightningElement {
  //passo 2 - criar os atributos publicos @api

 @api nome = 'Mamaco Corp';
 @api cnpj = '1231231234';
}