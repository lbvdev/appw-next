'use client'

import NextLink, { LinkProps } from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

type LinkComponentProps = LinkProps & ComponentPropsWithoutRef<'a'>

export default function Link({ onClick, tabIndex, ...props }: LinkComponentProps) {
    return (
        <NextLink
            {...props}
            onClick={(e) => {
                e.currentTarget.focus()
                onClick?.(e)
            }}
            tabIndex={tabIndex ?? 0}
        />
    )
}
