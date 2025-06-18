import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Trash2, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const wishlistBooks = [
  {
    id: 1,
    title: "The Mind Connection",
    author: "Joyce Meyer",
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 2,
    title: "Great Travel At Desert",
    author: "Autor Fictício",
    image: "/placeholder.svg?height=200&width=150",
  },
  {
    id: 3,
    title: "The Lady Beauty Sunset",
    author: "Autor Fictício",
    image: "/placeholder.svg?height=200&width=150",
  },
]

export default function DesejosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-pink-100 py-2">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-800">
              INÍCIO
            </Link>{" "}
            / LISTA DE DESEJOS
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-12 text-center">Minha Lista de Desejos</h1>

        {wishlistBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistBooks.map((book) => (
              <Card key={book.id} className="group cursor-pointer relative">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <Link href={`/livros/${book.id}`}>
                      <Image
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        width={150}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </Link>
                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                  <Link href={`/livros/${book.id}`}>
                    <h3 className="font-semibold text-sm mb-2 group-hover:text-orange-500">{book.title}</h3>
                    <p className="text-gray-600 text-xs mb-4">{book.author}</p>
                  </Link>
                  <Link href={`/usuarios`}>
                    <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white text-sm">
                      Encontrar para Troca
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-16 h-16 text-gray-300 mr-2" />
              <Users className="w-12 h-12 text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-600 mb-4">Sua lista de desejos está vazia</h2>
            <p className="text-gray-500 mb-8">Adicione livros que você gostaria de ler à sua lista de desejos</p>
            <Link href="/livros">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Explorar Livros</Button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
