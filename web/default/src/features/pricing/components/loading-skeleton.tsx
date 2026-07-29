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
import { Skeleton } from '@/components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <div className='space-y-5'>
      <div className='space-y-1.5'>
        <Skeleton className='h-8 w-40' />
        <Skeleton className='h-4 w-52' />
      </div>
      <Skeleton className='h-10 w-full rounded-lg' />
      <FilterBarSkeleton />
      <TableContentSkeleton />
    </div>
  )
}

function FilterBarSkeleton() {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex flex-1 flex-wrap items-center gap-2'>
        {[80, 90, 75, 85, 70].map((width, i) => (
          <Skeleton
            key={i}
            className='h-8 rounded-lg'
            style={{ width: `${width}px` }}
          />
        ))}
      </div>
      <Skeleton className='h-8 w-24 rounded-lg' />
    </div>
  )
}

function TableContentSkeleton() {
  const columns = [
    { width: 200 },
    { width: 100 },
    { width: 100 },
    { width: 100 },
    { width: 80 },
    { width: 100 },
  ]

  return (
    <div className='space-y-4'>
      <div className='overflow-hidden rounded-lg border'>
        <div className='bg-muted/30 border-b px-4 py-3'>
          <div className='flex items-center gap-4'>
            {columns.map((col, i) => (
              <Skeleton
                key={i}
                className='h-4'
                style={{ width: `${col.width}px` }}
              />
            ))}
          </div>
        </div>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className='flex items-center gap-4 border-b px-4 py-3 last:border-b-0'
          >
            {columns.map((col, j) => (
              <Skeleton
                key={j}
                className='h-5'
                style={{ width: `${col.width}px` }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className='flex items-center justify-between'>
        <Skeleton className='h-5 w-32' />
        <div className='flex items-center gap-2'>
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className='size-8' />
          ))}
        </div>
      </div>
    </div>
  )
}
