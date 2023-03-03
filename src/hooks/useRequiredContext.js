import { useContext } from "react";

export function useRequiredContext(context, errorMessage = null) {
  const result = useContext(context);

  if (result === undefined) {
    throw new Error(
      errorMessage ??
        `Required context ${
          context.displayName ? `${context.displayName} ` : ""
        }is not present.`
    );
  }

  return result;
}

/*
For TS

import { Context, useContext } from "react";

export function useRequiredContext<T>(context: Context<T | undefined>, errorMessage?: string): T {
  const result = useContext(context);

  if (result === undefined) {
    throw new Error(
      errorMessage ?? `Required context ${context.displayName ? `${context.displayName} ` : ''}is not present.`,
    );
  }

  return result;
} */
