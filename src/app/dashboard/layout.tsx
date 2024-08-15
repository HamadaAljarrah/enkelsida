import { ReactNode } from 'react'
import DesktopLayout from './layout/desktop-layout'
import MobileLayout from './layout/mobile-layout'

const Layout = ({ children }: { children: ReactNode }) => {

    return (
        <>
            <DesktopLayout>{children}</DesktopLayout>
            <MobileLayout>{children}</MobileLayout>
        </>
    )
}

export default Layout