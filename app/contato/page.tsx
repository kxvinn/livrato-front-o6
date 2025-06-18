import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-pink-100 py-2">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-600">INÍCIO / CONTATO</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-12 text-center">Entre em Contato</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Fale Conosco</h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <Input placeholder="Seu nome completo" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                  <Input placeholder="Assunto da mensagem" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <Textarea placeholder="Sua mensagem..." rows={6} />
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Enviar Mensagem</Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Informações de Contato</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="w-8 h-8 text-orange-500" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">contato@livrato.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-8 h-8 text-orange-500" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Telefone</h3>
                        <p className="text-gray-600">(16) 99999-9999</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <MapPin className="w-8 h-8 text-orange-500" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Endereço</h3>
                        <p className="text-gray-600">São Paulo, SP - Brasil</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
