"use client"

import Link from "next/link"
import { Search, Heart, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/livrato-logo.png" alt="LIVRATO" width={500} height={120} className="h-32 w-auto" />
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
                <UserPlus className="w-4 h-4 mr-2" />A CONTA
              </Button>
            </Link>
          </div>
        </div>

        <nav className="bg-slate-700 -mx-4 px-4">
          <div className="flex justify-center items-center py-4">
            <Link href="/" className="text-gray-300 hover:text-white text-sm font-medium">
              Início
            </Link>
            <span className="text-gray-400 mx-4">|</span>
            <Link href="/sobre" className="text-gray-300 hover:text-white text-sm font-medium">
              Sobre Nós
            </Link>
            <span className="text-gray-400 mx-4">|</span>
            <Link href="/livros" className="text-white hover:text-gray-200 text-sm font-medium">
              Livros
            </Link>
            <span className="text-gray-400 mx-4">|</span>
            <Link href="/contato" className="text-gray-300 hover:text-white text-sm font-medium">
              Contato
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
