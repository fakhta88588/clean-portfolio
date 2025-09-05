import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<Header />
<main>{children}</main>
<Footer />
</body>
</html>
)
}

app/contact/page.tsx

import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
return (
<section>
<h1>Contact</h1>
<C
