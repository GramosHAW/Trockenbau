export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      {children}
    </section>
  )
}