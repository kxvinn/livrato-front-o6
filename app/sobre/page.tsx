import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-pink-100 py-2">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-600">INÍCIO / SOBRE NÓS</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">Sobre o Livrato</h1>

          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              O Livrato é uma plataforma inovadora que conecta leitores apaixonados por livros, facilitando a troca e o
              compartilhamento de conhecimento através da literatura.
            </p>

            <p className="text-gray-700 mb-6">
              Nossa missão é criar uma comunidade onde cada livro pode ter uma nova vida, passando de leitor para
              leitor, espalhando histórias e conhecimento por toda parte.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Como Funciona</h2>
            <p className="text-gray-700 mb-6">
              É simples: cadastre os livros que você já leu e não usa mais, encontre outros leitores interessados em
              trocas e descubra novos títulos para sua biblioteca pessoal.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">Nossa Comunidade</h2>
            <p className="text-gray-700">
              Mais de 400 usuários ativos, 1.250 livros cadastrados e 900 trocas realizadas. Junte-se a nós e faça parte
              desta rede de compartilhamento de conhecimento!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
