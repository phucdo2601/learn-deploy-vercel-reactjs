import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';
// type
import { UploadAvatar, UploadMultiFile, UploadSingleFile } from '../upload';

// ----------------------------------------------------------------------

RHFUploadAvatar.propTypes = {
  name: PropTypes.string,
  accept: PropTypes.any,
  maxSize: PropTypes.any,
  onDrop: PropTypes.any,
  helperText: PropTypes.any,
};

export function RHFUploadAvatar({ name, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;

        return (
          <div>
            <UploadAvatar error={checkError} {...other} file={field.value} />
            {checkError && (
              <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                {error.message}
              </FormHelperText>
            )}
          </div>
        );
      }}
    />
  );
}

// ----------------------------------------------------------------------

RHFUploadSingleFile.propTypes = {
  name: PropTypes.string,
  accept: PropTypes.any,
  maxSize: PropTypes.any,
  onDrop: PropTypes.any,
};

export function RHFUploadSingleFile({ name, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;

        return (
          <UploadSingleFile
            accept="image/*"
            file={field.value}
            error={checkError}
            helperText={
              checkError && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        );
      }}
    />
  );
}

// ----------------------------------------------------------------------

RHFUploadMultiFile.propTypes = {
  name: PropTypes.string,
  showPreview: PropTypes.any,
  accept: PropTypes.any,
  maxSize: PropTypes.any,
  onDrop: PropTypes.any,
  onRemove: PropTypes.any,
  onRemoveAll: PropTypes.any,
};

export function RHFUploadMultiFile({ name, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }: any) => {
        const checkError = !!error && field.value?.length === 0;

        return (
          <UploadMultiFile
            accept="image/*, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .xlsx, .xls, .txt"
            files={field.value}
            error={checkError}
            helperText={
              checkError && (
                <FormHelperText error sx={{ px: 2 }}>
                  {error?.message}
                </FormHelperText>
              )
            }
            {...other}
          />
        );
      }}
    />
  );
}
