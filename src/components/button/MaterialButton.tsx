import { component$, Slot, type QRL } from '@builder.io/qwik';
import './material-button.scss';

// Explicitly import Qwik JSX types to bypass tsconfig issues
import type { JSX } from '@builder.io/qwik/jsx-runtime';

export interface MaterialButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
  onClick$?: QRL<() => void>;
}

export const MaterialButton = component$<MaterialButtonProps>(
  ({ variant = 'contained', disabled = false, onClick$ }) => {
    return (
      <button
        class={`material-button material-button-${variant}`}
        disabled={disabled}
        onClick$={onClick$}
        aria-disabled={disabled}
      >
        <Slot />
      </button>
    ) as JSX.Element;
  },
);