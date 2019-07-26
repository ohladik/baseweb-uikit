import * as React from 'react';
import { Button } from 'baseui/button';
import Down from 'baseui/icon/triangle-down.js';
import { Popover } from 'baseui/popover';
import { StatefulMenu } from 'baseui/menu';

const items = [
  {label: 'activate'},
  {label: 'remove'},
];

const Dropdown = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Popover
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        content={
          <StatefulMenu
            items={items}
            onItemSelect={() => setIsOpen(false)}
          />
        }
      >
        <Button
            kind="tertiary"
            size="compact"
            endEnhancer={() => <Down size={24} />}
        >
            {children}
        </Button>
      </Popover>
    );
}

export default Dropdown;
