import { InputmaskOptions } from '@ngneat/input-mask';

export const MASK_AMOUNT: InputmaskOptions<number> = {
  alias: 'numeric',
  groupSeparator: ',',
  digits: '5',
  digitsOptional: false,
  placeholder: '0.00000',
  parser: (value: string) => Number(value.replace(/[^\d.-]/g, '')),
  min: '0.00000',
};

export const MASK_NUMBER: InputmaskOptions<string> = {
  regex: '\\d*'
};

export const MASK_ALPHANUMERIC: InputmaskOptions<string> = {
  regex: '^[a-zA-Z0-9 ]+$'
};