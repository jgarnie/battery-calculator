import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const rangePercentage = (fullRange: number, currentRange: number) => {
  const percentageAvailable = (currentRange / fullRange) * 100;
  switch (true) {
    case percentageAvailable < 25:
      return 'red';
    case percentageAvailable < 50:
      return 'yellow';
    case percentageAvailable < 75:
      return 'green';

    default:
      return 'lime';
  }
};
