"use client"

import Link from "next/link"
import { Search, User, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">LIVRATO</span>
            </div>
          </Link>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Pesquise Por Livros" className="pl-10 bg-gray-50 border-gray-200" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/desejos">
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                LISTA DE DESEJOS
              </Button>
            </Link>
            <Link href="/mensagens">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />A CONTA
              </Button>
            </Link>
          </div>
        </div>

        <nav className="bg-slate-700 -mx-4 px-4">
          <div className="flex space-x-8 py-3">
            <Link href="/" className="text-white hover:text-gray-200 text-sm font-medium">
              INÍCIO
            </Link>
            <Link href="/sobre" className="text-white hover:text-gray-200 text-sm font-medium">
              SOBRE NÓS
            </Link>
            <Link href="/livros" className="text-white hover:text-gray-200 text-sm font-medium">
              LIVROS
            </Link>
            <Link href="/contato" className="text-white hover:text-gray-200 text-sm font-medium">
              CONTATO
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
