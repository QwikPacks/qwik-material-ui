import { component$, Slot, useStyles$, type QRL } from "@builder.io/qwik";

const styles = `
  .material-button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s, box-shadow 0.2s;
    border: none;
    outline: none;
  }

  .material-button.material-button-contained {
    background-color: #6750a4; /* $primary */
    color: #ffffff; /* $text-on-primary */
  }

  .material-button.material-button-contained:hover:not([disabled]) {
    background-color: #7f67be; /* $primary-hover */
    box-shadow: 0 0.125rem 0.25rem #00000033;
  }

  .material-button.material-button-outlined {
    border: 0.06rem solid #6750a4; /* $primary */
    background: transparent;
    color: #6750a4; /* $primary */
  }

  .material-button.material-button-outlined:hover:not([disabled]) {
    background-color: #6750a41a;
  }

  .material-button.material-button-text {
    background: transparent;
    color: #6750a4; /* $primary */
  }

  .material-button.material-button-text:hover:not([disabled]) {
    background-color: #6750a41a;
  }

  .material-button[disabled] {
    opacity: 0.38; /* $disabled-opacity */
    cursor: not-allowed;
  }
`;

export interface MaterialButtonProps {
	variant?: "contained" | "outlined" | "text";
	disabled?: boolean;
	onClick$?: QRL<() => void>;
}

export const MaterialButton = component$<MaterialButtonProps>(
	({ variant = "contained", disabled = false, onClick$ }) => {
    useStyles$(styles);
		return (
			<button
				class={`material-button material-button-${variant}`}
				disabled={disabled}
				onClick$={onClick$}
				aria-disabled={disabled}
			>
				<Slot />
			</button>
		);
	}
);
