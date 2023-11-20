"use client";

import { Label } from "@/components/ui/label";
import { forwardRef } from "react";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FormErrors } from "./form-errors";

interface FormInputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  errors?: any;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      label,
      type,
      placeholder,
      errors,
      disabled,
      required,
      className,
      defaultValue = "",
      onBlur,
    },
    ref
  ) => {
    const { pending } = useFormStatus();
    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label ? (
            <div>
              <Label
                htmlFor={id}
                className="text-xs font-semibold text-neutral-700"
              >
                {label}
              </Label>
            </div>
          ) : null}
          <Input
            onBlur={onBlur}
            ref={ref}
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            disabled={pending || disabled}
            required={required}
            className={cn("text-sm px-2 py-1 h-7", className)}
            defaultValue={defaultValue}
            aria-describedby={`${id}-error`}
          />
        </div>
        <FormErrors errors={errors} id={id} />
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
