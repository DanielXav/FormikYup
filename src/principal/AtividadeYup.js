import React  from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  nome: Yup.string().required('Required'),
  idade: Yup.number().required('Required').min(17, 'Over 16!'),
  cpf: Yup.string().required('Required').min(14, 'CPF must be size 14! (999.999.999-99)').max(14, 'CPF must be size 14! (999.999.999-99)').matches(/^[0-9\s\.\-]*$/,'CPF can only contain numbers, dash and dot. (999.999.999-99)'),
  matricula: Yup.string().required('Required').min(9, 'Matrícula must be size 9!').max(9, 'Matrícula must be size 9!').matches(/^[0-9\s]*$/, 'Can only contain numbers.'), //201080303 f
  curso: Yup.string().required('Required'),
  endereco: Yup.string().required('Required'),
  numero: Yup.string(),
  complemento: Yup.string(),
  bairro: Yup.string().required('Required'),
  cidade: Yup.string().required('Required'),
  estado: Yup.string().required('Required'),
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
            <Field type="text" name="matricula"
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
            <Field as="select" name="color" onBlur={handleBlur}  onChange={handleChange}>
             <option value="rondonia">RO</option>
             <option value="acre">AC</option>
             <option value="amazonas">AM</option>
             <option value="roraima">RR</option>
             <option value="para">PA</option>
             <option value="amapa">AP</option>
             <option value="tocantis">TO</option>
             <option value="maranhao">MA</option>
             <option value="piaui">PI</option>
             <option value="ceara">CE</option>
             <option value="norte">RN</option>
             <option value="paraiba">PB</option>
             <option value="prenambuco">PE</option>
             <option value="alagoas">AL</option>
             <option value="sergipe">SE</option>
             <option value="bahia">BA</option>
             <option value="minas">MG</option>
             <option value="espirito">ES</option>
             <option value="rio">RJ</option>
             <option value="saopaulo">SP</option>
             <option value="parana">PR</option>
             <option value="santacatarina">SC</option>
             <option value="sul">RS</option>
             <option value="matogrossosul">MS</option>
             <option value="matogrossonorte">MT</option>
             <option value="goias">GO</option>
             <option value="distrito">DF</option>
           </Field>
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