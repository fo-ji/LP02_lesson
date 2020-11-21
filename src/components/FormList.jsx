import React from 'react'
import TextInput from './TextInput'

const FormList = () => {
  return (
    <>
      <TextInput label='御社名（必須）' />
      <TextInput label='ご担当者様名(姓) (必須)' />
      <TextInput label='ご担当者様名(名)（必須）' />
      <TextInput label='役職（必須）' />
      <TextInput label='電話番号（必須）' />
      <TextInput label='会社メールアドレス（必須）' />
      <TextInput label='住所（必須）' />
    </>
  )
}

export default FormList