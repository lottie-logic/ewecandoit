import styles from './button.module.css';
import cn from 'classnames';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CrossIcon } from '@100mslive/react-icons';
import DemoModal from './hms/modal';

const Button = () => {
  const ctaRef = React.useRef(null);

  return (
    <Dialog.Root>
      <Dialog.Overlay className={cn(styles['overlay'])} />
      <Dialog.Trigger asChild>
        <button ref={ctaRef} id="cta-btn" className={cn(styles['cta-btn'])}>
          Newsletter
        </button>
      </Dialog.Trigger>

      <Dialog.Content className={cn(styles['content'], 'dialog-animation')}>
        <Dialog.Close asChild className={cn(styles['close-btn'])}>
          <button>
            <CrossIcon />
          </button>
        </Dialog.Close>
        <DemoModal />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default Button;
