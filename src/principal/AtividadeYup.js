import React  from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  nome: Yup.string().required('Required'),
  idade: Yup.number().required('Required').min(17, 'Too short!'),
  cpf: Yup.string().required('Required').min(11, 'Too short!'), //000.000.000-00
  matricula: Yup.string().required('Required').min(9, 'A matrícula deve ser de tamanho 9!').max(9, 'A matrícula deve ser de tamanho 9!'), //201080303
  curso: Yup.string().required('Required'),
  endereco: Yup.string().required('Required'),
  numero: Yup.number(),
  complemento: Yup.string(),
  bairro: Yup.string().required('Required'),
  cidade: Yup.string().required('Required'),
  estado: Yup.string().required('Required'), // Fazer uma lista das UF's - XX
  cep: Yup.string().required('Required') //00000-000
});

const FormYupValidation = () => {
  const handleSubmitting = (values, { setSubmitting, setStatus }) => {
    setStatus({ isValidating: true });
    setTimeout(() => {
      console.info(JSON.stringify(values, null, 2));
      setSubmitting(false);
      setStatus({ isValidating: false });
    }, 400);
    alert('lalala')
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={{ nome: '', idade: '', cpf: '', matricula: '', curso: '', endereco: '', numero: '', complemento: '', bairro: '', cidade: '', estado: '', cep: ''}}
      onSubmit={handleSubmitting}
    >
      {({
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Nome completo*:
            <Field type="text" name="nome"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="nome" className="error" component="span"/>
          <br/><br/>
          <label>
            Idade*:
            <Field type="number" name="idade"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="idade" className="error" component="span" />
          <br/><br/>
          <label>
            CPF*:
            <Field type="text" name="cpf"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="cpf" className="error" component="span"/>
          <br/><br/>
          <label>
            Matrícula*:
            <Field type="number" name="matricula"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="matricula" className="error" component="span"/>
          <br/><br/>
          <label>
            Curso*:
            <Field type="text" name="curso"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="curso" className="error" component="span"/>
          <br/><br/>
          <label>
            Endereço*:
            <Field type="text" name="endereco"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="endereco" className="error" component="span"/>
          <br/><br/>
          <label>
            Número:
            <Field type="text" name="numero"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="numero" className="error" component="span"/>
          <br/><br/>
          <label>
            Complemento:
            <Field type="text" name="complemento"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="complemento" className="error" component="span"/>
          <br/><br/>
          <label>
            Bairro*:
            <Field type="text" name="bairro"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="bairro" className="error" component="span"/>
          <br/><br/>
          <label>
            Cidade*:
            <Field type="text" name="cidade"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="cidade" className="error" component="span"/>
          <br/><br/>
          <label>
            Estado*:
            <Field type="text" name="estado"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="estado" className="error" component="span"/>
          <br/><br/>
          <label>
            CEP*:
            <Field type="text" name="cep"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="cep" className="error" component="span"/>
          <br/><br/>
          <input type="submit" value="Enviar" disabled={isSubmitting}/>
        </form>
      )}
    </Formik>
  )
};

export default FormYupValidation;