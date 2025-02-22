import React from 'react';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

import styles from './styles.module.scss';

interface IUserInfoProps {
  title: string;
}

export const Card = ({ title, children }: IUserInfoProps) => {
  return (
    <Paper className={styles.card} elevation={3}>
      <Typography variant="h3" className={styles.title}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
};
