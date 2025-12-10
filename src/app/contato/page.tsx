import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contato() {
  return (
    <section className="py-20 bg-secondary/2 dark:bg-background" id="contato">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Entre em Contato
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Vamos conversar sobre como podemos ajudar a levar seu negócio para o
            próximo nível.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <Input
              placeholder="Seu nome"
              type="text"
              className="bg-background border-input"
            />
            <Input
              placeholder="Seu e-mail"
              type="email"
              className="bg-background border-input"
            />
            <Textarea
              placeholder="Sua mensagem"
              rows={5}
              className="bg-background border-input resize-none"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full text-base font-bold"
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
