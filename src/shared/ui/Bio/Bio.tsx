import { Box, Chip, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export interface ProfileProps {
  name: string;
  age: number;
  occupation: string;
  technologySkillLevel: string;
  bio: string[];
}

export const Bio = ({
  name,
  age,
  occupation,
  technologySkillLevel,
  bio,
}: ProfileProps) => {
  return (
    <Grid
      sx={{
        width: '100%',
        padding: '24px',
        background: 'white',
        borderRadius: '4px',
        height: '100%',
        boxShadow:
          '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
      }}
      container
      direction="column"
      spacing={2}
    >
      <Grid item>
        <Typography variant="h4" gutterBottom>
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Chip label={`AGE: ${age}`} color="primary" size="small" />
          <Chip
            label={`OCCUPATION: ${occupation}`}
            color="primary"
            size="small"
          />
          <Chip
            label={`TECHNOLOGY SKILL LEVEL: ${technologySkillLevel}`}
            color="primary"
            size="small"
          />
        </Box>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" gutterBottom>
          BIO
        </Typography>
        {bio.map((paragraph, index) => (
          <Typography key={index} variant="body1" gutterBottom>
            {paragraph}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};
