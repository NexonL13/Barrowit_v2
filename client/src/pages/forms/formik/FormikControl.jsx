import React from 'react'
import Input from './components/Input';
import TextArea from './components/TextArea';
import Select from './components/Select';
import RadioButtons from './components/RadioButtons';

const FormikControl = (props) => {
    const { control, ...rest } = props;
  
    switch (control) {
      case "input":
        return <Input {...rest} />;
      case "textarea":
        return <TextArea {...rest} />;
      case "select":
        return <Select {...rest} />;
      case "radio":
        return <RadioButtons {...rest}/>;
      case "checkbox":
      case "date":
      default:
        return null;
    }
  };
  
  export default FormikControl;