
import React from 'react';
import '../styles/globals.css';
import HeaderComponent from '../components/HeaderComponent';

export const metadata = {
    title: {
        default: 'Next-Blog-App',
        template: 'Nxt-Blog | %s'
    },
    description: 'A simple blog built with Next.js',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <HeaderComponent/>
                </header>
                {children}
            </body>
        </html>
    );
}