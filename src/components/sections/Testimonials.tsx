import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
    {
        content: "A Worknation transformou completamente nossa presença digital. A equipe é incrivelmente competente e atenciosa.",
        author: "Carlos Fernandes",
        role: "CEO, TechAngola",
        initials: "CF"
    },
    {
        content: "Profissionalismo e entrega no prazo. O aplicativo desenvolvido por eles superou nossas expectativas em todos os sentidos.",
        author: "Ana Silva",
        role: "Diretora de Marketing, VarejoX",
        initials: "AS"
    },
    {
        content: "Parceiros estratégicos que entendem de negócio. Não apenas codificam, eles trazem soluções reais.",
        author: "João Paulo",
        role: "Fundador, StartupGrid",
        initials: "JP"
    }
]

export function Testimonials() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        O que dizem nossos clientes
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A confiança é a base do nosso negócio.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-card border-none shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6 space-y-6">
                                <Quote className="h-8 w-8 text-primary/40" />
                                <p className="text-muted-foreground leading-relaxed italic">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                                    <Avatar>
                                        <AvatarImage src="" /> {/* Placeholder or future real image */}
                                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">{testimonial.initials}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
