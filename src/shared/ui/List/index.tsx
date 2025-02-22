import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

import styles from './styles.module.scss';

interface IListProps {
  list: string[];
}

export const ListInfo = ({ list }: IListProps) => {
  return (
    <List className={styles.list}>
      {list.map((itemText, index) => (
        <ListItem className={styles.list__item} key={index}>
          <ListItemIcon sx={{ color: 'rgb(62, 135, 254)' }}>
            <ArrowDropDownCircleIcon
              fontSize="small"
              fill="rgb(62, 135, 254)"
            />
          </ListItemIcon>
          <ListItemText className={styles.list__text}>{itemText}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
