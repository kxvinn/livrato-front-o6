import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Search, BookOpen, FileText, CheckCircle, Handshake, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const recentBooks = [
  {
    id: 1,
    title: "The Mind Connection",
    author: "Joyce Meyer",
    rating: 4.5,
    image: "/images/books/mind-connection.png",
  },
  {
    id: 2,
    title: "The Road to Recognition",
    author: "Seth Price",
    rating: 4.8,
    image: "/images/books/road-to-recognition-1.png",
  },
  {
    id: 3,
    title: "Battlefield of the Mind",
    author: "Joyce Meyer",
    rating: 4.6,
    image: "/images/books/battlefield-mind.png",
  },
  {
    id: 4,
    title: "The Road to Recognition",
    author: "Seth Price",
    rating: 4.7,
    image: "/images/books/road-to-recognition-2.png",
  },
]

const categories = [
  {
    title: "Ensino Superior",
    image: "/images/categories/ensino-superior.png",
    overlay: true,
  },
  {
    title: "Livros De Gerenciamento",
    image: "/images/categories/gerenciamento.png",
    overlay: true,
  },
  {
    title: "Livros De Finanças",
    image: "/images/categories/financas.png",
    overlay: true,
  },
  {
    title: "Livros De Engenharia",
    image: "/images/categories/engenharia.png",
    overlay: true,
  },
  {
    title: "Livros Comerciais",
    image: "/images/categories/comerciais.png",
    overlay: true,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Encontre, Troque E<br />
                Leia Novos Livros
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Dê uma nova vida aos livros que você já leu e descubra novas histórias trocando com leitores da sua
                cidade. Cadastre-se gratuitamente e comece agora!
              </p>
              <Link href="/sobre">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">SAIBA MAIS →</Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-books-transparent.png"
                alt="Coleção de Livros"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Explore Nossas Categorias Principais</h2>
            <Link href="/livros">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Ver Categorias</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link href="/livros" key={index}>
                <Card className="relative overflow-hidden group cursor-pointer">
                  <div className="relative h-48">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h3 className="text-white text-xl font-semibold text-center">{category.title}</h3>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Books Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Recém-Chegados</h2>
            <p className="text-gray-600 mb-4">Mais de 1500 livros de publicações para você loja dia.</p>
            <Link href="/livros">
              <Button variant="link" className="text-orange-500">
                ver todos os livros →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentBooks.map((book) => (
              <Link href={`/livros/${book.id}`} key={book.id}>
                <Card className="group cursor-pointer">
                  <CardContent className="p-4">
                    <div
                      className="relative mb-4 bg-gray-100 rounded-lg overflow-hidden"
                      style={{ aspectRatio: "3/4" }}
                    >
                      <Image
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-2 group-hover:text-orange-500">{book.title}</h3>
                    <p className="text-gray-600 text-xs mb-2">{book.author}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">({book.rating})</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-slate-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Como Funciona?</h2>
            <p className="text-gray-300">O processo é fácil e colaborativo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-white font-semibold mb-2">ENCONTRE</h3>
              <p className="text-gray-300 text-sm">Encontre livros</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-white font-semibold mb-2">ADICIONE SUA BIBLIOTECA</h3>
              <p className="text-gray-300 text-sm">Adicione seus livros</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-white font-semibold mb-2">ENCONTRE DISPONÍVEL</h3>
              <p className="text-gray-300 text-sm">Encontre disponível</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-white font-semibold mb-2">CONFIRME A TROCA</h3>
              <p className="text-gray-300 text-sm">Confirme a troca</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-slate-700" />
              </div>
              <h3 className="text-white font-semibold mb-2">TROQUE E LEIA</h3>
              <p className="text-gray-300 text-sm">Troque e leia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Destaques da Comunidade</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">1.250</h3>
              <p className="text-gray-600">Livros cadastrados</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">400</h3>
              <p className="text-gray-600">Usuários ativos</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">900</h3>
              <p className="text-gray-600">Trocas realizadas</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
