import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const relatedBooks = [
  {
    id: 1,
    title: "The Hypocrite World",
    author: "Sophia Hill",
    image: "/images/books/hypocrite-world.png",
  },
  {
    id: 2,
    title: "Great Travel At Desert",
    author: "Autor Fictício",
    image: "/images/books/great-travel-desert.png",
  },
  {
    id: 3,
    title: "Your Simple Book Cover",
    author: "Ken Adams",
    image: "/images/books/simple-book-cover.png",
  },
  {
    id: 4,
    title: "The Lady Beauty Scarlett",
    author: "Arthur Doyle",
    image: "/images/books/lady-beauty-scarlett.png",
  },
]

export default function BookDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-pink-100 py-2 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-800">
              INÍCIO
            </Link>{" "}
            /
            <Link href="/livros" className="hover:text-gray-800">
              {" "}
              LIVROS
            </Link>{" "}
            / Simple Way of Piece Life
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Book Details */}
          <div className="bg-orange-50 p-8 rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Simple Way Of Piece Life</h1>

            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div>
                <span className="font-semibold">Author:</span> Armor Ramsey
              </div>
              <div>
                <span className="font-semibold">ISBN:</span> 978-0123456789
              </div>
              <div>
                <span className="font-semibold">Editora:</span> Saraiva.br
              </div>
              <div>
                <span className="font-semibold">Edição:</span> 7/2024
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-8">
              Simple Way of Piece Life é um guia inspirador para todos que desejam cultivar mais felicidade em sua
              rotina cotidiana e se conectar de forma mais profunda com o que realmente importa. Com uma abordagem
              prática e acessível, o autor nos convida a descobrir como pequenas mudanças podem transformar nossa
              perspectiva e nos ajudar a encontrar alegria mesmo nos momentos mais desafiadores. Repleto de reflexões
              profundas, exercícios práticos e histórias inspiradoras, este livro oferece ferramentas valiosas para quem
              busca uma vida mais equilibrada, significativa e plena. Uma leitura essencial para todos que desejam
              redescobrir a beleza da simplicidade e abraçar cada momento com gratidão e propósito.
            </p>

            <div className="flex space-x-4">
              <Button className="bg-slate-300 hover:bg-slate-800 text-black hover:text-white px-8">
                Adicionar à Lista de Desejos
              </Button>
              <Link href="/usuarios">
                <Button className="bg-slate-700 hover:bg-slate-800 text-white px-8">Combinar Troca</Button>
              </Link>
            </div>
          </div>

          {/* Book Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg"
                style={{ width: "300px", height: "400px" }}
              >
                <Image
                  src="/images/books/simple-way-piece-life.png"
                  alt="Simple Way Of Piece Life"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-slate-700 text-white px-3 py-1 rounded text-sm">
                Armor Ramsey
              </div>
            </div>
          </div>
        </div>

        {/* Related Books */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Livros Relacionados:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedBooks.map((book) => (
              <Link href={`/livros/${book.id}`} key={book.id}>
                <Card className="group cursor-pointer relative">
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
                      <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                        <Heart className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    <h3 className="font-semibold text-sm mb-2 group-hover:text-orange-500">{book.title}</h3>
                    <p className="text-gray-600 text-xs">{book.author}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
