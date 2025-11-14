"use client"

import * as React from "react"
import { Button as MantineButton, ButtonProps as MantineButtonProps } from "@mantine/core"
import { cn } from "@/lib/utils"

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "link"
  size?: "sm" | "md" | "lg" | "xl" | "icon"
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = "primary",
    size = "md",
    fullWidth,
    loading,
    leftIcon,
    rightIcon,
    asChild,
    className,
    children,
    ...props
  }, ref) => {

    // Map our custom sizes to Mantine sizes + custom styles
    const sizeMap = {
      sm: { size: 'sm' as const, h: 36, px: 16 },
      md: { size: 'md' as const, h: 44, px: 24 },
      lg: { size: 'lg' as const, h: 56, px: 32 },
      xl: { size: 'xl' as const, h: 64, px: 40 },
      icon: { size: 'md' as const, h: 44, px: 0 },
    }

    const sizeConfig = sizeMap[size]

    // Custom variant styles - Fashion-forward Purple/Pink Gradients
    const variantStyles = {
      primary: {
        variant: 'filled' as const,
        color: 'violet',
        style: {
          background: 'linear-gradient(to right, #9333EA, #EC4899)',
          color: '#FFFFFF',
          borderWidth: 0,
          fontWeight: 600,
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
      },
      secondary: {
        variant: 'outline' as const,
        color: 'gray',
        style: {
          borderWidth: 2,
          borderColor: '#D1D5DB',
          color: '#111827',
          backgroundColor: '#FFFFFF',
          fontWeight: 600,
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
      outline: {
        variant: 'outline' as const,
        color: 'gray',
        style: {
          borderWidth: 2,
          borderColor: '#D1D5DB',
          color: '#111827',
          fontWeight: 600,
          borderRadius: '0.5rem',
        },
      },
      ghost: {
        variant: 'subtle' as const,
        color: 'gray',
        style: {
          borderWidth: 0,
          fontWeight: 600,
          borderRadius: '0.5rem',
        },
      },
      destructive: {
        variant: 'filled' as const,
        color: 'red',
        style: {
          borderWidth: 0,
          fontWeight: 600,
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
      link: {
        variant: 'transparent' as const,
        color: 'violet',
        style: {
          textDecoration: 'underline',
          textUnderlineOffset: 4,
          fontWeight: 600,
        },
      },
    }

    const variantConfig = variantStyles[variant]

    // If asChild is true, just render the children directly with styling
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200",
          "hover:shadow-xl active:scale-[0.98]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2",
          variant === 'primary' && "bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg",
          className,
          (children as any).props.className
        ),
        style: {
          height: size === 'icon' ? sizeConfig.h : undefined,
          width: size === 'icon' ? sizeConfig.h : undefined,
          paddingLeft: size !== 'icon' ? sizeConfig.px : 0,
          paddingRight: size !== 'icon' ? sizeConfig.px : 0,
          ...(children as any).props.style,
        },
      })
    }

    return (
      <MantineButton
        ref={ref}
        {...variantConfig}
        size={sizeConfig.size}
        fullWidth={fullWidth}
        loading={loading}
        leftSection={leftIcon}
        rightSection={rightIcon}
        className={cn(
          // Base styles
          "font-semibold transition-all duration-200",
          // Hover effects
          "hover:shadow-xl active:scale-[0.98]",
          // Focus styles - Purple ring for fashion design
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2",
          className
        )}
        styles={{
          root: {
            height: size === 'icon' ? sizeConfig.h : undefined,
            width: size === 'icon' ? sizeConfig.h : undefined,
            paddingLeft: size !== 'icon' ? sizeConfig.px : 0,
            paddingRight: size !== 'icon' ? sizeConfig.px : 0,
          },
        }}
        {...props}
      >
        {children}
      </MantineButton>
    )
  }
)

Button.displayName = "Button"

export { Button }
