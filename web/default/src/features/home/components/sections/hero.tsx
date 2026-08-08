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
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { useStatus } from '@/hooks/use-status'
import { useSystemConfig } from '@/hooks/use-system-config'
import { DEFAULT_SYSTEM_NAME } from '@/lib/constants'

interface HeroProps {
  isAuthenticated?: boolean
}

export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { status } = useStatus()
  const { logo } = useSystemConfig()
  const systemName = status?.system_name || DEFAULT_SYSTEM_NAME

  return (
    <section className='relative flex flex-1 items-center justify-center overflow-hidden px-6 py-20'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10'
        style={{
          background: [
            'radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.72 0.14 255 / 18%) 0%, transparent 70%)',
            'radial-gradient(ellipse 50% 40% at 80% 80%, oklch(0.70 0.08 250 / 10%) 0%, transparent 70%)',
          ].join(', '),
        }}
      />

      <div className='mx-auto flex w-full max-w-2xl flex-col items-center text-center'>
        <img
          src={logo}
          alt={t('Logo')}
          className='mb-6 size-14 rounded-xl object-cover shadow-sm'
        />

        <h1 className='text-foreground text-[clamp(2.5rem,6vw,4rem)] leading-none font-bold tracking-tight'>
          {systemName}
        </h1>

        <p className='text-muted-foreground mt-4 max-w-md text-base leading-relaxed md:text-lg'>
          {t('Unified. Cost-effective. Efficient.')}
        </p>

        <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
          {props.isAuthenticated ? (
            <Button
              className='group h-11 rounded-lg px-6 text-sm font-medium'
              render={<Link to='/dashboard' />}
            >
              {t('Go to Dashboard')}
              <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
            </Button>
          ) : (
            <>
              <Button
                className='group h-11 rounded-lg px-6 text-sm font-medium'
                render={<Link to='/sign-up' />}
              >
                {t('Get Started')}
                <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
              <Button
                variant='outline'
                className='h-11 rounded-lg px-6 text-sm font-medium'
                render={<Link to='/sign-in' />}
              >
                {t('Sign In')}
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
