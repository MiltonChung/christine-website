import * as React from "react";
import { FComponent } from "../types/common";
import { FieldErrors } from "react-hook-form/dist/types/errors";

type TextareaNativeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type TextareaProps = {
  name: string;
  label: string;
  placeholder?: string;
  errors?: FieldErrors;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  cols?: number;
  rows?: number;
} & TextareaNativeProps;

const Textarea: FComponent<TextareaProps> = React.forwardRef(
  (
    {
      name,
      placeholder = "",
      label,
      errors,
      disabled = false,
      className = "",
      ariaLabel,
      cols,
      rows,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={
          className ? `${className} field-container` : "field-container"
        }
      >
        <label htmlFor={name}>{label}</label>

        <div
          className={
            disabled ? `textarea-disabled textarea-line` : "textarea-line"
          }
        >
          <textarea
            aria-label={ariaLabel}
            name={name}
            id={name}
            ref={ref}
            cols={cols}
            rows={rows}
            placeholder={placeholder}
            autoComplete="off"
            disabled={disabled}
            {...props}
          />
        </div>
        <p className="field-errors">
          {errors[name] && (
            <span className="errorMessage">
              {errors[name].message.toString()}
            </span>
          )}
        </p>
      </div>
    );
  }
);

export { Textarea };
