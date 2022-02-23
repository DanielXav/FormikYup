import React  from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import SelectInput from './SelectInput'

const LoginSchema = Yup.object().shape({
  nome: Yup.string().required('Required'),
  idade: Yup.number().required('Required').min(17, 'Over 16!'),
  cpf: Yup.string().required('Required').min(14, 'CPF must be size 14! (999.999.999-99)').max(14, 'CPF must be size 14! (999.999.999-99)').matches(/^[0-9\s\.\-]*$/,'CPF can only contain numbers, dash and dot. (999.999.999-99)'),
  matricula: Yup.string().required('Required').min(9, 'Matrícula must be size 9!').max(9, 'Matrícula must be size 9!').matches(/^[0-9\s]*$/, 'Can only contain numbers.'), 
  curso: Yup.string().required('Required'),
  endereco: Yup.string().required('Required'),
  numero: Yup.string(),
  complemento: Yup.string(),
  bairro: Yup.string().required('Required'),
  cidade: Yup.string().required('Required'),
  cep: Yup.string().required('Required').min(9, 'CEP must be size 9! (00000-000)').max(9, 'CEP must be size 9! (00000-000)').matches(/^[0-9\s\-]*$/, 'Can only contain numbers and dash. (00000-000)')
});

const FormYupValidation = () => {
  const handleSubmitting = (values, { setSubmitting, setStatus }) => {
    setStatus({ isValidating: true });
    setTimeout(() => {
      console.info(JSON.stringify(values, null, 2));
      setSubmitting(false);
      setStatus({ isValidating: false });
    }, 400);
    alert(JSON.stringify(values))
  };

  const options = [
    { value: "rondonia", label: 'Rondonia'},
    { value: "acre", label: 'Acre'},
    { value: "amazonas", label: 'Amazonas'},
    { value: "roraima", label: 'Roraima'},
    { value: "para", label: 'Para'},
    { value: "amapa", label: 'Amapa'},
    { value: "tocantis", label: 'Tocantis'},
    { value: "maranhao", label: 'Maranhao'},
    { value: "piaui", label: 'Piaui'},
    { value: "ceara", label: 'Ceara'},
    { value: "norte", label: 'Rio Grande do Norte'},
    { value: "paraiba", label: 'Paraiba'},
    { value: "pernambuco", label: 'Pernambuco'},
    { value: "alagoas", label: 'Alagoas'},
    { value: "sergipe", label: 'Sergipe'},
    { value: "bahia", label: 'Bahia'},
    { value: "minas", label: 'Minas Gerais'},
    { value: "espirito", label: 'Espirito Santo'},
    { value: "rio", label: 'Rio de Janeiro'},
    { value: "saopaulo", label: 'Sao Paulo'},
    { value: "parana", label: 'Parana'},
    { value: "santacatarina", label: 'Santa Catarina'},
    { value: "sul", label: 'Rio Grande do Sul'},
    { value: "matogrossosul", label: 'Matogrosso do Sul'},
    { value: "matogrossonorte", label: 'Matogrosso do Norte'},
    { value: "goias", label: 'Goias'},
    { value: "brasilia", label: 'Brasilia'}
  ]  

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
        <div className="container" align="center">
        <form  onSubmit={handleSubmit} className="centered">
          <label className="form-group">
            Nome completo*:
            <Field className="form-control" type="text" name="nome"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="nome" className="error" component="span"/>
          <br/><br/>
          <label  className="form-group">
            Idade*:
            <Field className="form-control" type="number" name="idade"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="idade" className="error" component="span" />
          <br/><br/>
          <label  className="form-group">
            CPF*:
            <Field className="form-control" type="text" name="cpf"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="cpf" className="error" component="span"/>
          <br/><br/>
          <label  className="form-group">
            Matrícula*:
            <Field className="form-control" type="text" name="matricula"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="matricula" className="error" component="span"/>
          <br/><br/>
          <label  className="form-group">
            Curso*:
            <Field className="form-control" type="text" name="curso"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="curso" className="error" component="span"/>
          <br/><br/>
          <label  className="form-group">
            Endereço*:
            <Field className="form-control" type="text" name="endereco"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="endereco" className="error" component="span"/>
          <br/><br/>
          <label  className="form-group">
            Número:
            <Field className="form-control" type="text" name="numero"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="numero" className="error" component="span"/>
          <br/><br/>
          <label  className="form-group">
            Complemento:
            <Field className="form-control" type="text" name="complemento"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="complemento" className="error" component="span"/>
          <br/><br/>
          <label  className="form-group">
            Bairro*:
            <Field className="form-control" type="text" name="bairro"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="bairro" className="error" component="span"/>
          <br/><br/>
          <label  className="form-group">
            Cidade*:
            <Field className="form-control" type="text" name="cidade"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="cidade" className="error" component="span"/>
          <br/><br/>
          <label  className="form-group">
            Estado*:
            <SelectInput name="estado">
              {options.map((option) => (
              <option key={option.value} value={option.value}>
                  {option.label}
              </option>
              ))}
            </SelectInput>
          </label>
          <ErrorMessage name="estado" className="error" component="span"/>
          <br/><br/>
          <label  className="form-group">
            CEP*:
            <Field className="form-control" type="text" name="cep"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <ErrorMessage name="cep" className="error" component="span"/>
          <br/><br/>
          <input type="submit" value="Enviar" disabled={isSubmitting}/>
        </form>
        </div>
      )}
    </Formik>
  )
};

export default FormYupValidation;