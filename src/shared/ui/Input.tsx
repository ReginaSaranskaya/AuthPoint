import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

export const Input: React.FC<TextFieldProps> = (props) => {
  return <TextField {...props} variant="outlined" fullWidth margin="normal" />;
};
