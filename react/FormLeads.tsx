import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

import api from './services/api'

interface FormLeadProps {
  textButton: string
}

const CSS_HANDLES = [
  'leadForm',
  'leadInput',
  'leadPhone',
  'leadButton',
  'leadInputLabel',
  'leadSuccessMsg',
  'leadFormContainer',
  'leadInputContainer',
  'leadButtonContainer',
]

const FormLeads: StorefrontFunctionComponent<FormLeadProps> = ({ textButton }: FormLeadProps) => {
  const handles = useCssHandles(CSS_HANDLES)

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()

  const [registered, setRegistered] = useState(false)

  const textBtn = textButton || <FormattedMessage id="form-lead.title.btn" />

  function registerLeads(e: any) {
    e.preventDefault()

    const dados = {
      "name": name,
      "email": email,
      "phone": phone,
      "type": "prospect"
    }

    api.put("/items", dados).then((res) => {
      console.log(res)
      setRegistered(true)
    })
  }

  function guardaNome(e: any) {
    const value = e.target.value
    setName(value)
  }
  function guardaEmail(e: any) {
    const value = e.target.value
    setEmail(value)
  }
  function guardaPhone(e: any) {
    const value = e.target.value
    setPhone(value)
  }

  return (
    <>
      {registered ?
        (<div className={`${handles.leadSuccessMsg}`}>Usuário cadastrado com sucesso!</div>)
        :
        <div className={`${handles.leadFormContainer}`}>
          <form className={`${handles.leadForm}`} onSubmit={registerLeads}>

            <div className={`${handles.leadInputContainer}`}>
              <label className={`${handles.leadInputLabel}`} htmlFor="lead-name">Nome</label>
              <input type="text" name="name" id="lead-name" onChange={guardaNome} className={`${handles.leadInput}`} placeholder="Nome" />
            </div>

            <div className={`${handles.leadInputContainer}`}>
              <label className={`${handles.leadInputLabel}`} htmlFor="lead-email">Email</label>
              <input type="text" name="email" id="lead-email" onChange={guardaEmail} className={`${handles.leadInput}`} placeholder="Email" />
            </div>

            <div className={`${handles.leadInputContainer}`}>
              <label className={`${handles.leadInputLabel}`} htmlFor="lead-phone">Telefone</label>
              <input type="text" name="phone" id="lead-phone" onChange={guardaPhone} className={`${handles.leadInput}`} placeholder="Telefone" />
            </div>

            <div className={`${handles.leadButtonContainer}`}>
              <button type="submit" className={`${handles.leadButton}`}>{textBtn}</button>
            </div>
          </form>
        </div>
      }
    </>
  )
}

FormLeads.schema = {
  title: 'form-lead.title.btn',
  description: 'form-lead.description.btn',
  type: 'object',
  properties: {
    textButton: {
      title: 'Texto do botão',
      description: 'Texto para o botão cadastrar lead',
      type: 'string',
      default: 'Cadastrar',
    },
  },
}

export default FormLeads