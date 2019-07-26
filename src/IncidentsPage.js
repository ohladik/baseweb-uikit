import React from 'react';
import { Block } from 'baseui/block';
import { Plus } from 'baseui/icon';
import { Button } from 'baseui/button';

import Incident from './Incident';

const IncidentsPage = () => (
	<Block maxWidth="1200px" margin="auto auto" padding="scale1600">
		<Block display="flex" justifyContent="flex-end" alignItems="center" marginBottom="scale1000">
			<Button startEnhancer={<Plus size={24} />}>New incident/maintenance</Button>
		</Block>
		<Incident />
	</Block>
  );

export default IncidentsPage;
