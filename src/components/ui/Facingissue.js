import React from 'react'
import emoji from '../../assests/images/facing-issue-emoji.svg'

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const Facingissue = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div class="d-flex fixed-bottom justify-content-end mb-2 px-2">
      <button class="btn d-flex flex-row gap-2 text-light" href="" onClick={open}>
        <img
            src={emoji}
            class="img-fluid rounded-top"
            alt=""
            style={{height : "24px", width : "24px"}}
        />
        Facing an issue?</button>  
        <Modal opened={opened} onClose={close} title="Facing Problem" centered>
            {/* Modal content */}
          </Modal>
    </div>
  )
}

export default Facingissue
