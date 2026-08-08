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
import { useTranslation } from 'react-i18next'

import { useStatus } from '@/hooks/use-status'
import { DEFAULT_SYSTEM_NAME } from '@/lib/constants'

export function HomeFooter() {
  const { t } = useTranslation()
  const { status } = useStatus()
  const systemName = status?.system_name || DEFAULT_SYSTEM_NAME
  const year = new Date().getFullYear()

  return (
    <footer className='relative z-10 px-6 pb-8'>
      <div className='text-muted-foreground/60 mx-auto flex max-w-2xl flex-col items-center justify-center gap-1.5 text-center text-xs sm:flex-row sm:gap-2'>
        <span>
          © {year} {systemName}. {t('footer.defaultCopyright')}
        </span>
        <span aria-hidden='true' className='text-muted-foreground/30 hidden sm:inline'>
          ·
        </span>
        <span>
          {t('Powered by')}{' '}
          <span className='text-foreground/70 font-medium'>{t('New API')}</span>
        </span>
      </div>
    </footer>
  )
}
