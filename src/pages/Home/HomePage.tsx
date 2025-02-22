import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import { Card } from '@/shared/ui/Card';
import { ListInfo } from '@/shared/ui/List';
import { Bio, ProfileProps } from '@/shared/ui/Bio/Bio';
// import avatar from '@/shared/ui/assets/avatar.png';

const listItems = [
  'John runs a small marketing agency that provides various digital marketing services to clients',
  'He manages a team of 5 employees and frequently works on multiple projects simultaneously.',
  'John is always busy, and he wants an invoicing system that is user-friendly and allows him to generate invoices quickly and accurately.',
];

const profileData: ProfileProps = {
  name: 'Peter Humbrey',
  age: 22,
  occupation: 'Model',
  technologySkillLevel: 'High',
  bio: [
    'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.',
    'Piste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.',
  ],
};

export const HomePage: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxHeight: '298px',
          overflow: 'hidden',
          // flexDirection: 'column',
        }}
      >
        <Avatar
          alt="Profile Picture"
          src="./public/avatar.png"
          sx={{
            height: '100%',
            width: '26%',
            aspectRatio: '1 / 1',
            // maxHeight: '300px',
          }}
          variant="rounded"
        />
        <Bio
          name={profileData.name}
          age={profileData.age}
          occupation={profileData.occupation}
          technologySkillLevel={profileData.technologySkillLevel}
          bio={profileData.bio}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'space-between',
          alignItems: 'center',
          // flexDirection: 'column',
        }}
      >
        <Card title="pain points">
          <ListInfo list={listItems} />
        </Card>
        <Card title="pain points">
          <ListInfo list={listItems} />
        </Card>
      </Box>
    </>
  );
};
