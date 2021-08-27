# Componente VTEX para registro de Leads

## Descrição

Formulário de cadastro contendo os campos *nome, email, telefone*, e um registro automátcio de *prospect* para possívelmente ser transformado em *clente* caso o usuário finalize alguma compra na loja.


## Como usar

* Clonar esse repositório
* Linkar em sua conta VTEX
* No arquivo ***manifest.json*** da sua loja inserir a dependência ***hiringcoders202106.form-leads": "0.x***
* Usar o bloco ***form-leads*** em qualquer lugar da sua loja

## Como estilizar

É possível estilizar com ***CSSHANDLES***. Para isso é necessário criar um arquivo ***hiringcoders202106.form-leads.css*** na pasta ***ccs*** que fica dentro da pasta ***styles*** da sua loja.

### CSSHANDLES

* leadFormContainer
* leadForm
* leadInputContainer
* leadInputLabel
* leadInput
* leadButtonContainer
* leadButton
* leadSuccessMsg