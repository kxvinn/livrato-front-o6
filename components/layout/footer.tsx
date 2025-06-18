import Link from "next/link"
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/images/livrato-logo.png" alt="LIVRATO" width={140} height={70} className="h-32 w-auto" />
            </div>
            <p className="text-gray-600 text-sm mb-4">Troque histórias, descubra mundos.</p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-700 mb-4">EMPRESA</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <Link href="/" className="hover:text-blue-800">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-blue-800">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/livros" className="hover:text-blue-800">
                  Livros
                </Link>
              </li>
              <li>
                <Link href="/ebooks" className="hover:text-blue-800">
                  E-books
                </Link>
              </li>
              <li>
                <Link href="/lancamentos" className="hover:text-blue-800">
                  LANÇAMENTOS
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-blue-800">
                  Nosso Contato
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-800">
                  BLOG
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">JURÍDICO</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/privacidade" className="hover:text-gray-800">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-800">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-gray-800">
                  Termos de serviço
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">© 2025 Livrato. All Rights Reserved.</div>
      </div>
    </footer>
  )
}
