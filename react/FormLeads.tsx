import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

import api from './services/api'

interface FormLeadProps {
  textButton: string
}

const CSS_HANDLES = [
  'leadForm',
  'leadFormTitle',
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

    api.put("/leads", dados).then(() => {
      setRegistered(true)
    })
  }

  function getName(e: any) {
    const value = e.target.value
    setName(value)
  }
  function getEmail(e: any) {
    const value = e.target.value
    setEmail(value)
  }
  function getPhone(e: any) {
    const value = e.target.value
    setPhone(value)
  }

  return (
    <>
      {registered ?
        (<div className={`${handles.leadSuccessMsg}`}>Usuário cadastrado com sucesso!</div>)
        :
        <div className={`${handles.leadFormContainer}`}>
          {!registered ? <div className={`${handles.leadFormTitle}`}>Cadastre-se para receber mais informações</div> : ''}
          <form className={`${handles.leadForm}`} onSubmit={registerLeads}>

            <div className={`${handles.leadInputContainer}`}>
              <label className={`${handles.leadInputLabel}`} htmlFor="lead-name">Nome</label>
              <input required type="text" name="name" id="lead-name" onChange={getName} className={`${handles.leadInput}`} placeholder="Nome" />
            </div>

            <div className={`${handles.leadInputContainer}`}>
              <label className={`${handles.leadInputLabel}`} htmlFor="lead-email">Email</label>
              <input required type="text" name="email" id="lead-email" onChange={getEmail} className={`${handles.leadInput}`} placeholder="Email" />
            </div>

            <div className={`${handles.leadInputContainer}`}>
              <label className={`${handles.leadInputLabel}`} htmlFor="lead-phone">Telefone</label>
              <input required type="text" name="phone" id="lead-phone" onChange={getPhone} className={`${handles.leadInput}`} placeholder="Telefone" />
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