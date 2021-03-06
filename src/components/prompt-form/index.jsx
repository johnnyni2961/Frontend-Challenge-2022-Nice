import PropTypes from 'prop-types';

import { SectionTitle } from '../section-title';
import { Form } from '../form';
import styles from './prompt-form.module.css';

import useFormWithValidation from '../../hooks/useFormWithValidation';

export const PromptForm = (props) => {
  const {
    submitButtonText,
    onPrompt,
  } = props;

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onPrompt(values);
    /* TODO: reset form on 200 response only */
    resetForm();
  };

  return (
    <section className={styles.root}>
      <SectionTitle
        text="Feed the prompt or else >:D"
      />
      <Form
        submitButtonText={submitButtonText}
        onChange={handleChange}
        onSubmit={handleSubmit}
        values={values}
        errors={errors}
        isValid={isValid}
      />
    </section>
  );
};

PromptForm.propTypes = {
  submitButtonText: PropTypes.string,
  onPrompt: PropTypes.func
};
