// @flow
import * as React from 'react';
import Page from 'components/Page';
import Input from 'components/Input';
import Form from 'components/Form';
import { Formik } from 'formik';

const initialValues = {
  title: '',
  link: '',
  folder: '',
  labels: [],
};

function AddArticle(): React.Node {
  const handleFormSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 3000);
  };
  return (
    <Page title="Add Article">
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({ handleChange, handleBlur, handleSubmit, isSubmitting, ...formikProps }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="title"
              id="title"
              label="Title"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              {...formikProps}
            />
            <Input
              type="text"
              name="link"
              id="link"
              label="Link"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              {...formikProps}
            />
            <Input
              type="text"
              name="folder"
              id="folder"
              label="Folder"
              onChange={handleChange}
              onBlur={handleBlur}
              {...formikProps}
            />
          </Form>
        )}
      </Formik>
    </Page>
  );
}

export default AddArticle;
