"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Search } from "lucide-react"
import Image from "next/image"

const conversations = [
  {
    id: 1,
    name: "Vinícius Kaul Geraldo",
    location: "Taquaritinga - SP",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Olá! Tenho interesse no seu livro...",
    time: "14:30",
    unread: true,
  },
  {
    id: 2,
    name: "Sabrina Moura Carvalho",
    location: "Jaboticabal - SP",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Perfeito! Quando podemos nos encontrar?",
    time: "13:45",
    unread: false,
  },
  {
    id: 3,
    name: "Gabriel Costa",
    location: "Monte Alto - SP",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Obrigado pela troca!",
    time: "12:20",
    unread: false,
    highlight: true,
  },
  {
    id: 4,
    name: "Sabrina Moura Carvalho",
    location: "Jaboticabal - SP",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Oi! Vi que você tem o livro que procuro",
    time: "11:15",
    unread: false,
  },
]

const messages = [
  {
    id: 1,
    sender: "other",
    text: "Tudo bem aí? o seu livro?",
    time: "14:30",
  },
  {
    id: 2,
    sender: "me",
    text: "Tudo certo, Pronto, sou o Gabriel... o que você tem interesse em trocar comigo? Eu tenho vários livros disponíveis no meu perfil",
    time: "14:32",
  },
]

export default function MensagensPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Aqui você adicionaria a lógica para enviar a mensagem
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Buscar" className="pl-10 bg-gray-50 border-gray-200" />
              </div>
            </div>

            <div className="overflow-y-auto h-full">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                    selectedConversation.id === conversation.id ? "bg-blue-50" : ""
                  } ${conversation.highlight ? "bg-orange-100" : ""}`}
                >
                  <div className="flex items-start space-x-3">
                    <Image
                      src={conversation.avatar || "/placeholder.svg"}
                      alt={conversation.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-sm text-gray-800 truncate">{conversation.name}</h3>
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{conversation.location}</p>
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      {conversation.unread && <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center space-x-3">
              <Image
                src={selectedConversation.avatar || "/placeholder.svg"}
                alt={selectedConversation.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{selectedConversation.name}</h3>
                <p className="text-sm text-gray-600">{selectedConversation.location}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === "me" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}

              <div className="text-center">
                <Button variant="link" className="text-blue-500 text-sm">
                  Que tal fazer um novo negócio?
                </Button>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Digite uma mensagem..."
                  className="flex-1"
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button onClick={sendMessage} className="bg-green-500 hover:bg-green-600 text-white">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
