import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  multiline: PropTypes.any,
  rows : PropTypes.any,
  fullWidth: PropTypes.any,
  type: PropTypes.any,
  InputProps: PropTypes.any,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.any,
  InputLabelProps: PropTypes.any,
};

export default function RHFTextField({ name, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} fullWidth error={!!error} helperText={error?.message} {...other} />
      )}
    />
  );
}
