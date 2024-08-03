import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@weyneshof/utils';
import { bodyFont, subtitleFont, titleFont } from './fonts';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef, type HTMLAttributes } from 'react';

export const TextVariants = cva(cn(), {
  variants: {
    variant: {
      heading: cn(titleFont.className),
      subtitle: cn(subtitleFont.className),
      paragraph: cn(bodyFont.className),
      span: cn(bodyFont.className),
    },
    size: {
      default: '',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    },

    color: {
      default: '',
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      primaryForeground: 'text-primary-foreground',
      secondaryForeground: 'text-secondary-foreground',
      accentForeground: 'text-accent-foreground',
      muted: 'text-muted',
      mutedForeground: 'text-muted-foreground',
    },
    align: {
      default: '',
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'paragraph',
    size: 'default',
    color: 'default',
    align: 'default',
  },
});

export type TextProps = (
  | HTMLAttributes<HTMLParagraphElement>
  | HTMLAttributes<HTMLHeadingElement>
) &
  VariantProps<typeof TextVariants> & {
    asChild?: boolean;
  };

export const Text = forwardRef<
  HTMLParagraphElement | HTMLHeadingElement,
  TextProps
>((props) => {
  const Comp = props.asChild
    ? Slot
    : props.variant === 'heading'
      ? 'h1'
      : props.variant === 'subtitle'
        ? 'h2'
        : props.variant === 'paragraph'
          ? 'p'
          : 'span';
  return (
    <Comp
      {...props}
      className={cn(
        TextVariants({
          variant: props.variant,
          color: props.color,
          className: props.className,
          size: props.size,
          align: props.align,
        }),
      )}
    />
  );
});

Text.displayName = 'Text';

export default Text;
