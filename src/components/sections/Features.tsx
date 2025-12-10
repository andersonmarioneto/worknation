import { ShieldCheck, Zap, HeartHandshake } from "lucide-react"

const features = [
    {
        icon: Zap,
        title: "Inovação Constante",
        description: "Utilizamos as tecnologias mais recentes para garantir que sua solução esteja à frente do mercado."
    },
    {
        icon: ShieldCheck,
        title: "Confiabilidade",
        description: "Entregas no prazo, código seguro e suporte contínuo para sua tranquilidade."
    },
    {
        icon: HeartHandshake,
        title: "Atendimento Personalizado",
        description: "Cada projeto é único. Trabalhamos lado a lado com você para entender suas necessidades."
    }
]

export function Features() {
    return (
        <section className="py-20 bg-background animate-fade-in-up">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Por que escolher a Worknation?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Não somos apenas desenvolvedores, somos parceiros do seu sucesso.
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-3 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors">
                            <div className="p-4 rounded-full bg-secondary/10 text-secondary dark:bg-primary/20 dark:text-primary mb-2">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
