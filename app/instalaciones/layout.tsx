export const metadata = {
  title: 'Instalaciones - Vistacampo | Centro de Rehabilitación',
  description: 'Descubre nuestras instalaciones diseñadas para la recuperación y el bienestar en un entorno natural y seguro en Colonia Tovar.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
