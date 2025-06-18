import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const users = [
  {
    id: 1,
    name: "Vinícius Kaul Geraldo",
    location: "Taquaritinga - SP",
    avatar: "/placeholder.svg?height=60&width=60",
    books: [
      { title: "The Lady Beauty Sunset", color: "bg-yellow-400" },
      { title: "Great Travel At Desert", color: "bg-red-500" },
      { title: "The Lady Beauty Sunset", color: "bg-yellow-400" },
    ],
  },
  {
    id: 2,
    name: "Gabriel Cresta",
    location: "Monte Alto - SP",
    avatar: "/placeholder.svg?height=60&width=60",
    books: [
      { title: "Great Travel At Desert", color: "bg-red-500" },
      { title: "The Lady Beauty Sunset", color: "bg-yellow-400" },
      { title: "The Lady Beauty Sunset", color: "bg-yellow-400" },
    ],
  },
  {
    id: 3,
    name: "Fernanda Almeida",
    location: "Taquaritinga - SP",
    avatar: "/placeholder.svg?height=60&width=60",
    books: [
      { title: "The Lady Beauty Sunset", color: "bg-yellow-400" },
      { title: "The Lady Beauty Sunset", color: "bg-yellow-400" },
      { title: "Great Travel At Desert", color: "bg-red-500" },
    ],
  },
  {
    id: 4,
    name: "Lorena Albuquerque",
    location: "Taquaritinga - SP",
    avatar: "/placeholder.svg?height=60&width=60",
    books: [
      { title: "The Lady Beauty Sunset", color: "bg-yellow-400" },
      { title: "Great Travel At Desert", color: "bg-red-500" },
      { title: "The Lady Beauty Sunset", color: "bg-yellow-400" },
    ],
  },
]

export default function UsuariosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-pink-100 py-2">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-800">
              INÍCIO
            </Link>{" "}
            /
            <Link href="/livros" className="hover:text-gray-800">
              LIVROS
            </Link>{" "}
            /
            <Link href="/livros/1" className="hover:text-gray-800">
              Simple Way of Piece Life
            </Link>{" "}
            / Usuários com livro disponível
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-12">Usuários com livro disponível</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {users.map((user) => (
            <Card key={user.id} className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4 mb-6">
                  <Image
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.location}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Livros de interesse:</h4>
                  <div className="space-y-2">
                    {user.books.map((book, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded ${book.color}`}></div>
                        <span className="text-sm text-gray-700">{book.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/mensagens">
                  <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white">Oferecer um livro meu</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="bg-orange-500 text-white border-orange-500">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
