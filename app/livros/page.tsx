"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const books = [
  {
    id: 1,
    title: "The Hypocrite World",
    author: "Sophia Hill",
    image: "/images/books/hypocrite-world.png",
    liked: false,
  },
  {
    id: 2,
    title: "Great Travel At Desert",
    author: "Autor Fictício",
    image: "/images/books/great-travel-desert.png",
    liked: false,
  },
  {
    id: 3,
    title: "Your Simple Book Cover",
    author: "Ken Adams",
    image: "/images/books/simple-book-cover.png",
    liked: false,
  },
  {
    id: 4,
    title: "The Lady Beauty Scarlett",
    author: "Arthur Doyle",
    image: "/images/books/lady-beauty-scarlett.png",
    liked: false,
  },
  {
    id: 5,
    title: "My Book Cover",
    author: "Autor Fictício",
    image: "/images/books/my-book-cover.png",
    liked: false,
  },
  {
    id: 6,
    title: "Simple Way Of Piece Life",
    author: "Armor Ramsey",
    image: "/images/books/simple-way-piece-life.png",
    liked: false,
  },
]

const categories = ["Categorias", "Ficção", "Romance", "Suspense", "Biografia", "Autoajuda"]

const filters = ["Editora", "Autor", "Preço"]

export default function LivrosPage() {
  const [likedBooks, setLikedBooks] = useState<number[]>([])

  const toggleLike = (bookId: number) => {
    setLikedBooks((prev) => (prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId]))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-pink-100 py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-800">
              INÍCIO
            </Link>{" "}
            / LIVROS
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Categorias</h3>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
              </div>

              {/* Filters */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Editora</h3>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Autor</h3>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Preço</h3>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Filtrar</Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Organizar por:</span>
                <Select defaultValue="alfabetica">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alfabetica">Alfabética A-Z</SelectItem>
                    <SelectItem value="preco">Preço</SelectItem>
                    <SelectItem value="data">Data</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Mostrar:</span>
                <Select defaultValue="12">
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="48">48</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-600">de 20 resultados</span>
              </div>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {books.map((book) => (
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
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            toggleLike(book.id)
                          }}
                          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              likedBooks.includes(book.id) ? "text-red-500 fill-current" : "text-gray-400"
                            }`}
                          />
                        </button>
                      </div>
                      <h3 className="font-semibold text-sm mb-2 group-hover:text-orange-500">{book.title}</h3>
                      <p className="text-gray-600 text-xs">{book.author}</p>
                    </CardContent>
                  </Card>
                </Link>
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
        </div>
      </div>

      <Footer />
    </div>
  )
}
