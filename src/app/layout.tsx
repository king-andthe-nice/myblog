import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '个人博客导航 | 探索知识的海洋',
  description: '一个精心设计的个人博客导航网站，汇聚优质内容，探索知识的海洋',
  keywords: '博客导航, 个人博客, 技术博客, 知识分享',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: '个人博客导航 | 探索知识的海洋',
    description: '一个精心设计的个人博客导航网站，汇聚优质内容，探索知识的海洋',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
          {children}
        </div>
      </body>
    </html>
  )
}