/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { ArrowUpDown, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getLobeIcon } from '@/lib/lobe-icon'
import { cn } from '@/lib/utils'

import { FILTER_ALL, getSortLabels, type SortOption } from '../constants'
import type { PricingModel, PricingVendor } from '../types'

export interface PricingToolbarProps {
  sortBy: string
  onSortChange: (value: string) => void
  vendorFilter: string
  onVendorChange: (value: string) => void
  vendors: PricingVendor[]
  models: PricingModel[]
}

export function PricingToolbar(props: PricingToolbarProps) {
  const { t } = useTranslation()
  const sortLabels = getSortLabels(t)

  const vendorOptions = [
    {
      value: FILTER_ALL,
      label: t('All Vendors'),
      count: props.models.length,
      icon: undefined,
    },
    ...props.vendors
      .map((vendor) => ({
        value: vendor.name,
        label: vendor.name,
        count: props.models.reduce(
          (total, model) => total + (model.vendor_name === vendor.name ? 1 : 0),
          0
        ),
        icon: vendor.icon ? getLobeIcon(vendor.icon, 14) : undefined,
      }))
      .filter((vendor) => vendor.count > 0),
  ]

  return (
    <div className='flex items-start justify-between gap-3 rounded-xl border p-3'>
      <div className='flex flex-wrap gap-1.5'>
        {vendorOptions.map((option) => {
          const isActive = props.vendorFilter === option.value
          return (
            <button
              key={option.value}
              type='button'
              onClick={() => props.onVendorChange(option.value)}
              aria-pressed={isActive}
              title={option.label}
              className={cn(
                'inline-flex max-w-full items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium transition-all',
                isActive
                  ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                  : 'border-border/70 bg-background text-muted-foreground hover:border-border hover:bg-muted/50 hover:text-foreground'
              )}
            >
              {option.icon && <span className='shrink-0'>{option.icon}</span>}
              <span className='truncate'>{option.label}</span>
              <span
                className={cn(
                  'rounded-md px-1.5 py-0.5 text-[12px]',
                  isActive
                    ? 'bg-background text-foreground'
                    : 'bg-muted text-muted-foreground'
                )}
              >
                {option.count}
              </span>
            </button>
          )
        })}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              type='button'
              variant='outline'
              size='sm'
              className='h-8 shrink-0 gap-1.5 px-3 text-xs'
            />
          }
        >
          <ArrowUpDown className='size-3.5' />
          <span>{sortLabels[props.sortBy as SortOption] || t('Sort')}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-44'>
          {Object.entries(sortLabels).map(([value, label]) => (
            <DropdownMenuItem
              key={value}
              onClick={() => props.onSortChange(value)}
              className='gap-2'
            >
              <Check
                className={cn(
                  'size-4 shrink-0',
                  props.sortBy === value ? 'opacity-100' : 'opacity-0'
                )}
              />
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
